# Гироскопические данные в видео (Gyro / IMU Data)

## Что это такое

Гироскопические (и шире — IMU) данные — это записи реального физического движения камеры:
- **Gyroscope** — угловая скорость (вращение по осям X/Y/Z)
- **Accelerometer** — линейное ускорение
- Иногда **Magnetometer** (компас) и уже посчитанные **quaternions** (ориентация в пространстве)

Данные пишутся с высокой частотой (часто 200–500+ Гц) и позволяют точно знать, как камера двигалась в реальности, а не угадывать движение по пикселям.

## Откуда берутся

- **Встроенные** в камеры: GoPro (формат GPMF), Insta360, DJI, некоторые Sony, современные смартфоны, часть cinema-камер
- **Внешние логгеры**: blackbox (FPV/дроны), отдельные IMU-рекордеры

## Главное преимущество

В отличие от optical stabilization (Warp Stabilizer и аналоги), которая анализирует картинку:
- Gyro-данные **не зависят** от содержимого кадра
- Работают в темноте, при быстром движении объектов, при низком контрасте
- Дают значительно более точную и «гимбальную» стабилизацию
- Позволяют корректировать rolling shutter
- Легко делать horizon lock

## Основной инструмент

**Gyroflow** (бесплатный, open-source) — индустриальный стандарт работы с gyro-данными.

Возможности:
- Читает embedded metadata и отдельные логи
- Применяет точные lens profiles
- Корректирует rolling shutter
- Разные алгоритмы сглаживания
- Horizon lock
- Минимальный crop при правильной настройке

Другие программы (DaVinci Resolve, Adobe и др.) тоже умеют работать с gyro-данными на поддерживаемых камерах, но Gyroflow остаётся самым гибким и мощным решением.

## Важные технические моменты

- **Синхронизация** (time offset) между видео и gyro-потоком критична
- Нужен правильный **lens profile** (калибровка объектива)
- **Integration method** превращает сырые показания гироскопа + акселерометра в ориентацию камеры
- Soft mounts и сильная вибрация могут ухудшать качество данных

## Связь с AI-видео

Сами AI-модели (Seedance, Kling, Grok и т.д.) не генерируют реальные gyro-данные.  
Однако знание принципа важно:
- Для hybrid-workflow (реальная съёмка + AI-вставки)
- Чтобы понимать, почему реальная gyro-стабилизация часто выглядит естественнее optical
- При анализе и сравнении «живой» камеры с AI-генерацией

Gyro-данные — это самый точный способ узнать, как камера двигалась в реальности, и accordingly стабилизировать изображение.
## Примеры кода для парсинга

### 1. Извлечение GPMF из GoPro-видео (Python)

Самый распространённый способ — использовать библиотеки, работающие с GPMF.

**Вариант A — py-gpmf-parser / GoProTelemetryExtractor**

```python
from py_gpmf_parser.gopro_telemetry_extractor import GoProTelemetryExtractor

filepath = "video.mp4"
extractor = GoProTelemetryExtractor(filepath)
extractor.open_source()

# Извлекаем гироскоп и акселерометр
gyro, gyro_timestamps = extractor.extract_data("GYRO")
accl, accl_timestamps = extractor.extract_data("ACCL")

# Можно сразу сохранить несколько потоков в JSON
extractor.extract_data_to_json(
    "telemetry.json",
    ["ACCL", "GYRO", "GPS5", "GRAV", "MAGN"]
)

extractor.close_source()
```

**Вариант B — простой пример с gpmfstream**

```python
from gpmfstream import Stream
import matplotlib.pyplot as plt

streams = Stream.extract_streams("video.mp4")
gyro = streams["GYRO"]

plt.plot(gyro.timestamps, gyro.data)
plt.title("Gyroscope data")
plt.show()
```

### 2. Через telemetry-parser (рекомендуемый современный путь)

Библиотека `telemetry-parser` (используется в Gyroflow) поддерживает GoPro, Sony, Insta360, Betaflight blackbox и другие форматы.

```bash
# CLI: превратить видео в Betaflight-совместимый CSV
gyro2bb video.mp4

# Дамп всех метаданных
gyro2bb --dump video.mp4
```

В Python-модуле можно читать данные программно (см. документацию пакета на PyPI).

### 3. Чтение уже экспортированного CSV / .gcsv

```python
import pandas as pd

# Пример для Gyroflow .gcsv или blackbox CSV
df = pd.read_csv("gyro_data.gcsv", comment="#")

# Обычно колонки: time, gx, gy, gz, ax, ay, az ...
print(df.head())

# Простая визуализация
import matplotlib.pyplot as plt
plt.plot(df["time"], df["gx"], label="Gyro X")
plt.plot(df["time"], df["gy"], label="Gyro Y")
plt.plot(df["time"], df["gz"], label="Gyro Z")
plt.legend()
plt.show()
```

### 4. Полезные замечания

- Частота сэмплов гироскопа обычно 200–400+ Гц.
- Важно синхронизировать временные метки видео и IMU (time offset).
- Сырые значения часто нужно делить на scale-фактор (`SCAL` в GPMF).
- Для стабилизации в Gyroflow удобнее всего отдавать либо исходный файл с embedded metadata, либо уже сконвертированный `.gcsv` / blackbox.

Эти примеры позволяют быстро извлечь gyro/IMU данные для анализа, синхронизации или передачи в стабилизаторы.

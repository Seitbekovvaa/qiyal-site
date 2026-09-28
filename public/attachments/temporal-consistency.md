# Methods of Temporal Consistency (Временная согласованность)

Temporal consistency (temporal coherence) — способность модели сохранять стабильность визуальных элементов во времени: персонаж, освещение, цвет, текстуры, пропорции и движение не должны «плыть», мерцать или резко меняться от кадра к кадру.

## Основные проблемы

- **Flickering** — мерцание текстур, цвета, мелких деталей (особенно волосы, ткань, листва)
- **Identity drift** — постепенное изменение лица, возраста, черт персонажа
- **Morphing** — деформация конечностей, одежды, объектов
- **Lighting / color jumps** — скачки освещения, температуры и контраста
- **Motion discontinuities** — рывки, foot sliding, потеря инерции
- **Attribute decay** — потеря мелких деталей (серьги, родинки, узоры) на длинных клипах

## Технические методы (как модели это решают)

- **Temporal Attention** — каждый кадр «смотрит» на другие кадры последовательности во время denoising
- **Cross-frame / Spatio-Temporal Attention**
- **Reference Conditioning** — жёсткая привязка к reference image / identity embedding / multiple reference slots
- **First / Last frame control** и image-to-video chaining
- **Optical flow / motion vectors** guidance
- **Latent trajectory constraints** и noise conditioning
- **Character LoRA / IP-Adapter / IC-LoRA** для identity lock
- **Shorter clips + hard cuts** вместо попытки генерировать очень длинные continuous shots
- **Memory banks / Dynamic entity memory** (для multi-shot и длинных историй)

## Практические методы для промптинга и workflow

1. **Короткие клипы**  
   Генерировать 3–6 секундные шоты и склеивать hard cut’ами надёжнее, чем один длинный continuous shot.

2. **Сильный identity lock**  
   - Детальное описание персонажа в каждом промпте  
   - Reference images / hero frame  
   - Повтор одних и тех же якорей (одежда, лицо, пропорции)

3. **First-frame / Last-frame conditioning**  
   Использовать image-to-video и frame chaining, когда модель это поддерживает.

4. **Ограничение сложности**  
   Меньше одновременных высоких требований (быстрое движение + сложная камера + много мелких деталей = выше риск drift).

5. **Якоря движения**  
   Чётко описывать primary action + secondary motion + ground contact.

6. **Освещение и стиль как константы**  
   Повторять lighting и style descriptors verbatim между шотами.

7. **Multi-shot стратегия**  
   Планировать как настоящий фильм: отдельные шоты с hard cuts вместо длинного непрерывного движения, где модель теряет память.

## Анализ нарушений

При проверке сгенерированного видео смотреть:
- Стабильность лица и ключевых деталей в mid-frames (самые уязвимые)
- Мерцание высокочастотных текстур
- Плавность изменения освещения
- Сохранение пропорций и объёма
- Отсутствие «плавания» fine details

При обнаружении проблем — сокращать длину клипа, усиливать reference conditioning, упрощать одновременные требования или разбивать на большее количество коротких шотов.

Temporal consistency — один из главных критериев профессионального AI-видео. Без неё даже красивые отдельные кадры не складываются в кино.
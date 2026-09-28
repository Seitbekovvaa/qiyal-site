# Режиссёрский справочник для промптов Grok

Как формулировать камеру, объектив, свет и атмосферу. Все термины давать в промпте по-английски.

## Крупности планов

| План | В промпте | Когда использовать |
|---|---|---|
| Сверхобщий | extreme wide shot / establishing shot | Открытие сцены, масштаб мира, одиночество героя |
| Общий | wide shot, full body in frame | Действие целиком, хореография, драки |
| Средний | medium shot (waist-up) | Диалог, жестикуляция, база для видеоуроков |
| Молочный | medium close-up (chest-up) | Реплики с липсинком — оптимальная крупность |
| Крупный | close-up on the face | Эмоция, реакция, решение героя |
| Деталь | extreme close-up / macro | Хук, предмет-символ, текстуры (капля, курок, клавиша) |

Правило монтажа: соседние биты мультишота различаются минимум на одну ступень крупности И на 30° ракурса.

## Ракурсы

| Ракурс | В промпте | Эффект |
|---|---|---|
| Уровень глаз | eye-level shot | Нейтрально, доверие — база диалогов и уроков |
| Нижний | low-angle shot | Сила, угроза, героизм персонажа |
| Верхний | high-angle shot | Уязвимость, слабость, обзор |
| Сверху вертикально | top-down / overhead shot | Схема действия, эстетика, еда, руки за работой |
| Голландский | dutch angle, canted frame | Тревога, дезориентация, экшен |
| Через плечо | over-the-shoulder shot | Диалог двух персонажей, POV-контекст |
| От первого лица | POV shot | Погружение, хоррор, спорт |

## Объективы

| Объектив | В промпте | Характер |
|---|---|---|
| 14–16mm | 16mm ultra-wide lens | Искажённое пространство, погони, теснота, POV-экшен |
| 24mm | 24mm wide-angle lens | Герой в среде, энергичные проходы, установочные кадры |
| 35mm | 35mm lens | «Человеческий глаз», репортажность, ходьба с героем |
| 50mm | 50mm lens, natural perspective | Честный портрет, диалог, видеоуроки |
| 85mm | 85mm portrait lens, creamy bokeh | Крупные планы, эмоция, отделение от фона |
| 100mm+ | 100mm macro lens | Детали: капли, механика, текстуры |
| Телевик | 200mm telephoto, compressed background | Слежка, спорт издалека, сжатое пространство |
| Анаморфот | anamorphic lens, oval bokeh, horizontal flares | Кино-люкс, трейлеры, реклама |

Глубина резкости: `shallow depth of field` — изоляция героя; `deep focus` — важен и передний, и задний план.

## Движения камеры (одно на бит!)

| Движение | В промпте | Драматургия |
|---|---|---|
| Статика | static locked-off shot | Напряжение внутри кадра, композиция работает сама |
| Наезд | slow dolly-in / push-in | Нарастание важности, приближение к мысли или решению |
| Отъезд | dolly-out / pull-back | Раскрытие контекста, финалы, одиночество |
| Проезд | tracking shot alongside | Сопровождение движения героя |
| Панорама | pan left/right | Перевод внимания, осмотр пространства |
| Наклон | tilt up/down | Раскрытие высоты, оценка персонажа снизу вверх |
| Кран | crane shot rising / descending | Эпичность, смена масштаба, открытие/закрытие сцены |
| С рук | handheld camera, slight shake | Документальность, паника, драка изнутри |
| Стедикам | smooth steadicam follow | Длинный проход за героем |
| Орбита | slow orbit around the subject | Героический момент, товар в рекламе |
| Долли-зум | dolly zoom (vertigo effect) | Шок, осознание, паника — использовать редко |
| Хлыст | whip pan | Резкий перенос внимания, комедийный или экшен-акцент |

Скорость движения камеры указывать явно: `fast`, `brisk`, `slow` — иначе Grok сделает медленно.

## Свет

Формула в промпте: источник → направление → жёсткость → цвет. Пример: `single warm key light from the left, hard shadows, cold blue fill from the window`.

| Схема | В промпте | Настроение |
|---|---|---|
| Трёхточечный | soft key light, subtle fill, rim light separating from background | Профессиональный стандарт: уроки, интервью, реклама |
| Рембрандт | Rembrandt lighting, triangle of light on the cheek | Драматичный портрет, характер |
| Контровой | strong backlight, silhouette, rim glow | Тайна, эпичность, появление героя |
| Низкий ключ | low-key lighting, deep shadows | Нуар, триллер, напряжение |
| Высокий ключ | high-key lighting, bright and even | Комедия, реклама, обучение, лёгкость |
| Золотой час | golden hour sunlight, long warm shadows | Романтика, ностальгия, финалы |
| Синий час | blue hour, cold ambient light | Меланхолия, ожидание, преддверие |
| Практические | practical lights: neon signs, table lamps, screens glow | Реализм ночных сцен, киберпанк |
| Жёсткий верхний | harsh overhead light | Допрос, безысходность |
| Мерцание | flickering fluorescent light | Тревога, хоррор, заброшенность |

## Атмосфера и среда

Атмосферные частицы делают свет видимым и добавляют глубину: `volumetric haze`, `dust motes in the light beam`, `fog rolling low`, `rain streaks in the backlight`, `smoke drifting`, `snow falling softly`, `heat shimmer`.

Погода и время суток — всегда указывать явно. Цветовая гамма — одной фразой: `teal and orange grade`, `desaturated cold palette`, `rich warm grade with deep blacks`, `neon-soaked palette`.

## Жанровые пресеты (свет + объектив + камера)

- **Экшен**: 16–24mm, handheld или fast tracking, hard light с контровым, dutch angle на пике, `real-time speed, explosive movement`.
- **Нуар/триллер**: 35–50mm, low-key, practicals, медленный push-in, глубокие тени, дождь.
- **Романтика/драма**: 85mm, golden hour или мягкий оконный свет, shallow DOF, медленный dolly.
- **Реклама товара**: 100mm macro + anamorphic hero shot, high-key или контрастный beauty light, орбита, идеальные блики.
- **Хоррор**: wide lens близко к лицу, мерцающий свет, статика с долгой паузой → резкое движение, негативное пространство в кадре.
- **Видеоурок**: 35–50mm, eye-level, трёхточечный мягкий свет — см. tutorials.md.

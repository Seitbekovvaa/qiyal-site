# Готовые примеры промптов

Все примеры предполагают, что референсы уже загружены в Grok и их имена уточнены у пользователя.

## 1. Экшен, цельный кадр, 6 сек (референсы: @Боец, @Склад)

```
ONE CONTINUOUS SHOT, no cuts, no transitions, no morphing.
@Боец (the fighter) throws a fast right cross at an unseen opponent inside
@Склад (the empty warehouse). Sharp snap of the hips, full weight transfer
to the front foot, the punch whips forward, his jacket flares with the rotation,
dust kicks up from the pivot foot, he recoils into a tight guard, chest heaving.
Wide shot, low-angle, 24mm lens. Fast handheld camera with slight shake.
Hard overhead practical lights, strong backlight cutting through volumetric haze.
Desaturated cold palette. Real-time speed, explosive movement, no slow motion.
AUDIO: a sharp exhale on the punch, the whip of fabric, echoing footsteps,
low tense drone.
keep the face, outfit and proportions from @Боец, keep the environment from @Склад
```

Что здесь работает: фазы удара (замах→снап→контакт→отдача), вес и инерция, вторичная анимация (куртка, пыль), один ракурс + одно движение камеры, анти-слоумо блок.

## 2. Диалог с липсинком, цельный кадр, 10 сек (референс: @Анна)

```
ONE CONTINUOUS SHOT, no cuts, no transitions.
@Анна (the detective) stands by a rain-streaked window at night, turns her head
toward the camera and speaks. Medium close-up, eye-level, 85mm portrait lens,
shallow depth of field. Slow dolly-in. Low-key lighting: cold blue window light
as key, warm practical lamp in the background bokeh. Rain streaks in the backlight.
Her jaw tightens, eyes glisten, a slow controlled exhale before she speaks;
on the word "поздно" she presses her palm flat against the glass.
Real-time speed, natural micro-expressions and blinks.
AUDIO: @Анна says in a low, tired voice, almost a whisper:
"Мы пришли слишком поздно." Rain patter on the glass, distant thunder.
keep the face, outfit and proportions from @Анна
```

## 3. Мультишот-реклама, 15 сек, hard cuts (референсы: @Часы, @Модель)

```
(0-3s) Extreme close-up, 100mm macro lens: @Часы (the luxury watch) rotating
slowly on black velvet, a single hard beam splits into highlights on the bezel.
(3-8s) Cut to a wide shot: @Модель (the wearer) strides across a marble lobby,
25mm anamorphic lens, fast tracking shot alongside, golden light raking
through tall windows, coat billowing with the brisk pace.
(8-12s) Cut to a low-angle medium close-up: @Модель raises the wrist,
85mm lens, shallow depth of field, the watch catches a flare.
(12-15s) Cut to the hero frame: @Часы centered, slow orbit, rich warm grade
with deep blacks, lower third kept clear for the logo.
Real-time speed, confident brisk movement, no slow motion.
AUDIO: (0-3s) one mechanical tick, a deep bass hit. (3-8s) echoing heels
on marble, a rising string motif. (8-12s) fabric rustle, a second bass hit.
(12-15s) the motif resolves, a single tick.
keep the watch design from @Часы, keep the face and outfit from @Модель
```

Что здесь работает: хук деталью → развитие → hero frame; каждый бит меняет крупность и ракурс ≥30°; звук по таймкодам синхронен склейкам; единая гамма.

## 4. Видеоурок, мультишот, 10 сек (референсы: @Шеф, @Кухня)

```
(0-2s) Top-down macro shot: hands slice a ripe tomato on a wooden board,
juice beads on the blade, soft even light. Hook shot.
(2-6s) Cut to a frontal medium shot: @Шеф (the instructor) at the counter of
@Кухня (the studio kitchen), 50mm lens, eye-level, looking into the camera,
soft key light with a warm rim light, blurred background with practical lamps,
lower third of the frame kept clear for graphics. He gestures with an open palm
on the key word.
(6-10s) Cut to a 45-degree medium close-up, 85mm, shallow depth of field:
@Шеф nods and smiles on the final word.
Clean natural color grade, real-time speed, natural blinks and lively expressions.
AUDIO: (0-2s) crisp knife sounds on wood, a light music bed.
(2-10s) @Шеф says in a clear, friendly, confident voice:
"Секрет соуса — в спелых томатах. Сейчас покажу, как их выбрать."
keep the face, outfit and proportions from @Шеф, keep the kitchen from @Кухня
```

## 5. От стартового кадра к конечному (кадры: @Image1 → @Image2)

```
Starting from @Image1 and ending on @Image2. The camera pushes forward through
the doorway in one continuous physical path: down the dark corridor, past the
flickering fluorescent light, into the bright courtyard. No teleportation,
no morphing, one continuous move. 24mm wide-angle lens, smooth steadicam,
brisk walking pace, real-time speed. Volumetric haze in the corridor,
hard sunlight in the courtyard.
AUDIO: echoing footsteps, the fluorescent buzz fading, birdsong rising.
```

Правило: содержимое @Image1/@Image2 не пересказывать — описывать только физический путь между ними.

## 6. Изображение — первый кадр для будущей анимации (16:9)

```
Aspect ratio 16:9. A lone boxer standing in the center of an empty warehouse
ring at night, wrapped fists lowered, sweat glistening. Wide shot, low-angle,
24mm lens, the figure small against tall dark walls. Single hard overhead light
cone with volumetric haze, strong rim light from behind. Desaturated cold palette,
photographic realism, minimal clutter in the frame.
```

Кадр специально простой (минимум мелкой геометрии) — насыщенный деталями исходник плывёт при анимации.

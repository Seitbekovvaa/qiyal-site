# Видеоуроки профессионального качества через Grok

Как устроены обучающие видео уровня топовых курсов (MasterClass, крупные YouTube-каналы) и как этого добиться промптом.

## Анатомия профессионального видеоурока

1. **Хук (0–3 сек)** — результат или интригующая деталь крупным планом. Зритель должен увидеть, ЧТО он получит, до того как увидит говорящего.
2. **Говорящая голова** — ведущий представляет тему. Medium shot, взгляд в камеру (или чуть мимо — на «интервьюера» для документального стиля).
3. **Демонстрация / инсерты** — руки, экран, предмет, процесс. Крупные планы и top-down.
4. **Возврат к ведущему** — вывод, переход к следующему шагу.
5. **Итоговый hero frame** — готовый результат, красивый общий план.

## Двухкамерная схема (стандарт индустрии)

- **A-cam**: фронтальный medium shot (waist-up), 35–50mm, eye-level, ведущий смотрит в объектив.
- **B-cam**: 45° сбоку, medium close-up, 50–85mm, shallow DOF.
- Ракурс меняется hard cut'ом **каждые 3–5 секунд** или на каждой новой мысли — это создаёт ощущение профессионального монтажа и удерживает внимание.
- Смена A→B камеры маскирует монтажные склейки речи — в промпте это готовые точки для `Cut to`.

## Свет и картинка

- Трёхточечная схема: `soft key light from 45 degrees, subtle fill, warm rim light separating the presenter from the background`.
- Фон с глубиной, а не стена: `blurred workshop background with practical lamps`, `bookshelf with warm accent lights, shallow depth of field`. Расстояние до фона ≥ 1.5 м (в промпте — `presenter separated from the background`).
- Гамма нейтрально-тёплая: `clean natural color grade, soft contrast`.
- **Нижнюю треть кадра держать чистой** — под титры и подписи, которые накладываются на посте: `lower third of the frame kept clear for graphics`. Точный текст в кадре у Grok не заказывать — переврёт буквы.

## Движение камеры в уроках

- База — статика или едва заметный `slow push-in` на ключевой мысли (усиливает важность).
- Инсерты рук/предметов — `top-down overhead shot` или `macro close-up`, статичные либо медленный проезд.
- Никакого handheld — трясущаяся камера убивает доверие к обучающему контенту.

## Ведущий: подача и липсинк

- Реплика дословно в AUDIO, с темпом и интонацией: `AUDIO: presenter says in a clear, confident, friendly tone: "..."`.
- Жестикуляция сдержанная и привязанная к смыслу: `gestures with an open palm on the key word`, `counts on fingers: one, two`.
- Мимика живая: `natural blinks, slight smile, eyebrows rise on the question`.
- Одна мысль = один бит = одна короткая фраза. Длинный монолог резать на биты со сменой ракурса A↔B.

## Шаблон мультишот-урока (10 сек)

```
(0-2s) Macro close-up of [результат/деталь], top-down, soft even light. Hook shot.
(2-6s) Cut to frontal medium shot: @Presenter (the instructor) at [место], 50mm lens,
eye-level, looking into the camera, soft key light with warm rim light, blurred
background, lower third kept clear. Presenter gestures with an open palm.
(6-10s) Cut to 45-degree medium close-up, 85mm, shallow depth of field.
Presenter nods and smiles on the final word.
Clean natural grade, real-time speed, natural blinks and lively facial expressions.
AUDIO: (0-2s) soft ambient room tone, a light music bed.
(2-10s) @Presenter says in a clear, friendly, confident voice: "[фраза 1]. [фраза 2]."
keep the face, outfit and proportions from @Presenter, keep the room from @Location1
```

## Серия уроков: консистентность

- Один мастер-референс ведущего и один референс локации — использовать в каждой генерации с одними и теми же `@тегами`.
- Свет, гамма и фон описывать одними и теми же фразами во всех промптах серии (скопировать дословно, не пересказывать).
- Screen direction: если ведущий в кадре A-cam смотрит в камеру, на B-cam он смотрит в ту же «четвёртую стену», а не в противоположную сторону.

export type PackKind = "skill" | "reference" | "lesson";

export type PackFile = {
  id: string;
  name: string;
  title: string;
  description: string;
  filename: string;
  href: string;
  sizeBytes: number;
  kind: PackKind;
};

export const SKILLS: PackFile[] = [
  {
    id: "character-environment-designer",
    name: "character-environment-designer",
    title: "Персонажи и локации",
    description:
      "Дизайн персонажей и среды: Pixar, Disney, DreamWorks, Arcane, аниме и реализм. Пропорции, одежда, свет, FACS.",
    filename: "SKILL1.md",
    href: "/attachments/SKILL1.md",
    sizeBytes: 6183,
    kind: "skill",
  },
  {
    id: "cinematic-film-producer",
    name: "cinematic-film-producer",
    title: "Продюсер мини-фильма",
    description:
      "Полный пайплайн короткого фильма: концепт, сценарий, шот-лист, промпты, монтаж. Минимум вопросов.",
    filename: "SKILL 2.md",
    href: "/attachments/SKILL%202.md",
    sizeBytes: 3375,
    kind: "skill",
  },
  {
    id: "cinematic-storytelling",
    name: "cinematic-storytelling",
    title: "Сценарист и режиссёр",
    description:
      "Логлайн, биты, жанр, камера, свет, цвет, звук и принципы анимации. Эмоция персонажа в кадре.",
    filename: "SKILL3.md",
    href: "/attachments/SKILL3.md",
    sizeBytes: 10927,
    kind: "skill",
  },
  {
    id: "cinematic-video-generation",
    name: "cinematic-video-generation",
    title: "Генерация видео",
    description:
      "Режиссура AI-видео: физика движения, мультишот, консистентность, камера, оценка кадра.",
    filename: "SKILL4.md",
    href: "/attachments/SKILL4.md",
    sizeBytes: 7392,
    kind: "skill",
  },
  {
    id: "cinematic-workflow-agent",
    name: "cinematic-workflow-agent",
    title: "Воркфлоу-агент",
    description:
      "Оркестратор всех скиллов: от идеи до пакета промптов и плана монтажа по жёстким стадиям.",
    filename: "SKILL5.md",
    href: "/attachments/SKILL5.md",
    sizeBytes: 7763,
    kind: "skill",
  },
  {
    id: "claude-style",
    name: "claude-style",
    title: "Режим Claude",
    description:
      "Голос и мышление Claude: честность без лести, конституция, аккуратный разбор сложных задач.",
    filename: "SKILL6.md",
    href: "/attachments/SKILL6.md",
    sizeBytes: 7955,
    kind: "skill",
  },
  {
    id: "grok-prompt-director",
    name: "grok-prompt-director",
    title: "Режиссёр промптов Grok",
    description:
      "Промпты Grok Imagine: hard cut, физика, объективы, свет, липсинк и структура мультишота.",
    filename: "SKILL7.md",
    href: "/attachments/SKILL7.md",
    sizeBytes: 15442,
    kind: "skill",
  },
  {
    id: "professional-prompt-engineer",
    name: "professional-prompt-engineer",
    title: "Инженер промптов",
    description:
      "Точные промпты для картинки и видео: анализ кадра, физика, консистентность, диалекты моделей.",
    filename: "SKILL8.md",
    href: "/attachments/SKILL8.md",
    sizeBytes: 6905,
    kind: "skill",
  },
];

export const REFERENCES: PackFile[] = [
  { id: "analysis-and-motion", name: "analysis-and-motion", title: "Анализ кадра и физика", description: "Чек-лист разбора изображения и движения для промптов.", filename: "analysis-and-motion.md", href: "/attachments/analysis-and-motion.md", sizeBytes: 3014, kind: "reference" },
  { id: "animation-principles", name: "animation-principles", title: "12 принципов анимации", description: "Disney / Pixar принципы и как применять их к эмоции.", filename: "animation-principles.md", href: "/attachments/animation-principles.md", sizeBytes: 2244, kind: "reference" },
  { id: "blocking-and-dp", name: "blocking-and-dp", title: "Блокинг и оператор", description: "Работа режиссёра с DP: мизансцена, метки, покрытие.", filename: "blocking-and-dp.md", href: "/attachments/blocking-and-dp.md", sizeBytes: 2915, kind: "reference" },
  { id: "camera-and-lighting", name: "camera-and-lighting", title: "Камера, свет, цвет, звук", description: "Крупности, ракурсы, движения, свет и психология звука.", filename: "camera-and-lighting.md", href: "/attachments/camera-and-lighting.md", sizeBytes: 3042, kind: "reference" },
  { id: "camera-direction", name: "camera-direction", title: "Режиссура камеры", description: "Планы, углы, движение камеры и правила склейки.", filename: "camera-direction.md", href: "/attachments/camera-direction.md", sizeBytes: 3320, kind: "reference" },
  { id: "cinematic-prompt-examples", name: "cinematic-prompt-examples", title: "Примеры cinematic-промптов", description: "Готовые шаблоны: портрет, бег, драка, диалог, мультишот.", filename: "cinematic-prompt-examples.md", href: "/attachments/cinematic-prompt-examples.md", sizeBytes: 4039, kind: "reference" },
  { id: "cinematography", name: "cinematography", title: "Справочник оператора", description: "Как писать план, объектив, свет и атмосферу в промпте.", filename: "cinematography.md", href: "/attachments/cinematography.md", sizeBytes: 8502, kind: "reference" },
  { id: "claude-constitution-summary", name: "claude-constitution-summary", title: "Конституция Claude", description: "Приоритеты и характер для режима Claude.", filename: "claude-constitution-summary.md", href: "/attachments/claude-constitution-summary.md", sizeBytes: 1368, kind: "reference" },
  { id: "color-in-marketing", name: "color-in-marketing", title: "Цвет в маркетинге фильма", description: "Постеры, трейлеры, жанровые палитры и CTR.", filename: "color-in-marketing.md", href: "/attachments/color-in-marketing.md", sizeBytes: 4398, kind: "reference" },
  { id: "color-theory", name: "color-theory", title: "Цвет в кино", description: "Психология цвета, гармонии, колор-скрипт и грейдинг.", filename: "color-theory.md", href: "/attachments/color-theory.md", sizeBytes: 5338, kind: "reference" },
  { id: "consistency-and-multishot", name: "consistency-and-multishot", title: "Консистентность и мультишот", description: "Якоря персонажа и диалекты моделей.", filename: "consistency-and-multishot.md", href: "/attachments/consistency-and-multishot.md", sizeBytes: 2598, kind: "reference" },
  { id: "examples", name: "examples", title: "Готовые примеры промптов", description: "Экшен, диалог, реклама, видеоурок, путь кадра.", filename: "examples.md", href: "/attachments/examples.md", sizeBytes: 6331, kind: "reference" },
  { id: "facial-anatomy-mimicry", name: "facial-anatomy-mimicry", title: "Анатомия мимики", description: "Мышцы лица, FACS и эмоции для персонажа.", filename: "facial-anatomy-mimicry.md", href: "/attachments/facial-anatomy-mimicry.md", sizeBytes: 4121, kind: "reference" },
  { id: "facs-codes", name: "facs-codes", title: "Коды FACS", description: "Action Units, мышцы, голова и взгляд.", filename: "facs-codes.md", href: "/attachments/facs-codes.md", sizeBytes: 4807, kind: "reference" },
  { id: "genres-and-emotion", name: "genres-and-emotion", title: "Жанры и эмоции", description: "Контракт жанра и психология зрителя.", filename: "genres-and-emotion.md", href: "/attachments/genres-and-emotion.md", sizeBytes: 2521, kind: "reference" },
  { id: "gyro-data", name: "gyro-data", title: "Гироскоп камеры", description: "IMU, Gyroflow и стабилизация по данным.", filename: "gyro-data.md", href: "/attachments/gyro-data.md", sizeBytes: 6910, kind: "reference" },
  { id: "kinetic-typography", name: "kinetic-typography", title: "Кинетическая типографика", description: "Движение текста в трейлерах.", filename: "kinetic-typography.md", href: "/attachments/kinetic-typography.md", sizeBytes: 4284, kind: "reference" },
  { id: "microexpressions", name: "microexpressions", title: "Микроэкспрессии", description: "Короткие утечки эмоции и как ставить их в анимации.", filename: "microexpressions.md", href: "/attachments/microexpressions.md", sizeBytes: 3587, kind: "reference" },
  { id: "multi-shot-and-analysis", name: "multi-shot-and-analysis", title: "Мультишот и разбор", description: "Склейки, взгляд в камеру и чек-лист качества.", filename: "multi-shot-and-analysis.md", href: "/attachments/multi-shot-and-analysis.md", sizeBytes: 4130, kind: "reference" },
  { id: "prompt-and-physics", name: "prompt-and-physics", title: "Промпт и физика", description: "Структура видеопромпта и язык веса.", filename: "prompt-and-physics.md", href: "/attachments/prompt-and-physics.md", sizeBytes: 1719, kind: "reference" },
  { id: "realism-clothing-space", name: "realism-clothing-space", title: "Реализм, одежда, пространство", description: "Кожа, ткань, свет и обитаемая среда.", filename: "realism-clothing-space.md", href: "/attachments/realism-clothing-space.md", sizeBytes: 2831, kind: "reference" },
  { id: "russian-voiceover", name: "russian-voiceover", title: "Русская озвучка", description: "Интонация, TTS и синхрон с картинкой.", filename: "russian-voiceover.md", href: "/attachments/russian-voiceover.md", sizeBytes: 4663, kind: "reference" },
  { id: "special-effects-vfx", name: "special-effects-vfx", title: "Спецэффекты и VFX", description: "Practical vs CGI и как описывать эффекты.", filename: "special-effects-vfx.md", href: "/attachments/special-effects-vfx.md", sizeBytes: 4291, kind: "reference" },
  { id: "stabilization-tools", name: "stabilization-tools", title: "Стабилизация", description: "Warp, Resolve, Topaz, Gyroflow для AI-видео.", filename: "stabilization-tools.md", href: "/attachments/stabilization-tools.md", sizeBytes: 4636, kind: "reference" },
  { id: "storyboarding-tools", name: "storyboarding-tools", title: "Раскадровка", description: "Инструменты и правила панелей.", filename: "storyboarding-tools.md", href: "/attachments/storyboarding-tools.md", sizeBytes: 4088, kind: "reference" },
  { id: "structure-and-pixar", name: "structure-and-pixar", title: "Структура Pixar", description: "Story Spine, 22 правила, Save the Cat, Hero’s Journey.", filename: "structure-and-pixar.md", href: "/attachments/structure-and-pixar.md", sizeBytes: 3564, kind: "reference" },
  { id: "styles-and-analysis", name: "styles-and-analysis", title: "Стили студий", description: "Pixar, Disney, Arcane и чек-лист разбора стиля.", filename: "styles-and-analysis.md", href: "/attachments/styles-and-analysis.md", sizeBytes: 3152, kind: "reference" },
  { id: "temporal-consistency", name: "temporal-consistency", title: "Временная согласованность", description: "Flicker, drift и короткие клипы.", filename: "temporal-consistency.md", href: "/attachments/temporal-consistency.md", sizeBytes: 4660, kind: "reference" },
  { id: "title-sequences-typography", name: "title-sequences-typography", title: "Титры и шрифт", description: "Саул Басс, Cooper и климат фильма в шрифте.", filename: "title-sequences-typography.md", href: "/attachments/title-sequences-typography.md", sizeBytes: 4334, kind: "reference" },
  { id: "tutorials", name: "tutorials", title: "Видеоуроки", description: "Хук, говорящая голова, две камеры, нижняя треть.", filename: "tutorials.md", href: "/attachments/tutorials.md", sizeBytes: 5598, kind: "reference" },
  { id: "virtual-production", name: "virtual-production", title: "Виртуальное производство", description: "LED Volume, Unreal, свет от окружения.", filename: "virtual-production.md", href: "/attachments/virtual-production.md", sizeBytes: 4995, kind: "reference" },
];

export const LESSONS: PackFile[] = [
  {
    id: "logline-template",
    name: "logline-template",
    title: "Шаблон логлайна мини-фильма",
    description: "Формула логлайна и три рабочих примера для 45–70 секунд.",
    filename: "logline-template.txt",
    href: "/skills/lessons/logline-template.txt",
    sizeBytes: 729,
    kind: "lesson",
  },
  {
    id: "cinematic-prompt-frame",
    name: "cinematic-prompt-frame",
    title: "Каркас cinematic-промпта",
    description: "Структура кадра: субъект, физика, камера, свет, ограничения.",
    filename: "cinematic-prompt-frame.txt",
    href: "/skills/lessons/cinematic-prompt-frame.txt",
    sizeBytes: 495,
    kind: "lesson",
  },
  {
    id: "facs-emotions",
    name: "facs-emotions",
    title: "Памятка FACS для актёра",
    description: "Семь базовых эмоций и ключевые Action Units.",
    filename: "facs-emotions.txt",
    href: "/skills/lessons/facs-emotions.txt",
    sizeBytes: 517,
    kind: "lesson",
  },
  {
    id: "shot-list",
    name: "shot-list",
    title: "Пустой шот-лист",
    description: "Таблица на 8 кадров: время, крупность, камера, действие.",
    filename: "shot-list.txt",
    href: "/skills/lessons/shot-list.txt",
    sizeBytes: 581,
    kind: "lesson",
  },
];

export const ALL_PACK = [...SKILLS, ...REFERENCES, ...LESSONS];

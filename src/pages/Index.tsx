import { useState } from "react";
import Icon from "@/components/ui/icon";

const BOOK_COVER = "https://cdn.poehali.dev/projects/bf7a89a5-8fbb-45b7-9396-502851fe7980/files/19552d03-1c07-4a29-9fda-911c3f599c18.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <HeroSection />
      <AboutSection />
      <ExcerptsSection />
      <BooksSection />
      <BuySection />
      <Footer />
    </div>
  );
};

const HeroSection = () => (
  <section className="notebook-bg min-h-screen flex items-center justify-center relative overflow-hidden">
    <div className="absolute left-0 top-0 w-[60px] h-full bg-[rgba(200,180,160,0.15)]" />

    <div className="max-w-6xl mx-auto px-8 py-20 flex flex-col lg:flex-row items-center gap-12 relative z-10">
      <div className="flex-1 text-left pl-4 lg:pl-16">
        <p className="font-handwriting text-xl md:text-2xl text-[var(--ink-faded)] mb-6 animate-fade-in-up opacity-0 rotate-[-1deg]">
          «От работяги с КАМАЗа<br/>до Миллиардера»
        </p>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-[var(--ink-color)] leading-[0.9] tracking-tight mb-4 animate-fade-in-up opacity-0 animate-delay-1 typewriter-shadow">
          САПСАН
        </h1>

        <p className="font-display text-2xl md:text-3xl text-[var(--ink-blue)] italic mb-8 animate-fade-in-up opacity-0 animate-delay-2">
          или прерванный полёт
        </p>

        <p className="font-serif text-lg text-[var(--ink-faded)] mb-10 animate-fade-in-up opacity-0 animate-delay-2">
          История автодилера
        </p>

        <div className="animate-fade-in-up opacity-0 animate-delay-3">
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-[var(--ink-color)] text-[var(--paper-bg)] px-8 py-3 font-serif text-lg hover:bg-[var(--ink-blue)] transition-colors"
          >
            Читать далее
            <Icon name="ChevronDown" size={20} />
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-end animate-fade-in-up opacity-0 animate-delay-2">
        <p className="font-handwriting text-lg md:text-xl text-[var(--ink-faded)] text-right max-w-xs rotate-[1deg] leading-relaxed">
          «Самые выгодные инвестиции — взятки чиновникам»
          <br/>
          <span className="block mt-3 text-base text-[var(--ink-blue)]">
            З****ев *.*. 1993 год
          </span>
        </p>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <Icon name="ChevronDown" size={24} className="text-[var(--ink-faded)]" />
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="vintage-paper py-24 relative">
    <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,0.05) 35px, rgba(0,0,0,0.05) 36px)'}} />

    <div className="max-w-4xl mx-auto px-8 relative z-10">
      <div className="text-center mb-16">
        <p className="font-handwriting text-2xl text-[var(--ink-faded)] mb-2">~ о книге ~</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--ink-color)] typewriter-shadow">
          О чём эта книга
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3 stamp-border">
          <img
            src={BOOK_COVER}
            alt="Обложка книги САПСАН"
            className="w-full shadow-lg grayscale-[20%] sepia-[15%]"
          />
        </div>

        <div className="md:w-2/3 space-y-6">
          <p className="font-serif text-lg leading-relaxed text-[var(--ink-color)]">
            Лихие 90-е. Время, когда рушились империи и создавались состояния.
            Время, когда вчерашний рабочий КАМАЗа мог стать миллиардером,
            а миллиардер — оказаться за решёткой.
          </p>
          <p className="font-serif text-lg leading-relaxed text-[var(--ink-color)]">
            История о том, как строился миллиардный бизнес с более чем 4000 сотрудниками —
            и история о том, как закулисные интриги, взятки и кризис разрушили то,
            о чём многие мечтают, но никогда не смогут достичь.
          </p>
          <p className="font-serif text-lg leading-relaxed text-[var(--ink-color)]">
            Книга-история и книга-урок. Автор рассказывает с самого начала,
            чтобы читатель понимал, что стоит за каждым решением на пути
            построения компании с миллиардным оборотом — и за каждой пролитой
            кровью при её разрушении.
          </p>
          <p className="font-serif text-lg leading-relaxed text-[var(--ink-faded)] italic">
            В этой книге — не глянцевая история, а то, что стоит на самом деле
            за большим успехом и громким падением.
          </p>

          <div className="flex flex-wrap gap-8 pt-4 border-t border-dashed border-[var(--notebook-margin)]">
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-[var(--ink-color)]">4 000+</p>
              <p className="font-handwriting text-lg text-[var(--ink-faded)]">сотрудников</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-[var(--ink-color)]">₽ млрд</p>
              <p className="font-handwriting text-lg text-[var(--ink-faded)]">оборот</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-[var(--ink-color)]">100%</p>
              <p className="font-handwriting text-lg text-[var(--ink-faded)]">реальная история</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const excerpts = [
  {
    chapter: "Глава 1",
    title: "Начало пути",
    text: "Пыльный цех, запах солярки и бесконечная лента конвейера. Каждый день одинаков, как удары штампа по металлу. Но именно здесь, среди грохота и копоти, родилась мечта, которая перевернёт целую индустрию...",
  },
  {
    chapter: "Глава 7",
    title: "Первый миллион",
    text: "Деньги пахли бензином и типографской краской. Пачка в портфеле весила больше, чем весь его прежний годовой заработок. Он смотрел на неё и понимал — назад дороги нет. Теперь он играет по другим правилам...",
  },
  {
    chapter: "Глава 15",
    title: "Точка невозврата",
    text: "Звонок раздался в три часа ночи. Голос на том конце провода был спокоен, даже слишком спокоен. «У тебя двадцать четыре часа», — сказал он и повесил трубку. За окном моросил дождь, и капли на стекле выглядели как слёзы города, который знал слишком много...",
  },
];

const ExcerptsSection = () => (
  <section className="notebook-bg py-24">
    <div className="max-w-4xl mx-auto px-8">
      <div className="text-center mb-16">
        <p className="font-handwriting text-2xl text-[var(--ink-faded)] mb-2">~ отрывки ~</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--ink-color)] typewriter-shadow">
          Из книги
        </h2>
      </div>

      <div className="space-y-12">
        {excerpts.map((excerpt, i) => (
          <div
            key={i}
            className="relative pl-8 md:pl-16 border-l-2 border-dashed border-[var(--notebook-margin)]"
          >
            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-[var(--ink-color)]" />
            <p className="font-handwriting text-xl text-[var(--ink-blue)] mb-1">{excerpt.chapter}</p>
            <h3 className="font-display text-2xl font-bold text-[var(--ink-color)] mb-4">
              {excerpt.title}
            </h3>
            <blockquote className="font-serif text-lg leading-relaxed text-[var(--ink-faded)] italic border-none pl-0">
              {excerpt.text}
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const booksData = [
  {
    number: "1",
    title: "Начало",
    description: "Детство, юность и становление характера. От послевоенного детства в маленьком городке через авиационный техникум и армию — к первым шагам во взрослую жизнь. История о том, как формировался человек, которому предстоит построить империю.",
    parts: [
      {
        label: "Часть I",
        period: "1951–1970",
        chapters: ["Яна бисте", "Родители", "Школа", "Авиационный Техникум", "Акробатика", "Книги и Фильмы", "Рассуждения дилетанта"],
      },
      {
        label: "Часть II",
        period: "1970–1974",
        chapters: ["Армия", "Севморпуть", "Компрессормаш", "Семья", "Рассуждения дилетанта"],
      },
    ],
  },
  {
    number: "2",
    title: "Камаз",
    description: "Двадцать лет на великой стройке. Набережные Челны, партийная карьера, институт и первый бизнес-опыт. Болгария, бандиты, аферисты, пожар на КАМАЗе и распад СССР — глазами человека, который был в самой гуще событий.",
    parts: [
      {
        label: "Часть I",
        period: "1974–1993",
        chapters: ["Челны", "Дети", "КПСС", "Институт", "Карьера", "«Кодла»", "Болгария и Кутаиси", "Камазовские хохмы", "Камаз-люди", "Школа бизнеса"],
      },
      {
        label: "Часть II",
        period: "1974–1993",
        chapters: ["Первый автомобиль", "Бандиты и аферисты", "Мнение дилетанта", "Смутные времена", "Спорт и спирт", "Евреи", "Камаз-люди"],
      },
      {
        label: "Часть III",
        period: "1974–1993",
        chapters: ["Камаз-люди", "Интрижки и романы", "Культура и спорт", "Пожар", "Вожди СССР", "Рассуждения дилетанта"],
      },
    ],
  },
  {
    number: "3",
    title: "Автобизнес",
    description: "Главная история серии. Создание одного из крупнейших автохолдингов страны с нуля, его расцвет и стремительная гибель. О том, как строился большой бизнес в новой России — и почему он не выжил.",
    parts: [
      {
        label: "",
        period: "1993–2013",
        chapters: ["Создание автохолдинга", "Расцвет автохолдинга", "Гибель автохолдинга", "Жизнь после смерти", "Рассуждения дилетанта"],
      },
    ],
  },
  {
    number: "4",
    title: "Записки дилетанта",
    description: "Свободные размышления автора о жизни, людях, стране и времени. Без хронологии и без цензуры — честный взгляд человека, прошедшего путь от рабочего до миллиардера.",
    parts: [
      {
        label: "",
        period: "",
        chapters: ["Рассуждения «автора» на разные темы"],
      },
    ],
  },
];

const BooksSection = () => {
  const [active, setActive] = useState<string | null>(null);

  const toggle = (id: string) => {
    setActive(active === id ? null : id);
  };

  return (
    <section id="books" className="vintage-paper py-24">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="font-handwriting text-2xl text-[var(--ink-faded)] mb-2">~ содержание ~</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--ink-color)] typewriter-shadow">
            Книги серии
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
          {booksData.map((book) => (
            <button
              key={book.number}
              onClick={() => toggle(book.number)}
              className={`group relative px-5 md:px-7 py-3 md:py-4 border transition-all duration-300 text-left ${
                active === book.number
                  ? "bg-[var(--ink-color)] border-[var(--ink-color)]"
                  : "bg-[var(--paper-bg)] border-dashed border-[rgba(100,80,60,0.3)] hover:border-[var(--ink-color)] hover:border-solid"
              }`}
            >
              <span className={`font-display text-sm md:text-base font-bold block transition-colors ${
                active === book.number ? "text-[var(--paper-bg)]" : "text-[var(--ink-faded)]"
              }`}>
                Книга {book.number}
              </span>
              <span className={`font-display text-lg md:text-xl font-bold block transition-colors ${
                active === book.number ? "text-[var(--paper-bg)]" : "text-[var(--ink-color)]"
              }`}>
                «{book.title}»
              </span>
              {book.parts[0]?.period && (
                <span className={`font-handwriting text-sm block transition-colors ${
                  active === book.number ? "text-[rgba(245,240,232,0.6)]" : "text-[var(--ink-blue)]"
                }`}>
                  {book.parts.length === 1
                    ? book.parts[0].period
                    : book.parts[0].period.split("–")[0] + "–" + book.parts[book.parts.length - 1].period.split("–")[1]} гг.
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="relative min-h-[40px]">
          {booksData.map((book) => (
            <div
              key={book.number}
              className={`transition-all duration-500 ${
                active === book.number
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
              }`}
            >
              {active === book.number && (
                <div className="bg-[var(--paper-bg)] border border-dashed border-[rgba(100,80,60,0.3)] p-6 md:p-10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[var(--ink-color)] opacity-60" />

                  <p className="font-serif text-lg leading-relaxed text-[var(--ink-color)] mb-8 pl-4 border-l-2 border-[var(--ink-blue)] border-opacity-30">
                    {book.description}
                  </p>

                  <p className="font-handwriting text-lg text-[var(--ink-faded)] mb-4 opacity-60">Содержание:</p>

                  <div className={`grid gap-8 ${book.parts.length > 1 ? "md:grid-cols-" + Math.min(book.parts.length, 3) : ""}`}>
                    {book.parts.map((part, pi) => (
                      <div key={pi}>
                        {part.label && (
                          <p className="font-handwriting text-lg text-[var(--ink-blue)] mb-3 border-b border-dotted border-[rgba(100,80,60,0.2)] pb-2">
                            {part.label}
                            {part.period && <span className="text-[var(--ink-faded)] ml-2">({part.period})</span>}
                          </p>
                        )}
                        <div className="space-y-2">
                          {part.chapters.map((ch, ci) => (
                            <p key={ci} className="font-serif text-base text-[var(--ink-faded)] flex items-start gap-2.5">
                              <span className="text-[var(--ink-color)] opacity-30 mt-1.5 shrink-0">
                                <Icon name="Minus" size={12} />
                              </span>
                              {ch}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {!active && (
            <p className="font-handwriting text-xl text-[var(--ink-faded)] text-center py-8 opacity-60">
              Нажмите на книгу, чтобы увидеть содержание
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

const stores = [
  { name: "Литрес", icon: "BookOpen", url: "#" },
  { name: "Ozon", icon: "ShoppingCart", url: "#" },
  { name: "Wildberries", icon: "Package", url: "#" },
  { name: "Book24", icon: "BookMarked", url: "#" },
];

const BuySection = () => (
  <section className="bg-[var(--ink-color)] py-24 relative overflow-hidden">
    <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(255,255,255,0.1) 27px, rgba(255,255,255,0.1) 28px)'}} />

    <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
      <p className="font-handwriting text-2xl text-[rgba(245,240,232,0.5)] mb-2">~ приобрести ~</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--paper-bg)] mb-6">
        Где купить
      </h2>
      <p className="font-serif text-lg text-[rgba(245,240,232,0.7)] mb-12 max-w-xl mx-auto">
        Книга доступна в электронном и печатном формате на всех популярных площадках
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stores.map((store, i) => (
          <a
            key={i}
            href={store.url}
            className="group bg-[rgba(245,240,232,0.08)] border border-[rgba(245,240,232,0.15)] p-6 hover:bg-[rgba(245,240,232,0.15)] transition-all duration-300 flex flex-col items-center gap-3"
          >
            <Icon
              name={store.icon}
              size={32}
              className="text-[rgba(245,240,232,0.6)] group-hover:text-[var(--paper-bg)] transition-colors"
            />
            <span className="font-serif text-base text-[var(--paper-bg)]">{store.name}</span>
          </a>
        ))}
      </div>

      <div className="mt-16 stamp-border inline-block">
        <div className="bg-[rgba(245,240,232,0.05)] px-8 py-4">
          <p className="font-handwriting text-xl text-[rgba(245,240,232,0.6)]">
            Свяжитесь с автором напрямую
          </p>
          <a href="mailto:book@sapsan.ru" className="font-serif text-lg text-[var(--paper-bg)] underline underline-offset-4 hover:text-[rgba(245,240,232,0.8)] transition-colors">
            book@sapsan.ru
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="vintage-paper py-8 text-center">
    <p className="font-handwriting text-lg text-[var(--ink-faded)]">
      © 2025 САПСАН или прерванный полёт
    </p>
    <p className="font-serif text-sm text-[var(--ink-faded)] mt-2 opacity-60">
      Все права защищены
    </p>
  </footer>
);

export default Index;
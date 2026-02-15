import Icon from "@/components/ui/icon";

const BOOK_COVER = "https://cdn.poehali.dev/projects/bf7a89a5-8fbb-45b7-9396-502851fe7980/files/19552d03-1c07-4a29-9fda-911c3f599c18.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <HeroSection />
      <AboutSection />
      <ExcerptsSection />
      <NextBooksSection />
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
            Время, когда вчерашний водитель КАМАЗа мог стать миллиардером,
            а миллиардер — оказаться за решёткой.
          </p>
          <p className="font-serif text-lg leading-relaxed text-[var(--ink-color)]">
            «Сапсан или прерванный полёт» — это документальная история
            о восхождении и падении одного из крупнейших автодилеров России.
            О людях, которые строили бизнес в эпоху, когда правила
            писались на ходу, а законы работали избирательно.
          </p>
          <p className="font-serif text-lg leading-relaxed text-[var(--ink-faded)] italic">
            Эта книга — не выдумка. Все события основаны
            на реальных фактах, документах и свидетельствах очевидцев.
          </p>

          <div className="flex gap-8 pt-4 border-t border-dashed border-[var(--notebook-margin)]">
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-[var(--ink-color)]">90-е</p>
              <p className="font-handwriting text-lg text-[var(--ink-faded)]">эпоха</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-[var(--ink-color)]">350+</p>
              <p className="font-handwriting text-lg text-[var(--ink-faded)]">страниц</p>
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

const nextBooks = [
  {
    title: "САПСАН II: Возвращение",
    status: "В работе",
    year: "2026",
    description: "Продолжение истории. Новые герои, новые схемы, новая Россия.",
  },
  {
    title: "САПСАН III: Наследие",
    status: "Планируется",
    year: "2027",
    description: "Чем закончилась эпоха великих автодилеров и что осталось после них.",
  },
];

const NextBooksSection = () => (
  <section className="vintage-paper py-24">
    <div className="max-w-4xl mx-auto px-8">
      <div className="text-center mb-16">
        <p className="font-handwriting text-2xl text-[var(--ink-faded)] mb-2">~ продолжение ~</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--ink-color)] typewriter-shadow">
          Следующие книги
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {nextBooks.map((book, i) => (
          <div
            key={i}
            className="bg-[var(--paper-bg)] p-8 border border-dashed border-[rgba(100,80,60,0.3)] relative"
          >
            <div className="absolute top-4 right-4">
              <span className="font-handwriting text-sm bg-[var(--ink-color)] text-[var(--paper-bg)] px-3 py-1">
                {book.status}
              </span>
            </div>

            <p className="font-handwriting text-lg text-[var(--ink-blue)] mb-2">{book.year}</p>
            <h3 className="font-display text-2xl font-bold text-[var(--ink-color)] mb-4">
              {book.title}
            </h3>
            <p className="font-serif text-base text-[var(--ink-faded)] leading-relaxed">
              {book.description}
            </p>

            <div className="mt-6 pt-4 border-t border-dotted border-[rgba(100,80,60,0.2)]">
              <p className="font-handwriting text-base text-[var(--ink-faded)]">
                <Icon name="Bell" size={16} className="inline mr-2" />
                Подпишитесь, чтобы узнать о выходе
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

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

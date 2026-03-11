import type { NavLink, Playlist, Project, GalleryImage, VisionCard, Testimonial } from "@/types";

// ─── Navigation ──────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { href: "#vision", label: "O Mnie" },
  { href: "#portfolio", label: "Usługi" },
  { href: "#services", label: "Atrakcje" },
  { href: "#galeria", label: "Galeria" },
];

// ─── Playlists ───────────────────────────────────────────────
export const PLAYLISTS: Playlist[] = [
  { id: "weselne-hity", name: "DJ Oskar", spotifyId: "2gHYLZoetZx9yJsIupBRQS" },
  { id: "retro", name: "Retro", spotifyId: "2uqAh2dPS5derPV6WPvaZA" },
  { id: "italiano", name: "Italiano", spotifyId: "5TvQ3aVMCmmH2g5RsbKDsq" },
  { id: "biesiada", name: "Biesiada", spotifyId: "4MPmdy7TnbNvYeRri0lqc5" },
  { id: "latino", name: "Latino", spotifyId: "5hzItlSBLQZodERGr6nzJo" },
  { id: "dyskoteka2000", name: "Dyskoteka 2000", spotifyId: "7lY53LlBhXK5e8vgMz7cMY" },
];

// ─── Portfolio Projects ──────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    category: "Wesele",
    title: "Eleganckie Przyjęcie w Pałacu",
    video: "/videos/1abe29ff-e526-4f45-9c99-f4bc4db5b9c3.mp4",
  },
  {
    category: "Klubowo",
    title: "Energia Nowoczesnej Nocy",
    video: "/videos/3664892d-d62c-42bd-90a7-a4f49ac1c161.mp4",
  },
  {
    category: "Światło",
    title: "Pokaz Iskier i Dymu",
    video: "/videos/6384efa6-5f5c-4b5f-b66b-d391f2fe21e4.mp4",
  },
];

// ─── Gallery ─────────────────────────────────────────────────
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/gallery-police.png",
    label: "Wodzirej",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/about-dj.jpg",
    label: "DJ Oskar",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/foto.jpg",
    label: "Plener",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    src: "/images/about-party.jpg",
    label: "Zabawa",
    span: "md:col-span-1 md:row-span-1",
  },
];

// ─── Vision Section Cards ────────────────────────────────────
export const VISION_CARDS: VisionCard[] = [
  {
    title: "Klasa i prezencja",
    img: "/images/about-dj.jpg",
  },
  {
    title: "Pełen parkiet",
    img: "/images/about-party.jpg",
  },
];

// ─── Marquee Items ───────────────────────────────────────────
export const MARQUEE_ITEMS: string[] = [
  "Muzyka & Emocje",
  "Klasa bez kompromisów",
  "Nowoczesne Wesele",
  "Twoja Historia",
  "Niezapomniana Noc",
];

// ─── Testimonials ────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    firstName: "Barbara",
    lastName: "-",
    location: "Izdebnik",
    text: "DJ Oskar to wymarzony konferansjer i człowiek orkiestra. Repertuar był doskonale wybrany pod nasze gusta, a przez całe przyjęcie czuliśmy się zaopiekowani i wysłuchani. Po imprezach goście wydzwaniali, żeby dostać jego numiary. 11/10, poważnie rozważamy rozwód żeby urządzić sobie jeszcze jedno takie wesele."
  },
  {
    id: "review-2",
    firstName: "Natalia",
    lastName: "-",
    location: "Sieraków",
    text: "DJ Oskar prowadził nasze wesele. Wszystko zorganizowane było na najwyższym poziomie, Oskar idealnie potrafił dobrać repertuar do gości i sprawił, że parkiet był cały czas pełny, wszyscy bawiliśmy się świetnie! Najlepiej, gdy zacytuje jednego z naszych gości: \"Byłem na weselu, gdzie były dwie osoby do prowadzenia wesela i w 1/3 nie zrobiły one tak dobrej roboty jak jeden DJ Oskar u was\". Polecamy Magiczną Noc wszystkim i dziękujemy."
  },
  {
    id: "review-3",
    firstName: "Magda",
    lastName: "-",
    location: "Kraków",
    text: "Super współpraca! Oskar świetnie sprawdził się na naszym polsko-francuskim weselu. Poruszył do tańca i zabawy nie tylko rożne pokolenia, ale także dwie kultury, co nie jest prostym zadaniem. Dzięki niemu atmosfera na naszym weselu była świetna."
  },
  {
    id: "review-4",
    firstName: "Dominika",
    lastName: "i Paweł",
    location: "Kraków",
    text: "W najważniejszym dla Nas dniu zaufaliśmy Magicznej Nocy, a dokładnie Oskarowi :) Już na pierwszym spotkaniu, na którym się poznaliśmy czuliśmy, że nadajemy na tych samych falach. Oskar jest zabawny i błyskotliwy. Ale co najważniejsze na ślubie był niezastąpiony! Potrafił wyczuć gości i dopasować muzykę."
  },
  {
    id: "review-5",
    firstName: "Wacław",
    lastName: "-",
    location: "Łostówka",
    text: "Zabawa na weselu z DJ Oskarem była po prostu boska! Znakomicie poprowadził całe przyjęcie, wciągając wszystkich do tańca i dbając o świetną atmosferę. Idealnie dobrał muzykę, dzięki czemu parkiet był pełen przez cały czas."
  },
  {
    id: "review-6",
    firstName: "Katarzyna",
    lastName: "-",
    location: "Inwałd",
    text: "Polecamy DJa Oskara i dziękujemy za obsługę muzyczną naszego wesela. Pełen profesjonalizm i życzliwość na każdym etapie współpracy. Niezwykle cenne było dopasowanie muzyki do gustu każdego z gości i programu."
  },
  {
    id: "review-7",
    firstName: "Ania",
    lastName: "i Łukasz",
    location: "Nowy Targ",
    text: "Mieliśmy zaszczyt gościć na naszym weselu DJ-a Oskara. Oskar jest człowiekiem Odpowiedzialnym, w pełni profesjonalnie podszedł do tematu Naszego wesela. Wszystko zostało dopięte na ostatni guzik. Uważamy, że jest to CZŁOWIEK na właściwym miejscu! :)"
  },
  {
    id: "review-8",
    firstName: "Mateusz",
    lastName: "-",
    location: "Kraków",
    text: "Całym sercem polecamy DJ Oskara! Wszyscy goście byli zachwyceni i pytali gdzie znaleźliśmy takiego super DJ – nawet właściciele domu weselnego. Przekazaliśmy mu nasze preferencje muzyczne i wizję wesela, a on zrealizował wszystko perfekcyjnie."
  },
  {
    id: "review-9",
    firstName: "Robert",
    lastName: "Szura",
    location: "Zalasowa",
    text: "Wraz z małżonką ogromnie polecamy!! Profesjonalizm i jakość obsługi na najwyższym poziomie. DJ Oskar, który był na naszym weselu nie tylko świetnie potrafił porwać ludzi do zabawy, ale swoją radą i pomocą starał się by ten jednak też stresujący dzień udał się wspaniale."
  },
  {
    id: "review-10",
    firstName: "Marcin",
    lastName: "-",
    location: "Kraków",
    text: "DJ Oskar spisał się rewelacyjnie! Muzyka była idealnie dobrana do sytuacji na parkiecie, jednym słowem - niezapomniana. Każdy bawił się wyśmienicie i długo będzie wspominać tą imprezę! Polecam gorąco!"
  },
  {
    id: "review-11",
    firstName: "Magdalena",
    lastName: "Ryś",
    location: "Kraków - Opinia Lokalna",
    text: "Serdecznie polecamy Magiczną Noc, zwłaszcza DJ Oskara który towarzyszył nam na 3 rodzinnych weselach. Profesjonalnie i z uśmiechem :) Najlepszy wodzirej, który czuje klimat ludzi!"
  },
  {
    id: "review-12",
    firstName: "Anna",
    lastName: "G.",
    location: "Opinia Google",
    text: "Oskar doskonale wypełniał nastrój panujący na Sali weselnej wśród gości, niesamowicie błyskotliwie przeplatał stonowaną muzykę podczas posiłków z dawką energetycznych dźwięków na sali tanecznej. Mega pozytywna energia! Dzięki wielkie."
  },
  {
    id: "review-13",
    firstName: "Kinga",
    lastName: "i Maciej",
    location: "Nowy Wiśnicz",
    text: "Parkiet płonął do rana! Oskar ma genialne poczucie rytmu, wyczuwa tłum na parkiecie i idealnie dobiera odpowiednie sety. Nikt u nas z wesela tak naprawdę nie schodził z tańca. Dziękujemy i gorąco polecamy!"
  },
  {
    id: "review-14",
    firstName: "Ewelina",
    lastName: "-",
    location: "Limanowa",
    text: "Pełen profesjonalizm i 100% zaangażowania! Oskar pomógł nam w tak wielu rzeczach dotyczących samej logistyki wesela. Prawdziwy człowiek orkiestra! Będziemy Cię polecać wszystkim naszym znajomym :)"
  },
  {
    id: "review-15",
    firstName: "Szymon",
    lastName: "-",
    location: "Rzeszów",
    text: "Szczerze polecamy usługi DJ Oskara. Oprócz tego, że rewelacyjnie rozkręca każdą imprezę, ma świetne nagłośnienie i genialne układy oświetlenia, które wprowadzały nas i gości w zachwyt."
  },
  {
    id: "review-16",
    firstName: "Monika",
    lastName: "i Grzegorz",
    location: "Tarnów",
    text: "Jeżeli szukacie pewniaka na Wasze wesele to Oskar jest najlepszym wyborem. Świetne animacje, dużo dobrego humoru, a brak przaśnych i żenujących zabaw. Elegancja na najwyższym poziomie."
  },
  {
    id: "review-17",
    firstName: "Wiktoria",
    lastName: "-",
    location: "Kraków",
    text: "Nawet moja babcia powiedziała, że ten pan od muzyki to najlepsze co nas spotkało na weselu! Wszyscy bawili się jak nigdy. Dziękujemy DJ Oskarowi!"
  },
  {
    id: "review-18",
    firstName: "Karolina",
    lastName: "i Tomek",
    location: "Wieliczka",
    text: "Dziękujemy za najpiękniejszą pamiątkę i cudowne wspomnienia z naszego wesela. Od ognia i ciężkiego dymu, poprzez oświetlenie do samej muzyki - majstersztyk."
  }
];

export type CakeCategory = 'Urodzinowe' | 'Weselne' | 'Okolicznościowe' | 'Dla dzieci' | 'Minimalistyczne';

export interface Cake {
  slug: string;
  src: string;
  alt: string;
  title: string;
  category: CakeCategory;
  description: string;
}

export const cakes: Cake[] = [
  {
    slug: 'tort-01',
    src: '/images/torty/tort-01.jpg',
    alt: 'Elegancki tort na zamówienie w kremowej bieli z ręcznie robionymi różowymi kwiatami cukrowymi',
    title: 'Różana Elegancja',
    category: 'Weselne',
    description: 'Gładki, kremowy biszkopt otulony aksamitnym kremem i ozdobiony ręcznie robionymi różowymi kwiatami cukrowymi – ponadczasowa elegancja na wesela i rocznice.',
  },
  {
    slug: 'tort-01-przekroj',
    src: '/images/torty/tort-01-przekroj.jpg',
    alt: 'Dwa ręcznie robione torty na zamówienie – biały z różowymi kwiatami cukrowymi oraz różowy tort w pikowany wzór z suszonymi płatkami róży',
    title: 'Duet Tortowy',
    category: 'Okolicznościowe',
    description: 'Dwa charaktery w jednej odsłonie: klasyczny biały tort z różowymi kwiatami cukrowymi obok aksamitnego, pikowanego tortu w odcieniu różu, obsypanego suszonymi płatkami róży i złotymi perełkami.',
  },
  {
    slug: 'tort-02',
    src: '/images/torty/tort-02.jpg',
    alt: 'Tort na 50. urodziny ze złotym brokatem u podstawy i toperem Happy Birthday 50, otoczony bukietami róż',
    title: 'Złota Pięćdziesiątka',
    category: 'Urodzinowe',
    description: 'Kremowy tort na 50. urodziny ze złotym brokatowym zdobieniem u podstawy i personalizowanym toperem – uwieczniony wśród bukietów róż i owocowych słodkości.',
  },
  {
    slug: 'tort-03',
    src: '/images/torty/tort-03.jpg',
    alt: 'Tort w pistacjowej otulinie z posypką pistacjową i świeżymi malinami',
    title: 'Pistacja z Maliną',
    category: 'Urodzinowe',
    description: 'Kremowa otulina w kolorze pistacjowym, obsypana chrupiącymi pistacjami i świeżymi malinami – orzeźwiające, eleganckie połączenie smaków na wyjątkowe okazje.',
  },
  {
    slug: 'tort-04',
    src: '/images/torty/tort-04.jpg',
    alt: 'Tort urodzinowy w kształcie górskiego krajobrazu z granatowym jeziorem z żelu, ośnieżonymi szczytami i fontanną iskier',
    title: 'Górska Przygoda',
    category: 'Urodzinowe',
    description: 'Rzeźbiony w kremie górski krajobraz – ośnieżone szczyty, cukrowe choinki i głębokie, granatowe jezioro z żelu – uwieńczony fontanną iskier na 25. urodziny.',
  },
  {
    slug: 'tort-04-b',
    src: '/images/torty/tort-04-b.jpg',
    alt: 'Zbliżenie na tort w kształcie góry z granatowym jeziorem z żelu, kremowym śniegiem, cukrowymi choinkami i świecami w kształcie cyfr 25',
    title: 'Lodowcowe Jezioro',
    category: 'Urodzinowe',
    description: 'Zbliżenie na rzeźbiony w kremie szczyt góry z lukrowym „śniegiem” i cukrowymi choinkami nad taflą granatowego, żelowego jeziora – detal, który robi wrażenie.',
  },
  {
    slug: 'tort-05',
    src: '/images/torty/tort-05.jpg',
    alt: 'Tort w aksamitnej różowej polewie z białym kwiatem z jadalnego wafla, suszonymi płatkami róży i złotymi perełkami',
    title: 'Aksamitny Puder Róż',
    category: 'Minimalistyczne',
    description: 'Matowa, aksamitna polewa w pudrowym różu, biały kwiat z jadalnego wafla i suszone płatki róży ze złotymi perełkami – subtelna elegancja w każdym detalu.',
  },
  {
    slug: 'tort-05-b',
    src: '/images/torty/tort-05-b.jpg',
    alt: 'Różowy aksamitny tort z białym kwiatem z wafla, płatkami róży i złotymi perełkami na drewnianej podstawie',
    title: 'Róż i Białe Płatki',
    category: 'Weselne',
    description: 'Aksamitny różowy tort z innej perspektywy – biały waflowy kwiat, suszone płatki róży i złote perełki tworzą romantyczną, stonowaną kompozycję idealną na kameralne wesele.',
  },
  {
    slug: 'tort-05-c',
    src: '/images/torty/tort-05-c.jpg',
    alt: 'Zbliżenie na różowy aksamitny tort z suszonymi płatkami róży, złotymi perełkami i białym kwiatem z wafla',
    title: 'Złoto i Płatki Róż',
    category: 'Okolicznościowe',
    description: 'Zbliżenie na suszone płatki róży i złote perełki rozsypane na aksamitnej, różowej powierzchni kremu – naturalne piękno w mikroskali.',
  },
  {
    slug: 'tort-06',
    src: '/images/torty/tort-06.jpg',
    alt: 'Turkusowy tort urodzinowy typu drip cake z gamingowymi toperami: padem, słuchawkami i napisem Game ON',
    title: 'Gamingowa Dziewiątka',
    category: 'Dla dzieci',
    description: 'Turkusowy drip cake z gamingowymi toperami – pad, słuchawki i napis „Game ON!” – zaprojektowany na 9. urodziny małego gracza.',
  },
  {
    slug: 'tort-06-b',
    src: '/images/torty/tort-06-b.jpg',
    alt: 'Tort w całości pokryty białymi różami z jadalnego wafla i płatkami złota, ozdobiony złotymi świecami',
    title: 'Białe Róże ze Złotem',
    category: 'Okolicznościowe',
    description: 'Tort w całości pokryty delikatnymi białymi różami z jadalnego wafla, przetykanymi płatkami złota – romantyczna, luksusowa dekoracja na wyjątkowe okazje.',
  },
];

export interface PricingTier {
  name: string;
  tagline: string;
  priceFrom20: string;
  priceFrom24: string;
  priceFrom28: string;
  highlight?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Tort Klasyczny',
    tagline: 'Gładki krem, elegancka prostota, ulubione smaki',
    priceFrom20: 'od 220 zł',
    priceFrom24: 'od 320 zł',
    priceFrom28: 'od 420 zł',
  },
  {
    name: 'Tort Premium',
    tagline: 'Drip cake, kwiaty cukrowe, teksturowany krem',
    priceFrom20: 'od 320 zł',
    priceFrom24: 'od 450 zł',
    priceFrom28: 'od 600 zł',
    highlight: true,
  },
  {
    name: 'Tort Artystyczny 3D',
    tagline: 'Rzeźbione figury, indywidualny, autorski projekt',
    priceFrom20: 'wycena indywidualna',
    priceFrom24: 'wycena indywidualna',
    priceFrom28: 'wycena indywidualna',
  },
];

export const sizeGuide = [
  { size: '20 cm', portions: '12–15 porcji' },
  { size: '24 cm', portions: '18–22 porcje' },
  { size: '28 cm', portions: '25–30 porcji' },
];

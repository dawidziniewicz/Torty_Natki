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
    alt: 'Elegancki tort na zamówienie z delikatnym różowym wykończeniem i ręcznie robionymi kwiatami z kremu',
    title: 'Różana Elegancja',
    category: 'Weselne',
    description: 'Gładki krem w odcieniach pudrowego różu i ręcznie modelowane kwiaty cukrowe – klasyk, który zachwyca na weselach i rocznicach.',
  },
  {
    slug: 'tort-01-przekroj',
    src: '/images/torty/tort-01-przekroj.jpg',
    alt: 'Przekrój tortu pokazujący wilgotne, puszyste warstwy biszkoptu i kremu',
    title: 'Wnętrze pełne niespodzianek',
    category: 'Okolicznościowe',
    description: 'Warstwy wilgotnego biszkoptu przekładane aksamitnym kremem – każdy kęs to gwarancja świeżości i smaku, o który dbamy od podstaw.',
  },
  {
    slug: 'tort-02',
    src: '/images/torty/tort-02.jpg',
    alt: 'Tort okolicznościowy z efektownym złotym zdobieniem i świeżymi owocami',
    title: 'Złota Uczta',
    category: 'Okolicznościowe',
    description: 'Złote akcenty, świeże owoce sezonowe i lekki krem – tort stworzony na wyjątkowe rocznice i jubileusze.',
  },
  {
    slug: 'tort-03',
    src: '/images/torty/tort-03.jpg',
    alt: 'Kolorowy tort urodzinowy dla dziecka z motywem bajkowym',
    title: 'Bajkowa Przygoda',
    category: 'Dla dzieci',
    description: 'Żywe kolory, ulubiona bajka pociechy i mnóstwo słodkich detali – tort, który zamienia urodziny w prawdziwą magię.',
  },
  {
    slug: 'tort-04',
    src: '/images/torty/tort-04.jpg',
    alt: 'Nowoczesny tort typu drip cake z różową polewą spływającą po bokach',
    title: 'Różowy Drip Cake',
    category: 'Urodzinowe',
    description: 'Modny drip cake z różową polewą, chrupiącymi wafelkami i pastelowymi bezikami – hit na każdym urodzinowym stole.',
  },
  {
    slug: 'tort-04-b',
    src: '/images/torty/tort-04-b.jpg',
    alt: 'Tort urodzinowy z pastelową polewą i dekoracją z lizaków oraz cukierków',
    title: 'Słodki Wystrzał',
    category: 'Dla dzieci',
    description: 'Pastelowa polewa, kolorowe lizaki i deszcz cukrowych perełek – radość gwarantowana dla najmłodszych solenizantów.',
  },
  {
    slug: 'tort-05',
    src: '/images/torty/tort-05.jpg',
    alt: 'Minimalistyczny tort w stylu naked cake z eukaliptusem i suszonymi kwiatami',
    title: 'Naked Cake Boho',
    category: 'Minimalistyczne',
    description: 'Surowy, naturalny wygląd, delikatna warstwa kremu i żywa zieleń – idealny wybór dla stylowych, kameralnych przyjęć.',
  },
  {
    slug: 'tort-05-b',
    src: '/images/torty/tort-05-b.jpg',
    alt: 'Piętrowy tort weselny w odcieniach różu i bieli z koronkowym wzorem',
    title: 'Koronkowe Marzenie',
    category: 'Weselne',
    description: 'Piętrowa konstrukcja, subtelny wzór koronki wykonany ręcznie z kremu i eleganckie kwiaty – centralny punkt Waszego wesela.',
  },
  {
    slug: 'tort-05-c',
    src: '/images/torty/tort-05-c.jpg',
    alt: 'Tort okolicznościowy ozdobiony świeżymi kwiatami jadalnymi',
    title: 'Kwiatowy Ogród',
    category: 'Okolicznościowe',
    description: 'Kompozycja z jadalnych kwiatów na gładkim kremie – naturalne piękno, które zachwyca na urodzinach i chrzcinach.',
  },
  {
    slug: 'tort-05-d',
    src: '/images/torty/tort-05-d.jpg',
    alt: 'Elegancki tort na rocznicę w ciemnym, głębokim odcieniu bordo ze złotymi dodatkami',
    title: 'Głęboka Bordowa Elegancja',
    category: 'Okolicznościowe',
    description: 'Głęboki odcień bordo, złote detale i nienaganne wykończenie – propozycja dla wyjątkowych, eleganckich okazji.',
  },
  {
    slug: 'tort-06',
    src: '/images/torty/tort-06.jpg',
    alt: 'Artystyczny tort figuralny 3D wykonany na specjalne zamówienie',
    title: 'Tort Artystyczny 3D',
    category: 'Urodzinowe',
    description: 'W pełni autorski projekt rzeźbiony ręcznie w cieście – dla klientów, którzy marzą o czymś naprawdę niepowtarzalnym.',
  },
  {
    slug: 'tort-06-b',
    src: '/images/torty/tort-06-b.jpg',
    alt: 'Tort premium z teksturowanym kremem i delikatnym akcentem złota',
    title: 'Teksturowana Premia',
    category: 'Minimalistyczne',
    description: 'Modna teksturowana powierzchnia kremu i subtelny akcent złota – nowoczesna klasyka dla wymagających Klientów.',
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

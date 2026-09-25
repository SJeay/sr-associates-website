"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Truck,
  CreditCard,
  Wrench,
  MapPin,
  Phone,
  MessageCircle,
  Check,
  Clock3,
  ShieldCheck,
  Sofa,
  Tv,
  Refrigerator,
  Smartphone,
  WashingMachine,
  CookingPot,
  Sparkles,
  HeartHandshake,
  Store,
} from "lucide-react";

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
const photos = {
  hero: img("photo-1600210492486-724fe5c67fb0", 2200),
  tv: img("photo-1593359677879-a4bb92f829d1"),
  fridge: img("photo-1571175443880-49e1d25b2bc5"),
  washer: img("photo-1626806787461-102c1bfaaea1"),
  sofa: img("photo-1555041469-a586c61ea9bc"),
  kitchen: img("photo-1556911220-e15b29be8c8f"),
  showroom: img("photo-1600607687939-ce8a6c25118c"),
  store: img("photo-1600566753086-00f18fb6b3ea"),
  room: img("photo-1600210491892-03d54c0aaf87"),
  team: img("photo-1521737711867-e3b97375f902"),
};

const cats = [
  {
    title: "Televisions",
    desc: "Big-screen moments, beautifully made.",
    icon: Tv,
    image: photos.tv,
    tag: "01",
  },
  {
    title: "Refrigerators",
    desc: "A fresher start, every day.",
    icon: Refrigerator,
    image: photos.fridge,
    tag: "02",
  },
  {
    title: "Washing machines",
    desc: "A little more ease in every load.",
    icon: WashingMachine,
    image: photos.washer,
    tag: "03",
  },
  {
    title: "Furniture",
    desc: "Pieces that make a house yours.",
    icon: Sofa,
    image: photos.sofa,
    tag: "04",
  },
  {
    title: "Mobiles",
    desc: "Stay close to everything you love.",
    icon: Smartphone,
    image: photos.tv,
    tag: "05",
  },
  {
    title: "Kitchen appliances",
    desc: "Bring a little magic to the everyday.",
    icon: CookingPot,
    image: photos.kitchen,
    tag: "06",
  },
];

const brands = [
  {
    name: "SAMSUNG",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/512px-Samsung_Logo.svg.png",
    description:
      "Smart technology for work, entertainment and everyday comfort.",
    highlights: [
      { label: "TVs", image: photos.tv },
      { label: "Appliances", image: photos.kitchen },
    ],
  },
  {
    name: "LG",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/LG_logo_%282015%29.svg/512px-LG_logo_%282015%29.svg.png",
    description: "Reliability, design and efficiency for modern homes.",
    highlights: [
      { label: "Fridges", image: photos.fridge },
      { label: "ACs", image: photos.showroom },
    ],
  },
  {
    name: "SONY",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Sony_logo.svg/512px-Sony_logo.svg.png",
    description: "Immersive sound and richer viewing experiences.",
    highlights: [
      { label: "TVs", image: photos.tv },
      { label: "Audio", image: photos.kitchen },
    ],
  },
  {
    name: "Whirlpool",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Whirlpool_logo.svg/400px-Whirlpool_logo.svg.png",
    description: "Practical care and trusted appliances for everyday routines.",
    highlights: [
      { label: "Washers", image: photos.washer },
      { label: "Kitchen", image: photos.kitchen },
    ],
  },
  {
    name: "Godrej",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Godrej_Logo.svg/512px-Godrej_Logo.svg.png",
    description:
      "Smart solutions designed for family comfort and modern living.",
    highlights: [
      { label: "Furniture", image: photos.sofa },
      { label: "Appliances", image: photos.fridge },
    ],
  },
  {
    name: "Haier",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Haier_logo.svg/512px-Haier_logo.svg.png",
    description: "Modern cooling and convenience built around daily living.",
    highlights: [
      { label: "Fridges", image: photos.fridge },
      { label: "ACs", image: photos.showroom },
    ],
  },
  {
    name: "BOSCH",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Bosch_logo_%28svg%29.svg/512px-Bosch_logo_%28svg%29.svg.png",
    description: "Precision engineering for smarter, cleaner living.",
    highlights: [
      { label: "Kitchen", image: photos.kitchen },
      { label: "Home tech", image: photos.tv },
    ],
  },
  {
    name: "IFB",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/IFB_Logo.svg/512px-IFB_Logo.svg.png",
    description: "Thoughtful appliances that make household routines easier.",
    highlights: [
      { label: "Washers", image: photos.washer },
      { label: "Kitchen", image: photos.kitchen },
    ],
  },
  {
    name: "Panasonic",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Panasonic_logo.svg/512px-Panasonic_logo.svg.png",
    description:
      "Reliable performance for comfort, sound and everyday essentials.",
    highlights: [
      { label: "TVs", image: photos.tv },
      { label: "Audio", image: photos.kitchen },
    ],
  },
  {
    name: "Voltas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Voltas_logo.svg/512px-Voltas_logo.svg.png",
    description: "Cooling and comfort designed for Indian homes.",
    highlights: [
      { label: "ACs", image: photos.showroom },
      { label: "Appliances", image: photos.fridge },
    ],
  },
  {
    name: "Blue Star",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Blue_Star_Logo.svg/512px-Blue_Star_Logo.svg.png",
    description:
      "Comfort-driven solutions for climate control and living spaces.",
    highlights: [
      { label: "ACs", image: photos.showroom },
      { label: "Cooling", image: photos.room },
    ],
  },
  {
    name: "PRESTIGE",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Prestige_Logo.svg/512px-Prestige_Logo.svg.png",
    description:
      "Kitchen and home essentials that help everyday life flow better.",
    highlights: [
      { label: "Cookware", image: photos.kitchen },
      { label: "Home", image: photos.room },
    ],
  },
];

const features = [
  {
    title: "Genuine, always",
    text: "Every product comes from brands you know and trust.",
    icon: BadgeCheck,
  },
  {
    title: "Easy EMI",
    text: "Flexible finance options to make good choices easier.",
    icon: CreditCard,
  },
  {
    title: "Delivery made easy",
    text: "We’ll bring your new favourite thing home.",
    icon: Truck,
  },
  {
    title: "Here when you need us",
    text: "Installation and after sales care from our local team.",
    icon: Wrench,
  },
];

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  text,
  link,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  link?: { label: string; href: string };
}) {
  return (
    <div className="section-head">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {link && (
        <Link href={link.href} className="text-link">
          {link.label}
          <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
}

export function Hero({
  eyebrow,
  title,
  text,
  image = photos.hero,
  actions = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  image?: string;
  actions?: boolean;
}) {
  return (
    <section className="hero">
      <Image
        src={image}
        alt="A calm, sunlit modern home"
        fill
        priority
        sizes="100vw"
        className="hero-image"
      />
      <div className="hero-shade" />
      <div className="wrap hero-copy">
        <span className="hero-kicker">
          <span /> {eyebrow}
        </span>
        <h1>{title}</h1>
        <p>{text}</p>
        {actions && (
          <div className="hero-actions">
            <Link className="button button-white" href="/contact">
              Plan your visit <ArrowRight size={17} />
            </Link>
            <a className="button button-glass" href="/contact">
              <Phone size={17} /> Contact our team
            </a>
          </div>
        )}
        <div className="hero-note">
          <MapPin size={14} /> Your neighbourhood home store · Pollachi, Tamil
          Nadu
        </div>
      </div>
      <div className="hero-index">
        EST. 2001 <span /> 10°39' N · 77°00' E
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero
        eyebrow="A little closer to home"
        title={
          <>
            <span>Make home</span>
            <br />
            <i>feel more like you.</i>
          </>
        }
        text="Thoughtful electronics, furniture and everyday essentials, picked for the way you live."
      />
      <div className="trust-strip">
        <div className="wrap trust-inner">
          {[
            "Genuine brands",
            "Easy EMI",
            "Local delivery",
            "Here after the sale",
          ].map((t, i) => (
            <div key={t}>
              <span>0{i + 1}</span>
              {t}
            </div>
          ))}
        </div>
      </div>

      <section className="section wrap categories-section">
        <SectionHead
          eyebrow="The good stuff, all in one place"
          title="A home for every good idea."
          text="From the first coffee of the morning to the last episode at night, find the things that make home feel like yours."
          link={{ label: "Explore all products", href: "/products" }}
        />
        <div className="category-grid">
          {cats.map((c, i) => (
            <Reveal key={c.title} className={`category-card category-${i}`}>
              <Link href="/products" className="category-image">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width:700px) 100vw, 33vw"
                />
                <span className="category-number">{c.tag}</span>
                <span className="category-arrow">
                  <ArrowUpRight size={19} />
                </span>
              </Link>
              <div className="category-meta">
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
                <c.icon size={20} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="why-section">
        <div className="wrap">
          <SectionHead
            eyebrow="The SR difference"
            title="Good people. Good choices."
            text="Shopping for home should feel easy. We’ve been helping Pollachi families find their fit for over two decades."
          />
          <div className="feature-grid">
            {features.map((f, i) => (
              <Reveal key={f.title}>
                <div className="feature-card">
                  <div className="feature-index">0{i + 1}</div>
                  <div className="feature-icon">
                    <f.icon size={22} />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="wrap">
          <SectionHead
            eyebrow="Familiar names, carefully chosen"
            title="A few of our good friends."
            link={{ label: "Meet our brands", href: "/brands" }}
          />
          <div className="brand-grid">
            {brands.map((brand, i) => (
              <Reveal key={brand.name} className={`brand-tile brand-${i}`}>
                <div className="brand-tile-inner">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={180}
                    height={78}
                    className="brand-logo-image"
                  />
                  <span className="brand-name-label">{brand.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="brand-note">
            And many more, all under one roof in Pollachi.
          </p>
        </div>
      </section>

      <section className="showroom-section">
        <div className="wrap">
          <div className="showroom-layout">
            <div className="showroom-copy">
              <span className="eyebrow">A good place to begin</span>
              <h2>
                Come in.
                <br />
                <i>Take your time.</i>
              </h2>
              <p>
                Browse at your own pace, ask all the questions, try before you
                decide. A friendly face and a cup of coffee are always close by.
              </p>
              <Link className="button button-dark" href="/contact">
                Find our showroom <ArrowRight size={17} />
              </Link>
              <div className="store-hours">
                <Clock3 size={17} />
                <div>
                  <b>Open every day</b>
                  <span>Hours to be confirmed</span>
                </div>
              </div>
            </div>
            <div className="showroom-image">
              <Image
                src={photos.showroom}
                alt="Warm, thoughtfully furnished showroom interior"
                fill
                sizes="(max-width:800px) 100vw, 60vw"
              />
              <div className="image-caption">
                A place to see it, feel it, find your fit.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function CTASection() {
  return (
    <section className="cta-section">
      <div className="wrap cta-inner">
        <span className="eyebrow">Your next chapter starts at home</span>
        <h2>
          Ready when
          <br />
          <i>you are.</i>
        </h2>
        <p>Come see what feels right. We’ll be here.</p>
        <div className="hero-actions">
          <Link href="/contact" className="button button-white">
            Come say hello <ArrowRight size={17} />
          </Link>
          <a href="/contact" className="button button-outline">
            <MessageCircle size={17} /> WhatsApp details to be added
          </a>
        </div>
        <div className="cta-doodle">
          SR<span>.</span>
        </div>
      </div>
    </section>
  );
}

export function InteriorPage({
  kind,
}: {
  kind: "products" | "brands" | "about" | "offers" | "contact";
}) {
  const config = {
    products: [
      "Find your everyday favourites",
      "Good things for every room.",
      "Take a look around our collection of trusted brands, practical essentials and pieces that make home feel like yours.",
      photos.tv,
    ],
    brands: [
      "The names you know",
      "Good brands. Good company.",
      "We work with brands we believe in, so you can bring home the things you trust.",
      photos.showroom,
    ],
    about: [
      "A neighbour since 2001",
      "Our trusted home partner.",
      "For more than two decades, we’ve helped Pollachi families find the right things for the place they call home.",
      photos.room,
    ],
    offers: [
      "More ways to make it yours",
      "A little more room to say yes.",
      "Ask our team about current offers, flexible EMI and exchange options when you visit.",
      photos.hero,
    ],
    contact: [
      "Right around the corner",
      "We’d love to see you.",
      "Drop in, give us a call or send a message. There’s always someone here to help.",
      photos.store,
    ],
  }[kind];

  return (
    <>
      <Hero
        eyebrow={config[0]}
        title={config[1]}
        text={config[2]}
        image={config[3]}
        actions={kind !== "contact"}
      />
      {kind === "products" && <Products />}
      {kind === "brands" && <Brands />}
      {kind === "about" && <About />}
      {kind === "offers" && <Offers />}
      {kind === "contact" && <Contact />}
    </>
  );
}

function Products() {
  return (
    <>
      <section className="section wrap">
        <SectionHead
          eyebrow="Browse by room, browse by mood"
          title="A good place to start."
          text="Tell us what you’re looking for—or come in and let us help you find it."
        />
        <div className="category-grid product-category-grid">
          {cats.map((c, i) => (
            <Reveal key={c.title}>
              <Link href="#enquire" className="category-card">
                <div className="category-image">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width:700px) 100vw, 33vw"
                  />
                  <span className="category-number">0{i + 1}</span>
                </div>
                <div className="category-meta">
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                  <ArrowRight size={18} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="product-note" id="enquire">
        <div className="wrap note-inner">
          <div>
            <span className="eyebrow">A quick note</span>
            <h2>
              See something
              <br />
              <i>you like?</i>
            </h2>
          </div>
          <p>
            Our collection changes with the seasons. Call or WhatsApp details to
            be added to check what’s in store—we’ll help you find the right fit,
            without the guesswork.
          </p>
          <a href="/contact" className="button button-dark">
            <MessageCircle size={17} /> Ask us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

function Brands() {
  return (
    <>
      <section className="section wrap">
        <SectionHead
          eyebrow="Familiar names, personal advice"
          title="Good brands, all together."
          text="Explore trusted names across home appliances, entertainment, furniture and more."
        />
        <div className="brand-wall">
          {brands.map((brand, i) => (
            <div key={brand.name} className="brand-card">
              <div className="brand-card-top">
                <span>
                  {String(i + 1).padStart(2, "0")} / {brands.length}
                </span>
                <ArrowUpRight size={18} />
              </div>
              <div className="brand-card-logo">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={180}
                  height={90}
                  className="brand-logo-image"
                />
              </div>
              <p>{brand.description}</p>
              <div className="brand-card-list">
                {brand.highlights.map((item) => (
                  <div
                    key={`${brand.name}-${item.label}`}
                    className="brand-pill"
                  >
                    <Image
                      src={item.image}
                      alt={item.label}
                      width={80}
                      height={80}
                      className="brand-thumb"
                    />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <span className="brand-card-foot">
                Explore in store <ArrowRight size={15} />
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="brand-visit">
        <div className="wrap brand-visit-inner">
          <div>
            <span className="eyebrow">Try before you decide</span>
            <h2>
              See it in person.
              <br />
              <i>Feel the difference.</i>
            </h2>
            <Link href="/contact" className="button button-white">
              Visit our showroom <ArrowRight size={17} />
            </Link>
          </div>
          <Image
            src={photos.showroom}
            alt="See trusted brands in person at our showroom"
            fill
            sizes="100vw"
          />
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <>
      <section className="section wrap about-intro">
        <div className="about-intro-image">
          <Image
            src={photos.room}
            alt="A thoughtful home interior"
            fill
            sizes="(max-width:800px) 100vw, 50vw"
          />
        </div>
        <div>
          <span className="eyebrow">A little about us</span>
          <h2>
            Good homes make
            <br />
            <i>good memories.</i>
          </h2>
          <p>
            It started with a simple belief: choosing things for home should
            feel personal. Since 2001, we’ve helped our neighbours in Pollachi
            bring home the pieces that make everyday life a little better.
          </p>
          <p>
            Today, we’re proud to be your local destination for trusted
            electronics, furniture and home essentials—with the same familiar
            faces, helpful advice and care that got us here.
          </p>
          <div className="about-sign">
            Your neighbours at SR Associates <span>Since 2001</span>
          </div>
        </div>
      </section>
      <section className="stats-section">
        <div className="wrap stats-grid">
          {[
            ["23+", "years in Pollachi"],
            ["12+", "trusted brands"],
            ["One", "friendly local team"],
            ["Every day", "here when you need us"],
          ].map(([a, b]) => (
            <div key={String(a)}>
              <strong>{a}</strong>
              <span>{b}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="why-section">
        <div className="wrap">
          <SectionHead
            eyebrow="What matters to us"
            title="The little things count."
          />
          <div className="feature-grid">
            {[
              {
                title: "Thoughtful guidance",
                text: "We listen first and help you find what fits.",
                icon: HeartHandshake,
              },
              {
                title: "Trust that lasts",
                text: "Honest advice and familiar names you can count on.",
                icon: ShieldCheck,
              },
              {
                title: "A local connection",
                text: "Proud to be part of the Pollachi community.",
                icon: Store,
              },
              {
                title: "Here for the long run",
                text: "Support and care long after you head home.",
                icon: Wrench,
              },
            ].map((f) => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">
                  <f.icon size={22} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="team-section wrap">
        <div className="team-image">
          <Image
            src={photos.team}
            alt="A welcoming local team"
            fill
            sizes="(max-width:800px) 100vw, 48vw"
          />
        </div>
        <div>
          <span className="eyebrow">Familiar faces, always</span>
          <h2>
            A real person
            <br />
            <i>is always here.</i>
          </h2>
          <p>
            Our team is part of the neighbourhood, just like you. Come in with a
            question, a plan or just a little curiosity. We’ll take it from
            there.
          </p>
          <Link href="/contact" className="text-link">
            Come meet us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

function Offers() {
  const offers = [
    {
      n: "01",
      title: "Easy EMI",
      text: "Flexible payment plans help you bring home what you need, when you need it.",
      icon: CreditCard,
    },
    {
      n: "02",
      title: "Exchange options",
      text: "Have an old appliance to replace? Ask us about current exchange offers.",
      icon: ArrowUpRight,
    },
    {
      n: "03",
      title: "Seasonal specials",
      text: "There’s always something lovely happening in store. Come see what’s new.",
      icon: Sparkles,
    },
  ];

  return (
    <>
      <section className="offer-cards-section section wrap">
        <SectionHead
          eyebrow="A little extra goodness"
          title="Good things, made easier."
          text="Offers change throughout the year. Our team can help you find the latest one for you."
        />
        <div className="offer-grid">
          {offers.map((o) => (
            <div className="offer-card" key={o.n}>
              <span className="offer-number">{o.n}</span>
              <div className="feature-icon">
                <o.icon size={22} />
              </div>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
              <Link href="/contact" className="text-link">
                Ask us about it <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="emi-section">
        <div className="wrap emi-layout">
          <div>
            <span className="eyebrow">A simpler way to plan</span>
            <h2>
              Little by little
              <br />
              <i>adds up to lovely.</i>
            </h2>
            <p>
              Ask our team about current EMI plans, finance partners and
              eligibility. We’ll walk you through the options and find what
              feels comfortable.
            </p>
            <Link href="/contact" className="button button-dark">
              Talk to our team <ArrowRight size={17} />
            </Link>
          </div>
          <div className="emi-card">
            <div className="emi-card-icon">
              <CreditCard size={22} />
            </div>
            <span className="eyebrow">Bring your questions</span>
            <h3>We’ll help with the details.</h3>
            <ul>
              {[
                "Available finance options",
                "Simple eligibility guidance",
                "What documents to bring",
                "Current exchange offers",
              ].map((t) => (
                <li key={t}>
                  <Check size={17} />
                  {t}
                </li>
              ))}
            </ul>
            <span className="emi-fineprint">
              Plans and eligibility vary by provider and product.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

function Contact() {
  return (
    <>
      <section className="section wrap contact-top">
        <SectionHead
          eyebrow="We’re just around the corner"
          title="Come on in."
          text="Pollachi, Tamil Nadu · Contact us to plan your visit"
        />
        <div className="contact-cards">
          <a href="/contact">
            <span className="contact-icon">
              <Phone />
            </span>
            <span>
              <b>Give us a call</b>
              <small>Call details to be added</small>
            </span>
            <ArrowUpRight size={17} />
          </a>
          <a href="/contact">
            <span className="contact-icon">
              <MessageCircle />
            </span>
            <span>
              <b>Send us a WhatsApp</b>
              <small>Contact details coming soon</small>
            </span>
            <ArrowUpRight size={17} />
          </a>
          <a href="https://maps.google.com/?q=SR+Associates+Pollachi">
            <span className="contact-icon">
              <MapPin />
            </span>
            <span>
              <b>Find the showroom</b>
              <small>Pollachi, Tamil Nadu</small>
            </span>
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
      <section className="contact-detail-section">
        <div className="wrap contact-detail-grid">
          <div className="map-card">
            <div className="map-art">
              <div className="map-road road-one" />
              <div className="map-road road-two" />
              <div className="map-road road-three" />
              <div className="map-pin">
                <MapPin size={24} />
              </div>
              <div className="map-label">
                SR Associates <small>Pollachi, Tamil Nadu</small>
              </div>
              <span className="map-town">POLLACHI, TAMIL NADU</span>
            </div>
            <a
              className="map-link"
              href="https://maps.google.com/?q=SR+Associates+Pollachi"
            >
              Open directions in Google Maps <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="visit-info">
            <span className="eyebrow">Plan a little visit</span>
            <h2>
              There’s a place
              <br />
              <i>for you here.</i>
            </h2>
            <p>
              Take a look around, try things out and ask us anything. We’ll put
              the kettle on.
            </p>
            <div className="hours-table">
              <div>
                <Clock3 size={18} />
                <b>Showroom hours</b>
              </div>
              <p>
                Daily <span>Hours to be confirmed</span>
              </p>
              <p>
                Holiday hours <span>Please call ahead</span>
              </p>
            </div>
            <a href="/contact" className="button button-dark">
              <Phone size={17} /> Call before you visit
            </a>
          </div>
        </div>
      </section>
      <section className="enquiry-section wrap">
        <div>
          <span className="eyebrow">A quick note, anytime</span>
          <h2>
            How can we
            <br />
            <i>help you?</i>
          </h2>
          <p>
            Add your showroom phone and WhatsApp details here so customers can
            reach your Pollachi team directly.
          </p>
        </div>
        <div className="enquiry-links">
          <a href="/contact">
            <Phone size={18} />
            <span>
              <b>Call us</b>
              <small>Call details to be added</small>
            </span>
            <ArrowRight size={17} />
          </a>
          <a href="/contact">
            <MessageCircle size={18} />
            <span>
              <b>WhatsApp details to be added</b>
              <small>WhatsApp number to be added</small>
            </span>
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </>
  );
}

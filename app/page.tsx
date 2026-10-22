import Image from "next/image";
import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(209) 947-8612";
const TEL = "tel:+12099478612";
const SMS = "sms:+12099478612";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Central%20Valley%20Pools&query_place_id=ChIJ8Ywv0bpDkYARvn1H8MVlDZg";

const reviews = [
  { name: "Linda B.", job: "Weekly pool service", text: "We've been customers for a couple of years. Our pool is over 40 years old and it looks new. Gabriel keeps it clear of all the leaves from the neighbors' trees, and Sherry's customer service and equipment care are excellent." },
  { name: "Alyssa G.", job: "Emergency cleanup", text: "It felt like an emergency when I called, and they came out the same day to clean the pool. We signed up for monthly service at a reasonable price. Knowledgeable and helpful." },
  { name: "Wendy M.", job: "Weekly maintenance", text: "Weekly maintenance turned out to be cheaper than doing it myself. When non-maintenance problems came up, they were handled quickly and expertly." },
  { name: "Rita S.", job: "Pool turnaround", text: "Sherry turned my pool around in two days. It has never looked better." },
  { name: "Marsha D.", job: "Pool service", text: "Friendly owners and service techs, timely service, help in emergencies and fair pricing." },
  { name: "Bob B.", job: "Ongoing service", text: "They've serviced and helped with our pool for several years. The best pool company in the area." },
];

const steps = [
  { t: "Call or text", d: `Reach Sherry at ${PHONE}. Tell her about your pool, its condition and what you need.` },
  { t: "We take a look", d: "For a green pool or an urgent cleanup, the team can often come out the same day to see what it needs." },
  { t: "Get it clean and balanced", d: "Debris out, water treated and balanced, filters and equipment checked. Neglected pools are usually turned around in a couple of days." },
  { t: "Stay on a weekly plan", d: "Gabriel comes by on a regular schedule so the water stays clear and problems get caught early." },
];

const faqs = [
  { q: "What areas do you serve?", a: "Central Valley Pools serves homes in Merced and the surrounding area. Call or text your address and Sherry will confirm you're on the route." },
  { q: "How much does weekly pool service cost?", a: "It depends on your pool's size and condition, so call for a quote. One longtime customer found weekly service was actually cheaper than buying chemicals and doing it herself." },
  { q: "Can you come out the same day?", a: "For real emergencies, yes, when the schedule allows. Customers mention same-day cleanups when they needed help fast." },
  { q: "My pool is green. Can you fix it?", a: "Yes. Neglected and green pools are a regular job. Sherry has turned pools around in about two days." },
  { q: "Do you repair pool equipment?", a: "Equipment upkeep is part of regular service, and customers say non-maintenance problems like equipment issues were handled quickly and expertly. Call and describe what's going on." },
  { q: "Who will be servicing my pool?", a: "Central Valley Pools is family-owned. You'll deal with Sherry, the owner, and Gabriel, the service tech, not a revolving door of strangers." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  additionalType: "https://schema.org/ProfessionalService",
  name: "Central Valley Pools",
  telephone: "+1-209-947-8612",
  areaServed: "Merced, CA",
  image: "/images/p4.jpg",
  founder: { "@type": "Person", name: "Sherry" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "11" },
  hasMap: MAPS,
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-sm font-semibold text-brand">{children}</p>;
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center gap-6 px-5 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Central Valley Pools, back to top">
            <span className="grid h-10 w-10 place-items-center rounded-[10px] bg-brand text-white"><Icon name="waves" className="h-5 w-5" /></span>
            <span className="font-heading text-xl font-extrabold text-brand-deep">Central Valley Pools</span>
          </a>
          <nav aria-label="Main" className="ml-auto hidden items-center gap-7 text-[15px] font-semibold lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <a href={TEL} className="ml-auto hidden text-lg font-bold text-brand-deep md:inline lg:ml-0">{PHONE}</a>
          <a href={TEL} className="btn btn-cta hidden md:inline-flex"><Icon name="phone" className="h-5 w-5" /> Call Now</a>
          <a href={TEL} className="btn btn-cta ml-auto !min-h-11 !px-3 md:hidden" aria-label={`Call ${PHONE}`}><Icon name="phone" className="h-5 w-5" /></a>
        </div>
      </header>

      <main id="main">
        <section id="top" className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_85%_20%,oklch(0.94_0.035_195/.7),transparent)]" aria-hidden="true" />
          <div className="mx-auto grid min-h-[calc(100dvh-72px)] max-w-[1200px] items-center gap-12 px-5 py-14 md:px-6 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-brand"><Icon name="pin" className="h-4 w-4" /> Merced, California · Family-owned</p>
              <h1 className="text-[clamp(2.25rem,5vw,3.7rem)] font-extrabold text-brand-deep">Pool Cleaning, Maintenance &amp; Repair in Merced</h1>
              <p className="mt-5 max-w-[33rem] text-lg text-muted md:text-xl">Weekly service that keeps your water clear, plus same-day help when your pool turns on you. Run by owner Sherry with service tech Gabriel, and trusted by Merced families for years.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={TEL} className="btn btn-cta text-lg"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
                <a href={SMS} className="btn btn-ghost text-lg"><Icon name="text" className="h-5 w-5" /> Text us</a>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] font-semibold hover:text-brand">
                <Stars className="h-5 w-5" /> <span>5.0 · 11 Google reviews</span><span className="text-line">|</span><span>Same-day emergency cleanups</span><span className="text-line">|</span><span>Family-owned</span>
              </a>
            </div>
            <div className="grid grid-cols-5 grid-rows-[auto_auto] gap-3">
              <div className="relative col-span-5 aspect-[16/10] overflow-hidden rounded-xl">
                <Image src="/images/p4.jpg" alt="Clean, clear backyard pool with attached spa and steps" fill priority sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
              </div>
              <div className="relative col-span-2 aspect-square overflow-hidden rounded-xl">
                <Image src="/images/p3.jpg" alt="Sparkling kidney-shaped pool with a slide" fill sizes="240px" className="object-cover" />
              </div>
              <figure className="card col-span-3 flex flex-col justify-center p-5">
                <Stars className="h-4 w-4" />
                <blockquote className="mt-2 text-[15px] leading-snug">&ldquo;Our pool is over 40 years old and it looks new.&rdquo;</blockquote>
                <figcaption className="mt-2 text-sm font-semibold text-muted">Linda B. · Weekly service</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section aria-label="Why choose Central Valley Pools" className="border-y border-line bg-white">
          <ul className="mx-auto grid max-w-[1200px] grid-cols-2 divide-line px-5 md:grid-cols-4 md:divide-x md:px-6">
            {[
              { i: "thumb", t: "5.0 on Google", s: "11 reviews" },
              { i: "users", t: "Family-owned", s: "Sherry & Gabriel" },
              { i: "bolt", t: "Same-day help", s: "For pool emergencies" },
              { i: "repeat", t: "Multi-year customers", s: "People stay with us" },
            ].map((x) => (
              <li key={x.t} className="flex items-center gap-3 py-6 md:px-6 md:first:pl-0">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-pale text-brand-deep"><Icon name={x.i} className="h-5 w-5" /></span>
                <span><span className="block font-bold">{x.t}</span><span className="block text-sm text-muted">{x.s}</span></span>
              </li>
            ))}
          </ul>
        </section>

        <section id="services" className="py-20 md:py-28">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <Eyebrow>Pool services</Eyebrow>
                <h2 className="text-3xl font-extrabold text-brand-deep md:text-[2.6rem]">Everything your pool needs, from one local team</h2>
              </div>
              <p className="text-muted">Most customers start with a cleanup or a weekly plan and stay for years. Here&rsquo;s what Central Valley Pools takes care of.</p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2">
              <article className="reveal card flex flex-col p-8 md:row-span-2">
                <span className="w-fit rounded-full bg-pale px-3 py-1 text-xs font-bold text-brand-deep">Most popular</span>
                <h3 className="mt-5 text-2xl font-bold text-brand-deep">Weekly Pool Maintenance</h3>
                <p className="mt-3 text-muted">Regular visits that keep the water clean, clear and properly balanced all year. Skimming, brushing, chemicals and a look at the equipment every time. One customer found the weekly plan costs less than doing it herself.</p>
                <div className="relative mt-6 aspect-[4/3] flex-1 overflow-hidden rounded-lg">
                  <Image src="/images/p6.jpg" alt="Freshly cleaned rectangular pool with clear turquoise water" fill sizes="(min-width:768px) 380px, 100vw" className="object-cover" />
                </div>
                <a href={TEL} className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-deep hover:text-cta">Ask about a weekly plan <Icon name="arrow" className="h-4 w-4" /></a>
              </article>
              {[
                { i: "leaf", n: "Pool Cleaning", d: "Leaves and debris skimmed and removed, including from neighbors' trees, so older pools keep looking new." },
                { i: "wrench", n: "Equipment Maintenance & Repair", d: "Pumps, filters and other equipment kept running. Problems beyond routine maintenance are handled quickly." },
                { i: "bolt", n: "Same-Day Emergency Cleanups", d: "Pool party tomorrow and the water looks bad? The team has come out the same day for urgent cleanups." },
                { i: "drop", n: "Green Pool Turnarounds", d: "Neglected or green pools brought back to clear, swimmable water, often in about two days." },
              ].map((s) => (
                <article key={s.n} className="reveal card flex flex-col p-7">
                  <span className="text-brand"><Icon name={s.i} className="h-7 w-7" /></span>
                  <h3 className="mt-4 text-lg font-bold text-brand-deep">{s.n}</h3>
                  <p className="mt-2 flex-1 text-[16px] text-muted">{s.d}</p>
                  <a href={TEL} className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-deep hover:text-cta">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-tint py-20 md:py-28">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <Eyebrow>Reviews</Eyebrow>
                <h2 className="text-3xl font-extrabold text-brand-deep md:text-[2.6rem]">Rated 5.0 from 11 Google reviews</h2>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <figure className="reveal mt-12 grid gap-8 rounded-xl border border-line bg-white p-8 md:grid-cols-[1.4fr_1fr] md:p-12">
              <div>
                <Stars className="h-6 w-6" />
                <blockquote className="mt-5 font-heading text-2xl font-bold leading-snug text-brand-deep md:text-[1.9rem]">&ldquo;{reviews[0].text}&rdquo;</blockquote>
                <figcaption className="mt-5 font-semibold text-muted">{reviews[0].name} · {reviews[0].job} · Google review</figcaption>
              </div>
              <div className="relative min-h-[240px] overflow-hidden rounded-lg">
                <Image src="/images/p2.jpg" alt="Large freeform pool with clear water in a landscaped backyard" fill sizes="(min-width:768px) 420px, 100vw" className="object-cover" />
              </div>
            </figure>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {reviews.slice(1).map((r) => (
                <figure key={r.name} className="reveal card flex flex-col p-6">
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-3 flex-1 text-[16px]">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-4 text-sm"><span className="block font-bold">{r.name}</span><span className="text-muted">{r.job}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 md:py-28">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="reveal">
              <Eyebrow>About us</Eyebrow>
              <h2 className="text-3xl font-extrabold text-brand-deep md:text-[2.6rem]">A family-owned pool company that actually picks up the phone</h2>
              <div className="mt-6 space-y-4 text-muted">
                <p>Central Valley Pools is a family-owned pool cleaning and repair service in the Merced area. Sherry runs the business and knows pools inside and out. Gabriel is the service tech customers see every week, and they mention him by name for how carefully he keeps their water clear.</p>
                <p>What people notice most is the customer service. Sherry answers questions, sorts out equipment problems and makes room in the schedule when something goes wrong. She replies to nearly every review her customers leave.</p>
                <p>That&rsquo;s why so many customers have stayed for years, from homeowners with a brand-new backyard pool to one family whose pool is more than 40 years old.</p>
              </div>
              <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {[
                  { i: "user", t: "Owner who knows pools", s: "Sherry's knowledge comes up in review after review" },
                  { i: "heart", t: "A tech who cares", s: "Gabriel's dedication keeps pools looking new" },
                  { i: "tag", t: "Fair pricing", s: "Weekly service at a reasonable price" },
                  { i: "clock", t: "Timely service", s: "Shows up when expected, fast in emergencies" },
                ].map((d) => (
                  <li key={d.t} className="flex gap-3">
                    <span className="mt-0.5 text-cta"><Icon name={d.i} className="h-5 w-5" /></span>
                    <span><span className="block font-bold text-ink">{d.t}</span><span className="block text-[15px] text-muted">{d.s}</span></span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal grid grid-cols-2 gap-3">
              <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-xl">
                <Image src="/images/p1.jpg" alt="Rectangular backyard pool with tan coping and potted plants" fill sizes="(min-width:1024px) 480px, 100vw" className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image src="/images/p5.jpg" alt="Narrow pool with clear blue water under a palm tree" fill sizes="240px" className="object-cover" />
              </div>
              <div className="flex flex-col justify-end rounded-xl bg-brand-deep p-5 text-white">
                <p className="font-heading text-4xl font-extrabold">40+</p>
                <p className="mt-1 text-[15px] text-white/85">year-old pool that a customer says looks new again</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="bg-tint py-20 md:py-28">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="reveal">
              <Eyebrow>How it works</Eyebrow>
              <h2 className="text-3xl font-extrabold text-brand-deep md:text-[2.6rem]">From cloudy to clear in four steps</h2>
              <p className="mt-4 text-muted">Whether you&rsquo;re starting fresh with weekly service or dealing with a pool emergency, here&rsquo;s what to expect.</p>
              <a href={TEL} className="btn btn-cta mt-8"><Icon name="phone" className="h-5 w-5" /> Start with a call</a>
            </div>
            <ol className="reveal divide-y divide-line border-y border-line">
              {steps.map((s, i) => (
                <li key={s.t} className="flex gap-6 py-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-white font-heading text-lg font-extrabold text-brand-deep ring-1 ring-line">{i + 1}</span>
                  <span><span className="block text-lg font-bold text-brand-deep">{s.t}</span><span className="mt-1 block text-[16px] text-muted">{s.d}</span></span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="area" className="py-20 md:py-28">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:px-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="reveal">
              <Eyebrow>Service area</Eyebrow>
              <h2 className="text-3xl font-extrabold text-brand-deep md:text-[2.6rem]">Serving Merced and the surrounding area</h2>
              <p className="mt-4 text-muted">Central Valley Pools services residential pools in and around Merced, California. Not sure if you&rsquo;re in range? Call or text your address and we&rsquo;ll let you know.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["Merced", "Merced area homes", "Weekly routes", "Emergency calls"].map((c) => (
                  <li key={c} className="rounded-full border border-line bg-white px-4 py-2 text-[15px] font-semibold">{c}</li>
                ))}
              </ul>
            </div>
            <div className="reveal overflow-hidden rounded-xl border border-line">
              <iframe title="Map of Merced, California" src="https://maps.google.com/maps?q=Merced%2C%20CA&z=11&output=embed" className="h-[360px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-line py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-5 md:px-6">
            <div className="reveal">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="text-3xl font-extrabold text-brand-deep md:text-[2.6rem]">Common questions about pool service</h2>
            </div>
            <div className="reveal mt-10 border-t border-line">
              {faqs.map((f) => (
                <details key={f.q} className="border-b border-line py-5">
                  <summary className="flex items-center justify-between gap-4 text-lg font-bold text-brand-deep">
                    {f.q}
                    <span className="plus text-brand"><Icon name="plus" className="h-5 w-5" /></span>
                  </summary>
                  <p className="mt-3 pr-8 text-[17px] text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section aria-label="Call Central Valley Pools" className="bg-brand-deep text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-6 md:py-20">
            <div>
              <h2 className="text-3xl font-extrabold md:text-[2.5rem]">Ready for a pool you can just jump into?</h2>
              <p className="mt-3 max-w-xl text-lg text-white/85">Call Sherry at {PHONE} about weekly service, a cleanup or an equipment problem.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href={TEL} className="btn btn-cta text-lg"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
              <a href={SMS} className="btn border border-white/40 text-lg hover:border-white"><Icon name="text" className="h-5 w-5" /> Text us</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white pb-24 md:pb-0">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:px-6">
          <div>
            <p className="font-heading text-xl font-extrabold text-brand-deep">Central Valley Pools</p>
            <p className="mt-3 max-w-sm text-[16px] text-muted">Family-owned pool cleaning, maintenance and repair in Merced, California. Owner Sherry, service tech Gabriel.</p>
            <a href={TEL} className="mt-4 inline-flex items-center gap-2 text-lg font-bold text-brand-deep"><Icon name="phone" className="h-5 w-5" /> {PHONE}</a>
          </div>
          <div>
            <h3 className="text-sm font-bold">Services</h3>
            <ul className="mt-3 space-y-2 text-[16px] text-muted">
              {["Weekly pool maintenance", "Pool cleaning", "Equipment maintenance & repair", "Same-day emergency cleanups", "Green pool turnarounds"].map((s) => <li key={s}><a href="#services" className="hover:text-brand">{s}</a></li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold">Contact</h3>
            <ul className="mt-3 space-y-2 text-[16px] text-muted">
              <li><a href={TEL} className="hover:text-brand">Call {PHONE}</a></li>
              <li><a href={SMS} className="hover:text-brand">Text {PHONE}</a></li>
              <li>Merced, CA area</li>
              <li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Find us on Google</a></li>
            </ul>
          </div>
        </div>
        <p className="mx-auto max-w-[1200px] border-t border-line px-5 py-5 text-sm text-muted md:px-6">&copy; {new Date().getFullYear()} Central Valley Pools. Merced, California.</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white/95 p-3 backdrop-blur md:hidden">
        <a href={TEL} className="btn btn-cta"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={SMS} className="btn btn-ghost"><Icon name="text" className="h-5 w-5" /> Text</a>
      </div>
    </>
  );
}

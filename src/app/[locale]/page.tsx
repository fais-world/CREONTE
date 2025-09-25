import ThemeToggle from "@/components/ThemeToggle";
import Button from "@/components/ui/Button";
import { getDictionary, locales, type Locale } from "@/i18n/getDictionary";
import Image from "next/image";
import React from "react";

interface Params {
  params: { locale: Locale };
}

const heroImage = "/media/hero-logo.jpg";
const storyImages = [
  "/media/story-rediscovery.jpg",
  "/media/story-manuscript-pages.jpg",
  "/media/story-cultural-legacy.jpg",
];
const premiereImage = "/media/premiere-orchestra.jpg"; // Area5
// UNESCO support gallery (Area6)
const unescoImages = [
  "/media/unesco-support-1.jpg",
  "/media/unesco-support-2.jpg",
  "/media/unesco-support-3.jpg",
  "/media/unesco-support-4.jpg",
  "/media/unesco-support-5.jpg",
  "/media/unesco-support-6.jpg",
];
// Immersion cards (Area8)
const immerseCards = [
  {
    img: "/media/immersion-organisers.jpg",
    titleUk: "Співорганізатори говорять",
    textUk: "Про ідею повернення і зусилля, яких доклали",
    titleEn: "Organisers Speak",
    textEn: "On the idea and effort behind the return",
  },
  {
    img: "/media/immersion-manuscript.jpg",
    titleUk: "Історичний контекст",
    textUk: "Сторінки рукопису, що зберігалися понад два століття",
    titleEn: "Historical Context",
    textEn: "Manuscript pages preserved for centuries",
  },
  {
    img: "/media/immersion-recognition.jpg",
    titleUk: "Визнання",
    textUk: "Матеріали ЮНЕСКО та архівні публікації",
    titleEn: "Recognition",
    textEn: "UNESCO materials & archival publications",
  },
  {
    img: "/media/immersion-legacy.jpg",
    titleUk: "Спадщина Бортнянського",
    textUk: "Вплив опери на світову культуру й ідентичність",
    titleEn: "Bortniansky Legacy",
    textEn: "Influence on global culture & identity",
  },
  {
    img: "/media/immersion-invitation.jpg",
    titleUk: "Запрошення до співпраці",
    textUk: "Слухайте фрагменти онлайн",
    titleEn: "Invitation to Collaborate",
    textEn: "Listen to fragments online",
  },
  {
    img: "/media/immersion-media.jpg",
    titleUk: "Зустріч з мистецтвом",
    textUk: "Відео з премʼєри та фото",
    titleEn: "Meet the Art",
    textEn: "Premiere video & photos",
  },
];
// People who revived (Area12 subset) – using the first three; later can expand
const revivalPeople = [
  {
    img: "/media/revival-shumilina.jpg",
    nameUk: "Ольга Шуміліна",
    textUk: "Музикознавиця, віднайшла рукопис «Креонте» у Лісабоні",
    nameEn: "Olha Shumilina",
    textEn: "Musicologist who found the manuscript in Lisbon",
  },
  {
    img: "/media/revival-makarenko.jpg",
    nameUk: "Герман Макаренко",
    textUk: "Диригент-постановник, Артист ЮНЕСКО в імʼя миру",
    nameEn: "Herman Makarenko",
    textEn: "Conductor of the world premiere",
  },
  {
    img: "/media/revival-ensemble.jpg",
    nameUk: "Колектив музикантів",
    textUk: "Обʼєднані для культурного відродження",
    nameEn: "Musicians Collective",
    textEn: "United for cultural revival",
  },
];
// Performers (Area9) with correct image mapping & condensed descriptions
const performersData = [
  {
    img: "/media/performer-bortnyk.jpg",
    nameUk: "Сергій Бортник",
    roleUk: "Креонт",
    descUk: "Соліст Нац. філармонії, лауреат конкурсів",
    nameEn: "Sergiy Bortnyk",
    roleEn: "CREONTE",
    descEn: "Soloist, laureate",
  },
  {
    img: "/media/performer-fomichova.jpg",
    nameUk: "Ольга Фомічова",
    roleUk: "Антігона",
    descUk: "Солістка Нац. опери України",
    nameEn: "Olha Fomichova",
    roleEn: "Antigona",
    descEn: "National Opera soloist",
  },
  {
    img: "/media/performer-kotok.jpg",
    nameUk: "Данило Коток",
    roleUk: "Емон",
    descUk: "Соліст оперної студії",
    nameEn: "Danylo Kotok",
    roleEn: "Emon",
    descEn: "Opera studio soloist",
  },
  {
    img: "/media/performer-pashchuk.jpg",
    nameUk: "Станіслав Пащук",
    roleUk: "Адраст",
    descUk: "Лауреат міжнародних конкурсів",
    nameEn: "Stanislav Pashchuk",
    roleEn: "Adrast",
    descEn: "Prize-winning baritone",
  },
  {
    img: "/media/performer-bilokiz.jpg",
    nameUk: "Маргарита Білокіз",
    roleUk: "Ісмена",
    descUk: "Мецо-сопрано",
    nameEn: "Marharyta Bilokiz",
    roleEn: "Ismena",
    descEn: "Mezzo-soprano",
  },
  {
    img: "/media/performer-shadrina-lychak.jpg",
    nameUk: "Ольга Шадріна-Личак",
    roleUk: "Клавесин",
    descUk: "Чембало, канд. мистецтвозн.",
    nameEn: "Olha Shadrina-Lychak",
    roleEn: "Harpsichord",
    descEn: "Harpsichord, musicology PhD",
  },
  {
    img: "/media/performer-dumka-choir.jpg",
    nameUk: "КАПЕЛА «ДУМКА»",
    roleUk: "Хор",
    descUk: "Нац. заслужена академічна капела",
    nameEn: "Dumka Choir",
    roleEn: "Choir",
    descEn: "National academic choir",
  },
  {
    img: "/media/performer-presidential-orchestra.jpg",
    nameUk: "Нац. президентський оркестр",
    roleUk: "Оркестр",
    descUk: "Військово-музичний колектив",
    nameEn: "National Presidential Orchestra",
    roleEn: "Orchestra",
    descEn: "Military-musical ensemble",
  },
  {
    img: "/media/performer-makarenko.jpg",
    nameUk: "Герман Макаренко",
    roleUk: "Диригент",
    descUk: "Народний артист України",
    nameEn: "Herman Makarenko",
    roleEn: "Conductor",
    descEn: "People’s Artist of Ukraine",
  },
];

const partners = [
  "UNESCO",
  "National Opera",
  'Capella "Dumka"',
  "National Presidential Orchestra",
];

const Section = ({
  id,
  children,
  className = "",
}: React.PropsWithChildren<{ id?: string; className?: string }>) => (
  <section id={id} className={"scroll-mt-24 py-16 px-4 md:px-8 " + className}>
    {children}
  </section>
);
export function generateStaticParams() {
  return locales.map((l: Locale) => ({ locale: l }));
}
export default async function LocalizedPage(props: any) {
  const p = await props.params; // handle potential promise wrapper
  const locale: Locale = p.locale ?? "uk";
  const dict = getDictionary(locale);
  return (
    <div className="font-sans bg-white dark:bg-neutral-950 dark:text-neutral-100">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto flex items-center gap-6 px-4 h-14 text-sm">
          <a
            href={`/${locale}#hero`}
            className="font-semibold tracking-wide font-display text-lg"
          >
            CREONTE
          </a>
          <div className="hidden md:flex gap-4 opacity-90">
            <a href="#story" className="hover:underline">
              {dict.nav.history}
            </a>
            <a href="#premiere" className="hover:underline">
              {dict.nav.premiere}
            </a>
            <a href="#performers" className="hover:underline">
              {dict.nav.performers}
            </a>
            <a href="#partners" className="hover:underline">
              {dict.nav.partners}
            </a>
            <a href="#future" className="hover:underline">
              {dict.nav.future}
            </a>
            <a href="#contact" className="hover:underline">
              {dict.nav.contact}
            </a>
          </div>
          <div className="ml-auto flex gap-2 items-center">
            {locales.map((l: Locale) => (
              <a
                key={l}
                href={`/${l}#hero`}
                className={
                  l === locale
                    ? "font-semibold underline underline-offset-4"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                }
              >
                {l.toUpperCase()}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <Section
        id="hero"
        className="pt-32 md:pt-40 bg-gradient-to-b from-neutral-50 to-white"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              {dict.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8">
              {dict.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button>{dict.hero.ctas.listen}</Button>
              <Button variant="outline">{dict.hero.ctas.invite}</Button>
              <Button variant="ghost">{dict.hero.ctas.partner}</Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center max-w-[420px] mx-auto aspect-square">
            <Image
              src={heroImage}
              alt="CREONTE"
              width={800}
              height={800}
              className="w-full h-full object-contain rounded-lg shadow-soft ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white/40"
              priority
            />
          </div>
        </div>
      </Section>

      <Section id="story" className="bg-neutral-50">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          {dict.story.heading}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dict.story.cards.map((s: any, i: number) => (
            <div
              key={s.title}
              className="group border border-neutral-200 rounded-lg p-4 flex flex-col gap-4 bg-white hover:shadow-sm transition"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-md bg-neutral-100">
                <Image
                  src={storyImages[i]}
                  alt={s.title}
                  width={600}
                  height={450}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <div
        className="overflow-hidden py-4 border-y border-neutral-200 bg-neutral-100"
        aria-label="Timeline marquee"
      >
        <div
          className="flex gap-16 animate-[marquee_35s_linear_infinite] whitespace-nowrap px-8 text-sm tracking-wide text-neutral-700"
          role="list"
        >
          {[...Array(4)].flatMap((_, idx) =>
            dict.timeline.map((t: string) => (
              <span role="listitem" key={t + idx}>
                {t}
              </span>
            ))
          )}
        </div>
      </div>

      <Section id="premiere">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {dict.premiere.title}
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              {dict.premiere.text}
            </p>
            <Button variant="outline">{dict.premiere.gallery}</Button>
          </div>
          <div>
            <Image
              src={premiereImage}
              alt={dict.premiere.title}
              width={800}
              height={600}
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-soft ring-1 ring-neutral-200 dark:ring-neutral-800"
            />
          </div>
        </div>
      </Section>

      {/* (Legacy temporary gallery & team sections removed; replaced by UNESCO gallery, performers and revival team sections) */}

      <Section id="unesco" className="bg-neutral-50">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          {locale === "uk"
            ? "Перша опера, відроджена за підтримки ЮНЕСКО"
            : "First opera revived with UNESCO support"}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {unescoImages.map((src) => (
            <div
              key={src}
              className="relative aspect-[4/3] rounded-lg overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 bg-neutral-100"
            >
              <Image
                src={src}
                alt="UNESCO support"
                fill
                sizes="(max-width:768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline">
            {locale === "uk" ? "До Галереї" : "Open Gallery"}
          </Button>
        </div>
      </Section>

      <Section id="performers" className="bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          {locale === "uk" ? "Виконавці" : "Performers"}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {performersData.map((p) => (
            <div
              key={p.img + p.nameUk}
              className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 flex flex-col gap-3"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md ring-1 ring-neutral-200 dark:ring-neutral-700 bg-neutral-100">
                <Image
                  src={p.img}
                  alt={locale === "uk" ? p.nameUk : p.nameEn}
                  fill
                  sizes="(max-width:768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base">
                  {locale === "uk" ? p.nameUk : p.nameEn}
                </h3>
                <div className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400 mb-1">
                  {locale === "uk" ? p.roleUk : p.roleEn}
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-snug">
                  {locale === "uk" ? p.descUk : p.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-neutral-50 to-white">
        <blockquote className="max-w-3xl mx-auto text-center text-xl md:text-2xl font-light leading-relaxed text-neutral-800">
          “{dict.quote.text}”
          <footer className="mt-6 text-sm text-neutral-500">
            — {dict.quote.source}
          </footer>
        </blockquote>
      </Section>

      <Section id="press-quote" className="bg-neutral-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[3/2] rounded-lg overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 bg-neutral-100">
            <Image
              src="/media/press-coverage-1.jpg"
              alt="Press coverage"
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-lg md:text-xl font-light leading-relaxed mb-4">
              {locale === "uk"
                ? "Відродження «Креонте» не залишилося непоміченим. Про відкриття та премʼєру писали українські й міжнародні медіа."
                : "The revival of “CREONTE” drew national and international media attention."}
            </p>
            <blockquote className="border-l-4 pl-4 text-neutral-700 dark:text-neutral-300 italic mb-2">
              {dict.quote.text}
            </blockquote>
            <div className="text-sm text-neutral-500">UNESCO</div>
          </div>
        </div>
      </Section>

      <Section id="partners" className="bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          {locale === "uk" ? "Партнери" : "Partners"}
        </h2>
        <div className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto">
          {partners.map((pt) => (
            <div
              key={pt}
              className="px-4 py-2 border border-neutral-200 dark:border-neutral-700 rounded-full text-sm bg-neutral-50 dark:bg-neutral-800/60"
            >
              {pt}
            </div>
          ))}
        </div>
      </Section>

      <Section id="revival-team" className="bg-neutral-50">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          {locale === "uk"
            ? "Люди, які повернули «Креонте»"
            : "People Who Revived “CREONTE”"}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {revivalPeople.map((p) => (
            <div
              key={p.img}
              className="flex flex-col gap-3 items-center text-center p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
            >
              <div className="relative w-40 h-40 rounded-full overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-700 bg-neutral-100">
                <Image
                  src={p.img}
                  alt={locale === "uk" ? p.nameUk : p.nameEn}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-sm">
                  {locale === "uk" ? p.nameUk : p.nameEn}
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-[14rem]">
                  {locale === "uk" ? p.textUk : p.textEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="future">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          {dict.future.heading}
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto list-disc pl-5 text-neutral-700">
          {dict.future.items.map((f: string) => (
            <li key={f} className="leading-relaxed">
              {f}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-neutral-100" id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            {dict.final.title}
          </h2>
          <p className="text-neutral-600 mb-8">{dict.final.text}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button>{dict.final.listen}</Button>
            <Button variant="outline">{dict.final.invite}</Button>
            <Button variant="ghost">{dict.final.partner}</Button>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-center text-xs text-neutral-500 border-t border-neutral-200 bg-white/70">
        {dict.footer}
      </footer>
    </div>
  );
}

import ThemeToggle from "@/components/ThemeToggle";
import Button from "@/components/ui/Button";
import {
  heroImage,
  mediaImages,
  premiereImage,
  storyImages,
  unescoImages,
} from "@/data/media";
import {
  immerseCards,
  partners,
  performersData,
  revivalPeople,
} from "@/data/people";
import { getDictionary, locales, type Locale } from "@/i18n/getDictionary";
import Image from "next/image";
import React from "react";

interface Params {
  params: { locale: Locale };
}

const Section = ({
  id,
  children,
  className = "",
}: React.PropsWithChildren<{ id?: string; className?: string }>) => (
  <section
    id={id}
    className={
      "scroll-mt-24 py-20 md:py-24 px-4 md:px-8 [&_:last-child]:mb-0 " +
      className
    }
  >
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
        className="pt-32 md:pt-40 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col justify-center min-h-[400px] md:min-h-[480px]">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              {dict.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 mb-8">
              {dict.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button>{dict.hero.ctas.listen}</Button>
              <Button variant="outline">{dict.hero.ctas.invite}</Button>
              <Button variant="ghost">{dict.hero.ctas.partner}</Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-full max-w-[400px] md:max-w-[450px] mx-auto h-[400px] md:h-[480px]">
            <Image
              src={heroImage}
              alt="CREONTE"
              width={600}
              height={600}
              className="w-full h-full object-contain rounded-lg shadow-soft ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white/40 dark:bg-neutral-800/40"
              priority
              sizes="(max-width: 768px) 400px, 450px"
            />
          </div>
        </div>
      </Section>

      <Section id="story" className="bg-neutral-50 dark:bg-neutral-900/60">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          {dict.story.heading}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dict.story.cards.map((s: any, i: number) => (
            <div
              key={s.title}
              className="group border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 flex flex-col gap-4 bg-white dark:bg-neutral-900 hover:shadow-sm transition"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                <Image
                  src={storyImages[i]}
                  alt={s.title}
                  width={600}
                  height={450}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform"
                />
              </div>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
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

      <Section id="premiere" className="bg-white dark:bg-neutral-950">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {dict.premiere.title}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
              {dict.premiere.text}
            </p>
            <Button variant="outline" disabled title="Coming soon">
              {dict.premiere.gallery}
            </Button>
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

      <Section id="unesco" className="bg-neutral-50 dark:bg-neutral-900/60">
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

      <Section id="performers" className="bg-white dark:bg-neutral-950">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          {locale === "uk" ? "Виконавці" : "Performers"}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                <p className="text-[11px] md:text-xs text-neutral-600 dark:text-neutral-400 leading-snug whitespace-pre-line">
                  {locale === "uk" ? p.descUk : p.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Removed intermediate navigation pill */}

      {/* Spotlight / Area7 */}
      <Section id="spotlight" className="bg-neutral-50 dark:bg-neutral-900/60">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-lg overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 bg-neutral-100 aspect-[4/3]">
              <Image
                src="/media/performer-makarenko.jpg"
                alt={
                  locale === "uk"
                    ? dict.spotlight.cardTitle
                    : dict.spotlight.cardTitle
                }
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <div className="font-semibold text-lg mb-1">
                {dict.spotlight.cardTitle}
              </div>
              <div className="text-sm text-neutral-500 mb-2">
                {dict.spotlight.cardSubtitle}
              </div>
              <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                {dict.spotlight.cardText}
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
              {dict.spotlight.heading}
            </h2>
            <div className="space-y-5 text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              {dict.spotlight.body &&
                dict.spotlight.body.map((para: string) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Removed intermediate navigation pill */}

      {/* Immersion / Area8 */}
      <Section id="immersion" className="bg-white dark:bg-neutral-950">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          {locale === "uk" ? dict.immersion.heading : dict.immersion.heading}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {immerseCards.map((c) => (
            <a
              key={c.img}
              href="#"
              className="group relative rounded-lg overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 bg-neutral-100 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={c.img}
                  alt={locale === "uk" ? c.titleUk : c.titleEn}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 flex flex-col gap-2 bg-white dark:bg-neutral-900 flex-1">
                <div className="font-medium text-sm md:text-base">
                  {locale === "uk" ? c.titleUk : c.titleEn}
                </div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400 leading-snug">
                  {locale === "uk" ? c.textUk : c.textEn}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="outline">
            {locale === "uk" ? dict.immersion.cta : dict.immersion.cta}
          </Button>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
        <blockquote className="max-w-3xl mx-auto text-center text-xl md:text-2xl font-light leading-relaxed text-neutral-800">
          “{dict.quote.text}”
          <footer className="mt-6 text-sm text-neutral-500">
            — {dict.quote.source}
          </footer>
        </blockquote>
      </Section>

      <Section
        id="press-quote"
        className="bg-neutral-50 dark:bg-neutral-900/60"
      >
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

      <Section id="partners" className="bg-white dark:bg-neutral-950">
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

      <Section id="gratitude" className="bg-neutral-50 dark:bg-neutral-900/60">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 md:p-8 border border-neutral-200 dark:border-neutral-700">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 leading-tight">
                {dict.gratitude.heading}
              </h2>
              <h3 className="text-lg md:text-xl font-medium mb-6 text-neutral-700 dark:text-neutral-300">
                {dict.gratitude.subtitle}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-neutral-600 dark:text-neutral-400 mb-6">
                {dict.gratitude.text1}
              </p>
              <p className="text-sm md:text-base leading-relaxed text-neutral-600 dark:text-neutral-400 mb-8">
                {dict.gratitude.text2}
              </p>
              <Button className="w-full md:w-auto">{dict.gratitude.cta}</Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 bg-neutral-100 dark:bg-neutral-800">
              <Image
                src="/media/photo-a11-001.jpg"
                alt={dict.gratitude.heading}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section id="theatrical" className="bg-white dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="bg-neutral-50 dark:bg-neutral-900/60 rounded-lg p-6 md:p-8 border border-neutral-200 dark:border-neutral-700">
              <h2 className="text-2xl md:text-3xl font-semibold text-center">
                {dict.theatrical.title}
              </h2>
            </div>
          </div>
          <div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 bg-neutral-100 dark:bg-neutral-800">
              <Image
                src="/media/photo-a13-001.jpg"
                alt={dict.theatrical.title}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Media Press Kit Section */}
      <Section id="media" className="bg-neutral-50 dark:bg-neutral-900/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900 dark:text-white leading-tight whitespace-pre-line">
              {dict.media.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
              {dict.media.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {dict.media.items.map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={mediaImages[index]}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-base font-semibold rounded-lg transition-all duration-300 text-center inline-block"
            >
              {dict.media.cta.presskit}
            </a>
            <a
              href="#"
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 text-base font-semibold rounded-lg transition-all duration-300 text-center inline-block"
            >
              {dict.media.cta.contacts}
            </a>
          </div>
        </div>
      </Section>

      <Section
        id="revival-team"
        className="bg-neutral-50 dark:bg-neutral-900/60"
      >
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

      <Section id="future" className="bg-white dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 bg-neutral-100 dark:bg-neutral-800">
              <Image
                src="/media/europe-map.jpg"
                alt={dict.future.heading}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              {dict.future.heading}
            </h2>
            <ul className="grid gap-4 list-disc pl-5 text-neutral-700 dark:text-neutral-300">
              {dict.future.items.map((f: string) => (
                <li key={f} className="leading-relaxed">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-neutral-100 dark:bg-neutral-900/60" id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            {dict.final.title}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
            {dict.final.text}
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 mb-8 font-medium">
            {dict.final.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button>{dict.final.listen}</Button>
            <Button variant="outline">{dict.final.invite}</Button>
            <Button variant="ghost">{dict.final.partner}</Button>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-center text-xs text-neutral-500 border-t border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/70 space-y-2">
        <div>{dict.footer}</div>
        { (dict as any).link && (
          <div className="text-[11px] tracking-wide">
            {(dict as any).link.prefix} {" "}
            <a
              href={(dict as any).link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline text-neutral-700 dark:text-neutral-300"
            >
              {(dict as any).link.label}
            </a>
            {(dict as any).link.suffix}
          </div>
        )}
      </footer>
      {/* Floating Back To Top */}
      <a
        href="#hero"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center h-10 w-10 rounded-full bg-neutral-900 text-white dark:bg-neutral-200 dark:text-neutral-900 shadow-lg ring-1 ring-neutral-300 dark:ring-neutral-700 hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-500"
        aria-label={locale === "uk" ? "Назад нагору" : "Back to top"}
      >
        ↑
      </a>
    </div>
  );
}

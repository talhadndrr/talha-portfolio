"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  Mail,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";

const skills = [
  {
    name: "OOP",
    description: "Sınıflar, nesneler, kalıtım, kapsülleme ve polimorfizm.",
  },
  {
    name: "HTML5",
    description: "Semantik, erişilebilir ve modern web sayfası yapıları.",
  },
  {
    name: "CSS",
    description: "Responsive tasarım, Flexbox, Grid ve modern arayüz stilleri.",
  },
  {
    name: "JavaScript",
    description: "DOM, event yapıları ve dinamik web uygulamaları.",
  },
  {
    name: "PHP",
    description: "Sunucu taraflı web geliştirme ve form/veri işleme.",
  },
  {
    name: "Python",
    description: "Programlama mantığı, veri işleme ve otomasyon çalışmaları.",
  },
  {
    name: "C",
    description: "Temel programlama, algoritma ve bellek mantığı.",
  },
  {
    name: "C#",
    description: "OOP tabanlı uygulama geliştirme ve .NET temelleri.",
  },
  {
    name: "C++",
    description: "Algoritmalar, nesne yönelimli programlama ve veri yapıları.",
  },
  {
    name: "Microsoft SQL Server",
    description: "SQL sorguları, tablo ilişkileri ve veritabanı yönetimi.",
  },
];

const projects = [
  {
    number: "01",
    title: "Artı Reklam",
    category: "Kurumsal Web Sitesi",
    description:
      "Reklam, tabela ve kurumsal tanıtım hizmetlerini modern bir tasarımla sergileyen, hızlı ve mobil uyumlu kurumsal web sitesi.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://artireklam-site.vercel.app/",
    image: "/arti-reklam-proje.webp",
  },
  {
    number: "02",
    title: "Bacanaklar Lokantası",
    category: "Restoran Web Sitesi",
    description:
      "Bacanaklar Lokantası için hazırladığım; dijital menü, çalışma saatleri, konum, iletişim ve kullanıcı dostu işletme bilgilerini bir araya getiren mobil uyumlu restoran web sitesi.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://bacanaklarlokantasi.vercel.app/",
    image: "/bacanaklar-proje.webp",
  },
];

const navigation = [
  { label: "Hakkımda", href: "#about" },
  { label: "Deneyim", href: "#experience" },
  { label: "Yetenekler", href: "#skills" },
  { label: "Projeler", href: "#projects" },
  { label: "İletişim", href: "#contact" },
];

function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060608] text-white selection:bg-violet-500 selection:text-white">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[100] h-1 w-full origin-left bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
      />

      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]" />
      <div className="pointer-events-none fixed -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-violet-700/15 blur-[130px]" />
      <div className="pointer-events-none fixed -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-blue-700/15 blur-[130px]" />

      <nav className="fixed left-0 top-0 z-50 w-full px-4 pt-4 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/60 px-5 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl md:px-7">
          <a href="#home" className="flex items-center gap-3 font-semibold">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
              TD
            </span>
            <span className="hidden sm:block">Talha Dündar</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-400 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:border-violet-400/60 hover:bg-violet-500/10"
          >
            İletişim
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="relative flex min-h-screen items-center px-5 pb-16 pt-32 md:px-8"
      >
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
          >
            <Sparkles className="h-4 w-4" />
            Yeni projeler geliştirmeye devam ediyorum
          </motion.div>

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.4em] text-slate-500">
            Yazılım Geliştirici · Web & Software
          </p>

          <h1 className="max-w-6xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            <motion.span
              initial={{ opacity: 0, y: 65 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Dijital fikirleri
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 65 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
            >
              deneyime
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 65 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              dönüştürüyorum.
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-12 flex flex-col justify-between gap-9 md:flex-row md:items-end"
          >
            <p className="max-w-xl text-lg leading-8 text-slate-400 md:text-xl">
              Merhaba, ben Hüseyin Talha Dündar. Web geliştirme, yazılım geliştirme
ve veritabanı teknolojileri üzerine çalışan; modern, kullanışlı ve
ölçeklenebilir dijital çözümler üretmeye odaklanan bir geliştiriciyim.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
               className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:bg-violet-500/10"
              >
                Projeleri keşfet
                <ArrowDown className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/h%C3%BCseyin-talha-d%C3%BCndar-71a036337/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:bg-violet-500/10"
              >
                LinkedIn
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="about"
        className="relative border-t border-white/10 px-5 py-28 md:px-8 md:py-36"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <div>
              <span className="font-mono text-sm text-violet-400">01 /</span>
              <p className="mt-3 text-sm uppercase tracking-[0.35em] text-slate-500">
                Hakkımda
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-6xl">
                Yazılımı, tasarımı ve iş süreçlerini bir araya getiriyorum.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 grid gap-8 text-lg leading-8 text-slate-400 md:grid-cols-2">
                <p>
                  Yönetim Bilişim Sistemleri alanında eğitim alırken web
                  geliştirme, nesne yönelimli programlama, veritabanı sistemleri
                  ve yazılım teknolojileri üzerine çalışmalar yapıyorum.
                </p>

                <p>
                  HTML5, CSS, JavaScript, PHP, Python, C, C# ve C++ gibi
                  teknolojileri kullanarak farklı yazılım projeleri geliştiriyor
                  ve kendimi sürekli geliştirmeye devam ediyorum.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-14 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                  <p className="text-3xl font-semibold">1+</p>
                  <p className="mt-2 text-sm text-slate-500">Yayınlanan proje</p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                  <p className="text-3xl font-semibold">10+</p>
                  <p className="mt-2 text-sm text-slate-500">Yazılım teknolojisi</p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                  <p className="text-3xl font-semibold">∞</p>
                  <p className="mt-2 text-sm text-slate-500">Öğrenme isteği</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
  id="experience"
  className="relative border-t border-white/10 px-5 py-28 md:px-8 md:py-36"
>
  <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
    <Reveal>
      <div>
        <span className="font-mono text-sm text-violet-400">02 /</span>

        <p className="mt-3 text-sm uppercase tracking-[0.35em] text-slate-500">
          Deneyim
        </p>
      </div>
    </Reveal>

    <Reveal delay={0.1}>
      <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-500/40 md:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-600/15 blur-[80px]" />

        <div className="relative">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                <BriefcaseBusiness className="h-4 w-4" />
                Staj Deneyimi
              </div>

              <h3 className="mt-6 text-3xl font-semibold md:text-5xl">
                Bilgi İşlem Stajyeri
              </h3>

              <p className="mt-3 text-xl text-slate-400">
                Afyonkarahisar Valiliği
              </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <Code2 className="h-7 w-7 text-violet-400" />
            </div>
          </div>

          <p className="mt-9 max-w-3xl border-t border-white/10 pt-8 text-lg leading-8 text-slate-400">
            Bilgi işlem biriminde kurumsal bilişim altyapısı, teknik destek
            süreçleri ve günlük sistem operasyonlarını gözlemleyerek uygulamalı
            deneyim kazandım.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="font-medium text-white">
                Teknik destek süreçleri
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Kullanıcıların karşılaştığı teknik problemlerin çözüm
                süreçlerini ve destek akışlarını gözlemledim.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="font-medium text-white">
                Sistem ve altyapı
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Kurumsal bilişim altyapısında kullanılan sistemlerin çalışma
                yapısını ve temel operasyonlarını inceledim.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="font-medium text-white">
                Kurumsal BT deneyimi
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Kamu kurumunda bilgi işlem biriminin çalışma düzenini ve
                teknoloji süreçlerinin kurumsal yapıdaki rolünü deneyimledim.
              </p>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  </div>
</section>

      <section
        id="skills"
        className="relative border-y border-white/10 bg-white/[0.015] px-5 py-28 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center">
              <span className="font-mono text-sm text-violet-400">03 /</span>
              <p className="mt-3 text-sm uppercase tracking-[0.35em] text-slate-500">
                Yetenekler
              </p>
              <h2 className="mt-5 text-4xl font-medium md:text-6xl">
                Kullandığım teknolojiler
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.article
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(index * 0.04, 0.35),
                }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-colors duration-300 hover:border-violet-400/40 hover:bg-violet-500/[0.07]"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {skill.description}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-400">
                    {skill.name === "Microsoft SQL Server" ? (
                      <Database className="h-5 w-5" />
                    ) : (
                      <Code2 className="h-5 w-5" />
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
  id="projects"
  className="relative px-5 py-28 md:px-8 md:py-36"
>
  <div className="mx-auto max-w-7xl">
    <Reveal>
      <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
        <div>
          <span className="font-mono text-sm text-violet-400">04 /</span>

          <p className="mt-3 text-sm uppercase tracking-[0.35em] text-slate-500">
            Seçili çalışmalar
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-tight md:text-7xl">
            Geliştirdiğim projeler
          </h2>
        </div>

        <p className="max-w-sm leading-7 text-slate-400">
          Gerçek ihtiyaçlara yönelik geliştirdiğim, tasarım ve kullanıcı
          deneyimini birlikte ele alan web projeleri.
        </p>
      </div>
    </Reveal>

    <div className="mt-16 grid gap-7 lg:grid-cols-2">
      {projects.map((project, index) => (
        <motion.article
          key={project.number}
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.65,
            delay: index * 0.1,
          }}
          whileHover={{ y: -8 }}
          className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-black/20 transition-colors hover:border-violet-500/40"
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-black">
              <Image
                src={project.image}
                alt={`${project.title} web sitesi ana sayfa görünümü`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />

              <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/15 bg-black/65 px-3 py-1.5 font-mono text-xs text-white backdrop-blur-md">
                  {project.number}
                </span>

                <span className="rounded-full border border-white/15 bg-black/65 px-3 py-1.5 text-xs text-white/80 backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5">
                <h3 className="max-w-[80%] text-3xl font-semibold text-white md:text-4xl">
                  {project.title}
                </h3>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md transition duration-300 group-hover:rotate-45 group-hover:border-violet-400/60">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          </a>

          <div className="p-5 md:p-7">
            <p className="leading-7 text-slate-400">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-7 border-t border-white/10 pt-5">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between font-medium text-white transition hover:text-violet-300"
              >
                <span>Canlı projeyi incele</span>

                <ArrowUpRight className="h-5 w-5 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </motion.article>
      ))}
    </div>

    <Reveal delay={0.15}>
      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/Talhadndrr"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-6 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white"
        >
          <Code2 className="h-5 w-5 text-violet-400" />
          Diğer çalışmalarımı GitHub&apos;da incele
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </Reveal>
  </div>
</section>

      <section id="contact" className="relative px-5 pb-10 md:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl md:p-16">
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-violet-600/25 blur-[110px]" />

          <div className="relative">
            <Reveal>
              <span className="font-mono text-sm text-violet-400">05 /</span>

              <h2 className="mt-6 max-w-5xl text-5xl font-medium leading-[0.95] tracking-tight md:text-8xl">
                Birlikte güzel bir proje geliştirelim.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                Proje fikirleri, iş birlikleri ve yazılım çalışmaları için
                benimle iletişime geçebilirsin.
              </p>

              <div className="mt-12 flex flex-wrap gap-4">
               <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=talhadiletisim@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-3 rounded-full border border-violet-400/30 bg-violet-500/10 px-7 py-4 font-semibold text-violet-100 transition duration-300 hover:-translate-y-1 hover:border-violet-400/70 hover:bg-violet-500/20"
>
  <Mail className="h-5 w-5 text-violet-300" />
  E-posta gönder
</a>

                <a
                  href="https://github.com/Talhadndrr"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:bg-violet-500/10"
                >
                  <Code2 className="h-5 w-5" />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/h%C3%BCseyin-talha-d%C3%BCndar-71a036337/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/10"
                >
                  <ExternalLink className="h-5 w-5" />
                  LinkedIn
                </a>
              </div>

              <div className="mt-12 border-t border-white/10 pt-8">
                <a
                  href="mailto:talhadiletisim@gmail.com"
                  className="text-lg text-slate-400 transition hover:text-violet-300"
                >
                  talhadiletisim@gmail.com
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <footer className="mx-auto max-w-7xl px-3 py-10">
  <div className="flex flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
    <div>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
          TD
        </span>

        <div>
          <p className="font-semibold text-white">
            Hüseyin Talha Dündar
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Yazılım Geliştirici
          </p>
        </div>
      </div>

      <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
        Web geliştirme, yazılım projeleri ve veritabanı teknolojileri üzerine
        çalışan; modern ve kullanıcı odaklı dijital çözümler geliştiren bir
        yazılım geliştirici.
      </p>
    </div>

    <div className="flex flex-col gap-5 md:items-end">
      <div className="flex flex-wrap gap-3">
        <a
          href="https://github.com/Talhadndrr"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-slate-300 transition hover:-translate-y-1 hover:border-violet-400/50 hover:text-white"
        >
          <Code2 className="h-4 w-4 text-violet-400" />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/h%C3%BCseyin-talha-d%C3%BCndar-71a036337/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-slate-300 transition hover:-translate-y-1 hover:border-blue-400/50 hover:text-white"
        >
          <ExternalLink className="h-4 w-4 text-blue-400" />
          LinkedIn
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=talhadiletisim@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-slate-300 transition hover:-translate-y-1 hover:border-violet-400/50 hover:text-white"
        >
          <Mail className="h-4 w-4 text-violet-400" />
          E-posta
        </a>
      </div>

      <div className="flex flex-col gap-2 text-sm text-slate-600 md:items-end">
        <p>© 2026 Hüseyin Talha Dündar. Tüm hakları saklıdır.</p>
        <p>Next.js · TypeScript · Tailwind CSS · Motion</p>
      </div>
    </div>
  </div>
</footer>
      </section>
    </main>
  );
}

"use client";

import { motion } from "motion/react";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#060608] px-6 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="pointer-events-none absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-violet-700/20 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-cyan-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm uppercase tracking-[0.35em] text-violet-400"
        >
          Hata 404
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 text-6xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl md:text-8xl"
        >
          Bu sayfa
          <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            bulunamadı.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400"
        >
          Aradığın sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
          Ana sayfaya dönerek devam edebilirsin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full border border-violet-400/30 bg-violet-500/10 px-7 py-4 font-semibold text-violet-100 transition duration-300 hover:-translate-y-1 hover:border-violet-400/70 hover:bg-violet-500/20"
          >
            <Home className="h-5 w-5" />
            Ana sayfaya dön
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-7 py-4 font-semibold text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
            Geri git
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-sm text-slate-600"
        >
          talhadundar.vercel.app
        </motion.div>
      </div>
    </main>
  );
}
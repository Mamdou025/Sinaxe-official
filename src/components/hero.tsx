"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GradientMesh } from "./gradient-mesh";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-paper px-6 pb-28 pt-40">
      <div aria-hidden className="bg-grid-lines absolute inset-0 -z-20" />
      <div
        aria-hidden
        className="bg-logo-checker absolute inset-x-0 top-0 -z-20 h-[480px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      {/* Architectural photo, kept deliberately quiet: low opacity, grayscale,
          masked to fade out before it reaches the headline column on the
          left — texture and gravitas, not a loud photo background. */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 -z-20 w-[60%] overflow-hidden [mask-image:linear-gradient(to_left,black_20%,transparent_85%)]"
      >
        <Image
          src="/hero/hero-building.jpg"
          alt=""
          fill
          className="object-cover opacity-50 grayscale"
        />
      </div>

      <GradientMesh className="right-[-10%] top-[-20%] h-[720px] w-[720px]" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="mx-auto max-w-3xl"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 border border-border bg-surface px-4 py-1.5 text-xs font-medium text-ink-soft"
        >
          AI Project Tool
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-7 text-balance text-5xl font-light leading-[1.05] tracking-tight text-ink sm:text-6xl"
        >
          Turn tax workflows into{" "}
          <span className="text-accent">structured, auditable</span>{" "}
          systems.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance text-lg text-muted-foreground"
        >
          Sinaxe turns complex tax work into structured, auditable,
          AI-assisted workflows.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
          >
            Contact Us
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

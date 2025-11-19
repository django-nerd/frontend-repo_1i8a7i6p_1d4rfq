import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-48 -right-32 h-[480px] w-[480px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.06),transparent_60%)]" />
      </div>

      <div className="text-center max-w-3xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
        >
          Imagine it. We generate it.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-lg sm:text-xl text-blue-200/90"
        >
          A simple prompt is all you need. Turn ideas into visuals instantly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex items-center justify-center gap-3 text-xs text-blue-300/70"
        >
          <span>Fast</span>
          <span className="h-1 w-1 rounded-full bg-blue-300/40" />
          <span>No sign-up</span>
          <span className="h-1 w-1 rounded-full bg-blue-300/40" />
          <span>Free to try</span>
        </motion.div>
      </div>
    </section>
  )
}

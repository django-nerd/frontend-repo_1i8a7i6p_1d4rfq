import { motion } from 'framer-motion'

export default function Showcase() {
  const items = [
    'Dreamy landscapes',
    'Stylized portraits',
    'Product mockups',
    'Concept art',
  ]

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((label, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="relative h-44 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10"
            >
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.5),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.5),transparent_40%)]" />
              <div className="absolute inset-0 backdrop-blur-[1px]" />
              <div className="absolute bottom-3 left-3 right-3 text-blue-100/90 text-sm font-medium">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

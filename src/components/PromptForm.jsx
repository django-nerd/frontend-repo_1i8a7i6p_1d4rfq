import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ImagePlus, Sparkles, Loader2 } from 'lucide-react'

const backendBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function PromptForm() {
  const [prompt, setPrompt] = useState('A neon cyberpunk city street at night with rain and reflections')
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [seed, setSeed] = useState('')
  const [size, setSize] = useState('square')
  const [error, setError] = useState('')

  const width = size === 'wide' ? 960 : size === 'tall' ? 640 : 768
  const height = size === 'wide' ? 640 : size === 'tall' ? 960 : 768

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!prompt.trim()) {
      setError('Please enter a prompt')
      return
    }
    setLoading(true)
    setImage(null)
    try {
      const res = await fetch(`${backendBase}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, width, height, seed: seed ? Number(seed) : null })
      })
      if (!res.ok) throw new Error('Generation failed')
      const data = await res.json()
      setImage(`data:${data.mime_type};base64,${data.image_base64}`)
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative">
      <form onSubmit={onSubmit} className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <div className="relative">
              <input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your image..."
                className="w-full rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/60 px-4 py-3"
              />
              <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-300/70" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <select value={size} onChange={(e)=>setSize(e.target.value)} className="bg-slate-900/60 border border-white/10 text-white rounded-lg px-3 py-2">
              <option value="square">Square</option>
              <option value="wide">Wide</option>
              <option value="tall">Tall</option>
            </select>
            <input value={seed} onChange={(e)=>setSeed(e.target.value.replace(/[^0-9]/g,''))} placeholder="Seed (optional)" className="w-28 bg-slate-900/60 border border-white/10 text-white rounded-lg px-3 py-2" />
            <button type="submit" disabled={loading} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors">
              {loading ? <Loader2 className="h-4 w-4 animate-spin"/> : <ImagePlus className="h-4 w-4"/>}
              {loading ? 'Generating...' : 'Generate'}
            </button>
          </div>
        </div>
        {error && <p className="mt-3 text-red-300 text-sm">{error}</p>}
      </form>

      <AnimatePresence>
        {image && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40">
              <img src={image} alt="Generated" className="w-full h-auto block" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

import Hero from './components/Hero'
import PromptForm from './components/PromptForm'
import Showcase from './components/Showcase'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="relative">
          <header className="px-6 py-5 flex items-center justify-between max-w-7xl mx-auto">
            <div className="font-extrabold tracking-tight text-xl">Imaginr</div>
            <a href="/test" className="text-sm text-blue-300/80 hover:text-blue-200">Backend Test</a>
          </header>
          <main className="max-w-5xl mx-auto px-6">
            <Hero />
            <PromptForm />
            <Showcase />
            <footer className="py-16 text-center text-sm text-blue-200/60">Made with ❤️ — Type a prompt and create something beautiful</footer>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App

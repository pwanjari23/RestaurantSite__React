function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 text-zinc-500 text-sm text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center font-bold text-xs text-amber-500">
            ÉD
          </div>
          <span className="font-bold text-zinc-300 tracking-wider text-xs">L'ÉTOILE DORÉE RESTAURANT</span>
        </div>

        <div className="flex gap-6 text-zinc-400">
          <a href="#hero" className="hover:text-amber-400 transition-colors">Home</a>
          <a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a>
          <a href="#reserve" className="hover:text-amber-400 transition-colors">Book</a>
        </div>

        <p className="text-zinc-650 text-xs">
          © {new Date().getFullYear()} L'Étoile Dorée. Designed with precision.
        </p>
      </div>
    </footer>
  )
}

export default Footer

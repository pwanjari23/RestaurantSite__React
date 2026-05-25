function Philosophy() {
  return (
    <section id="about" className="py-24 bg-zinc-900/40 border-y border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-amber-500 uppercase">Our Philosophy</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-6">Honoring Ingredients, Mastering Technique</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            We believe dining is high art. Our kitchens operate on principles of absolute precision, pairing classical culinary foundations with modern gastronomic alchemy to awaken all five senses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 text-left hover:border-amber-500/20 hover:bg-zinc-900 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 font-bold text-lg">01</div>
            <h3 className="text-xl font-bold text-white mb-3">Hyper-Seasonal Sourcing</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We partner with select biodynamic farms, artisanal foragers, and coastal micro-fisheries to obtain pristine, local ingredients at their energetic peak.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 text-left hover:border-amber-500/20 hover:bg-zinc-900 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-400 mb-6 font-bold text-lg">02</div>
            <h3 className="text-xl font-bold text-white mb-3">Sensory Alchemy</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Dishes are conceptualized as multi-layered landscapes. We craft distinct temperature contrasts, aromatic vapor dome presentations, and textural symphonies.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 text-left hover:border-amber-500/20 hover:bg-zinc-900 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 font-bold text-lg">03</div>
            <h3 className="text-xl font-bold text-white mb-3">Eco-Gastronomy</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Operating with a profound reverence for the Earth, we implement pioneering zero-waste culinary techniques, transforming raw skin-to-stem scraps into intense elixirs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Philosophy

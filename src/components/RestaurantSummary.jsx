function RestaurantSummary() {
  return (
    <section id="summary" className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10">
        <div className="md:col-span-6 text-left">
          <span className="text-xs font-semibold tracking-widest text-amber-500 uppercase">At a Glance</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-6">L'Étoile Dorée Summary</h2>
          <p className="text-zinc-400 text-base leading-relaxed mb-8">
            Established in 2018 in the heart of the historic culinary district, L'Étoile Dorée has redefined modern, sustainable gastronomy. Under the artistic leadership of Michelin-starred Executive Chef Hélène Dubois, our kitchen blends avant-garde food design with sensory storytelling, offering an unparalleled fine dining sanctuary.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-6 border-t border-zinc-900">
            <div>
              <h4 className="text-xs font-bold text-zinc-350 uppercase tracking-widest mb-2.5">Hours of Operation</h4>
              <p className="text-sm text-zinc-400">Tuesday - Sunday</p>
              <p className="text-sm text-amber-500 font-semibold mt-1">Dinner: 5:30 PM - 11:30 PM</p>
              <p className="text-xs text-zinc-550 mt-1">Lounge opens at 5:00 PM</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-350 uppercase tracking-widest mb-2.5">Lounge Guidelines</h4>
              <p className="text-sm text-zinc-400">Elegant Smart Casual</p>
              <p className="text-xs text-zinc-500 mt-2">Gentlemen are requested to wear jackets. Athletic wear and beachwear are not permitted.</p>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-6 grid grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-850/60 hover:border-amber-500/20 transition-all text-left">
            <h4 className="text-amber-500 font-bold text-3xl mb-1">3★</h4>
            <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">Michelin Stars</span>
            <p className="text-zinc-500 text-[11px] mt-2">Awarded consecutively for our precise technique and seasonal culinary concepts.</p>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-850/60 hover:border-rose-500/20 transition-all text-left">
            <h4 className="text-rose-500 font-bold text-3xl mb-1">98%</h4>
            <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">Guest Rating</span>
            <p className="text-zinc-500 text-[11px] mt-2">Voted Top Gastronomic Experience based on over 2,000 verified culinary reviews.</p>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-850/60 hover:border-orange-500/20 transition-all text-left">
            <h4 className="text-orange-500 font-bold text-3xl mb-1">120+</h4>
            <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">Vintage Cellar</span>
            <p className="text-zinc-500 text-[11px] mt-2">Curated international labels matching our complex seasonal flavor profiles.</p>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-850/60 hover:border-emerald-500/20 transition-all text-left">
            <h4 className="text-emerald-500 font-bold text-3xl mb-1">0-Mile</h4>
            <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">Biosphere Sourcing</span>
            <p className="text-zinc-500 text-[11px] mt-2">All primary aromatics and garnishes are grown in our state-of-the-art rooftop garden.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RestaurantSummary

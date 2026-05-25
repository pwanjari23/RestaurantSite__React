function Hero({ signatureDishes, activeDish, setActiveDish }) {
  return (
    <section id="hero" className="relative pt-12 pb-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 flex flex-col justify-center text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-medium text-amber-400 mb-6 w-fit">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Michelin Starred Culinary Experience
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Crafting Memories Through <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-rose-600">
              Symphonies of Taste
            </span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl">
            Immerse yourself in an avant-garde culinary journey where seasonal elegance meets revolutionary flavor design. Prepared by world-renowned chefs.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#menu" 
              className="px-8 py-4 rounded-full font-medium text-zinc-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 active:scale-98 transition-all shadow-xl shadow-amber-500/10"
            >
              Explore Signature Menu
            </a>
            <a 
              href="#reserve" 
              className="px-8 py-4 rounded-full font-medium text-zinc-100 bg-zinc-900 hover:bg-zinc-850 active:scale-98 border border-zinc-800 transition-all"
            >
              Book Reservation
            </a>
          </div>
        </div>

        {/* Interactive Feature: Carousel/Showcase of 3 top dishes */}
        <div className="md:col-span-5 relative">
          {signatureDishes && signatureDishes.length > 0 && (
            <>
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-zinc-800 group shadow-2xl">
                <img 
                  src={signatureDishes[activeDish].image} 
                  alt={signatureDishes[activeDish].name} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-bold tracking-widest text-amber-400 uppercase mb-3">
                    {signatureDishes[activeDish].tag}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{signatureDishes[activeDish].name}</h3>
                  <p className="text-zinc-300 text-sm mb-4 line-clamp-2">{signatureDishes[activeDish].description}</p>
                  <div className="text-amber-400 font-semibold text-lg">${signatureDishes[activeDish].price}</div>
                </div>
              </div>

              {/* Dish selector buttons */}
              <div className="flex justify-center gap-3 mt-6">
                {signatureDishes.map((dish, index) => (
                  <button
                    key={dish.id}
                    onClick={() => setActiveDish(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeDish === index ? 'w-8 bg-amber-500' : 'w-2.5 bg-zinc-800 hover:bg-zinc-700'
                    }`}
                    aria-label={`Select dish ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero

function Menu({ menuItems, activeTab, setActiveTab, addToCart }) {
  return (
    <section id="menu" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
          <div>
            <span className="text-xs font-semibold tracking-widest text-amber-500 uppercase">The Culinary Vault</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">Exquisite Seasonal Selections</h2>
          </div>
          {/* Tabs for categories */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 bg-zinc-900 p-1.5 rounded-full border border-zinc-800">
            {menuItems && Object.keys(menuItems).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                  activeTab === category 
                    ? 'bg-amber-500 text-zinc-950 font-bold' 
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-850'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems && menuItems[activeTab] && menuItems[activeTab].map((item) => (
            <div 
              key={item.id} 
              className="group rounded-3xl bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 p-4 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-zinc-950/80 backdrop-blur-sm text-[10px] font-bold text-amber-400 uppercase tracking-widest border border-zinc-800">
                    {item.tag}
                  </span>
                </div>
                <div className="flex justify-between items-start gap-4 mb-3 text-left">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">{item.name}</h3>
                  <span className="text-amber-400 font-bold text-lg whitespace-nowrap">${item.price}</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed text-left mb-6">{item.description}</p>
              </div>
              <div className="pt-2 border-t border-zinc-900/60 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">Available Dinner Only</span>
                <button 
                  onClick={() => addToCart(item)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-900 border border-zinc-800 hover:border-amber-500/30 hover:bg-zinc-800 text-amber-400 transition-all flex items-center gap-1.5"
                >
                  Add to Cart
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu

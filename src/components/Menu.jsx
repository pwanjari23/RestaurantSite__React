import { useState } from 'react'

function MenuItem({ item, addToCart }) {
  const [quantity, setQuantity] = useState(1)

  const handleAdd = (e) => {
    e.preventDefault()
    addToCart(item, quantity)
    setQuantity(1) // Reset quantity back to 1 after adding
  }

  return (
    <div 
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

      <div className="pt-3 border-t border-zinc-900/60 flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs text-zinc-500 font-semibold">
          <span className="uppercase tracking-widest text-[10px]">Select Quantity</span>
          <span className="uppercase tracking-widest text-[10px]">Dinner Only</span>
        </div>
        <form onSubmit={handleAdd} className="flex gap-2 items-center w-full">
          <div className="flex items-center bg-zinc-950 border border-zinc-850 rounded-xl p-1 w-24">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-7 h-7 rounded flex items-center justify-center hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-all font-bold text-xs"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              max="20"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full bg-transparent text-center font-bold text-xs text-white focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="w-7 h-7 rounded flex items-center justify-center hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-all font-bold text-xs"
            >
              +
            </button>
          </div>
          <button 
            type="submit"
            className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-zinc-950 uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/5 hover:shadow-amber-500/15 active:scale-[0.98]"
          >
            Add
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}

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
            <MenuItem 
              key={item.id} 
              item={item} 
              addToCart={addToCart} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu

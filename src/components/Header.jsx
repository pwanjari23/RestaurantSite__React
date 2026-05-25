function Header({ cartItemsCount, onCartClick }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-rose-600 flex items-center justify-center font-bold text-lg text-zinc-950 tracking-tighter">
            ÉD
          </div>
          <span className="text-xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-zinc-50 to-amber-200">
            L'ÉTOILE DORÉE
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#hero" className="hover:text-amber-400 transition-colors">Home</a>
          <a href="#menu" className="hover:text-amber-400 transition-colors">The Menu</a>
          <a href="#reserve" className="hover:text-amber-400 transition-colors">Reservations</a>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={onCartClick}
            className="relative p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-200 flex items-center justify-center"
            aria-label="View Cart"
            id="cart-button"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-500 text-zinc-950 font-extrabold text-[10px] flex items-center justify-center animate-pulse">
                {cartItemsCount}
              </span>
            )}
          </button>

          <a 
            href="#reserve" 
            className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500 text-zinc-950 hover:bg-amber-400 active:scale-95 transition-all duration-200 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20"
          >
            Book A Table
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

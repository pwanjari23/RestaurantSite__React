function CartDrawer({
  isOpen,
  onClose,
  cart,
  updateQuantity,
  removeFromCart,
  handleCheckout,
  showCheckoutSuccess,
  setShowCheckoutSuccess,
  cartTotal
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-zinc-950/85 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => {
          onClose();
          setShowCheckoutSuccess(false);
        }}
      ></div>

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-zinc-900 border-l border-zinc-850 h-full flex flex-col justify-between shadow-2xl p-6 md:p-8 z-10 transition-transform duration-300">
        
        {/* Cart Header */}
        <div className="flex items-center justify-between pb-6 border-b border-zinc-850">
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
            </svg>
            <h3 className="text-xl font-bold text-white font-display">Epicurean Cart</h3>
          </div>
          <button 
            onClick={() => {
              onClose();
              setShowCheckoutSuccess(false);
            }}
            className="p-1.5 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-all"
            aria-label="Close Cart"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Cart Body */}
        <div className="flex-1 overflow-y-auto py-6 space-y-6">
          {showCheckoutSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0114 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Order Confirmed</h4>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                Our master chefs have received your request and have started assembling your selected courses.
              </p>
            </div>
          ) : cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-zinc-500 py-12">
              <svg className="w-12 h-12 text-zinc-750 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
              </svg>
              <p className="text-sm font-medium">Your cart is empty</p>
              <p className="text-xs text-zinc-600 mt-1 max-w-[200px]">Add delicacies from our signature menu to curate your feast.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 rounded-2xl bg-zinc-950/40 border border-zinc-850/60 items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                  <div className="flex-1 text-left">
                    <h4 className="text-sm font-bold text-white line-clamp-1">{item.name}</h4>
                    <span className="text-[10px] text-amber-500 font-semibold tracking-wider uppercase">{item.tag}</span>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-zinc-300 font-medium">${item.price * item.quantity}</span>
                      <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-850 rounded-lg p-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-5 h-5 rounded flex items-center justify-center hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-all text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-white min-w-[12px] text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-5 h-5 rounded flex items-center justify-center hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-all text-xs font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-1 text-zinc-600 hover:text-rose-400 transition-colors self-start"
                    aria-label="Remove item"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-1.5 12a1.5 1.5 0 01-1.5 1.5H7.5A1.5 1.5 0 016 20.25l-1.5-12m3 0V5.25A1.5 1.5 0 019 3.75h6a1.5 1.5 0 011.5 1.5V8.25M9.75 8.25v11.25m4.5-11.25v11.25"></path>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {!showCheckoutSuccess && cart.length > 0 && (
          <div className="pt-6 border-t border-zinc-850 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-400">Subtotal</span>
              <span className="text-lg font-bold text-white">${cartTotal}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-zinc-500">
              <span>Chef's Service & GST</span>
              <span className="font-semibold text-zinc-400">Included</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 text-zinc-950 font-bold text-xs uppercase tracking-wider hover:from-amber-400 hover:to-rose-500 transition-all shadow-xl shadow-amber-500/10"
            >
              Place Gourmet Order
            </button>
          </div>
        )}

        {showCheckoutSuccess && (
          <div className="pt-6 border-t border-zinc-850">
            <button 
              onClick={() => {
                onClose();
                setShowCheckoutSuccess(false);
              }}
              className="w-full py-4 rounded-xl bg-zinc-800 hover:bg-zinc-755 text-zinc-100 font-bold text-xs uppercase tracking-wider transition-all"
            >
              Return to Lounge
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default CartDrawer

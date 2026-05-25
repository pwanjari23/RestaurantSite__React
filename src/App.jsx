import { useState } from 'react'
import { menuItems } from './data/menuItems'
import Header from './components/Header'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Menu from './components/Menu'
import Reservations from './components/Reservations'
import CartDrawer from './components/CartDrawer'
import RestaurantSummary from './components/RestaurantSummary'
import Footer from './components/Footer'

function App() {
  const [activeTab, setActiveTab] = useState('signature')
  const [bookingName, setBookingName] = useState('')
  const [bookingDate, setBookingDate] = useState('')
  const [bookingTime, setBookingTime] = useState('')
  const [guests, setGuests] = useState('2')
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [activeDish, setActiveDish] = useState(0)

  // Cart States
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [showCheckoutSuccess, setShowCheckoutSuccess] = useState(false)

  // Cart Functions
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id)
      if (existing) {
        return prevCart.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
      }
      return [...prevCart, { ...item, quantity: 1 }]
    })
    setIsCartOpen(true) // Automatically slide open cart on adding
  }

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== itemId))
  }

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
      return
    }
    setCart((prevCart) => prevCart.map((i) => i.id === itemId ? { ...i, quantity } : i))
  }

  const handleCheckout = () => {
    setShowCheckoutSuccess(true)
    setCart([])
  }

  const handleBooking = (e) => {
    e.preventDefault()
    if (bookingName && bookingDate && bookingTime) {
      setShowConfirmation(true)
    }
  }

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-amber-500 selection:text-zinc-950">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[30%] right-1/4 w-[400px] h-[400px] bg-rose-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Modular Header */}
      <Header 
        cartItemsCount={cartItemsCount} 
        onCartClick={() => setIsCartOpen(true)} 
      />

      {/* Modular Hero Section */}
      <Hero 
        signatureDishes={menuItems.signature} 
        activeDish={activeDish} 
        setActiveDish={setActiveDish} 
      />

      {/* Modular Philosophy Section */}
      <Philosophy />

      {/* Modular Restaurant Summary Section */}
      <RestaurantSummary />

      {/* Modular Menu Section */}
      <Menu 
        menuItems={menuItems} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        addToCart={addToCart} 
      />

      {/* Modular Reservations Section */}
      <Reservations 
        bookingName={bookingName} 
        setBookingName={setBookingName} 
        bookingDate={bookingDate} 
        setBookingDate={setBookingDate} 
        bookingTime={bookingTime} 
        setBookingTime={setBookingTime} 
        guests={guests} 
        setGuests={setGuests} 
        showConfirmation={showConfirmation} 
        setShowConfirmation={setShowConfirmation} 
        handleBooking={handleBooking} 
      />

      {/* Modular Cart Side Drawer */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart} 
        updateQuantity={updateQuantity} 
        removeFromCart={removeFromCart} 
        handleCheckout={handleCheckout} 
        showCheckoutSuccess={showCheckoutSuccess} 
        setShowCheckoutSuccess={setShowCheckoutSuccess} 
        cartTotal={cartTotal} 
      />

      {/* Modular Footer */}
      <Footer />
    </div>
  )
}

export default App

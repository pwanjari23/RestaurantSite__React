function Reservations({ 
  bookingName, 
  setBookingName, 
  bookingDate, 
  setBookingDate, 
  bookingTime, 
  setBookingTime, 
  guests, 
  setGuests, 
  showConfirmation, 
  setShowConfirmation, 
  handleBooking 
}) {
  return (
    <section id="reserve" className="py-24 bg-gradient-to-t from-zinc-950 to-zinc-900/60 border-t border-zinc-900 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-amber-500 uppercase">Secure Your Passage</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4">Table Reservations</h2>
          <p className="text-zinc-400 max-w-lg mx-auto">
            Due to exceptionally limited capacity, we highly advise booking up to 30 days in advance. Walk-ins are subject to wait lists.
          </p>
        </div>

        <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          {showConfirmation ? (
            <div className="text-center py-12 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Reservation Secured</h3>
              <p className="text-zinc-400 max-w-sm mb-8">
                Splendid choice, <span className="text-amber-400 font-semibold">{bookingName}</span>. Your table for <span className="text-amber-400 font-semibold">{guests} guests</span> on <span className="text-amber-400 font-semibold">{bookingDate}</span> at <span className="text-amber-400 font-semibold">{bookingTime}</span> has been provisionally accepted.
              </p>
              <button 
                onClick={() => {
                  setShowConfirmation(false)
                  setBookingName('')
                  setBookingDate('')
                  setBookingTime('')
                }} 
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-800 hover:bg-zinc-700 text-zinc-100 transition-all"
              >
                Book Another Table
              </button>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold text-zinc-355 uppercase tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={bookingName}
                  onChange={(e) => setBookingName(e.target.value)}
                  required
                  placeholder="E.g., Julian Mercer" 
                  className="px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-zinc-100 text-sm transition-all outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="guests" className="text-xs font-bold text-zinc-355 uppercase tracking-widest">Table Size</label>
                <select 
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-zinc-100 text-sm transition-all outline-none"
                >
                  <option value="1">1 Guest (Bar counter)</option>
                  <option value="2">2 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="8">8+ Guests (Private suite)</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="date" className="text-xs font-bold text-zinc-355 uppercase tracking-widest">Date</label>
                <input 
                  type="date" 
                  id="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  required
                  className="px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-zinc-100 text-sm transition-all outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="time" className="text-xs font-bold text-zinc-355 uppercase tracking-widest">Preferred Time</label>
                <select 
                  id="time"
                  value={bookingTime}
                  onChange={(e) => setBookingTime(e.target.value)}
                  required
                  className="px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-zinc-100 text-sm transition-all outline-none"
                >
                  <option value="">Select Time Slot</option>
                  <option value="5:30 PM">5:30 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                  <option value="7:30 PM">7:30 PM</option>
                  <option value="8:00 PM">8:00 PM</option>
                  <option value="9:30 PM">9:30 PM</option>
                </select>
              </div>

              <div className="md:col-span-2 mt-4">
                <button 
                  type="submit" 
                  className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-500 to-rose-600 text-zinc-950 hover:from-amber-400 hover:to-rose-500 active:scale-[0.99] transition-all shadow-xl shadow-amber-500/10 hover:shadow-amber-500/20"
                >
                  Confirm Booking Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Reservations

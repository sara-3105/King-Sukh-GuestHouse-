import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function BookingBar() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guestCount, setGuestCount] = useState(1);

  const handleBookNow = () => {
    // Handle booking logic (e.g., show confirmation modal)
    console.log('Booking now!');
  };

  return (
    <div className="booking-bar">
      <div>
        <button onClick={() => setCheckInDate(new Date())}>Check-in</button>
        <DatePicker selected={checkInDate} onChange={date => setCheckInDate(date)} />
      </div>

      <div>
        <button onClick={() => setCheckOutDate(new Date())}>Check-out</button>
        <DatePicker selected={checkOutDate} onChange={date => setCheckOutDate(date)} />
      </div>

      <div>
        Guests: {guestCount}
        <button onClick={() => setGuestCount(guestCount + 1)}>+</button>
      </div>

      <button onClick={handleBookNow}>BOOK NOW</button>
    </div>
  );
}

export default BookingBar;

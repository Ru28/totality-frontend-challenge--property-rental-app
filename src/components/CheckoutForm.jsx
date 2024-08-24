import { useState } from 'react';
import { useBooking } from '../utils/BookingContext';

const CheckoutForm = () => {
  const { cartItems, totalCost } = useBooking();
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    // Handle the checkout logic (e.g., payment processing, saving data, etc.)
    alert('Checkout Successful! Your booking is confirmed.');

    // You might want to clear the cart and reset the form
  };

  return (
    <div className="relative top-20 container mx-auto py-8 w-4/5">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      {/* Booking Summary */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between border-b py-2">
            <span>{item.title} x {item.quantity}</span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}
        <div className="flex justify-between font-bold mt-4">
          <span>Total Cost:</span>
          <span>${totalCost}</span>
        </div>
      </div>

      {/* Contact Information Form */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <form onSubmit={handleCheckout}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={contactInfo.name}
              onChange={handleContactChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={contactInfo.email}
              onChange={handleContactChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={contactInfo.phone}
              onChange={handleContactChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
        </form>
      </div>

      {/* Payment Information Form */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
        <form onSubmit={handleCheckout}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={paymentInfo.cardNumber}
              onChange={handlePaymentChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="expiryDate"
              placeholder="Expiry Date (MM/YY)"
              value={paymentInfo.expiryDate}
              onChange={handlePaymentChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={paymentInfo.cvv}
              onChange={handlePaymentChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
        </form>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Complete Checkout
      </button>
    </div>
  );
};

export default CheckoutForm;

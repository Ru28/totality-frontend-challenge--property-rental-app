import { useBooking } from '../utils/BookingContext';

const BookingCart = () => {
  const { cartItems, updateCartItem, removeFromCart, totalCost, totalBookings } = useBooking();

  return (
    <div className="relative top-20 container mx-auto w-4/5 py-8">
      <h2 className="text-2xl font-bold mb-6">Your Bookings</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">No properties booked yet.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-4"
              >
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">
                    ${item.price}/month x {item.quantity} months
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      updateCartItem(item.id, Math.max(1, item.quantity - 1))
                    }
                    className="px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded-l"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 bg-gray-200">{item.quantity}</span>
                  <button
                    onClick={() => updateCartItem(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded-r"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <p className="text-lg font-semibold">Total Bookings: {totalBookings}</p>
            <p className="text-xl font-bold text-blue-600">
              Total Cost: ${totalCost}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingCart;

/* eslint-disable react/prop-types */
import { useBooking } from '../utils/BookingContext';
const PropertyCard = ({ property }) => {
    const { addToCart } = useBooking();
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-gray-600 mb-2">{property.description}</p>
        <p className="font-bold text-blue-600">${property.price}/month</p>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-gray-600">Bedrooms: {property.bedrooms}</p>
        <div className="flex gap-2 mt-2 flex-wrap">
          {property.amenities.map((amenity, index) => (
            <span key={index} className="text-xs bg-gray-200 px-2 py-1 rounded">
              {amenity}
            </span>
          ))}
        </div>
        <button className="bg-blue-500 text-white mt-4 py-2 px-4 rounded hover:bg-blue-600 transition"
        onClick={() => addToCart(property)}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;

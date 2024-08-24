import { useState } from 'react';

const PropertyListForm = ({ onSubmit }) => {
  const [property, setProperty] = useState({
    title: '',
    description: '',
    rentPrice: '',
    location: '',
    bedrooms: '',
    amenities: {
      pool: false,
      gym: false,
      fullyFurnished: false,
      semiFurnished: false,
      lift: false,
      unfurnished: false,
    },
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setProperty((prevState) => ({
        ...prevState,
        amenities: {
          ...prevState.amenities,
          [name]: checked,
        },
      }));
    } else if (name === 'image') {
      setProperty((prevState) => ({
        ...prevState,
        image: e.target.files[0],
      }));
    } else {
      setProperty((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(property);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white relative top-24 p-6 rounded-lg shadow-md max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4">Add New Property</h2>

      {/* Title */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={property.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Description</label>
        <textarea
          name="description"
          value={property.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      {/* Rent Price */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Rent Price (per month)</label>
        <input
          type="number"
          name="rentPrice"
          value={property.rentPrice}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      {/* Location */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Location</label>
        <input
          type="text"
          name="location"
          value={property.location}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      {/* Bedrooms */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Number of Bedrooms</label>
        <input
          type="number"
          name="bedrooms"
          value={property.bedrooms}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      {/* Amenities */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Amenities</label>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Pool', name: 'pool' },
            { label: 'Gym', name: 'gym' },
            { label: 'Fully Furnished', name: 'fullyFurnished' },
            { label: 'Semi Furnished', name: 'semiFurnished' },
            { label: 'Lift', name: 'lift' },
            { label: 'Unfurnished', name: 'unfurnished' },
          ].map((amenity) => (
            <label key={amenity.name} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name={amenity.name}
                checked={property.amenities[amenity.name]}
                onChange={handleChange}
              />
              <span>{amenity.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Image Upload */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Property Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add Property
      </button>
    </form>
  );
};

export default PropertyListForm;

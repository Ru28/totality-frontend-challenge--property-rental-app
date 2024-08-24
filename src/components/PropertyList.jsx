import { useState } from 'react';
import PropertyCard from './PropertyCard';

// eslint-disable-next-line react/prop-types
const PropertyList = ({ properties }) => {
  const [locationFilter, setLocationFilter] = useState('');
  const [bedroomsFilter, setBedroomsFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleFilter = () => {
    let filtered = properties;

    if (locationFilter) {
      filtered = filtered.filter((property) =>
        property.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    if (bedroomsFilter) {
      filtered = filtered.filter(
        (property) => property.bedrooms === parseInt(bedroomsFilter)
      );
    }

    if (priceFilter) {
      filtered = filtered.sort((a, b) => {
        if (priceFilter === 'low-to-high') return a.price - b.price;
        if (priceFilter === 'high-to-low') return b.price - a.price;
        return 0;
      });
    }

    setFilteredProperties(filtered);
  };

  return (
    <div className="container mx-auto py-8">
      {/* Filter Options */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Filter by Location"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={bedroomsFilter}
          onChange={(e) => setBedroomsFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Filter by Bedrooms</option>
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
          <option value="4">4 Bedrooms</option>
        </select>
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Sort by Price</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
        <button
          onClick={handleFilter}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Apply Filters
        </button>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;

import PropertyList from "./PropertyList";

const Browse = () => {
  const properties = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300x200',
      title: 'Luxury Villa',
      description: 'A luxury villa with stunning views.',
      price: 1500,
      location: 'California',
      bedrooms: 4,
      amenities: ['Pool', 'Gym', 'Fully Furnished'],
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300x200',
      title: 'Modern Apartment',
      description: 'A modern apartment in the city center.',
      price: 900,
      location: 'New York',
      bedrooms: 2,
      amenities: ['Gym', 'Lift', 'Unfurnished'],
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300x200',
      title: 'Cozy Cottage',
      description: 'A cozy cottage with a beautiful garden.',
      price: 700,
      location: 'Texas',
      bedrooms: 3,
      amenities: ['Semi Furnished'],
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/300x200',
      title: 'Cozy Cottage',
      description: 'A cozy cottage with a beautiful garden.',
      price: 700,
      location: 'Texas',
      bedrooms: 3,
      amenities: ['Semi Furnished'],
    },
    // Add more properties as needed
  ];
  
  
  return (
    <div className="mx-4 relative top-20">
      <PropertyList properties={properties} />
    </div>
  )
}

export default Browse;
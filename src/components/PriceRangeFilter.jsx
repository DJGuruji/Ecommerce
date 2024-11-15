import React, { useState ,useEffect} from 'react';
import Select from 'react-select';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const PriceRangeFilter = ({ onPriceRangeChange }) => {


  useEffect(() => {
    AOS.init({
      duration: 2000, // Set the duration for animations
      easing: 'ease-in-out', // Set the easing function for smooth transitions
      once: true, // Trigger animation only once
    });
  }, []);

  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const priceOptions = [
    { value: 'under-50', label: 'Under $50' },
    { value: '50-100', label: 'Under $100' },
    { value: '100-200', label: 'Under $200' },
    { value: '200-500', label: 'Under $500' },
    { value: '500-1000', label: 'Under $1000' },
    { value: 'above-1000', label: 'Above $1000' },
  ];

  const handlePriceChange = (selectedOption) => {
    setSelectedPriceRange(selectedOption);
    onPriceRangeChange(selectedOption ? selectedOption.value : ''); // Pass the selected value to the parent component
  };

  return (
    <div className=" shadow-xl p-4" >
      {/* Searchable select dropdown */}
      <h4 className='font-bold '>Select a  Price Range</h4>
      <Select
        value={selectedPriceRange}
        onChange={handlePriceChange}
        options={priceOptions}
        placeholder="Select a price range"
        isClearable={true}
        className="w-full"
      />
    </div>
  );
};

export default PriceRangeFilter;

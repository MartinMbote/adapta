import React, { useState, useCallback, useEffect } from 'react'
import Select from 'react-select';  // component from react-select for making dropdowns.
import axios from 'axios';  //This is a library for making HTTP requests (e.g., to get data from a server).
import { debounce } from 'lodash';  //The debounce function from lodash is used to delay the API call until the user stops typing.
import AsyncSelect from 'react-select/async';

const Computescore = ({ onLocationChange,clickedPoint }) => {   
    
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
    
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);  
        
    
        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        
      }
console.log(clickedPoint);

    const [locationoptions, setlocationoptions] = useState([]);
    const [loading, setLoading] = useState(false);

    /////////Location Input/////////
    // const handleInputChange = useCallback(
    //     debounce(async (inputValue) => {
    //     if (!inputValue || typeof inputValue !== 'string') {
    //         setlocationoptions([]);
    //         return;
    //     }

    //     setLoading(true);
    //     try {
    //         // Make API call to OpenStreetMap to fetch location data
    //         const response = await axios.get('https://nominatim.openstreetmap.org/search', {
    //         params: {
    //             q: inputValue,  // Query parameter based on user input
    //             format: 'json', // Response format
    //             addressdetails: 0,  // Include detailed address information
    //             limit: 10,  // Limit results to 10
    //             countrycodes: 'KE', // Restrict search to Kenya
    //         },
    //         });

    //         // Map API response to match the format required by react-select
    //         const places = response.data.map((place) => ({
    //         value: [parseFloat(place.lat), parseFloat(place.lon)],
    //         label: place.display_name,
    //         }));

    //         setlocationoptions(places);     // Update state with new location options

    //     } catch (error) {
    //         console.error('Error fetching location data:', error);
    //     } finally {
    //         setLoading(false);
    //     }
    //     }, 1000),   // Wait 1000ms after the user stops typing to make the API call
    //     []
    // );

    // // Function to handle when a location is selected
    // const handleLocationChange = (selectedOption) => {
    //     onLocationChange(selectedOption.value); // Call the onLocationChange function passed as a prop with the selected location's value
    //     // setlocationoptions(selectedOption);
    // };
    /////////Location Input/////////



    /////////Month Input/////////
    const monthOptions = [
        { value: 'Jan', label: 'January' },
        { value: 'Feb', label: 'Febuary' },
        { value: 'March', label: 'March' },
        { value: 'April', label: 'April' },
        { value: 'May', label: 'May' },
        { value: 'June', label: 'June' },
        { value: 'July', label: 'July' },
        { value: 'August', label: 'August' },
        { value: 'Sept', label: 'September' },
        { value: 'Oct', label: 'October' },
        { value: 'Nov', label: 'November' },
        { value: 'Dec', label: 'December' }
      ];
  
  
      const [selectedMonth, setSelectedMonth] = useState(null);
  
      const handleMonthChange = (selectedMonth) => {
        setSelectedMonth(selectedMonth);
      };
    /////////Month Input/////////

    
    
    ////Select Componet Code////
    const options = [
        { value: 'Avocado', label: 'Avocado' },
        { value: 'Tea', label: 'Tea' },
        { value: 'Banana', label: 'Banana' },
        { value: 'Coffee', label: 'Coffee' },
        { value: 'Maize', label: 'Maize' },
        { value: 'Sugarcane', label: 'Sugarcane' },
        { value: 'Tomatoes', label: 'Tomatoes' },
        { value: 'Potatoes', label: 'Potatoes' },
        { value: 'Cabbage', label: 'Cabbage' },
        { value: 'Onions', label: 'Onions' },
        { value: 'French Beans', label: 'French Beans' },
        { value: 'Mangoes', label: 'Mangoes' },
        { value: 'Pineapples', label: 'Pineapples' },
        { value: 'Macadamia', label: 'Macadamia' },
        { value: 'Cashew Nuts', label: 'Cashew Nuts' },
        { value: 'Sorghum', label: 'Sorghum' },
        { value: 'Millet', label: 'Millet' },
        { value: 'Passion Fruit', label: 'Passion Fruit' },
        { value: 'Pyrethrum', label: 'Pyrethrum' },
        { value: 'Flowers', label: 'Flowers' },
        { value: 'Cotton', label: 'Cotton' },
        { value: 'Tobacco', label: 'Tobacco' },
        { value: 'Sisals', label: 'Sisals' },
        { value: 'Wheat', label: 'Wheat' },
        { value: 'Barley', label: 'Barley' },
        { value: 'Sunflower', label: 'Sunflower' }
      ];
      


    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    const customStyles = {
        control: (provided, state) => ({
          ...provided, // inherit the default styles
          background: 'white', // set the background color of the control
          width: '14.4vw',
          height: '1vw',
          borderWidth: '0.15vw',
          marginTop: '0.2vw',
          marginBottom: '0.5vw',
          cursor: 'pointer',
          borderColor: state.isFocused ? '#054061' : '#F3F3F3', // change the border color based on focus state
          boxShadow: state.isFocused ? null : null, // remove the default box shadow
          '&:hover': {
            borderColor: state.isFocused ? '#054061' : 'grey' // change the border color on hover
          }
        }),
        option: (provided, state) => ({
          ...provided, // inherit the default styles
          background: state.isSelected ? '#054061' : 'white', // set the background color based on selection state
          color: state.isSelected ? 'white' : 'black', // set the text color based on selection state
          '&:hover': {
            background: 'lightgrey', // change the background color on hover
            color: 'black' // change the text color on hover
          }
        })
      };
    ////Select Componet Code////

    const [selectedLocation, setSelectedLocation] = useState(null);
      
    useEffect(() => {
        if (clickedPoint) {
          setSelectedLocation({ value: clickedPoint, label: clickedPoint });
        } else {
          setSelectedLocation(null);
        }
      }, [clickedPoint]);



    /////////Asynch Location Input/////////
    const loadOptions = async (inputValue) => {
        if (!inputValue) {
          return [];
        }
    
        try {
          const response = await axios.get('https://nominatim.openstreetmap.org/search', {
            params: {
              q: inputValue,
              format: 'json',
              addressdetails: 1,
              limit: 10,
              countrycodes: 'KE',
            },
          });
    
          // Map API response to the format required by react-select
          const places = response.data.map((place) => ({
            value: [parseFloat(place.lat), parseFloat(place.lon)],
            label: place.display_name,
          }));
    
          return places;
        } catch (error) {
          console.error('Error fetching location data:', error);
          return [];
        }
      };
    
      // Function to handle location change
      const handleLocationChange = (selectedOption) => {
        if (selectedOption && selectedOption.value) {
          onLocationChange(selectedOption.value);          
        }
      };
    /////////Asynch Location Input/////////
    

  return (
    <div>
        <div className='bg-white w-[17.4vw] text-adapta-blue font-semibold text-[0.8vw] pt-[1.3vw] pb-[0.9vw] pl-[1.3vw] rounded-[0.4vw] border-[0.15vw] border-adapta-grey'>
            <form onSubmit={handleSubmit}>
                <label>
                    <span className='ml-[0.3vw]'>
                        Enter Location:
                    </span>

                    <AsyncSelect
                        placeholder="Enter name of location"
                        loadOptions={loadOptions} // Function to load options asynchronously
                        onChange={handleLocationChange}                       
                        cacheOptions // Cache options to prevent redundant API calls
                        defaultOptions // Load default options initially
                        styles={customStyles}
                        // value={selectedLocation}
                    />
                </label>

                {/* <div>
                    <Select
                        placeholder="Enter name of location"
                        options={locationoptions}
                        onInputChange={(value) => handleInputChange(value)}
                        onChange={handleLocationChange}
                        isLoading={loading}
                        filterOption={(option, rawInput) => 
                          option.label.toLowerCase().includes(rawInput.toLowerCase()) // Custom filter logic
                        }
                    />
                </div> */}

                <label>
                    <span className='ml-[0.3vw]'>
                        Enter Month to start Planting :
                    </span>                    

                    <Select
                        value={selectedMonth}
                        onChange={handleMonthChange}
                        options={monthOptions}
                        placeholder="Enter Start Month"
                        styles={customStyles}                        
                    />
                </label> 

                <div>
                    <label>
                        <span className='ml-[0.2vw]'>
                            Select a Crop:
                        </span>

                        <Select
                            value={selectedOption}
                            onChange={handleChange}
                            options={options}
                            placeholder="Search Crop"
                            styles={customStyles}
                            
                        />
                        {/* {selectedOption && <p>You selected: {selectedOption.label}</p>} */}
                    </label>
                </div>

                <div className='w-[14.4vw]'>
                    <div className='flex justify-center'>
                        <button className='border w-[12vw] h-[2vw] rounded-[0.4vw] bg-adapta-blue-light text-white text-[0.8vw] font-semibold mt-[0.9vw]'>
                            Compute Score
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Computescore
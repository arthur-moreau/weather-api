import React, { useState } from 'react';
import useWeather from '../../hooks/weather-hooks';
import './search.css'
import PlacesAutocomplete from 'react-places-autocomplete';

const Search = () => {

  // States to change and store the city

  const { getWeather } = useWeather();
  const [address, setAdress] = useState('')

  // Function to send the get request

  const submitGetWeather = ()=> {
    if(!address) return;
    return getWeather(address);
  }
 
  // Options for places auto complete

  const searchOptions = {
    types:['locality']
  }

  // Function for errors on getting suggestions

  const onError = (status, clearSuggestions) => {
    console.log('Google Maps API returned error with status: ', status)
    clearSuggestions()
  }

  return (
    <section className='container'>
      <h1 className='big-text'>Como está o tempo hoje?</h1>
      
      {/* component from react places autocomplete package */}
      <PlacesAutocomplete
        searchOptions={searchOptions}
        value={address} 
        onError={onError}
        onChange={setAdress} 
        onSelect={submitGetWeather}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps,}) => (
          <div>
            {/* Condition to render borders of serchbox */}
            {address === '' ? <input className='search-box' {...getInputProps({        
              placeholder: "Digite o nome da cidade", 
              spellCheck: "false"
              })}/>
              : <input className='search-box-searching' {...getInputProps({        
              placeholder: "Digite o nome da cidade", 
              spellCheck: "false"
              })}/>}
            
            {/* Suggestions render */}
            <div className='suggestions'>
              {suggestions.map((suggestion, index) => {
                const style = {
                  color: suggestion.active ? "#D2B3C1" : "#6AA2D1"
                };
                  return (
                  <div className='suggestion' key={index} {...getSuggestionItemProps((suggestion),{ style })}>
                    {suggestion.formattedSuggestion.mainText}
                  </div>
                  )
                })
              }
            </div>

          </div>
        )}</PlacesAutocomplete>
    </section>
  );
};

export default Search;
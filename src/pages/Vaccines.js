import React, {useContext} from 'react';
import {CaseContext} from '../contexts/CaseContext';
  
function Vaccines() {
  const [cases, setCases] = useContext(CaseContext);

    const renderCountryName = () => {
      const countryArray = [];
      for (const country in cases){
       countryArray.push(<li key={country}>{country}</li>)
      }
      return countryArray
    }
    //for of eleme in array .. in over object
    return (
        <div>
            <ul>
              {renderCountryName()}
            </ul>
         
        </div>
    )
}



export default Vaccines;
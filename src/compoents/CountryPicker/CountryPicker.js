import React, { useEffect, useState } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../api'

function CountryPicker({ handleCountryChange }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.container}>
      <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker

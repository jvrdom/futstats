import React from 'react';
import PropTypes from 'prop-types';

export default function CountryList(props) {
  const { countries, onRowClick } = props;

  return (
    <tbody>
      {countries.map((country) => {
        return (
          <tr
            key={country._id}
            onClick={() => onRowClick(country._id)}
          >
            <td>{country._id}</td>
            <td>{country.name}</td>
            <td>{country.description}</td>
          </tr>
        );
      })}
    </tbody>
  )
}

CountryList.propTypes = {
  countries: PropTypes.array.isRequired,
  onRowClick: PropTypes.func.isRequired
}

import React, { useState, useCallback } from 'react';
import useFetch from '../hooks/useFetch';
import CountryCard from '../components/countryCard';
import CountryList from '../components/countryList';
import './hallOfFame.scss';

function HallOfFame() {
  const [country, setCountry] = useState(null);
  // const res = useFetch("http://localhost:3800/api/country");
  // Temporary, this will call an api URL
  const res = useFetch('/countries.json');
  const handleRowClick = useCallback(
    (id) => {
      setCountry(res.response.find(country => country._id === id));
    },
    [res.response]
  );

  if (!res.response) {
    return <div>Loading...</div>
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="table-container">
              <table className="table is-fullwidth">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <CountryList
                  countries={res.response.filter(element => element.wasChampionIn.length > 0)}
                  onRowClick={handleRowClick}
                />
              </table>
            </div>
          </div>
          { country
            &&
            <div className="column is-one-third">
              <CountryCard
                country = {country}
              />
            </div>
          }
        </div>
      </div>
    </section>
  )
}

export default HallOfFame;

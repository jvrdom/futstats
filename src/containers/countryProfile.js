import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default function Country(props) {
  // const res = useFetch(`http://localhost:3800/api/country/${props.match.params.id}`);
  // const res1 = useFetch('http://localhost:3800/api/edition');

  //Temporary, this will call and api.
  const resCountries = useFetch('/countries.json');
  const resEdition = useFetch('/edition.json');
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      if (resEdition.response && resCountries.response) {
        const dataGraph = [];
        const country = resCountries.response.find(x => x._id === props.match.params.id)
        resEdition.response.forEach(edition => {
          const position = country.wasChampionIn
            .find(champion => champion._id === edition._id) ? 1 : 12;

          dataGraph.push({
            name: edition.name,
            position
          });

          setData(dataGraph);
        });
      }
    })();
  }, [resCountries.response, resEdition.response, props.match.params.id]);

  if (!resCountries.response && !resEdition.response) {
    return <div>Loading...</div>
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1>{resCountries.response ? resCountries.response.name : ''}</h1>
            <ResponsiveContainer width="100%" height={500}>
              <LineChart
                data={data}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis reversed={true} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="position" stroke="#82ca9d" interval="0" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

Country.propTypes = {
  match: PropTypes.object,
}

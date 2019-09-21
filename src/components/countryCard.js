import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export default function CountryCard(props) {
  const { country } = props;

  return(
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="https://picsum.photos/1280/960" alt="Placeholder"></img>
        </figure>
      </div>
      <div className="card-content">
        <div className="field is-horizontal">
          <div className="field-label">
            <label className="label">Name</label>
          </div>
          <div className="field-body">
            <p>{country ? country.name : 'Mensaje de prueba'}</p>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label">
            <label className="label">Description</label>
          </div>
          <div className="field-body">
            <p>{country ? country.description : 'Descripción de prueba'}</p>
          </div>
        </div>
        <div className="field is-horizontal">
          <Link to={ country ? `/test/${country._id}` : '#' } className="button">See More</Link>
        </div>
      </div>
    </div>
  )
}

CountryCard.propTypes = {
  country: PropTypes.object,
}

import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const getDate = (date) => {
  var myDate = new Date(date)
  return myDate.toLocaleString();
}

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => 
    (
      <div key={item.hospitalDescription} className="column is-4">
        <section className="section hospital-tile">
          <div className="">
            <div
              style={{
                width: '180px',
                display: 'inline-block',
              }}
            >
              <a href={item.link} target="blank" className="clinic-image"><PreviewCompatibleImage imageInfo={item} /></a>
            </div>
          </div>
          <h5 className="clinic-name">{item.clinicName}</h5>
          <p>{item.hospitalDescription}</p>
          <p>{item.rating}</p>
          <p>{getDate(item.date)}</p>
          <p>{item.additionalInformation}</p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      hospitalDescription: PropTypes.string,
    })
  ),
}

export default FeatureGrid

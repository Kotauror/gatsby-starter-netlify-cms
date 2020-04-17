import React from "react";
import PropTypes from "prop-types";
import Tile from "../components/Tile";

const FeatureGrid = ({ gridItems }) => {
  return (
    <div className="columns is-multiline">
      {gridItems.map(item => (
        <Tile item={item} />
      ))}
    </div>
  );
};

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      hospitalDescription: PropTypes.string
    })
  )
};

export default FeatureGrid;

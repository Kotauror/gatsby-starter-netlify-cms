import React from "react";

import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const getDate = date => {
  var myDate = new Date(date);
  return myDate.toLocaleString();
};

const Tile = ({ item }) => (
  <div key={item.hospitalDescription} className="column is-4">
    <section className="section hospital-tile">
      <div className="">
        <div
          style={{
            width: "180px",
            display: "inline-block"
          }}
        >
          <a href={item.link} target="blank" className="clinic-image">
            <PreviewCompatibleImage imageInfo={item} />
          </a>
        </div>
      </div>
      <h5 className="clinic-name">{item.clinicName}</h5>
      <p>{item.hospitalDescription}</p>
      <p>{item.rating}</p>
      <p>{getDate(item.date)}</p>
    </section>
  </div>
);

export default Tile;

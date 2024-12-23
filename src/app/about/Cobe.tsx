"use client";
import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

const Cobe = () => {
  const globeRef = useRef<any>();
  const [countries, setCountries] = useState({ features: [] });
  useEffect(() => {
    // load data
    fetch("/countries.geojson")
      .then((res) => res.json())
      .then(setCountries);
    globeRef.current.controls().autoRotate = true; // set the auto-rotate
    globeRef.current.controls().enableZoom = false; // disables zoom
  }, []);

  useEffect(() => {
    console.log(countries);
  }, [countries]);

  return (
    <Globe
      ref={globeRef}
      animateIn
      backgroundColor={"rgba(0,0,0,0)"}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      width={800}
      hexPolygonsData={countries.features}
      hexPolygonResolution={3}
      hexPolygonMargin={0.3}
      hexPolygonUseDots={true}
      hexPolygonColor={() => `#ffffff`}
    //@ts-ignore
    // hexPolygonLabel={({ properties: d }) => `
    //   <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
    //   Population: <i>${d.POP_EST}</i>
    // `}
    />
  );
};

export default Cobe;

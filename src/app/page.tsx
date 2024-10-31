"use client";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useMapStore } from "./store/mapStore"; // Zustand store for global map management

const MapComponent = () => {
  const mapRef = useRef(null);
  const { setMap } = useMapStore(); // Zustand setters

  useEffect(() => {
    const mapboxgl = require("mapbox-gl");

    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2lyaXRvZWkiLCJhIjoiY2wxNHN4YjJwMDl4bjNsbzdmdnZ4OGg5bCJ9.xS2LGqPIbk3pUibim5g1mA";

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/light-v9",
      center: [10.33207, 47.60621],
      zoom: 3,
      projection: "mercator",
    });

    setMap(map);
  }, [setMap]);

  return (
    <div>
      <div ref={mapRef} style={{ height: "100vh", width: "100%" }}></div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(MapComponent), { ssr: false });

import React from "react";
import "jsvectormap";
import "jsvectormap/dist/maps/world.js";

//components
import BaseVectorMap from "./BaseVectorMap.tsx";

interface ItalyVectorMapProps {
  width?: string;
  height?: string;
  options?: any;
}

const ItalyVectorMap = ({ width, height, options }: ItalyVectorMapProps) => {
  return (
    <>
      <BaseVectorMap
        width={width}
        height={height}
        options={options}
        type="italy"
      />
    </>
  );
};

export default ItalyVectorMap;

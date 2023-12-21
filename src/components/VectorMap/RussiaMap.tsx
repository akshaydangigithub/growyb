import React from "react";
import "jsvectormap";
import "jsvectormap/dist/maps/world.js";

//components
import BaseVectorMap from "./BaseVectorMap.tsx";

interface RussiaVectorMapProps {
  width?: string;
  height?: string;
  options?: any;
}

const RussiaVectorMap = ({ width, height, options }: RussiaVectorMapProps) => {
  return (
    <>
      <BaseVectorMap
        width={width}
        height={height}
        options={options}
        type="russia"
      />
    </>
  );
};

export default RussiaVectorMap;

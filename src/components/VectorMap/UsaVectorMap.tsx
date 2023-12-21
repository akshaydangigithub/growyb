import React from "react";
import "jsvectormap";
import "jsvectormap/dist/maps/world-merc.js";

//components
import BaseVectorMap from "./BaseVectorMap.tsx";

interface UsaVectorMapProps {
  width?: string;
  height?: string;
  options?: any;
}

const UsaVectorMap = ({ width, height, options }: UsaVectorMapProps) => {
  return (
    <>
      <BaseVectorMap
        width={width}
        height={height}
        options={options}
        type="us_merc_en"
      />
    </>
  );
};

export default UsaVectorMap;

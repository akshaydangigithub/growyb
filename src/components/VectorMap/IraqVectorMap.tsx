import React from "react";
import "jsvectormap";
import "jsvectormap/dist/maps/world.js";

//components
import BaseVectorMap from "./BaseVectorMap.tsx";

interface IraqVectorMapProps {
  width?: string;
  height?: string;
  options?: any;
}

const IraqVectorMap = ({ width, height, options }: IraqVectorMapProps) => {
  return (
    <>
      <BaseVectorMap
        width={width}
        height={height}
        options={options}
        type="iraq"
      />
    </>
  );
};

export default IraqVectorMap;

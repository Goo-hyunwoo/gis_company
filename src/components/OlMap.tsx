import React, { useContext, useEffect, useRef } from "react";
import { OlContext } from "../context/openlayers/OlContext";

interface Props {
  children?: React.ReactNode;
}

export default function OlMap({ children }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapContext = useContext(OlContext);
  useEffect(() => {
    if (!mapContext) return;
    if (mapRef && mapRef.current) {
      mapContext.init(mapRef);
    }
    return () => {
      if (mapContext.map.current) {
        mapContext.destroy();
      }
    };
  }, [mapContext]);

  return (
    <div ref={mapRef} style={{ width: 1200, height: 800 }}>
      {children}
    </div>
  );
}

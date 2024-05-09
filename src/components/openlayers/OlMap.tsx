import React, { useContext, useEffect, useRef } from "react";
import { OlContext } from "../../context/openlayers/OlContext";
import styled from "@emotion/styled";

interface Props {
  children?: React.ReactNode;
}

const Div = styled.div`
  overflow: hidden;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 390px;
  right: 0;
  z-index: 0;
`;

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

  return <Div ref={mapRef}>{children}</Div>;
}

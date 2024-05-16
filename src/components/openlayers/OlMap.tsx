import React, { useContext, useEffect, useRef } from "react";
import { OlContext } from "../../context/openlayers/OlContext";
import styled from "@emotion/styled";

interface Props {
  flag: boolean;
  children?: React.ReactNode;
}

interface DivProps {
  flag: boolean;
}

const Div = styled.div<DivProps>`
  overflow: hidden;
  position: absolute;
  bottom: 0;
  top: 0;
  left: ${(props) => (props.flag ? "390px" : "0px")};
  right: 0;
  z-index: 0;
`;

export default function OlMap({ children, flag }: Props) {
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
    <Div flag={flag} ref={mapRef}>
      {children}
    </Div>
  );
}

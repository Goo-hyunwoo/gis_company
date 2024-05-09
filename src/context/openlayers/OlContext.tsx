import React, { useRef } from "react";
import { Map as OlMap } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import View from "ol/View.js";
import { fromLonLat, get as getProjection } from "ol/proj";

interface OlContextInterface {
  map: React.MutableRefObject<OlMap | undefined>;
  init: (mapRef: React.RefObject<HTMLDivElement>) => void;
  destroy: () => void;
}

export const OlContext = React.createContext<OlContextInterface | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function OlContextProvider({ children }: Props) {
  const map = useRef<OlMap | undefined>(undefined);

  const init = (mapRef: React.RefObject<HTMLDivElement>) => {
    if (!mapRef.current) return;

    const osmLayer = new TileLayer({
      source: new OSM(),
    });

    const root = new OlMap({
      layers: [osmLayer],
      target: mapRef.current,
      view: new View({
        projection: getProjection("EPSG:3857")!,
        center: fromLonLat([126.752, 37.4713], getProjection("EPSG:3857")!),
        zoom: 7,
        minZoom: 1,
        maxZoom: 17,
      }),
      controls: [
        /*new Rotate()*/
      ],
    });

    map.current = root;
  };

  const destroy = () => {
    if (map.current) {
      map.current.setTarget(undefined);
      map.current = undefined;
    }
  };

  return (
    <OlContext.Provider value={{ map, init, destroy }}>
      {children}
    </OlContext.Provider>
  );
}

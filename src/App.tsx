import React, { useState } from "react";
import OlContextProvider from "./context/openlayers/OlContext";
import OlMap from "./components/openlayers/OlMap";
import Search from "./pages/search/Search";
import Info from "./pages/info/Info";
import Shadow from "./pages/info/Shadow";

function App() {
  const [flag, setFlag] = useState<boolean>(true);
  return (
    <OlContextProvider>
      <>
        {flag && (
          <>
            <Search />
            <Info />
          </>
        )}

        <Shadow flag={flag} setFlag={setFlag} />
        <OlMap flag={flag} />
      </>
    </OlContextProvider>
  );
}

export default App;

// DeviceContext.js
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import MobileDetect from "mobile-detect";

// Create the context
export const DeviceContext = createContext();

// Create the provider component
export const DeviceProvider = ({ children }) => {
  const [deviceType, setDeviceType] = useState("Desktop");
  const [os, setOs] = useState("");

  useEffect(() => {
    const md = new MobileDetect(window.navigator.userAgent);
    if (md.phone()) {
      setDeviceType("Phone");
    } else if (md.tablet()) {
      setDeviceType("Tablet");
    } else {
      setDeviceType("Desktop");
    }

    setOs(md.os());
  }, []);

  return (
    <DeviceContext.Provider value={{ deviceType, os }}>
      {children}
    </DeviceContext.Provider>
  );
};

DeviceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

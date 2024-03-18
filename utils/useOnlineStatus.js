import React, { useState } from "react";
import { useEffect } from "react";
const useOnlineStatus = () => {
  // check if online

  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  // boolean Value
  return onlineStatus;
};

export default useOnlineStatus;

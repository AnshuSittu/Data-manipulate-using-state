import React, { createContext } from "react";

const userContext = createContext({
    logedInUser : "Default User"
});

export default userContext;
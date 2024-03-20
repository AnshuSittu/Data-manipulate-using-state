import React, { createContext } from "react";

const userContext = createContext({
    logedInUser : "Anshu" // Given Default User as Anshu insted of Default User
});

export default userContext;
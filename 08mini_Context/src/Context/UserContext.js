import React from "react";
import { createContext } from "react";

const UserContext = createContext()

export default UserContext;

//Every context is a provider that provides a variable and act as a global object. Providers wrap all the components(or those which you want to wrap) and these components can access the data from these providers
// Example - <UserContext >
//     <login />
//     <card>
//         <Data />
//     </card>
//     <password />
//  </UserContext>
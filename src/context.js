import { createContext, useState } from "react";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([
        {
            name: "udaya",
            email: "udayabca@gmail.com",
            password: "udaya1011",
            amount: 1000
        }
    ]);
    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
};
export default UserContext;
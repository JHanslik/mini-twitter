import { createContext, useState } from "react";

const UserContext = createContext({});

const UserContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState("");

    const value = {
        user,
        setUser,
        token,
        setToken,
    };

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
};

export { UserContextProvider, UserContext };

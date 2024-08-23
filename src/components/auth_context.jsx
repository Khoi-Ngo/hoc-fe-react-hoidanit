import { createContext, useState } from 'react';


//!  a GLOBAL VAR || A special var containing multiple vars state and allow the inside of the wrapper accessing all

export const AuthContext = createContext();


//! create component to cover all app and passing the global var
export const AuthWrapper = (props) => {

    const [userLogin, setUserLogin] = useState({
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: ""
    });

    const [otherStuffRelatingAuth, setOtherStuffRelatingAuth] = useState();

    return (
        <AuthContext.Provider value={{ userLogin, setUserLogin, otherStuffRelatingAuth, setOtherStuffRelatingAuth }}>
            {props.children}
            {/* this is child place holder if nothing then not show if having then show basing or page design */}
        </AuthContext.Provider>
    );

    //this wrapper will wrap on the HTML code and allow the inside component access the AuthContext var 
}

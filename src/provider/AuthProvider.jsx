import { createContext, useEffect, useState } from "react";

import auth from "../firebase/Firebase.Config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

/* eslint-disable-next-line react-refresh/only-export-components */
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(false)
        return createUserWithEmailAndPassword (auth, email, password)
    }

    const loginUser = (email, password) =>{
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = ()=>{
        setLoading(false)
        return signOut(auth)
    }



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
            }
        })
        return ()=>{
            return unsubscribe();
        }
    } ,[])

    const UserInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOutUser
        
    }
    return (
        <AuthContext.Provider  value={UserInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
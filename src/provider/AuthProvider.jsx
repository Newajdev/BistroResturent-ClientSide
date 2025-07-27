import { createContext, useEffect, useState } from "react";

import auth from "../firebase/Firebase.Config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

/* eslint-disable-next-line react-refresh/only-export-components */
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const AxiosPublic = useAxiosPublic()

    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        setLoading(false)
        return signOut(auth)
    }

    const UpdateUser = (Name, ImageURL) => {
        setLoading(false)
        return updateProfile(auth.currentUser, { displayName: Name, photoURL: ImageURL })

    }

    const googleLogin = () => {
        setLoading(false)
        return signInWithPopup(auth, googleProvider)

    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // --------------------------------------JWT Token-------------------------------------------------
            if (currentUser) {
                const userInfo = { email: currentUser.email }
                AxiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if (res.data.token) {
                        localStorage.setItem('Acces-Token', res.data.token)
                    }
                })
                .catch()
                
            } else {
                localStorage.removeItem('Acces-Token')
            }
            // ----------------------------------------JWT Token-----------------------------------------------

            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const UserInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOutUser,
        UpdateUser,
        googleLogin

    }
    return (
        <AuthContext.Provider value={UserInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
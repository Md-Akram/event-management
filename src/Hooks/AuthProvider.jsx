import { createContext, useEffect, useState } from "react"
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";

import { auth } from "./Firebase-config";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const provider = new GoogleAuthProvider();

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(!loading)
        })

        return () => {
            return unsub()
        }
    }, [])

    const logInWithGoogle = () => {
        return signInWithPopup(auth, provider)

    }

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut = () => {
        signOut(auth).then(() => {
            toast.success('signout successful');
            setUser(null)
        }).catch((error) => {
            console.log(error);
        })
    }

    const value = {
        user,
        setUser,
        logIn,
        logOut,
        logInWithGoogle,
        register,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
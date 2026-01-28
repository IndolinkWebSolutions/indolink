import { Children, createContext, useEffect, useState } from "react";
import api from "../api/api";


export const AuthContext= createContext();

export const AuthProvider = ({children}) =>{
    const [user,setUser]=useState(null);
    const [loading,setLoading]= useState(true);

    const loadUser = async ()=>{
        try {
            const res = await api.get("/me/");
            setUser(res.data.user)
        } catch {
            setUser(null)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        loadUser();
    },[])

return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
)
};
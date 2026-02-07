import { createContext, useEffect, useState } from "react";
import api from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    const token = localStorage.getItem("access");

    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const res = await api.get("/user/me/");
      setUser(res.data);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };


  return (
    <AuthContext.Provider value={{ user, setUser,loadUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};





// import { Children, createContext, useEffect, useState } from "react";
// import api from "../api/api";


// export const AuthContext= createContext();

// export const AuthProvider = ({children}) =>{
//     const [user,setUser]=useState(null);
//     const [loading,setLoading]= useState(true);

//     const loadUser = async ()=>{
//         try {
//             const res = await api.get("/dashboard");
//             setUser(res.data.user)
//         } catch {
//             setUser(null)
//         }
//         finally{
//             setLoading(false)
//         }
//     }

//     useEffect(()=>{
//         loadUser();
//     },[])

// return (
//     <AuthContext.Provider value={{ user, setUser, loading }}>
//       {children}
//     </AuthContext.Provider>
// )
// };
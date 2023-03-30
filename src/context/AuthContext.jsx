import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);

  const login = () => {
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext)
}

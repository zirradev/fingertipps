import React from "react";

const AuthContext = React.createContext({
  loggedInUser: undefined,
  updateLoginContext: () => null,
  logout: () => null,
});

const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = React.useState();
  const updateLoginContext = React.useCallback((data) => {
    setLoggedInUser(data);
  }, []);
  const logout = React.useCallback((data) => {
    setLoggedInUser(null);
  }, []);
  return (
    <AuthContext.Provider value={{ loggedInUser, updateLoginContext, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export default AuthProvider;

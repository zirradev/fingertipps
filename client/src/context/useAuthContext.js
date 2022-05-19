import React from "react";

const AuthContext = React.createContext({
  loggedInUser:
    typeof localStorage.getItem("user") === "object"
      ? JSON.parse(localStorage.getItem("user"))
      : null,
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
  React.useEffect(() => {
    localStorage.setItem("user", JSON.stringify(loggedInUser));
  }, [loggedInUser]);
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

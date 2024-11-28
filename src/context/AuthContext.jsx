import { createContext, useContext, useState, useMemo } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize states from localStorage and Cookies
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => Cookies.get("token") || null);

  const [location, setLocation] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("location")) || null;
    } catch {
      return null;
    }
  });

  // Logout function
  const logout = () => {
    try {
      Cookies.remove("token");
      localStorage.removeItem("user");
      setUser(null);
      setToken(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Login function
  const login = (newToken, userData, locationData) => {
    try {
      Cookies.set("token", newToken, { expires: 1 }); // Token expires in 1 day
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("location", JSON.stringify(locationData));
      setToken(newToken);
      setUser(userData);
      setLocation(locationData);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // Update location
  const updateLocation = (locationData) => {
    try {
      setLocation(locationData);
      localStorage.setItem("location", JSON.stringify(locationData));
    } catch (error) {
      console.error("Location update error:", error);
    }
  };
  // Update user
  const updateUser = (userData) => {
    try {
      setLocation(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      console.error("Location update error:", error);
    }
  };

  // Memoize context value to optimize performance
  const contextValue = useMemo(
    () => ({
      user,
      token,
      location,
      updateLocation,
      updateUser,
      setUser,
      logout,
      login,
    }),
    [user, token, location]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// src/auth.js
export const login = (role) => {
    localStorage.setItem("role", role);
  };
  
  export const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  
  export const getRole = () => localStorage.getItem("role");
  
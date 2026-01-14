export const loginUser = (token, role) => {
  localStorage.setItem("token", token);
  localStorage.setItem("role", role);
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};

export const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};

export const isAdmin = () => {
  return localStorage.getItem("role") === "admin";
};

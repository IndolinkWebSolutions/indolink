import api from "./api";

// ADD product
export const addProduct = (data) => {
  return api.post("/products", data);
};

// GET saved products
export const getSavedProducts = () => {
  return api.get("/products/saved");
};

// GET profile
export const getProfile = () => {
  return api.get("/user/profile");
};

// UPDATE profile
export const updateProfile = (data) => {
  return api.put("/user/profile", data);
};

// UPDATE password
export const updatePassword = (data) => {
  return api.put("/user/password", data);
};


//login
export const login = () => {
  return api.post("/user/login");
};

//Signup
export const signup = () => {
  return api.post("/user/signup");
};

//logout
export const logout = () => {
  return api.post("/user/logout");
};

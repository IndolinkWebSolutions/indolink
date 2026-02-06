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
  return api.get("/user/me/");
};

// UPDATE profile
export const updateProfile = (data) => {
  return api.put("/user/me/update/", data);
};

// UPDATE password
export const updatePassword = (data) => {
  return api.put("/user/password", data);
};


//login
export const login = (data) => {
  return api.post("/user/login/", data);
};

//Signup
export const signup = (data) => {
  return api.post("/user/signup/", data);
};

//logout
export const logout = () => {
  return api.post("/dashboard/logout/");
};

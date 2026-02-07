import api from "./api";

// ================== PRODUCTS ==================

// ADD product
export const addProduct = (data) => {
  return api.post("/products", data);
};

// GET saved products
export const getSavedProducts = () => {
  return api.get("/products/saved");
};

// SEARCH products
export const searchProducts = (query) => {
  return api.get(`/search?query=${query}`);
};


// ================== CATEGORIES ==================

// api/index.js (or api.js)


// GET all categories
export const getCategories = () => {
  return api.get("/products/categories/");
};


// GET single category + products by slug
export const getCategoryDetails = (slug) => {
  return api.get(`/categories/${slug}`);
};

// ================== USER ==================

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

// ================== AUTH ==================

// login
export const login = (data) => {
  return api.post("/user/login/", data);
};

// Signup
export const signup = (data) => {
  return api.post("/user/signup/", data);
};

// logout
export const logout = () => {
  return api.post("/dashboard/logout/");
};

import api from "./api.js";
import publicApi from "./publicApi.js";

//========================================
//============Public API =================
//========================================


// GET all categories
export const getCategories = () => {
  return publicApi.get("/products/categories/");
};

// GET single category + products by slug
export const getCategoryDetails = (slug) => {
  return publicApi.get(`/categories/${slug}`);
};

//Create enquiry form
export const enquiryForm = (formData)=>{
  return publicApi.post("enquiries/home-enquiry/", formData)
}


// login
export const login = (data) => {
  return publicApi.post("user/login/", data);
};

// Signup
export const signup = (data) => {
  return publicApi.post("user/signup/", data);
};

// SEARCH products
export const searchProducts = (q) =>{
  return publicApi.get(`/products/search/?q=${q}`);
  };

export const searchLeads = (q) =>{
  return publicApi.get(`/leads/search/?q=${q}`);
};

//===========================================================
//============== only for authenticate user==================
//===========================================================


// ADD product
export const addProduct = (data) => {
  return api.post("dashboard/addproducts/", data);
};

// GET saved products
export const getSavedProducts = () => {
  return api.get("dashboard/addproducts/");
};

// GET profile
export const getProfile = () => {
  return api.get("user/me/");
};

// UPDATE profile
export const updateProfile = (data) => {
  return api.put("dashboard/company-profile/", data);
};

// UPDATE password
export const updatePassword = (data) => {
  return api.put("user/password", data);
};

// logout
export const logout = async () => {
  const refresh = localStorage.getItem("refresh");

  try {
    if (refresh) {
      await api.post("dashboard/logout/", { refresh });
    }
  } catch (error) {
    console.log(error);
  }

  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  window.location.href = "/login";
};

import api from "./api.js";
import publicApi from "./publicApi.js";

//========================================
//============Public API =================
//========================================

// GET all categories
export const getCategories = () => {
  return publicApi.get("/products/categories/");
};

// GET sub Category
export const getSubCategory = (slug) => {
  return publicApi.get(`/categories/${slug}`);
};

//Create enquiry form
export const enquiryForm = (formData) => {
  return publicApi.post("enquiries/home-enquiry/", formData);
};

// login
export const login = (data) => {
  return publicApi.post("user/login/", data);
};

// Signup
export const signup = (data) => {
  return publicApi.post("user/signup/", data);
};

// SEARCH products
export const searchProducts = (q) => {
  return publicApi.get(`/products/search/?q=${q}`);
};

export const searchLeads = (q) => {
  return publicApi.get(`/leads/search/?q=${q}`);
};

// GET Single Product Details
export const getProductDetails = (slug) => {
  return publicApi.get(`/products/products/${slug}/`);
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

// Add Company
export const addCompanyProfile = (data) => {
  return api.post("dashboard/company-profile/", data);
};

// Get Company
export const getCompanyProfile = () => {
  return api.get("/dashboard/company-profile/");
};

// Leads                    
export const getLeads = (pageSize = 20) => {
  return publicApi.get(`/leads/search/?page_size=${pageSize}`);
};

// GET Latest Leads (Dashboard)
export const getLatestLeads = () => {
  return publicApi.get("/leads/search/?page_size=5");
};

// export const getHistoryLeads = ()=>{
//   return api.get("leadsaccess/decrypt/<int:lead_id>/");

// }

export const getGroupedLeads = (slug) => {
  return publicApi.get(`/leads/group/${slug}/`);
};

// Unlock Lead
export const unlockLeadApi = (lead_id) => {
  return api.post(`leads/unlock/${lead_id}/`);
};


// Leads History (User Specific)
export const getHistoryLeads = () => {
  return api.get(`leads/history/`);
};
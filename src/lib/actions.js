"use server";
import { setCookie } from "cookies-next";
import { cookies } from "next/headers";
const { Expired_time, BASE_URL } = require("./utils");

// login-form.jsx
async function handleLogin({ email, password }) {
 
 
  try {
    
    // const response = await fetch(BASE_URL + "/dashboard/login/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // });
    // const data = await response.json();

    // if (response.status === 200) {
      setCookie("token", "123456789", { cookies }, Expired_time);
     
      return {
        status: 200,
        success: "Admin logged in successfully" };  // This will be used for success
    // } else if (response.status === 400) {
    //   return {
    //     status: 400,
    //     message: data.error,
    //   };
    // } else if (response.status === 401) {
    //   return { message: data?.detail };
    // } else {
    //   return { message: "Something went wrong, please try again later" };
    // }
  } catch (error) {
    console.log("Error", error);
    return { message: error.message || "An error occurred" };
  } 
}

export { handleLogin };

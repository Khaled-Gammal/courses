"use server";
import { getCookie, hasCookie } from "cookies-next";
import { BASE_URL } from "../utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GetDataInServerSide(
  End_Point = "",
  page,
  ExtraMethod = {},
  Authorization = true,
 
) {
  /*
   * Default Headers If Not Provided Or Not Valid.
   */
  let headers = Authorization
    ? {
      "Content-Type": "application/json",
      Authorization: hasCookie("token", { cookies }) ? `Token ${getCookie("token", { cookies })}` : getCookie("session", { cookies }),
    }
    : {
      "Content-Type": "application/json",
    };

  let redirectPath;
 
  try {
    console.log(page);
    if (page) {
      page = { page: page };
    }
    
    const queryParams = new URLSearchParams(page);
   console.log(queryParams);
   
    const fullEndpoint = `${BASE_URL}${End_Point}?${queryParams.toString()}`;
    console.log(fullEndpoint)
    const response = await fetch(fullEndpoint, {
      method: "GET",
      headers: headers,
      // ? if You Want To Use Extra Method For Request Such as Cache Control, etc.
      cache: "no-store",
    });
    const data = await response.json();
    if ( response.status === 200) {
      return data;
    } else if (response.status === 401) {
      redirectPath = "/login";
    } else {
      throw new Error(
        data.message || response.error || response?.data?.message
      );
    }
  } catch (error) {
    // throw new Error(
    //   error?.response?.data?.message ||
    //   "Something went wrong please try again later !!!"
    // );
  } finally {
    redirectPath && redirect(redirectPath);
  }
}
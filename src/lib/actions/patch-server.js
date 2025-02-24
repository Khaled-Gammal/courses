'use server';
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { BASE_URL } from "../utils";
import { revalidatePath } from "next/cache";
export async function handleUpdateInServer(
    END_POINT,
    method = "PAATCH",
    formData,
    requestHeader = true,
    dataType = "formData",
    path
  ) {
    let redirectPath;
    const header = requestHeader
      ? {
          "Content-Type": "application/json",
          Authorization: `Token ${getCookie("token", { cookies })}`,
        }
      : {
          Authorization: `Token ${getCookie("token", { cookies })}`,
        };
  
    try {
      const response = await fetch(BASE_URL + END_POINT, {
        method: method,
        body: dataType === "formData" ? formData : JSON.stringify(formData),
        headers: header,
      });
      const data = await response.json();
      console.log("data=> ", data);

      if (response.ok) {
        revalidatePath(path);
        return {
          success: "Item updated successfully",
          data: data,
        };
      } else if (response.status === 403) {
        return {
          error: data.detail || "You are not authorized to perform this action",
        };
      } else {
        return {
          error: data.detail || "Something went wrong",
        };
      }
    } catch (error) {
      console.error(error);
  
      return {
        error: error.message || "Something went wrong please try again later !!!",
      };
    }
  }
  
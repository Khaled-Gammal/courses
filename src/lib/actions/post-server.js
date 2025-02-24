"use server";
import { getCookie } from "cookies-next";
import { BASE_URL } from "../utils";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function handlePostInServer(
  End_Point,
  data,
  path,
  requestHeader,
  dataType = "formData"
) {
  // headers
  console.log(End_Point, "data=>", data, path, requestHeader, dataType);
  const header = requestHeader
    ? {
        "Content-Type": "application/json",
        Authorization: `Token ${getCookie("token", { cookies })}`,
      }
    : {
        Authorization: `Token ${getCookie("token", { cookies })}`,
      };

  try {
    const response = await fetch(BASE_URL + End_Point, {
      method: "POST",
      body: dataType === "formData" ? data : JSON.stringify(data),
      headers: header,
    });

    const res = await response.json();
    console.log(res);

    if (response.ok) {
      revalidatePath(path);
      return {
        success: res.message || "Item added successfully",
        data: res.data,
      };
    } else if (response.status === 403) {
      return {
        error: res.detail || "You are not authorized to perform this action",
      };
    } else if (response.status === 400) {
      return {
        error: res.error || "Something went wrong",
      };
    } else {
      return {
        error: res.detail || "Something went wrong",
      };
    }
  } catch (error) {
    return {
      error: error.message || "Something went wrong please try again later !!!",
    };
  }
}

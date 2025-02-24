"use server";
import { getCookie, hasCookie } from "cookies-next";
import { BASE_URL } from "../utils";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function handleDeleteRow(End_Point, id, path) {
    let redirectPath;
  console.log(id, "id=>", End_Point, "End_Point=>", path, "path=>");
    try {
      const response = await fetch(BASE_URL + End_Point + id + "/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: hasCookie("token", { cookies }) ? `Token ${getCookie("token", { cookies })}` : getCookie("session", { cookies }),
        },
      });
      console.log("response=>", response);
      let data = {};
      if (response.status !== 204) {
        // 204 No Content
        const text = await response.text();
        try {
          data = JSON.parse(text);
        } catch (e) {
          throw new Error(e?.message || e);
          // Handle malformed JSON or unexpected content here
        }
      }
  
      if (response.ok) {
        // Shorthand for status 200-299
        revalidatePath(path);
        return { success: "Record deleted successfully" };
      } else if (response.status === 401) {
        deleteCookie("token", { cookies });
        redirectPath = "/login";
      } else {
        return {
          error: data.message || response.error || response?.data?.message,
        };
      }
    } catch (e) {
      throw new Error(e?.message || e);
    } finally {
      redirectPath && redirect(redirectPath);
    }
  }
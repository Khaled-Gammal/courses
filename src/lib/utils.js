import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const PRODUCTION_URL=process.env.NEXT_PUBLIC_PRODUCTION_URL
export let Expired_time = {
  maxAge: 60 * 60 * 24 * 30
}
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function compareData  (originalData, updatedData){
  const changes = {};
  Object.keys(originalData).forEach(key => {
    if (originalData[key] !== updatedData[key]) {
      changes[key] = updatedData[key];
    }
  });
  return changes;
};
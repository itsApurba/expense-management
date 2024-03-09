import { cookies } from "next/headers";
import qs from "qs";

export async function fetchAPI(path: string, queryString = "", options = {}) {
  try {
    const token = cookies().get("toK")?.value || "{}"
    // Merge default and user options
    const mergedOptions = {
        next: { revalidate: 60 },
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        ...options,
    };
    
    // Build request URL
    // const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${process.env.NEXT_PUBLIC_API_URL}${path}${queryString ? `?${queryString}` : ""}`;
    
    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    // console.error(error);
    // throw new Error(`Please check if your server is running and you set all the required tokens.`);
  }
}

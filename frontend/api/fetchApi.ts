// import { cookies } from "next/headers";
// import qs from "qs";

// // export const fetchApi = async (url: string, options?: RequestInit) => {
// //   const refreshToken = JSON.parse(cookies().get("toK")?.value || "{}");

// //   if (refreshToken) {
// //     const response = await fetch(url, {
// //       ...options,
// //       headers: {
// //         ...options?.headers,
// //         Authorization: `Bearer ${refreshToken.value}`,
// //       },
// //       body: JSON.stringify(options?.body),
// //     });
// //   }
// // };

// export async function fetchAPI(path: string, urlParamsObject = {}, options = {}) {
//   try {
//     const token = JSON.parse(cookies().get("toK")?.value || "{}");
//     // Merge default and user options
//     const mergedOptions = {
//       next: { revalidate: 60 },
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       ...options,
//     };

//     // Build request URL
//     const queryString = qs.stringify(urlParamsObject);
//     const requestUrl = `${process.env.NEXT_PUBLIC_API_URL}${path}${queryString ? `?${queryString}` : ""}`;

//     // Trigger API call
//     const response = await fetch(requestUrl, mergedOptions);
//     // const data = await response.json();
//     const data = response;
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw new Error(`Please check if your server is running and you set all the required tokens.`);
//   }
// }

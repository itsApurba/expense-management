import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function login(formData: any) {
  // Verify credentials && get the user

  console.log(formData)
  console.log(formData.get("password"))

//   const user = { email: formData.get("email"), password: formData.get("password") };

//   const session = await fetch("http://localhost:3001/v1/auth/login", {
//     method: "POST",
//     body: JSON.stringify(user),
//   });
//   const res = await session.json();
//   console.log(res)
//   const tokens = await res.tokens;
//   const access = await tokens.access;
//   const expires = await access.expires;
// //   Save the session in a cookie
//   cookies().set("mysession", access.token, { expires: new Date(expires) });
}
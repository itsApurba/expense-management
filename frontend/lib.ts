import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function login(formData: any) {
  // Verify credentials && get the user

  const user = { email: formData.get("email"), password: formData.get("password") };

  try {
    const session = await fetch("http://localhost:3001/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const res = await session.json();
    // console.log(res);
    if (session.status === 200) {
      const tokens = await res.tokens;
      const access = await tokens.access;
      const expires = await access.expires;
      //   Save the session in a cookie
      cookies().set("toK", access.token, { expires: new Date(expires) });
    } else {
      console.log(res);
      throw new Error(res);
    }
  } catch (error) {
    console.log(error);
  }
}

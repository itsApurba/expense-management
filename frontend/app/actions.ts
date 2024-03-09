"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(prevState: any, formData: FormData) {
  // Verify credentials && get the user
  //   console.log(prevState, formData);

  //   try {
  const user = { email: formData.get("email"), password: formData.get("password") };
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
    console.log(res.user.id);
    cookies().set("user", JSON.stringify(res.user.id), { expires: new Date(expires) });
    // return { success: res.message, status: res.code };
    return { ...prevState, error: "", message: "OK" };
  } else {
    // return { error: res.message, status: res.code };
    return { ...prevState, error: res.message };
  }
  //   } catch (error) {
  //     return { ...prevState, error: "Connection Error" };
  //     // throw error
  //   }
}

export async function logout() {
  const response = await fetch("http://localhost:3001/v1/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken: cookies().get("toK")?.value }),
  });
  cookies().delete("toK");
  cookies().delete("user");
  redirect("/login");
}

// export async function getUser() {
//   const user = cookies().get("user")?.value;
//   return user;
// }

export async function createUser(prevState: any, formData: FormData) {
  console.log(prevState, formData);

  try {
    const manager = cookies().get("user")?.value;
    const toK = cookies().get("toK")?.value;
    const payload = {
      email: formData.get("email"),
      name: formData.get("name"),
      password: formData.get("password"),
      manager: manager?.split('"').join(''),
    }
    console.log(payload);
    const response = await fetch("http://localhost:3001/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${toK}`,
      },
      // body: JSON.stringify({ email: formData.get("email"), name: formData.get("name"), password: formData.get("password"), manager: user }),
      body: JSON.stringify(payload),
    });
    const res = await response.json();
    console.log(res);
    if (response.status === 201) {
      return { ...prevState, error: "", message: "OK" };
    } else {
      return { ...prevState, error: res.message };
    }
  } catch (error) {
    console.log(error);
    return { ...prevState, error: "Something went wrong" };
  }
}

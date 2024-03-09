"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
// import { login } from "@/lib";
import { redirect } from "next/navigation";
import SubmitButton from "./Submit";
import { useFormState } from "react-dom";
import { login } from "@/app/actions";
import { Button } from "./ui/button";

const initialState = {
  error: "",
  message: "",
};

const Login = () => {
  const [state, formAction] = useFormState(login, initialState);
  if (state?.message === "OK") {
    redirect("/dashboard");
  }

  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <label htmlFor='email'>Email</label>
              <Input name='email' type='email' placeholder='Enter email' required />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <label htmlFor='password'>Password</label>
              <Input name='password' type='password' placeholder='Enter password' required minLength={8} />
            </div>
            {/* <SubmitButton /> */}
            <p className='text-red-500'>{state?.error}</p>
            <Button type='submit'>Login</Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-end'></CardFooter>
    </Card>
  );
};

export default Login;

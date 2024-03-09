import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { login } from "@/lib";
import { redirect } from "next/navigation";

const Login = async () => {
  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          action={async (formData) => {
            "use server";
            await login(formData);
            redirect("/");
          }}
        >
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <label htmlFor='email'>Email</label>
              <Input id='email' type='email' placeholder='Enter email' required />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <label htmlFor='password'>Password</label>
              <Input id='password' type='password' placeholder='Enter password' required min={8} />
            </div>
          </div>
          <Button type='submit'>Login</Button>
        </form>
      </CardContent>
      <CardFooter className='flex justify-end'></CardFooter>
    </Card>
  );
};

export default Login;

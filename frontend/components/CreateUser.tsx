"use client";

import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useFormState } from "react-dom";
import { createUser } from "@/app/actions";
import SubmitButton from "./Submit";

const initialState = {
  error: "",
  message: "",
};

const CreateUser = () => {
  const [state, formAction] = useFormState(createUser, initialState);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Create User</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <form action={formAction}>
          <DialogHeader>
            <DialogTitle>Create User</DialogTitle>
            <DialogDescription>Create a new user and manage them.</DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='email' className='text-right capitalize'>
                email
              </Label>
              <Input name='email' type='email' placeholder='Enter email' className='col-span-3' />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right capitalize'>
                name
              </Label>
              <Input name='name' id='name' placeholder='Enter user name' className='col-span-3' />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='password' className='text-right capitalize'>
                password
              </Label>
              <Input name='password' id='password' placeholder='Enter user password' className='col-span-3' />
            </div>
          </div>
          <DialogFooter>
            {state.error && <p className='text-red-500'>{state.error}</p>}
            {state.message && <p className='text-green-500'>{state.message}</p>}
            <SubmitButton />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateUser;

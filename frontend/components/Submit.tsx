"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type='submit' aria-disabled={pending}>
      Login
    </Button>
  );
}

export default SubmitButton;

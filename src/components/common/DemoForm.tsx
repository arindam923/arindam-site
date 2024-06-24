import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Props = {};

export default function DemoForm({}: Props) {
  const testForm = async (formData: FormData) => {
    "use server";

    const name = formData.get("name");

    console.log("name", name);
  };

  return (
    <form method="POST" action={testForm}>
      <Input name="name" type="text" />
      <Input name="email" type="email" />
      <Button type="submit">submit</Button>
    </form>
  );
}

"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import { CheckedState } from "@radix-ui/react-checkbox";
import { DatePickerDemo } from "./DatePicker";
import { toast } from "sonner";

const FormDialog = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [shouldWeCall, setShouldWeCall] = useState<CheckedState>();
  const [projectExplanation, setProjectExplanation] = useState("");

  const [date, setDate] = useState<Date>();

  const onSubmit = () => {
    setEmail("");
    setName("");
    setProjectExplanation("");
    toast("Data submitted Successfully", {
      description: `A meeting has been set for ${date} `,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary/10 hover:text-white px-4 shadow-md py-2 text-primary rounded-md ">
          Get Started
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-none bg-neutral-950">
        <DialogHeader>
          <DialogTitle className="">Get Started</DialogTitle>
          <DialogDescription>
            Now Schedule a call with us right now ? Or you can discuss the
            projecy with us for free.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="text-sm space-y-2">
            <Label className="text-xs" htmlFor="email">
              Email Address
            </Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-neutral-800  border-none"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="text-sm space-y-2">
            <Label className="text-xs" htmlFor="name">
              Full Name
            </Label>
            <Input
              className="bg-neutral-800 border-none"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Enter your Full Name"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={shouldWeCall}
              onCheckedChange={(val) => setShouldWeCall(val)}
              id="call"
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Schedule a Call ?
            </label>
          </div>
          {shouldWeCall && <DatePickerDemo date={date} setDate={setDate} />}
          <div className="text-sm space-y-2">
            <Label className="text-xs" htmlFor="name">
              Explain your Project
            </Label>
            <Textarea
              value={projectExplanation}
              onChange={(e) => setProjectExplanation(e.target.value)}
              className="bg-neutral-800 border-none"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onSubmit} className="w-full" type="submit">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;

"use client";

import React, { useState } from "react";
import { z } from "zod";
import { CardWrapper } from "./card-wrapper";
import { newVerification } from "@/actions/new-verification";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

// Define zod schema for OTP validation
const otpSchema = z
  .string()
  .length(6, "OTP code must be exactly 6 digits")
  .regex(/^\d+$/, "OTP code must contain only numbers");

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    setError(undefined);
    const validation = otpSchema.safeParse(value);
    if (!validation.success) {
      setError(validation.error.errors[0].message);
      return;
    }

    if (success) return;
    newVerification(value)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
        if (data.success) {
          router.push("/auth/login");
        }
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  };

  return (
    <CardWrapper
      headerLabel="Check your Email"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
      subHeading="Enter the Verification code"
    >
      <div className="flex items-center w-full justify-center">
        <InputOTP
          maxLength={6}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="w-max m-auto">
        <Button className="mt-5" onClick={handleSubmit}>
          Verify
        </Button>
      </div>
      {success && <FormSuccess message={success} />}
      {error && <FormError message={error} />}
    </CardWrapper>
  );
};

export default NewVerificationForm;

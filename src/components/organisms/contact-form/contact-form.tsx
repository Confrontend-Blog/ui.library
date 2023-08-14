import { FieldErrorsImpl, FormProvider, useForm } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, TextField } from "@mui/material";
import { FormInput } from "../../molecules/form-input/form-input";
import isEmail from "validator/lib/isEmail";
import { Button } from "../../atoms/button/button";
import { Tooltip } from "../../atoms/tooltip/tooltip";
import { ReactNode } from "react";
import React from "react";

interface FormState {
  email: string;
  userName: string;
  msg: string;
}

type InputType = {
  label: string;
  name: string;
  defaultValue: string;
};

interface ContactFormProps {
  userName: InputType;
  email: InputType;
  message: InputType;
}

export const ContactForm = ({
  userName,
  email,
  message,
}: ContactFormProps): JSX.Element => {
  const form = useForm<FormState>({ mode: "onTouched" });

  const onSubmit = () => {
    console.log("submit");
  };

  const getTooltipText = (errors: FieldErrorsImpl<FormState>): ReactNode => {
    console.log(Object.keys(errors));

    return Object.keys(errors).length
      ? "Please fix the form errors first"
      : undefined;
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormControl fullWidth>
          <FormInput<FormState, "userName">
            label={userName.label}
            name={"userName"}
            defaultValue={userName.defaultValue}
          />
          <FormInput<FormState, "email">
            label={email.label}
            rules={{
              validate: (value: string) =>
                isEmail(value, { allow_utf8_local_part: false }) ||
                "Please use a valid Email address",
              required: true,
            }}
            defaultValue={email.defaultValue}
            name={"email"}
            required={true}
          />
          <FormInput
            label={message.label}
            variant="outlined"
            sx={{ marginBlockEnd: "1em" }}
            placeholder=""
            multiline
            rows={4}
            required={true}
            name={"msg"}
            rules={{
              validate: (value: string) =>
                value.length > 10 ||
                "Message can not be shorter than 10 character",
              required: true,
            }}
          />
        </FormControl>
        <Tooltip title={getTooltipText(form.formState.errors)}>
          <FormControl fullWidth>
            <Button type="submit" disabled={!form.formState.isValid}>
              Send
            </Button>
          </FormControl>
        </Tooltip>
      </form>
    </FormProvider>
  );
};

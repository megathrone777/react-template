import React from "react";
import { Form, useActionData, useNavigation } from "react-router";

import { Input, Spinner } from "@/ui";
import { uuid } from "@/utils";

import { TFormFieldTypes } from "./LoginForm.types";

import { loadingClass } from "./LoginForm.css";

const fieldsProps: Record<
  TFormFieldTypes,
  React.InputHTMLAttributes<HTMLInputElement> & { iconId?: TIconID }
> = {
  [TFormFieldTypes.password]: {
    iconId: "lock",
    placeholder: "Password",
    type: "password",
  },

  [TFormFieldTypes.username]: {
    iconId: "user",
    placeholder: "Username",
    type: "text",
  },
};

const LoginForm: React.FC = () => {
  const actionData = useActionData<TActionData>();
  const { state } = useNavigation();

  const getErrorMessage = (fieldType: TFormFieldTypes): string | undefined => {
    if (!actionData) return;
    const { message, name } = actionData;

    if (fieldType === name) {
      return message;
    }
  };

  return (
    <Form method="POST">
      {Object.values(TFormFieldTypes).map<React.ReactElement>((fieldType: TFormFieldTypes) => {
        const fieldProps = fieldsProps[fieldType];

        return (
          <Input
            errorMessage={getErrorMessage(fieldType)}
            key={`login-form-input-${uuid()}`}
            name={fieldType}
            required
            {...fieldProps}
          />
        );
      })}

      {(state === "loading" || state === "submitting") && (
        <div className={loadingClass}>
          <Spinner />
        </div>
      )}

      <button type="submit">Login</button>
    </Form>
  );
};

export { LoginForm };

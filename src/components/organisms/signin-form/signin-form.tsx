import { FormEvent } from "react";
import * as S from "./signin-form.styled";
import React from "react";

export const SignInForm = ({
  onSubmitCb,
}: {
  onSubmitCb: (e: FormEvent<HTMLFormElement>) => void;
}): JSX.Element => {
  return (
    <S.LoginWrapper>
      <S.LoginBoxWrapper>
        <S.LoginBox>
          <S.LoginFrom onSubmit={onSubmitCb}>
            <S.LoginInputWrapper>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Type in your username"
                required
              />
            </S.LoginInputWrapper>
            <S.LoginInputWrapper>
              <label htmlFor="pass">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Type in your password"
                required
              />
            </S.LoginInputWrapper>
            <S.LoginSubmitInput value="Sign in" type="submit" />
          </S.LoginFrom>
          <S.LoginParagraph>
            <small>Please contact the developer for a test account.</small>
          </S.LoginParagraph>
        </S.LoginBox>
      </S.LoginBoxWrapper>
    </S.LoginWrapper>
  );
};

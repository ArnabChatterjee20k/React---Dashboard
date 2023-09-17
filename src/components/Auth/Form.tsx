import React from "react";
import AuthContainer from "./AuthContainer";
import Fields from "./Fields";
import FieldsData from "../../data/FieldsData";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../Buttons";

export default function Form() {
  return (
    <AuthContainer
      as="form"
      className="p-6 w-[20rem] flex flex-col gap-4 rounded-lg"
    >
      {FieldsData.map((props) => (
        <Fields {...props} />
      ))}
      <Link to="/forgot-password" className="text-[#346BD4] font-medium">
        Forgot password?
      </Link>
      <PrimaryButton text="Sign In" className="py-1 font-bold mt-1" />
    </AuthContainer>
  );
}

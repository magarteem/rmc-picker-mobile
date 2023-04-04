import React from "react";
import { Link } from "react-router-dom";
import s from "./registrationQuestionLink.module.scss";

interface RegistrationQuestionLinkType {
  questionText: string;
  linkTo: string;
  lintText: string;
}

export const RegistrationQuestionLink = ({
  questionText,
  linkTo,
  lintText,
}: RegistrationQuestionLinkType) => {
  return (
    <div className={s.registrationQuestionLink}>
      <span>{questionText}</span>
      <Link to={linkTo}>{lintText}</Link>
    </div>
  );
};

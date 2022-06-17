import "./form.styles.css";

import type { ReactElement } from "react";
import type { Card } from "../../types/card.types";

export interface FormProps {
  values: Card;
  touched: Record<keyof Card, boolean>;
}

export const Form = (props: FormProps): ReactElement => {
  return (
    <div className="form">
      <div className="form-field-cardholder" />
      <div className="form-field-cardnumber" />
      <div className="form-field-expiry" />
      <div className="form-field-security" />
    </div>
  );
};

export default Form;

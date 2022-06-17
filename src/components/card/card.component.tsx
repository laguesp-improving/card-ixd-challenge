import "./card.styles.css";

import type { ReactElement } from "react";
import type { Card as CardType } from "../../types/card.types";

export interface CardProps {
  values: CardType;
}

export const Card = (props: CardProps): ReactElement => {
  return <div className="card"></div>;
};

export default Card;

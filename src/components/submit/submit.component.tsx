import "./submit.styles.css";

import type { ReactElement } from "react";

import type { NetworkStatus } from "../../types/network.types";

export interface SubmitProps {
  networkStatus: NetworkStatus;
  onSubmit: () => void;
}

export const Submit = (
  props: SubmitProps
): ReactElement => {
  return <div className="submit"></div>;
};

export default Submit;

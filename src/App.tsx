import "./styles.css";

import Card from "./components/card";
import Form from "./components/form";
import Submit from "./components/submit";

import useFakeNetworkCall from "./hooks/use-fake-network-call.hook";
import useFormData from "./hooks/use-form-data.hook";

import type { Card as CardType } from "./types/card.types";

export default function App() {
  const {
    networkStatus,
    triggerNetworkCall
  } = useFakeNetworkCall();

  const { values, touched } = useFormData<CardType>({
    cardHolder: "",
    cardNumber: "",
    expiry: "",
    securityCode: ""
  });

  return (
    <div className="app-container">
      <Card values={values} />
      <Form values={values} touched={touched} />
      <Submit
        networkStatus={networkStatus}
        onSubmit={triggerNetworkCall}
      />
    </div>
  );
}

import IntlCurrencyInput from "react-intl-currency-input";
import React from "react";

export default function BrlCurrencyComponent(props) {
  const { inputRef, onChange, value, ...other } = props;
  const currencyConfig = {
    locale: "pt-BR",
    formats: {
      number: {
        BRL: {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
      },
    },
  };

  return (
    <IntlCurrencyInput
      value={value}
      config={currencyConfig}
      onChange={onChange}
      currency="BRL"
      max={100000}
      {...other}
      placeholder="0"
    />
  );
}

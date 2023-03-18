import { useGetExchangeQuery } from "../../redux/books/booksApi";

import { FormControl, InputLabel, Select, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

const HomePage = () => {
  const [currency, setCurrency] = useState("UAH");
  const [uah, setUah] = useState(0);
  const [usd, setUsd] = useState(0);
  const [eur, setEur] = useState(0);

  const { data: exchange } = useGetExchangeQuery(currency);
  // console.log(exchange);
  // console.log(exchange.rates[currency]);

  const valuta = exchange?.rates ? [exchange.rates].filter((item) => Object.values(item) !== 1) : [];

  console.log(valuta);
  return (
    <div className="container">
      <h2>HomePage page</h2>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currency}
          label="Currency"
          onChange={(e) => setCurrency(e.target.value)}
        >
          <MenuItem value={"UAH"}>UAH</MenuItem>
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"EUR"}>EUR</MenuItem>
        </Select>
      </FormControl>
      {exchange?.rates && (
        <>
          <div>
            1 {currency} = {exchange.rates.USD} USD
          </div>
          <div>
            1 {currency} = {exchange.rates.EUR} EUR
          </div>
          <div>
            1 {currency} = {exchange.rates.UAH} UAH
          </div>
        </>
      )}

      <div>
        <TextField
          // type="number"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={uah}
          onChange={(e) => {
            if (e.target.value.match(/^[0-9]*$/)) {
              setUah(e.target.value);
            }
          }}
        />
        {exchange?.rates && (
          <>
            <div>{uah * exchange.rates.USD}</div>
            <div>{uah * exchange.rates.EUR}</div>
            <div>{uah * exchange.rates.UAH}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;

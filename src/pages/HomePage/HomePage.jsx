import { useGetExchangeQuery } from "../../redux/books/booksApi";

import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

const HomePage = () => {
  const [currency, setCurrency] = useState("UAH");

  const { data: exchange } = useGetExchangeQuery();
  console.log(exchange);

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
    </div>
  );
};

export default HomePage;

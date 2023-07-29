import React, { useState } from "react";
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./App.css";

const App = () => {
  const [amount, setAmount] = useState(0);
  return (
    <>
      <div className="main-content">
        <h3>Amaia Steps Parking Calculator 🏍️</h3>
        <p>Select time-in date ↓</p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDateTimePicker
            ampm={false}
            disableFuture={true}
            onAccept={(value) => {
              var hours = Math.ceil(Math.abs(Date.now() - value) / 36e5);
              var total = 20 + (hours - 2) * 5;
              setAmount(total);
            }}
          />
        </LocalizationProvider>
        <div className="amount-display">
          <h4>Amount: ₱ {amount}.00</h4>
        </div>
        <footer>
          by{" "}
          <a href="https://boapos.xyz/" target="_blank">
            Bruce Apos
          </a>
        </footer>
      </div>
    </>
  );
};

export default App;

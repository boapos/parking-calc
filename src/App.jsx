import React, { useState } from "react";
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./App.css";
import computeAmount from "./utils/computeAmount";

const App = () => {
  const [amount, setAmount] = useState(0);
  return (
    <>
      <div className="main-content">
        <h3>Amaia Steps Parking Calculator 🏍️</h3>
        <p>Tap to select time-in date & time ↓</p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDateTimePicker
            ampm={false}
            disableFuture={true}
            onAccept={(timeIn) => setAmount(computeAmount(timeIn))}
          />
        </LocalizationProvider>
        <div className="amount-display">
          <h4>Amount: ₱ {amount}.00</h4>
        </div>
      </div>
      <footer>
        by{" "}
        <a href="https://boapos.xyz/" target="_blank">
          Bruce Apos
        </a>
      </footer>
    </>
  );
};

export default App;

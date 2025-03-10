import axios from "axios";
import { useState, useEffect } from "react";
import "./styles.css";

export default function Deposit() {
  let [user, setUser] = useState(null);
  let [amount, setAmount] = useState(0);

  useEffect(() => {
    axios.get("https://server-r6l9.onrender.com/data").then((res) => {
      let lastUser = res.data[res.data.length - 1];
      setUser(lastUser);
    });
  }, []);

  function handleDeposit(e) {
    e.preventDefault();
    if (!user) return;

    let updatedUser = { ...user, amount: user.amount + Number(amount) };
    axios.put(`https://server-r6l9.onrender.com/update/${user._id}`, updatedUser).then(() => {
      setUser(updatedUser); // Update UI
    });
  }

  return (
    <div className="video-background">
      <video autoPlay muted loop className="background-video">
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="form-container">
        <h1>DEPOSIT</h1>
        {user && (
          <>
            <form onSubmit={handleDeposit}>
              <input type="number" onChange={(e) => setAmount(e.target.value)} placeholder="AMOUNT..." className="form-control" />
              <br></br><button type="submit" className="btn btn-primary">DEPOSIT AMOUNT</button>
            </form>
            <h2>BALANCE: {user.amount}</h2>
          </>
        )}
      </div>
    </div>
  );
}

import axios from "axios";
import { useState, useEffect } from "react";
import "./styles.css";

export default function Cashback() {
  let [user, setUser] = useState(null);
  let [amount, setAmount] = useState(0);

  useEffect(() => {
    axios.get("https://server-r6l9.onrender.com/data").then((res) => {
      let lastUser = res.data[res.data.length - 1];
      setUser(lastUser);
    });
  }, []);

  function handleCashback(e) {
    e.preventDefault();
    if (!user) return;

    let updatedUser = { ...user, amount: user.amount - Number(amount) };
    axios.put(`https://server-r6l9.onrender.com/update/${user._id}`, updatedUser).then(() => {
      setUser(updatedUser);
    });
  }

  return (
    <div className="video-background">
      <video autoPlay muted loop className="background-video">
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="form-container">
        <h1 className="form-title">CASHBACK</h1>
        {user && (
          <>
            <form onSubmit={handleCashback} className="cashback-form">
              <div className="input-group">
                <input type="number" onChange={(e) => setAmount(e.target.value)} placeholder="Amount" className="form-control" />
              </div><br></br>
              <button type="submit" className="btn btn-primary cashback-button">GET CASHBACK</button>
            </form>
            <h2 className="balance">BALANCE: {user.amount}</h2>
          </>
        )}
      </div>
    </div>
  );
}
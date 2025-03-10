import axios from 'axios';
import { useState } from "react";
import { Button } from "react-bootstrap";
import './styles.css'; 

export default function Register(){
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [pass, setPass] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log(name, email, pass);
        let item = { name, email, password: pass, amount: 1000 };
        axios.post('https://server-r6l9.onrender.com/create', item);
    }

    return (
        <div className="video-background">
            <video autoPlay muted loop className="background-video">
                <source src="/video.mp4" type="video/mp4" />
            </video>
            <div className="form-container">
                <h1>REGISTER</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" placeholder="ENTER YOUR NAME..."onChange={(e) => setName(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='ENTER YOUR E-MAIL...'  onChange={(e) => setEmail(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <input type="password" placeholder='ENTER YOUR PASSWORD...' onChange={(e) => setPass(e.target.value)} className="form-control" />
                    </div>
                    <Button type="submit" className="btn btn-primary">CREATE ACCOUNT</Button>
                </form>
            </div>
        </div>
    );
}
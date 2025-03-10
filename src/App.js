import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Register from './register';
import Deposit from './deposit';
import Cashback from './cashback';
import Alldata from './alldata';
import { UserProvider } from './context';

function Home() {
    return (
        <div className="video-container">
            <video autoPlay muted loop className="background-video">
                <source src={require("./background.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay"></div>
            <h1 className="video-title">CITY BANK</h1>
        </div>
    );
}

function App() {
    return (
        <HashRouter>
            <UserProvider>
                {/* Navbar */}
                <Navbar bg="dark" variant="dark" className="fixed-top">
                    <Container>
                        {/* Left Side: Logo */}
                        <Navbar.Brand href="#/">
                        <Nav.Link href="#/">CITY BANK</Nav.Link>
                        </Navbar.Brand>
                        {/* Right Side: Nav Links */}
                        <Nav className="ms-auto">
                            <Nav.Link href="#/">HOME</Nav.Link>
                            <Nav.Link href="#/register">CREATE</Nav.Link>
                            <Nav.Link href="#/deposit">DEPOSIT</Nav.Link>
                            <Nav.Link href="#/cashback">CASHBACK</Nav.Link>
                            <Nav.Link href="#/alldata">ALL-DATA</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

                {/* Page Content */}
                <Container className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/deposit" element={<Deposit />} />
                        <Route path="/cashback" element={<Cashback />} />
                        <Route path="/alldata" element={<Alldata />} />
                    </Routes>
                </Container>
            </UserProvider>
        </HashRouter>
    );
}

export default App;
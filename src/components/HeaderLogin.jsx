import { useState } from 'react';
import Login from '../pages/sendEmail';
import About from '../pages/About';
import FontFacingHome from '../pages/FontFacingHome';

function HeaderLogin() {
    const [page, setPage] = useState("home");

    return (
        <>
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand">Link to QR</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <li class="nav-item">
                                <a className={`nav-link ${page === "home" ? "active" : ""}`} onClick={() => setPage("home")} >Home</a>
                            </li>
                            <li class="nav-item">
                                <a className={`nav-link ${page === "about" ? "active" : ""}`} onClick={() => setPage("about")} >About Us</a>
                            </li>
                            <li class="nav-item">
                                <a className={`nav-link ${page === "login" ? "active" : ""}`} onClick={() => setPage("login")} >LogIn</a>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>

            {page === "home" && <FontFacingHome />}
            {page === "login" && <Login />}
            {page === "about" && <About />}
        </>
    );
}

export default HeaderLogin;

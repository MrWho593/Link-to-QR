import { useState } from 'react';
import QrReader from '../pages/QrReader';
import QrGenerator from "../pages/QrGenerator";

function Header() {
    const [page, setPage] = useState("qrGen");

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
                                <a className={`nav-link ${page === "qrGen" ? "active" : ""}`} onClick={() => setPage("qrGen")}>QR Generator</a>
                            </li>
                            <li class="nav-item">
                                <a className={`nav-link ${page === "qrReader" ? "active" : ""}`} onClick={() => setPage("qrReader")}>QR Reader</a>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>

            {page === "qrReader" && <QrReader />}
            {page === "qrGen" && <QrGenerator />}
        </>
    );
}

export default Header;

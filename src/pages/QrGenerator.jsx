import { useState } from "react";
import QRCode from "react-qr-code";

function QrGenerator() {
    const [text, setText] = useState("");

    function generateQr(e) {
        setText(e.target.value);
    }

    return (
        <div className="container">
            <QRCode value={text} className="qrGen" /> <br /> <br /> <br />
            <label>Enter URL</label> <br />
            <input type="text" className="form-control" placeholder="Enter URL to generate code" value={text} onChange={generateQr} />
        </div>
    );
}

export default QrGenerator;

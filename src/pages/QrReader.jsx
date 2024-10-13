import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QrReader() {
  const [scanResult, setScanResult] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 3,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }
  }, []);

  return (
    <div className="container">
      {scanResult
        ? <div>
          <div className="alert alert-success" role="alert">Reading is successful: <a href={scanResult}>{scanResult}</a></div>
          <button type="button" className="btn btn-primary mt-3" onClick={() => {navigate('/qrreder')}} style={{margin:'10px'}}>Scan again</button>
          <button type="button" className="btn btn-primary mt-3" onClick={() => {navigate('/header')}} style={{margin:'10px'}}>QR generator</button>
        </div>
        : <div id="reader"></div>
      }
    </div>
  );
}

export default QrReader;

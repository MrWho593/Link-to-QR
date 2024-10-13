import image from '../assets/qr-img-1.png';
import '../components/css/FontFacingHome.css';
import { useNavigate } from 'react-router-dom';

function FontFacingHome() {
    const navigate = useNavigate();

    return (
        <div className="container font-facing-home">

            <div className="row align-items-center" style={{ minHeight: '80vh' }}>

                <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
                    <h1 className="display-4 font-weight-bold">SCAN QR CODE</h1>
                    <p className="lead">Effortlessly convert URLs into QR codes and decode QR codes back into links,
                        simplifying sharing and accessing content in one seamless platform.</p>
                    <button type="button" className="btn btn-primary mt-3" onClick={() => {navigate('/about')}}>Read more</button>
                </div>

                <div className="col-md-6 text-center">
                    <div className="image-container">
                        <img src={image} alt="image" className="qr-image" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FontFacingHome;

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import welcomeImage from '../images/Frame1.png'


export default function Page1() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return <div className="page1">
        <img src={welcomeImage} alt="" className="display-image" />
    </div>
}
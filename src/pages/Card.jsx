import { BasicPage } from "../components/BasicPage";
import Person from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

export const CardPage = () => {
    return (
        <div>
            <h1>OPERACIONES DE TARJETA</h1>
            <div>
                <Link to="/dashboard/products/card/totalpayment">PAGO TOTAL DE TARJETA</Link>
            </div>

            <div>
                <Link to="/dashboard/products/card/partialpayment">PAGO PARCIAL DE TARJETA</Link>
            </div>
        </div>
    
    );
};

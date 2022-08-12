import { Link, Navigate } from "react-router-dom";
import Person from "@mui/icons-material/Person";

export const ProductsPage = () => {


    return (
        <div>
            <div>
            <h1>PRODUCTOS</h1>
            <Link to="/dashboard/products/card">PAGO DE TARJETAS</Link>
            </div>
            <div>
            <Link to="/dashboard/products/credit">CREDITO</Link>
            </div>
        </div>
    
    );
};

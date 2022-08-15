import { Link } from "react-router-dom";



export const ConfirmPaymentPage = () => {
    return (
        <div>
        <h1 className="title-payment-confirm">Confirmación de pago de tarjeta</h1>
            <h2 className="text-debt">El total de su deuda es de</h2>
            <h1 className="amount-debt">1500 S</h1>
            <h2 className="text-payment-debt">El monto que pagará es de</h2>
            <h1 className="amount-payment-debt">500 S</h1>
            <button className="btn-confirm-payment">
                <Link to="/dashboard/products/card/successfulpayment">CONFIRMAR PAGO</Link>
            </button>
        </div>
    )
};
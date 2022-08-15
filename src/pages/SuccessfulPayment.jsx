import { Link } from "react-router-dom";


export const SuccessfulPaymentPage = () => {
    return (
        <div>
            <h1 className="title-payment-successful">Transacción Exitosa</h1>
            <div>
            <h1 className="">Resumen de pago</h1>
            <h2 className="amount-pay-title">Monto pagado:</h2>
            <h1 className="amount-pay">500 S</h1>
            <h2 className="text-debt-updated-resumen">Monto de deuda actual:</h2>
            <h1 className="amount-debt-updated-resumen">1000 S</h1>
            </div>

            <button className="btn-back">
               <Link to="/dashboard/products/">Volver al menú</Link>
            </button>
        </div>
    )
};
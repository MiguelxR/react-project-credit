import { Link } from "react-router-dom";



export const PartialPaymentPage = () => {

    // const confirmPayment = () => {
        
    // }

    return (
        <div>
            <h1 className="title-page">PARTIAL PAYMENT</h1>
            <div className="box-card-pay">
                <h2 className="title-card">Tarjeta 1</h2>
                <h3 className="title-amount-debt">
                    Monto de deuda
                </h3>
                <h3 className="amount-debt">1500 S</h3>
                
                
                <input type="text" placeholder="Amount" className="input-amount-payment"/>
                <button className="btn-payment">
                    <Link to="/dashboard/products/card/confirmpayment">PAGO TOTAL DE TARJETA</Link>
                </button>

            </div>
        </div>
    );
};
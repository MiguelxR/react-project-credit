import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { WelcomePage } from "./pages/Welcome";
import { SettingsPage } from "./pages/Settings";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { HomeLayout } from "./components/HomeLayout";
import { ProductsPage } from "./pages/Products";
import "./styles.css";
import { CardPage } from "./pages/Card";
import { CreditPage } from "./pages/Credit";
import { TotalPaymentPage } from "./pages/TotalPayment";
import { PartialPaymentPage } from "./pages/PartialPayment";
import { ConfirmPaymentPage } from "./pages/ConfirmPayment";
import { SuccessfulPaymentPage } from "./pages/SuccessfulPayment";

export default function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route path="/dashboard/*" element={<ProtectedLayout />}>
        <Route path="welcome" element={<WelcomePage/>}/>
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/card" element={<CardPage />} />
        <Route path="products/card/totalpayment" element={<TotalPaymentPage />} />
        <Route path="products/card/partialpayment" element={<PartialPaymentPage />} />
        <Route path="products/card/confirmpayment" element={<ConfirmPaymentPage />} />
        <Route path="products/card/successfulpayment" element={<SuccessfulPaymentPage />} />
        <Route path="products/credit" element={<CreditPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

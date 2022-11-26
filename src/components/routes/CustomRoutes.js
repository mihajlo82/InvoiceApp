import { Routes, Route } from "react-router-dom";
import Invoices from "../invoices/Invoices";
import Sellers from "../sellers/Sellers";
import SingleItem from "../shared/show_single/SingleItem";
import SingleEditCustomer from "../customers/SingleEditCustomer";
import Customers from "../customers/Customers";
import { INVOICES } from "../../constanst/types";
import SingleEditSeller from "../sellers/SingleEditSeller";
import SingleEditInvoice from "../invoices/SingleEditInvoice";
import { SELLER_SINGLE, CUSTOMER_SINGLE } from "../../constanst/types";

const CustomRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Invoices />} />
        <Route path="/invoices" element={<Invoices tittle={INVOICES} />} />
        <Route path="/invoices/:id" element={<SingleEditInvoice />} />   

        <Route path="/sellers" element={<Sellers />} />
        <Route path="/sellers/:id" element={<SingleEditSeller />} />
        <Route path="/sellerdetails/:id" element={<SingleItem type={SELLER_SINGLE} />} />

        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/:id" element={<SingleEditCustomer />} />
        <Route path="/customerdetails/:id" element={<SingleItem type={CUSTOMER_SINGLE} />} />
        <Route path="*" element={<Invoices />} />
    </Routes>
  )
}

export default CustomRoutes
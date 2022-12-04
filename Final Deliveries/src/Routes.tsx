import React from "react"
import { Route,Routes,Navigate } from "react-router-dom"
import { HomePage } from "./pages/Home"
import { InnerRoutes } from "./components/Drawer/InnerRoutes"
import { ProductPage } from "./pages/Product"
import { ReportPage } from "./pages/Report"
import { SalesPage } from "./pages/Sales"
import { CustomerPage } from "./pages/Customer"
import { EmployeesPage } from "./pages/Employees"
import { PurchasePage } from "./pages/Purchase"
import { PurchaseReturnPage } from "./pages/PurchaseReturn"
import { SalseReturnPage } from "./pages/SaleReturn"
import { AddProductsPage } from "./pages/AddProducts"
import { CustomerTablePage } from "./pages/AddProducts/CustomerPage"
import { StockPage } from "./pages/Stock"
import { AddStockPage } from "./pages/AddStock"
import { AddSalesPage } from "./pages/AddSalse"
import { AddEmployeesPage } from "./pages/AddEmployees"




export const MainRoutes=()=>{
return(
    <div>
    <Routes>
        <Route path="/" element={<InnerRoutes/>}>
        <Route path="/" element={<Navigate to ="HomePage"/>} />
        <Route path="/HomePage" element={<HomePage/>} />
        <Route path="/ProductPage" element={<ProductPage/>} />
        <Route path="/ReportPage" element={<ReportPage/>} />
        <Route path="/SalesPage" element={<SalesPage/>} />
        <Route path="/CustomerPage" element={<CustomerPage/>} />
        <Route path="/EmployeesPage" element={<EmployeesPage/>} />
        <Route path="/PurchasePage" element={<PurchasePage/>} />
        <Route path="/PurchaseReturnPage" element={<PurchaseReturnPage/>} />
        <Route path="/SalseReturnPage" element={<SalseReturnPage/>} />
        <Route path="/AddProductsPage" element={<AddProductsPage/>} />
        <Route path="/CustomerTablePage" element={<CustomerTablePage/>} />
        <Route path="/StockPage" element={<StockPage/>} />
        <Route path="/AddStockPage" element={<AddStockPage/>} />
        <Route path="/AddSalesPage" element={<AddSalesPage/>} />
        <Route path="/AddEmployeesPage" element={<AddEmployeesPage/>} />
        </Route>
    </Routes>

    </div>
)
}
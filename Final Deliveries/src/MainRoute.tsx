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
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { DrawerComponent } from "./components/Drawer"



export const Routes1=()=>{
return(
    <div>
    <Routes>
        <Route path="/" element={<InnerRoutes/>}>
        <Route path="/" element={<Navigate to ="Login"/>} />
        <Route path="/signup" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
        
        </Route>
    </Routes>

    </div>
)
}
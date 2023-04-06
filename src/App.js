import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Enquiries from "./pages/Enquiries";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import BlogList from "./pages/BlogList";
import BlogCategoryList from "./pages/BlogCategoryList";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ColorList from "./pages/ColorList";
import CategoryList from "./pages/CategoryList";
import BrandList from "./pages/BrandList";
import ProductList from "./pages/ProductList";
import AddBlog from "./pages/AddBlog";
import AddBlogCategory from "./pages/AddBlogCategory";
import AddColor from "./pages/AddColor";
import AddCategory from "./pages/AddCategory";
import AddBrand from "./pages/AddBrand";
import AddProduct from "./pages/AddProduct";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/admin" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="enquiries" element={<Enquiries />} />
                    <Route path="blog" element={<AddBlog />} />
                    <Route path="blog-list" element={<BlogList />} />
                    <Route path="blog-category" element={<AddBlogCategory />} />
                    <Route
                        path="blog-category-list"
                        element={<BlogCategoryList />}
                    />
                    <Route path="orders" element={<Orders />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="color" element={<AddColor />} />
                    <Route path="list-color" element={<ColorList />} />
                    <Route path="category" element={<AddCategory />} />
                    <Route path="list-category" element={<CategoryList />} />
                    <Route path="brand" element={<AddBrand />} />
                    <Route path="list-brand" element={<BrandList />} />
                    <Route path="product" element={<AddProduct />} />
                    <Route path="list-product" element={<ProductList />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;

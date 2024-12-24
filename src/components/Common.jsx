import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Common() {
    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
    );
}
import { Outlet } from "react-router-dom";
import Navebar from "./components/Navebar";


export default function Layout() {

    return (
        <>
        <Navebar/>
        <Outlet/>
        </>
    )
}
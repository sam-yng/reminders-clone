import React, { useState } from "react";
import '../css/index.css'
import SideNav from "./SideNav";

const Main = () => {
    const [activePage, setActivePage] = useState('')

    return(
        <main className="h-[100vh]">
            <SideNav />
        </main>
    )
}

export default Main
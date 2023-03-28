import React, { useEffect, useState } from "react";
import '../css/index.css'
import SideNav from "./SideNav";
import Lists from "./Lists";
import { ListContext } from "../pages/App";

const Main = () => {
    const value = React.useContext(ListContext)

    useEffect(() => {
        const listValues = JSON.parse(localStorage.getItem('LIST_STATE')!)
        console.log(listValues.list)
    }, [])

    // for (let i = 0; i < )

    return(
        <main>
            <h1 className="ml-16 mt-4 text-[45px]">{value}</h1>
        </main>
    )
}

export default Main
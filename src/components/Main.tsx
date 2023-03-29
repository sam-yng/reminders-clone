import React, { useEffect, useRef, useState } from "react";
import '../css/index.css'
import SideNav from "./SideNav";
import Lists from "./Lists";
import { useReminders } from "../utils/RemindersContext";

const Main = () => {
    const { lists, activePage } = useReminders();

    return(
        <main className="w-[65%] ml-16 mt-8">
            <article className="flex flex-row">
                <h1 className="text-[40px] font-robmedium">{activePage}</h1>
                <h1 className="text-[35px] flex ml-auto">{0}</h1>
            </article>
            {/* <form className="mt-8 flex flex-col w-full">
                <input className="border-t-2 border-l-2 border-r-2 focus:outline-none"></input>
                <input placeholder="Notes" className="border-l-2 border-r-2 focus:outline-none"></input>
                <input placeholder="Add Tags" className="border-l-2 border-r-2 border-b-2 focus:outline-none"></input>
            </form> */}
        </main>
    )
}

export default Main
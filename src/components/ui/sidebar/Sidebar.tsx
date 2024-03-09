'use client'
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"
import clsx from "clsx";

import { SidebarItem } from "./SidebarItem";

import { useUIStore } from "@/store";


const menuItem = {
    clients: [
        {
            path: '/',
            icon: <IoPersonOutline size={30}/>,
            title: 'Perfil'
        },
        {
            path: '/',
            icon: <IoTicketOutline size={30}/>,
            title: 'Ordenes'
        },
        {
            path: '/',
            icon: <IoLogInOutline size={30}/>,
            title: 'Ingresar'
        },
        {
            path: '/',
            icon: <IoLogOutOutline size={30}/>,
            title: 'Salir'
        }
        
    ],
    administration: [
        {
            path: '/',
            icon: <IoShirtOutline size={30}/>,
            title: 'Productos'
        },
        {
            path: '/',
            icon:<IoTicketOutline size={30}/>,
            title: 'Ordenes'
        },
        {
            path: '/',
            icon: <IoPeopleOutline size={30}/>,
            title: 'Usuarios'
        }
    ],
};

export const Sidebar = () => {

    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const closeSideMenu =  useUIStore(state => state.closeSideMenu);

  return (
    <div>
        {/* Background black */}
        {
            isSideMenuOpen && (
                <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"/>
            )
        }
        

        {/* Blur */}
        {
            isSideMenuOpen && (
                <div 
                    className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
                    onClick={() => closeSideMenu()}
                 />
            )
        }
        

        { /* Sidemenu */ }
        <nav className={
            clsx(
                "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                {
                    "translate-x-full": !isSideMenuOpen
                }
            )
        }>

            <IoCloseOutline
                size={50}
                className="absolute top-5 right-5 cursor-pointer"
                onClick={() => closeSideMenu()}
            />

            {/* Input */}
            <div className="relative mt-14">
                <IoSearchOutline size={20} className="absolute top-2 left-2"/>
                <input 
                    type="text"
                    placeholder="Buscar"
                    className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500" 
                />
            </div>

            { /* Menu */}
            {
                menuItem.clients.map( item => (
                    <SidebarItem
                        key={item.path}
                        {...item}
                    />
                ))
            }

            {/* Line Separator */}
            <div className="w-full h-px bg-gray-200 my-10"/>

            {
                menuItem.administration.map( item => (
                    <SidebarItem
                        key={item.path}
                        {...item}
                    />
                ))
            }

        </nav>
    </div>
  )
}

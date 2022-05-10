import React, { useRef, useState } from 'react'
import Detail from "./Detail";
import Cookies from 'js-cookie'
import {  Link } from "react-router-dom";

const Confirmation = (props) => {
    let items = [];
    for (let I = 0; I < props.NbPorts; I++) {
        items.push(
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 justify-between">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {props.Ports[I].nm_port}
                </th>
                <td class="px-6 py-4">
                    {props.Ports[I].ip_vlan}
                </td>
                <td class="px-6 py-4">
                    {props.Ports[I].type}
                </td>
                <td>
                    {
                        props.Ports[I].cascade ?
                            <button class="bg-green-300 hover:bg-green-500 text-black font-bold py-1 px-2 rounded-full">
                                Oui
                            </button>
                            : <button class="bg-red-300 hover:bg-red-500 text-black font-bold py-1 px-2 rounded-full">
                                Non
                            </button>
                    }
                </td>
                <td>
                    {
                        props.Ports[I].EtatDePort ?
                            <button class="bg-green-300 hover:bg-green-500 text-black font-bold py-1 px-2 rounded-full">
                                Active
                            </button>
                            : <button class="bg-red-300 hover:bg-red-500 text-black font-bold py-1 px-2 rounded-full">
                                Inactive
                            </button>
                    }
                </td>
                <td class="px-6 py-4">
                    {props.Ports[I].Cascades_vers_depuis}
                </td>
                <td>
                    {
                        props.Ports[I].Entree ?
                            <button class="bg-green-300 hover:bg-green-500 text-black font-bold py-1 px-2 rounded-full">
                                Oui
                            </button>
                            : <button class="bg-red-300 hover:bg-red-500 text-black font-bold py-1 px-2 rounded-full">
                                Non
                            </button>
                    }
                </td>
                <td class="px-6 py-4">
                    {props.Ports[I].Cable}
                </td>
                <td class="px-6 py-4">
                    {props.Ports[I].prise}
                </td>
            </tr>
        )
    }
    const [click, setClick] = useState(true)
    const [click2, setClick2] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    const handleClick2 = () => {
        setClick2(!click2)
    }
    return (
        <div className="max-w-3xl mx-auto pt-10 xl:max-w-full xl:p-5 overflow-x-auto  ">
            <div className='relative z-20'>
                <p className="mb-2 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">Confirmation</p>
            </div>
            <div className='flex items-center'>
                <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">Confirmer la configuration</h1>
            </div>
            <div className="flex justify-end">
                <button className="bg-violet-500 hover:bg-violet-600 px-3 py-2 m-5 rounded-md sm:text-xl text-2xl text-white" >
                    Annuler
                </button>
            </div>
            <div className='flex relative flex-col justify-between'>
                <div className='h-14 cursor-pointer shadow-md sm:rounded-lg flex text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 justify-between' onClick={handleClick}>
                    <div>
                        <h4 className='inline-block text-xl font-semibold sm:text-3xl tracking-tight dark:text-slate-200 p-2'>
                            CONSULTATION SWITCH
                        </h4>
                    </div>
                    <div className='object-right p-5'>
                        <svg aria-hidden="true" className="animate-bounce border-2 rounded-full bg-violet-500  " data-reactid="266" fill="none" height="24" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="6 9 12 15 18 10" >
                            </polyline>
                        </svg>
                    </div>
                </div>
                {click ? <div className='transition-all duration-300 ease-in-out delay-150'>
                    <div className='shadow-md sm:rounded-lg mt-5 delay-150'>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr className=''>
                                    <th scope="col" className="px-6 py-3">
                                        nom
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        marque
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Nombre de port F_E
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Nombre de Port G-E
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Etat
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Adresse Mac
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Numero d'inventaire
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Numero de serie
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 justify-between">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        Cisco1
                                    </th>
                                    <td className="px-6 py-4">
                                        Cisco
                                    </td>
                                    <td className="px-6 py-4">
                                        48
                                    </td>

                                    <td className="px-6 py-4">
                                        48
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className='text-green-400'>Active</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        5E:FF:56:A2:AF:15
                                    </td>
                                    <td className="px-6 py-4">
                                        1586345213
                                    </td>
                                    <td className="px-6 py-4">
                                        89453210
                                    </td>
                                    <td className="px-6 py-4">
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div> : null}
                <div className='mt-8 cursor-pointer h-14 shadow-md sm:rounded-lg flex text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 justify-between' onClick={handleClick2}>
                    <div>
                        <h4 className='inline-block text-xl font-semibold sm:text-3xl tracking-tight dark:text-slate-200 p-2'>
                            CONSULTATION PORTS
                        </h4>
                    </div>
                    <div className='object-right p-5'>
                        <svg aria-hidden="true" className="animate-bounce border-2 rounded-full bg-violet-500 " data-reactid="266" fill="none" height="24" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="6 9 12 15 18 9">
                            </polyline>
                        </svg>
                    </div>
                </div>
                {click2 ? <div className='shadow-md sm:rounded-lg mt-5 delay-150'>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className=''>
                                <th scope="col" className="px-6 py-3">
                                    num de port
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ip_vlan
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    type
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    cascade
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Etat De Port
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Cascades_vers_depuis
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    entree
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    cable
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    prise
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {items}
                        </tbody>
                    </table>
                </div> : null}
            </div>
            <footer className="flex justify-center">
                <Link to={"/Login"}>
                <button className="bg-violet-500 hover:bg-violet-600 px-3 py-2 m-5 rounded-md sm:text-xl text-2xl text-white" >
                    Confirmer
                </button>
                </Link>
            </footer>
        </div >

    )
}

export default Confirmation

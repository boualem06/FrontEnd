import { render } from '@testing-library/react';
import React, { useCallback, useEffect, useState } from 'react';
import {  Link } from "react-router-dom";
import Cookies from 'js-cookie'
const DetailsPort = {
    "nm_port": 0,
    "Nom":"",
    "ip_vlan": "",
    "type": "",
    "cascade": false,
    "EtatDePort": "",
    "Cascades_vers_depuis": "",
    "Entree": false,
    "Cable": "",
    "prise": "",
};

const ConfigurerPorts = (props) => { // Entrer le nombre de port dans Home
   
    // console.log()
    const [Ports, setPorts] = useState([]);
    const [Port, setPort] = useState(DetailsPort);
    console.log(Ports) ;
    Port.Nom=props.nomSwitch ;
    const items = [];

    const Sauvegarder = () => {
        Ports.map(item => { console.log(item) })
        Ports.map(item => {
            fetch('http://localhost:5000/api/postport', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                'x-access-token': Cookies.get("jwt"),},
                body: JSON.stringify(item)
            }).then(res => res.json())
                .then(data => console.log(""));
        }
        )
    }
    // const Sauvegarder = () => {
    //   fetch('http://localhost:5000/api/ports'
    //   ).then(res => res.json())
    //     .then(data => console.log(data));
    //  }
    const handleChange = (e, Index) => {
        const { name, value } = e.target;
        setPort(prevState => ({
            ...prevState,
            [name]: value,
            nm_port: Index + 1,
        }))
    }

    const portExists = (inputs, nm) => {
        return inputs.some((el) => {
            return el.nm_port === nm;
        });
    }

    useEffect(() => {
        if (Port != DetailsPort) {
            let inputs = [...Ports]
            if (inputs.length == 0) {
                let b1 = Port.Entree === "true";
                Port.Entree = b1;
                b1 = Port.cascade === "true";
                Port.cascade = b1;
                inputs.push(Port)
                setPorts(inputs)
            }
            else {
                if (portExists(inputs, Port.nm_port)) {
                    console.log("inputs")
                    if (Ports[Port.nm_port - 1] != DetailsPort) {
                        let p = Ports[Port.nm_port - 1];
                        Object.keys(Port).forEach((key) => {
                            if (Port[key] != "") {
                                p[key] = Port[key];
                            }
                        })
                        let b1 = p.Entree === "true";
                        p.Entree = b1;
                        b1 = p.cascade === "true";
                        p.cascade = b1;
                        inputs[Port.nm_port - 1] = p
                        setPorts(inputs)
                    }
                }
                else {
                    inputs.push(Port);
                    setPorts(inputs)
                }
            }
            setPort(DetailsPort)
        }
    }, [Port])
    // setPort(DetailsPort)

    // useEffect((e, Index) => {
    //     console.log(Ports)
    //     setPort(DetailsPort)
    // }, [handleChange])
    for (let I = 0; I < props.NbPorts; I++) {
        items.push(
            <tr className="bg-white border-b-solid" key={I}>
                <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">{I + 1}</span> </td>
                <td className=" text-center  py-1  px-2 "> <input name="ip_vlan" type="text" className="px-2 py-1 w-full border rounded-md" key={I} onChange={(e) => handleChange(e, I)} /></td>
                <td className="  text-center  py-1  px-2">
                    <select name="type" className="px-2 py-1 w-full border rounded-md" onChange={(e) => handleChange(e, I)} >
                        <option ></option>
                        <option value="RG-45">RG-45</option>
                        <option value="Fibre optique">Fibre optique</option>
                        <option value="WIFI">WIFI</option>
                        <option value="Utilise">Utilise</option>
                        <option value="Non-Utilise">Non-Utilise</option>
                        <option value="Cruptu">Cruptu</option>
                    </select>
                </td>
                <td className="  text-center  py-1  px-2">
                    <select name="Entree" className="px-2 py-1 w-full border rounded-md text-center" onChange={(e) => handleChange(e, I)} >
                        <option ></option>
                        <option value="true">Oui</option>
                        <option value="false">Non</option>
                    </select>
                </td>
                <td className="  text-center  py-1  px-2">
                    <select name="cascade" className="px-2 py-1 w-full border rounded-md text-center" onChange={(e) => handleChange(e, I)} >
                        <option ></option>
                        <option value="true">Oui</option>
                        <option value="false">Non</option>
                    </select>
                </td>
                <td className="  text-center  py-1  px-2 "> <input name="Cascades_vers_depuis" type="text" className="px-2 py-1 w-full border rounded-md text-center" onChange={(e) => handleChange(e, I)} /></td>
                <td className="  text-center  py-1  px-2"> <input name="prise" type="text" className="px-2 py-1 w-full border rounded-md text-center" onChange={(e) => handleChange(e, I)} /></td>
                <td className="  text-center  py-1  px-2"> <input name="Cable" type="text" className="px-2 py-1 w-full border rounded-md text-center" onChange={(e) => handleChange(e, I)} /></td>
                <td className="  text-center  py-1  px-2">
                    <select name="EtatDePort" className="px-2 py-1 w-full border rounded-md text-center" onChange={(e) => handleChange(e, I)} >
                        <option ></option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </td>
            </tr>

        );
    }

    return (
        <div className="bg-cover w-full p-4 ">
            <div className="flex justify-end">
                <Link to={"/Confirmation"}>
                <button className="bg-violet-500 hover:bg-violet-600 px-3 py-2  rounded-md sm:text-xl text-2xl text-white" >Sauvegarder
                </button>
                </Link>
            </div>
            <div className="table w-full p-2 m-2 bg-white shadow-md  shadow-gray-500/75 border border-gary-400 rounded-xl  h-1/2">
                {/* <div className="  scrollbar overflow-auto  shadow-md  shadow-gray-500/75   border border-gary-400 rounded-xl "> */}
                <table className="w-full border-gray-300  border-solid">
                    <thead className="bg-gray-300  border-2   ">
                        <tr>
                            <th className=" text-center py-3 px-2">Num Port</th>
                            <th className=" text-center py-3 px-2">IP Vlan</th>
                            <th className=" text-center py-3 px-2">Type</th>
                            <th className=" text-center py-3 px-2">Entrée</th>
                            <th className=" text-center  py-3 px-2">Cascade</th>
                            <th className=" text-center py-3 px-2">Cascade (depuis/vers)</th>
                            <th className=" text-center py-3 px-2">Prise</th>
                            <th className=" text-center py-3 px-2">Cable</th>
                            <th className=" text-center py-3 px-2">Etat De Port</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
        </div>
    )
};


export default ConfigurerPorts ;

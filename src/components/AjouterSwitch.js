import React, { useEffect, useState } from "react";
import Usefetch from "./Usefetch";
import {  Link } from "react-router-dom";
import Cookies from 'js-cookie'
export default function AjouterSwitch(props) {
  const [Switch, setSwitch] = useState({
    "Bloc": "",
    "Armoire": "",
    "Nom": "",
    "Marque": "",
    "Modèle": "",
    "Adresse_IP": "",
    "N_d_inventaire": "",
    "N_Serie": "",
    "Adresse_MAC": "",
    "Nombre_de_ports_F_E": 0,
    "Nombre_de_ports_G_E": 0,
    "Nombre_de_ports_SFP": 0,
    "Etat": false
  });
  // const [nb,setNb]=useState(0) ;
  const Ajouter = (props) => {  
    fetch('http://localhost:5000/api/postswitch', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
      'x-access-token': Cookies.get("jwt"), },
      body: JSON.stringify(Switch)
    }).then(res => res.json())
    .then(data => console.log(data)) ;
  }
  // const Ajouter = () => {
  //   fetch('http://localhost:5000/api/switch'
  //   ).then(res => res.json())
  //     .then(data => console.log(data));
  //  }
  const handleChange = e => {
    const { name, value } = e.target;
    setSwitch(prevState => ({
      ...prevState,
      [name]: value
    }))
    // if(name==="Nombre_de_ports_F_E" || name==="Nombre_de_ports_G_E" || name==="Nombre_de_ports_SFP" )
    if( name==="Nombre_de_ports_G_E")
    {
      // nb=nb+value ;
      // setNb(prevState => ({
      //  ... prevState+(parseInt(value))}))
       props.setNbPorts((parseInt(value))) ;
        //add th eother Ports SFP et FE
      //  console.log(nb+1);
    }
    if(name==="Nom")
    {
      props.setNomSwitch(value) ;
    }
    ;
  };
  return (
    <div className=" ajouterSwitch text-black text-xl w-full bg-cover">
      
      <form className="sm:w-full lg:w-2/3 mx-auto  lg:my-5 my-2 rounded-2xl shadow-2xl shadow-slate-400  lg:p-10 px-5 py-3 ">
      <div className="flex  justify-end space-x-8 lg:space-x-12 p-6">
        <button className=" hover:scale-110 hover:bg-blue-500 hover:outline-none hover:ring-2 ring-purple-700 hover:shadow-lg hover:shadow-blue-500 px-3  py-2 bg-blue-600 rounded-xl sm:text-xl  text-2xl text-white"
          onClick={Ajouter}
          type="submit"
        >
          Sauvegarder
        </button>
        <button className="hover:scale-110 hover:bg-blue-500 hover:outline-none hover:ring-2 ring-purple-700 hover:shadow-lg hover:shadow-blue-500 px-3 py-2 bg-blue-600 rounded-xl sm:text-xl text-2xl text-white">
          Annuler
        </button>
      </div>
        <div className="grid grid-cols-2 lg:gap-y-10 lg:gap-x-28 gap-10 bg-slate-300 lg:p-10 px-5 py-3 rounded-2xl ">
          <div>
            <label htmlFor="nomswitch"> Nom Switch </label>
            <input
              type="text"
              id="nomswitch"
              className="block  rounded-md w-full p-2"
              name="Nom"
              value={Switch.Nom}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="nomswitch"> Bloc </label>
            <input
              type="text"
              id="nomswitch"
              className="block  rounded-md w-full p-2"
              name="Bloc"
              value={Switch.Bloc}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="nomswitch"> Modèle </label>
            <input
              type="text"
              id="nomswitch"
              className="block  rounded-md w-full p-2"
              name="Modèle"
              value={Switch.Modèle}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="nominvent"> Nom Inventaire </label>
            <input
              className="block  rounded-md w-full p-2"
              type="text"
              id="nominvent"
              name="N_d_inventaire"
              value={Switch.N_d_inventaire}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="mac"> Adresse Mac </label>
            <input
              className="block  rounded-md w-full p-2"
              type="text"
              id="mac"
              name="Adresse_MAC"
              value={Switch.Adresse_MAC}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="nbreport"> Nombre de ports G_E </label>
            <input
              className="block  rounded-md w-full p-2"
              type="text"
              id="nbreport"
              name="Nombre_de_ports_G_E"
              value={Switch.Nombre_de_ports_G_E}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="nbreport"> Armoire </label>
            <input
              className="block  rounded-md w-full p-2"
              type="text"
              id="nbreport"
              name="Armoire"
              value={Switch.Armoire}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="nbreport"> Marque </label>
            <input
              className="block  rounded-md w-full p-2"
              type="text"
              id="nbreport"
              name="Marque"
              value={Switch.Marque}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="nbreport"> Adresse_IP </label>
            <input
              className="block  rounded-md w-full p-2"
              type="text"
              id="nbreport"
              name="Adresse_IP"
              value={Switch.Adresse_IP}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="nbreport"> N_Serie </label>
            <input
              className="block  rounded-md w-full p-2"
              type="text"
              id="nbreport"
              name="N_Serie"
              value={Switch.N_Serie}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="nbreport"> Nombre_de_ports_F_E </label>
            <input
              className="block  rounded-md w-full p-2"
              type="text"
              id="nbreport"
              name="Nombre_de_ports_F_E"
              value={Switch.Nombre_de_ports_F_E}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="empl">Nombre_de_ports_SFP </label>
            <input
              className="block  rounded-md w-full p-2"
              type="text"
              id="empl"
              name="Nombre_de_ports_SFP"
              value={Switch.Nombre_de_ports_SFP}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className=" flex  ">
            <input
              type="checkbox"
              id="stock"
              className="self-center w-5 mr-6 h-5 cursor-pointer"
            />
            <label htmlFor="stock" className="self-center">
              Switch de stock{" "}
            </label>
          </div>
        </div>
        <Link to={"/ConfigurerPorts"}>  
        <button className="hover:scale-110 transition duration-300 hover:-translate-y-1 bg-[#3319E8] hover:outline-none mx-auto block mt-5 px-3 py-2  rounded-xl sm:text-xl text-2xl text-white">
          Suivant
        </button>
        </Link>
      </form>
    </div>
  );
}
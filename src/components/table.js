import { useEffect, useState } from "react";
import background from "./../images/site-background.jpg";
const Table = (props) => {
 

  return (
    // <table className="w-full border-gray-300 border-solid">
    //   <thead className="bg-gray-300  border-2   ">
    //     <th className=" text-center py-3 px-2 ">ADR_IP</th>
    //     <th className=" text-center py-3 px-2 ">ADR_MAC</th>
    //     <th className=" text-center py-3 px-2">Bloc</th>
    //     <th className=" text-center py-3 px-2">Etat</th>
    //     <th className=" text-center py-3 lg:block  md:hidden px-2">Marque</th>
    //     <th className=" text-center py-3  px-2">Modele</th>
    //     <th className=" text-center py-3 px-2">N_d_inventaire</th>
    //     <th className=" text-center py-3 px-2">Nom</th>
    //     <th></th>
    //   </thead>
    //   <tbody>
    //     {(props.switches).map((elem) => (
    //       <tr
    //         key={elem.N_d_inventaire}
    //         className="bg-white m-2 border border-2 border-b-solid"
    //       >
    //         <td className=" text-center py-2 ">{elem.Adresse_IP}</td>
    //         <td className=" text-center py-2 ">{elem.Adresse_MAC}</td>

    //         <td className=" text-center py-2 ">{elem.Bloc}</td>
    //         <td className=" text-center py-2 ">
    //           {elem.Etat ? (
    //             <span className="font-bold border border-green-500 border-2 rounded-lg p-1 bg-green-300">
    //               Oui
    //             </span>
    //           ) : (
    //             <span className="font-bold border border-red-500 border-2 rounded-lg p-1 bg-red-300">
    //               Non
    //             </span>
    //           )}
    //         </td>
    //         <td className=" text-center py-2 lg:block  md:hidden">{elem.Marque}</td>
    //         <td className=" text-center py-2 ">{elem.Modèle}</td>
    //         <td className=" text-center py-2 ">{elem.N_d_inventaire}</td>
    //         <td className=" text-center py-2 ">{elem.Nom}</td>
    //         <td>
    //           {" "}
    //           <div className="text-center">
    //             <button className=" hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">
    //               Detail
    //             </button>{" "}
    //             <button className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">
    //               Modifier
    //             </button>{" "}
    //           </div>
    //         </td>
    //       </tr>
    //     ))}
       
    //   </tbody>
    // </table>
    <table className="w-full border-gray-300 border-solid">
    <thead className="bg-gray-300  border-2   ">
      <th className=" text-center py-3 px-2 ">ADR_IP</th>
      <th className=" text-center py-3 px-2 ">ADR_MAC</th>
      <th className=" text-center py-3 px-2">Bloc</th>
      <th className=" text-center py-3 px-2">Etat</th>
      <th className=" text-center py-3 lg:block  md:hidden px-2">Marque</th>
      <th className=" text-center py-3  px-2">Modele</th>
      <th className=" text-center py-3 px-2">N_d_inventaire</th>
      <th className=" text-center py-3 px-2">Nom</th>
      <th></th>
    </thead>
    <tbody>
      {(props.switches).map((elem) => (
        <tr
          key={elem._id}
          className="bg-white m-2 border border-2 border-b-solid"
        >
          <td className=" text-center py-2 ">{elem.Adresse_IP}</td>
          <td className=" text-center py-2 ">{elem.Adresse_MAC}</td>

          <td className=" text-center py-2 ">{elem.Bloc}</td>
          <td className=" text-center py-2 ">
            {(elem.Etat.toString()==="true") ? (
              <span className="font-bold border border-green-500 border-2 rounded-lg p-1 bg-green-300">
                Oui
              </span>
            ) : (
              <span className="font-bold border border-red-500 border-2 rounded-lg p-1 bg-red-300">
                Non
              </span>
            )}
          </td>
          <td className=" text-center py-2 lg:block  md:hidden">{elem.Marque}</td>
          <td className=" text-center py-2 ">{elem.Modèle}</td>
          <td className=" text-center py-2 ">{elem.N_d_inventaire}</td>
          <td className=" text-center py-2 ">{elem.Nom}</td>
          <td>
            {" "}
            <div className="text-center">
               <button className=" hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold" onClick={()=>{props.setsearch(true);props.getDetails(elem);}}> {/*getDetails(elem) */}
                Detail
              </button>{" "}
              <button onClick={()=>props.Gomodifier(elem)} className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">
                Modifier
              </button>{" "}
            </div>
          </td>
        </tr>
      ))}

    </tbody>
  </table>

  );
};

export default Table;

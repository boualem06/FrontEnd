import React, { useState } from "react";
// import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
export default function UserInformations({ user }) {
  console.log("from userInformations " ,  user ) ; 
  // let user = {
  //   _id: "627d45a218197d07b50e82de",
  //   name: "belhadef",
  //   prenom: "dhjcgjdhgbcj",
  //   email: "km_belhadef@esi.dz",
  //   role: false,
  // };
  // let user = props.user;
  return (
    <div className="h-screen  pt-24  ">
      {/* <div className="lg:w-1/2 sm:w-5/6 text-black  my-auto self-center mx-auto text-xl font-serif p-6 rounded-xl shadow-2xl shadow-black space-y-6 bg-gradient-to-tr from-slate-400 to-blue-600 via-blue-400">
        <h1 className="text-4xl text-center text-blue-900">
          Fiche d'informations{" "}
        </h1>
        <div className="grid grid-cols-2 gap-y-6">
          <div>
            <h1 className="font-bold">Nom </h1>
            <h2 className="text-white font-extralight">{user.name}</h2>
          </div>
          <div>
            <h1 className="font-bold">Prénom </h1>
            <h2 className="text-white font-extralight">{user.prenom}</h2>
          </div>
          <div>
            <h1 className="font-bold">Email </h1>
            <h2 className="text-white font-extralight">{user.email}</h2>
          </div>
          <div>
            <h1 className="font-bold">Numéro de téléphone </h1>
            <h2 className="text-white font-extralight">{user.phone}</h2>
          </div>
        </div>
        <div>
          <h1 className="font-bold">Occupation </h1>
          <h2 className="text-white font-extralight">{user.occupation}</h2>
        </div>
        <div className="grid grid-cols-2 ">
          <div>
            <h1 className="font-bold">Role </h1>
            <h2 className="text-white font-extralight">
              {user.role == true ? "admin" : "simple utilisateur"}
            </h2>
          </div>
          <div>
            <h1 className="font-bold">Etat </h1>
            <h2 className="text-white font-extralight">
              {user.deleted == true ? "desactivé" : "activé"}
            </h2>
          </div>
        </div>
      </div> */}
      <div className="lg:w-1/2 sm:w-5/6 text-blue-500  my-auto self-center mx-auto text-xl font-serif p-6 rounded-xl shadow-2xl shadow-black space-y-6 ">
        <h1 className="text-4xl text-center text-purple-700">
          Fiche d'informations{" "}
        </h1>
        <div className="grid grid-cols-2 gap-6">
          <TextField
            focused
            color="secondary"
            id="outlined-read-only-input"
            label="Name"
            defaultValue={user.name}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Prénom"
            defaultValue={user.prenom}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Email"
            defaultValue={user.email}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Numero de telephone"
            defaultValue={"refisse"}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
        <div>
          <TextField
            color="secondary"
            focused
            fullWidth
            id="outlined-read-only-input"
            label="poste de travaille "
            defaultValue={user.occupation}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-6 ">
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Role"
            defaultValue={
              user.role == 0
                ? "admin"
                : user.role == 1
                ? "gestionnaire"
                : "simple utilisateur"
            }
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Etat"
            defaultValue={user.deleted == true ? "desactivé" : "activé"}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}

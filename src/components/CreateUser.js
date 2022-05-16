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
import { Checkbox } from "@mui/material";

import { FaEyeSlash, FaEye } from "react-icons/fa";

// interface State {
//   amount: string;
//   password: string;
//   weight: string;
//   weightRange: string;
//   showPassword: boolean;
// }

function CreateUser() {
  const handleMouseConfirmedPassword = () => {
    if (
      values.confirmedPassword != values.password &&
      values.confirmedPassword.length != 0
    )
      setMessageErrorConfirmedPassword("vérifier le mot de passe confirmé   ");
  };
  const [messageErrorMail, setMessageErrorMail] = useState("");
  const [messageErrorPassword, setMessageErrorPassword] = useState("");
  const [messageErrorConfirmedPassword, setMessageErrorConfirmedPassword] =
    useState("");
  const [messageErrorPhone, setMessageErrorPhone] = useState("");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    occupation: "",
    delete: false,
    role: "simple",
    showPassword: false,
    confirmedPassword: "",
    showConfirmedPassword: false,
  });
  let informations = {
    name: "",
    prenom: "",
    phone: "",
    email: "",
    password: "",
    occupation: "",
    delete: false,
    role: false,
  };
  const envoyer = () => {
    informations.name = values.firstName;
    informations.prenom = values.lastName;
    informations.email = values.email;
    informations.occupation = values.occupation;
    informations.password = values.password;
    informations.phone = values.phone;
    if (
      informations.name != "" &&
      informations.prenom != "" &&
      informations.email != "" &&
      informations.occupation != "" &&
      informations.password != "" &&
      informations.phone != "" &&
      messageErrorConfirmedPassword == "" &&
      messageErrorMail == "" &&
      messageErrorPassword == "" &&
      messageErrorPhone == ""
    ) {
      fetch("http://localhost:5000/createuser", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(informations), //'62555a53eb287372cf3ffdaa'
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log("Ramiiiiiiiiiiiiiii", data);
        });
    } else {
      alert(
        "vous devez vérifier que toutes les informations sont conformes et que tous les champs sont remplis"
      );
    }
    console.log("yaw arwa7 chouf", values);
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    if (prop == "email") {
      if (event.target.value.length == 0) setMessageErrorMail("");
      else {
        if (!regex.test(event.target.value))
          setMessageErrorMail("Email invalid ! ");
        else setMessageErrorMail("");
      }
    }
    if (prop == "password") {
      if (event.target.value.length > 0 && event.target.value.length < 8)
        setMessageErrorPassword(
          "Le mot de passe doit contenir au moins 8 caractères "
        );
      else {
        setMessageErrorPassword("");
      }
    }
    if (prop == "confirmedPassword") {
      if (values.password.length == 0 && event.target.value.length != 0)
        setMessageErrorConfirmedPassword("vous devez définir le mot de passe ");
      else {
        if (
          values.password.length < event.target.value.length ||
          values.password.slice(0, event.target.value.length) !=
            event.target.value
        )
          setMessageErrorConfirmedPassword(
            "vérifier le mot de passe confirmé   "
          );
        else setMessageErrorConfirmedPassword("");
      }
    }
    if (prop == "phone") {
      if (isNaN(event.target.value))
        setMessageErrorPhone(
          "le numéro de téléphone doit contenir seulement des chiffres!"
        );
      else if (
        (event.target.value.length > 0 && event.target.value.length < 10) ||
        event.target.value.length > 10
      )
        setMessageErrorPhone(
          "le numéro de téléphone doit contenir 10 chiffres!"
        );
      else setMessageErrorPhone("");
    }
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowConfirmedPassword = () => {
    setValues({
      ...values,
      showConfirmedPassword: !values.showConfirmedPassword,
    });
  };

  const handleMouseDownConfirmedPassword = (event) => {
    event.preventDefault();
  };

  const handleAdmin = () => {
    setValues({
      ...values,
      role: !values.role,
    });
  };

  const handleDelete = () => {
    setValues({
      ...values,
      delete: !values.delete,
    });
  };

  return (
    <div className="border-2 rounded-xl  m-auto lg:w-1/2 sm:w-2/3 pl-4 pr-8 py-4 text-2xl">
      <h1 className="text-3xl text-black font-semibold mb-4 text-left">
        Ajouter un nouveau utilisateur
      </h1>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-x-10 ">
          <div>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-firstName">
                Nom{" "}
              </InputLabel>
              <OutlinedInput
                required
                id="outlined-adornment-firstName"
                value={values.firstName}
                onChange={handleChange("firstName")}
                // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Nom"
              />
            </FormControl>
          </div>
          <div>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-lastName">
                Prenom{" "}
              </InputLabel>
              <OutlinedInput
                required
                id="outlined-adornment-lastName"
                value={values.lastName}
                onChange={handleChange("lastName")}
                // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Prenom"
              />
            </FormControl>
          </div>
        </div>
        <div>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-occupation">
              Poste de travaille{" "}
            </InputLabel>
            <OutlinedInput
              required
              id="outlined-adornment-occupation"
              value={values.occupation}
              onChange={handleChange("occupation")}
              // startAdornment={<InputAdornment position="start">$</InputAdornment>}
              label="Poste de travaille"
            />
          </FormControl>
          <p></p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-6">
          <div>
            <FormControl variant="outlined" fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                required
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <FaEyeSlash /> : <FaEye />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <p className="text-red-500 text-sm ">{messageErrorPassword}</p>
          </div>
          <div>
            <FormControl variant="outlined" fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-confirmedPassword">
                Confirmed Password
              </InputLabel>
              <OutlinedInput
                required
                id="outlined-adornment-confirmedPassword"
                type={values.showConfirmedPassword ? "text" : "password"}
                value={values.ConfirmedPassword}
                onChange={handleChange("confirmedPassword")}
                onBlur={handleMouseConfirmedPassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmedPassword}
                      onMouseDown={handleMouseDownConfirmedPassword}
                      edge="end"
                    >
                      {values.showConfirmedPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="confirmed Password"
              />
            </FormControl>
            <p className="text-red-500 text-sm ">
              {messageErrorConfirmedPassword}
            </p>
          </div>

          <div>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-email">
                E-mail{" "}
              </InputLabel>
              <OutlinedInput
                required
                id="outlined-adornment-email"
                value={values.email}
                onChange={handleChange("email")}
                // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="E-mail"
              />
            </FormControl>
            <p className="text-red-500 text-sm ">{messageErrorMail}</p>
          </div>
          <div>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-phone" color="success">
                Numero de téléphone{" "}
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-phone"
                value={values.phone}
                onChange={handleChange("phone")}
                // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Numero de téléphone"
              />
            </FormControl>
            <p className="text-red-500 text-sm ">{messageErrorPhone}</p>
          </div>
        </div>
      </div>
      <div className="mt-4  grid grid-cols-2 space-x-10">
        <button
          type="submit"
          className="border text-xl text-white p-3 bg-blue-700 hover:outline-none hover:ring-2 hover:bg-blue-500 rounded-xl hover:shadow-xl hover:ring-violet-800 hover:scale-105"
          onClick={envoyer}
        >
          Ajouter
        </button>
        <div className="self-center flex justify-between ">
          <div className="space-x-2">
            <input type="checkbox" id="role" onChange={handleAdmin} />
            <label htmlFor="role">Admin</label>
          </div>

          <div className="space-x-2">
            <input type="checkbox" id="delete" onChange={handleDelete} />
            <label htmlFor="delete">Activer</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;

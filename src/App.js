import logo from "./logo.svg";
import "./App.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Table from "./components/table";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import ModifierSwitch from './components/modifierswitch';
import Modifier from "./components/modifier";
import AjouterSwitch from "./components/AjouterSwitch";
import { useEffect, useState } from "react";
import Add from "./components/Add";
import RechercheSwitch from "./components/RechercheSwitch";
// import Test from './components/test'
import Loading from "./components/loading";
import Login from "./components/login";

import ConfigurerPorts from "./components/PortSwitch";
// import { Switch } from '@material-ui/core';
import PremierePage from "./components/fist";
import CreateUser from "./components/CreateUser";
import ModiferUser from "./components/ModifierUser";
import UsersMangement from "./components/UsersManagement";
import ModiferPasseword from "./components/ModiferPasseword";
import MotDePasseOublier from "./components/MotDePasseOublier";
import ProfilePersonnel from "./components/ProfilePersonnel";
import Aide from "./components/Aide";
import ForgotPassword from "./components/ForgotPassword";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Confirmation from "./components/Confirmation";
//import Profile from './components/test1';
import Cookies from "js-cookie";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [NbPorts,setNbPorts]=useState(0) ;
  const [nomSwitch,setNomSwitch]=useState("") ;
  useEffect(() => {
    const user = Cookies.get("jwt");
    console.log(user);
    if (user) {
      setIsAuth(true);
    }
  }, []);
  return (
    //  <Home></Home>
    // <Navbar></Navbar>
    // <div>helllo world</div>

    <Router>
      {/* <Route path={"/"} exact>
              <div>hellllo</div>
              <Link to={"/Home"}>Cliquer</Link>
            </Route> */}
      {/* <Route path={"/Login"}>
            </Route> */}

      {!isAuth ? (
        <Switch>
          <Route path={"/"} exact>
            <div>hellllo</div>
            <Link to={"/Home"}>Cliquer</Link>
          </Route>
          {/* {isAuth && <Route path="/Home"><Home></Home></Route>} */}
          <ProtectedRoutes
            isAuth={isAuth}
            exact
            component={Home}
            path="/Home"
          />
          {/* <ProtectedLogin path="/Login" isAuth={isAuth}component={Login} ></ProtectedLogin> */}
          {/* <ProtectedRoutes exact path={"/Profile"} isAuth={isAuth} component={ProfilePersonnel} ></ProtectedRoutes> */}
          <Route path={"/Login"}>
            {" "}
            <Login isAuth={isAuth} setIsAuth={setIsAuth} />
          </Route>
          <Route path="/ForgotPassword"> <ForgotPassword></ForgotPassword></Route>
          {/* <ProtectedRoutes path="/Ajouter" component={AjouterSwitch} isAuth={isAuth} />  */}
        </Switch>
      ) : (



        <Switch>
          <Route path={"/"} exact>
            <div>hellllo</div>
            <Link to={"/Login"}>Cliquer</Link>
          </Route>
          <Route path={"/Login"}>
            <Home></Home>
          </Route>
          <Route path={"/Addd"}>
            <div>
              <Link to={"/Login"}>Go to Home</Link>
            </div>
          </Route>
          <Route path="/" exact><PremierePage></PremierePage></Route>
          <Route path="/AjouterSwitch" exact><AjouterSwitch setNomSwitch={setNomSwitch} NbPorts={NbPorts} setNbPorts={setNbPorts} ></AjouterSwitch></Route>

          <Route path="/Confirmation"><Confirmation  NbPorts={NbPorts} ></Confirmation></Route>
          <Route path="/ConfigurerPorts"><ConfigurerPorts nomSwitch={nomSwitch} NbPorts={NbPorts}></ConfigurerPorts></Route>
          <Route path="/Login" exact><Home ></Home></Route>
          <Route path="/CreateUser" exact><CreateUser></CreateUser></Route>
          <Route path="/ModiferUser" exact><ModiferUser></ModiferUser></Route>
          <Route path="/UsersMangement" exact><UsersMangement></UsersMangement></Route>
          <Route path="/ModiferPasseword" exact><ModiferPasseword></ModiferPasseword></Route>
          <Route path="/Aide" exact><Aide ></Aide></Route>
          <Route path="/ProfilePersonnel" exact><ProfilePersonnel ></ProfilePersonnel></Route>


          {/* <Route path="/" element={<PremierePage/>} />
          <Route path="/Ajouter" element={<AjouterSwitch />} />
          <Route path="/Login" element={<Home />} />
          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path="/ModiferUser" element={<ModiferUser />} />
          <Route path="/UsersMangement" element={<UsersMangement />} />
          <Route path="/ModiferPasseword" element={<ModiferPasseword />} />
          <Route path="/Aide" element={<Aide />} />
          <Route
            path="/ProfilePersonnel"
            element={<ProfilePersonnel />}
          ></Route> */}

        </Switch>
      )}
      {/* dans cette partie j'ai trafiquer un peu donc c l'utilisateur a fait le Login le chemin de la page d'aaceuil est "/Login" */}
    </Router>

    // <Router>

    //   <Route path={"/"} exact>
    //   {/* <PremierePage/> */}
    //     <button><Link to={"/Home"}>Cliquer</Link></button>
    //   </Route>
    //   <ProtectedRoutes isAuth={isAuth}  component={Home} path="/Home" />
    //   <Route path={"/Login"}> <Login setIsAuth={setIsAuth} /> </Route>
    // {/* <ProtectedRoutes path="/Ajouter" component={AjouterSwitch} isAuth={isAuth} /> */}

    //  {/* <ProtectedRoutes path="/Home" component={Test} isAuth={isAuth} />
    // <ProtectedRoutes path="/Home" component={Test} isAuth={isAuth} />
    // <ProtectedRoutes path="/Home" component={Test} isAuth={isAuth} />
    // <ProtectedRoutes path="/Home" component={Test} isAuth={isAuth} />
    // <ProtectedRoutes path="/Home" component={Test} isAuth={isAuth} />
    // <ProtectedRoutes path="/Home" component={Test} isAuth={isAuth} />
    // <ProtectedRoutes path="/Home" component={Test} isAuth={isAuth} />
    // <ProtectedRoutes path="/Home" component={Test} isAuth={isAuth} /> */}
    // {/* </Router> */}
    //   {/* <Link to={"/profile"} > go to profile</Link> */}
    //  < Router>
    //     <Routes>
    //          <Route path='/' element={<PremierePage/>} />
    //          <Route path='/Ajouter' element={<AjouterSwitch/>} />
    //          <Route path='/Home' element={<Home/>} />
    //          <Route path='/Login' element={<Login/>} />
    //          <Route path='/CreateUser' element={<CreateUser/>} />
    //          <Route path='/ModiferUser' element={<ModiferUser/>} />
    //          <Route path='/UsersMangement' element={<UsersMangement/>} />
    //          <Route path='/ModiferPasseword' element={<ModiferPasseword/>} />
    //          <Route path='/MotDePasseOublier' element={<MotDePasseOublier/>} />
    //          <Route path='/Aide' element={<Aide/>} />
    //          <Route path='/ProfilePersonnel' element={<ProfilePersonnel/>}></Route>
    //      </Routes>
    //   </Router>

    // <AjouterSwitch></AjouterSwitch>
    //  <Add></Add>
  );
}

export default App;

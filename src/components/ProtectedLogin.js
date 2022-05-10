// import {Route} from "react-router-dom";
// import Login from './login'
// import {Redirect} from "react-router-dom";
// import First from './fist'
// const ProtectedLogin = ({isAuth : isAuth,setIsAuth:setIsAuth,component:Component, ...rest}) => {
//     // let history = useHistory();
//     // console.log(isAuth) ;
    
//     return ( <Route
//          {...rest}
//          render={(props)=>{
//         if(!isAuth)
//         {
//             return <First setIsAuth={setIsAuth} isAuth={isAuth} /> ;
//         }
//         else
//         {
//               return <Redirect to={{pathname:"/Home",state:{from:props.location}}}/> ;
//         }
//     }} />

//      );
// }
 
// export default ProtectedLogin;

import {BrowserRouter as  Route} from "react-router-dom";
import {Redirect} from "react-router-dom";
import PremierePage from './fist'
// console.log(isA)
import { LoginContext } from "../Contexts/LoginContext";
import { useContext } from "react";

console.log("the is auth ine protected Login ") ;

const ProtectedLogin = ({isAuth:isAuth, component:Component,...rest}) => {
    // let history = useHistory();
     
    // const {isAuth,setIsAuth}=useContext(LoginContext) ;
    console.log(isAuth);
    return ( <Route
         {...rest}
         render={(props)=>
        !isAuth ?
        
        (<Component/>)
         :
       
                <Redirect to={{pathname:"/Home",state:{from:props.location}}} />
            //  (<Redirect to="/Home"/>)
        
    } />

     );
}
 
export default ProtectedLogin;
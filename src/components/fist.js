import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom"
const PremierePage = () => {
    return ( <div>
        PREMIERE PAGE
        <Link to={'/Home'}>click</Link>
    </div> );
}
 
export default withRouter(PremierePage) ;
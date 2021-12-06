
import authContext from "./context/authContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
export default function require_auth (WrappedComponent )  {

function HOC () {
    //redirct the user to the error page if it is not authonticated 

    const  history=useHistory();
    const [state,dispatch]=useContext(authContext);
    if (!state.isAuthenticated){
        history.replace("/error");

    }

    return <WrappedComponent {...this.props} />
}

return HOC ;
}



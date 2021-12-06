export const initialState ={

    isAuthenticated : false 
};

export const reducer =(state, type) => {

    switch(type){

        case "LOGIN":{
            return {
                ...state ,
                isAuthenticated : true
            };
        }

        case "LOGOUT" : {
            return {
                ...state,
                isAuthenticated: false 
            };

        }


        default :  { return {
            state
        };
    }

    }
}
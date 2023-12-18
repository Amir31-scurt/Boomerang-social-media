// import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./authContext";
// import { auth } from "../firebase";
// import { Value } from "sass";

// Creation de contexte
export const ChatContext = createContext()


// Fonction fournisseur (provider) de contexte
export const ChatContextProvider = ({children}) => {

    const {currentUser} = useContext(AuthContext) 
    const INITIAL_STATE = {
        chatId: "null",
        user: {}
    }

    const chatReducer = (state, action) => {
        switch(action.type){
            case "CHANGE_USER": 
                return{
                    user: action.payload,
                    chatId: 
                currentUser.uid > action.payload.uid
                ? currentUser.uid + action.payload.uid
                : action.payload.uid + currentUser.uid,
                }

                default:
                    return state;
        }
    }
    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE)
    return (
        <ChatContext.Provider value={{ data: state, dispatch }}>
            {children}
        </ChatContext.Provider>
    );
        
}
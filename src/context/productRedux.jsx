import { useReducer } from "react"
import { TYPE } from "../utils/productTypes";



export const INITALSTATE={
    Cart:[],

}

export const productReduxItem=(state,action)=>{
    switch(action.type){

        case TYPE.ADD_TO_CART:
            let items=0
            if(state.Cart.map((item)=>item?.id).includes(action.payload?.id)){
             
              
            }else{
               
                
               return {...state,Cart:[...state.Cart,action.payload,]}

            }
           
        case TYPE.REMOVE_FROM_CART:
           return {...state,Cart: state.Cart.filter((item)=>item.id!==action.payload.id)}


        default :
        return state;
    }
}





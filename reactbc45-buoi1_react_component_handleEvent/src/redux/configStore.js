import {configureStore} from '@reduxjs/toolkit'
import { userRegisterReducer } from './reducers/userRegisterReducer'
import arrUserReducer from './reducers/arrUserReducer'


export const store = configureStore ({
    reducer :  {
       

        userRegisterReducer : userRegisterReducer,
        arrUserReducer : arrUserReducer
       
    }

   
})
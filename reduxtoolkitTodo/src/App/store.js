import {configureStore} from '@reduxjs/toolkit'
import todoreducer from '../features/todo/Todoslice'



export const store = configureStore({
    reducer: todoreducer
})
import { configureStore } from "@reduxjs/toolkit";
import interfaceReducer from "../slices/interfaceSlice";


export function makeStore() {
    return configureStore({
        reducer: {
            interface: interfaceReducer
        }
    });
}


export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice"

const AppStore = configureStore({
    reducer:{
        cart : cartReducer,
    },
})

export default AppStore;
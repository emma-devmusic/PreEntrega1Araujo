import { createContext, useState } from "react";


export const OrderDataContext = createContext({
    order: {}
})

export const OrderDataProvider = ({children}) => {
    const [userData, setUserData] = useState({});
    const setOrderData = ({name, email, phone}) => {
        setUserData({ name, email, phone })
    }
    const cleanOrderData = () => setOrder({})

    return <OrderDataContext.Provider
        value={{setOrderData, cleanOrderData, userData}}
    >
        {children}
    </OrderDataContext.Provider>
}
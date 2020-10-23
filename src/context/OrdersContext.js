import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'

const OrdersContext = React.createContext()

export function useOrders() {
    return useContext(OrdersContext)
}

export function OrdersProvider({children}) {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/orders').then(res => {
            setOrders(res.data)
        }).catch(err => {
            console.log(err.response.data.message)
        })
    }, [])

    const value = {
        orders: orders,
        setOrders: setOrders
    }

    return (
        <OrdersContext.Provider value={value}>
            {children}
        </OrdersContext.Provider>
    )
}

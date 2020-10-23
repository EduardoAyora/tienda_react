import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'

const OrdersContext = React.createContext()

export function useOrders() {
    return useContext(OrdersContext)
}

export function OrdersProvider({children}) {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get('http://localhost:1100/orders').then(res => {
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

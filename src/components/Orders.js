import React, {useEffect} from 'react'
import Order from './Order'
import {useOrders} from '../context/OrdersContext'

export default function Orders({changeActivePage}) {
    const orders = useOrders().orders

    useEffect(() => {
        changeActivePage('orders')
        document.body.style.backgroundColor = '#f2f2f4'

        return () => {
            changeActivePage('')
            document.body.removeAttribute("style")
        }
    }, [changeActivePage])

    const orderComponents  = orders.map((order) => {
        return (
            <Order key={order._id} order={order} />
        )
    })

    return (
        <ul className="items-container cart-container">
            {orderComponents}
        </ul>
    )
}

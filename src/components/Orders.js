import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Order from './Order'

export default function Orders({changeActivePage}) {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        changeActivePage('orders')
        document.body.style.backgroundColor = '#f2f2f4'
        axios.get('http://localhost:1100/orders').then(res => {
            setOrders(res.data)
        })

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

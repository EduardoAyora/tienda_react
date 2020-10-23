import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown, faTrash} from '@fortawesome/free-solid-svg-icons'
import Modal from './Modal/Modal'
import {useOrders} from '../context/OrdersContext'
import axios from 'axios'

export default function Order({order}) {
    const [showDetail, setShowDetail] = useState(false)

    // use Memo
    const orderTotal = order.details.reduce((currentTotal, detail) => {
        return currentTotal + detail.price.value * detail.quantity
    }, 0)

    return (
        <li className="order-item">
            <div className='order-item-header'>
                <strong>Mesa {order.tableNumber}</strong>
                <span onClick={() => setShowDetail(prevShow => !prevShow)}>
                    <span style={{marginRight:'1em'}} className='order-item-total'>Total ${orderTotal.toFixed(2)}</span>
                    <FontAwesomeIcon icon={faCaretDown} className={showDetail ? 'fa-lg fa-rotate-180' : 'fa-lg'} />
                </span>
            </div>
            <ExpandedOrder order={order} detailOpen={showDetail} />
        </li>
    )
}

function ExpandedOrder({detailOpen, order}) {
    const details = order.details
    const setOrders = useOrders().setOrders
    const [modalOpen, setModalOpen] = useState(false)
    const onClose = () => {
        setModalOpen(false)
    }

    const handleDelete = (e) => {
        e.preventDefault()
        axios.delete(`${process.env.REACT_APP_API_URL}/orders/${order._id}`).then(res => {
            setModalOpen(false)
            setOrders(prevOrders => {
                const newOrders = prevOrders.filter(ord => {
                    return ord._id !== order._id
                })
                return newOrders
            })
        }).catch(err => {
            console.log(err.response.data.message)
            setModalOpen(false)
        })
    }

    // useMemo
    const detailComponents = details.map(detail => {
        const price = detail.price.value
        const quantity = detail.quantity
        return (
            <tr key={detail._id}>
                <td>{detail.product.name}</td>
                <td>{price.toFixed(2)}</td>
                <td>{quantity}</td>
                <td>{(price * quantity).toFixed(2)}</td>
            </tr>
        )
    })
    if (!detailOpen) return null
    return (
        <div>
            <table className='details-table'>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {detailComponents}
                </tbody>
            </table>
            <button onClick={() => setModalOpen(true)} className='delete-detail'>
                <div style={{display:'flex',alignItems:'center'}}>
                    <span style={{marginRight:'.5em', fontSize:'1.5em'}}>Borrar</span>
                    <FontAwesomeIcon icon={faTrash} className={'fa-lg'} />
                </div>
            </button>
            <Modal open={modalOpen} onClose={onClose} onAccept={handleDelete}>
                ¿Seguro que desea eliminar esta orden?
            </Modal>
        </div>
    )
}


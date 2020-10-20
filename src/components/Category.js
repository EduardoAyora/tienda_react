import React, {useEffect, useState} from 'react';
import {DishItem} from './DishItem';
import {Header} from './Header';
import {useCategories} from '../context/CategoriesContext'
import axios from 'axios'

export function Category({match, history, addToCart, changeNewInCart, changeActivePage}) {

    const [loading, setLoading] = useState(true)

    const setCategories = useCategories().setCategories
    const category = useCategories().categories.find(({slug}) => slug === match.params.slug)
    const categoriesLoading = useCategories().categoriesLoading

    useEffect(() => {
        document.body.style.backgroundColor = '#f2f2f4'
        changeActivePage('home')

        if (!categoriesLoading) {
            if (category.products.length > 0) {
                if (typeof category.products[0] !== 'object') {
                    axios.get(`http://localhost:1100/categories/${category.slug}/products`).then(res => {
                        setCategories(prevCategories => {
                            let newCategories = prevCategories.filter(({slug}) => slug !== category.slug)
                            return [...newCategories, res.data]
                        })
                        setLoading(false)
                    })
                } else {
                    setLoading(false)
                }
            } else {
                setLoading(false)
            }
        }
        
        return(() => {
            document.body.removeAttribute("style")
            changeActivePage('')
        })
    }, [changeActivePage, category, setCategories, categoriesLoading])

    // obteniendo los productos y sus precios dentro de la categoria
    let productsArray
    let products
    if(!loading) {
        productsArray = category.products
        products = productsArray.map((product) => (
            <DishItem key={product._id} product={product} addToCart={addToCart}
                changeNewInCart={changeNewInCart} />
        ))
    }

    return(
        <div>
            <Header pageName={loading ? '' : category.name} history={history} />
            <ul className="items-container category-container">
                {loading ? 'cargando' : products}
            </ul>
        </div>
    )
}
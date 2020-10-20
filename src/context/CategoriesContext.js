import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'

const CategoriesContext = React.createContext()

export function useCategories() {
    return useContext(CategoriesContext)
}

export function CategoriesProvider({children}) {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('http://localhost:1100/categories').then(res => {
            setCategories(res.data)
            setLoading(false)
        }).catch(err => {
            console.log(err.response.data.message)
        })
    }, [])

    const value = {
        categories: categories,
        setCategories: setCategories,
        categoriesLoading: loading
    }

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}
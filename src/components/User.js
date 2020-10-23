import React, {useEffect} from 'react'

export default function User({changeActivePage}) {

    useEffect(() => {
        changeActivePage('user')
        document.body.style.backgroundColor = '#f2f2f4'

        return () => {
            changeActivePage('')
            document.body.removeAttribute("style")
        }
    }, [changeActivePage])

    return (
        <div>
            Usuario
        </div>
    )
}

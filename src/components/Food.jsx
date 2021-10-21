import { useState, useEffect } from 'react'

const Food = ({ foodsData }) => {
    //states
    const [menus, setMenus] = useState(foodsData)
    const [menu, setMenu] = useState(null)
    const [clicked, setClicked] = useState(false)

    //function
    const handleRandomButton = () => {
        setMenu(menus[Math.floor(Math.random() * menus.length)])
        setClicked(true)
    }

    useEffect(() => {
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                setMenu(menus[Math.floor(Math.random() * menus.length)])
                setClicked(true)
            }
        })
    }, [])

    return (
        <>
            <h1 className="text-6xl md:text-8xl text-blue-500">กินอะไรดี ?</h1>
            {clicked ? (
                <p className="text-center text-purple-600 my-6 text-3xl md:text-5xl">
                    {menu.title}
                </p>
            ) : (
                '' //display empty
            )}
            {clicked ? (
                <>
                    <img
                        className="rounded-2xl max-w-md border-2 border-gray-50 h-auto"
                        src={menu.picUrl}
                        alt={menu.title}
                    />
                    <p className="text-purple-600 mt-4 text-center text-xl md:text-2xl">
                        {menu.calories} แคลอรี่
                    </p>
                </>
            ) : (
                '' //display empty
            )}
            <button
                onClick={handleRandomButton}
                className="duration-300 mt-4 px-8 md:px-12 py-3 md:py-4 text-blue-500 bg-transparent hover:bg-blue-500 text-2xl border-2 border-blue-500 hover:text-white rounded-2xl"
            >
                {clicked ? 'สุ่มอีก !' : 'สุ่มเลย !'}
            </button>
        </>
    )
}

export default Food

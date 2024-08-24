import { useState } from 'react';
import Menu from './Menu.jsx';


function Hamburguesa() {

    const pathHamburguesa = "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"

    const pathCerrar = "M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"

    const [menu, setMenu] = useState(false)
    const [path, setPath] = useState(pathHamburguesa);

    function handleClick() {
        if (path == pathHamburguesa) {
            setPath(pathCerrar)
            setMenu(true)
            document.body.style.overflowY = 'hidden';
        } else {
            setPath(pathHamburguesa)
            setMenu(false)
            document.body.style.overflowY = 'auto';
        }

    }

    return (
        <>
            <svg
                onClick={handleClick}
                className="w-7 h-7 text-primario fill-current dark:text-terciario sm:hidden"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                fill="none"
                stroke="currentColor"
            >
                <path d={path} />
            </svg >

            {menu && <Menu />
            }
        </>
    );

}

export default Hamburguesa;
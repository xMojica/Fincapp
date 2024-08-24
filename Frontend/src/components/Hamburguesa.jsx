import { useState } from 'react';
import Menu from './Menu.jsx';


function Hamburguesa() {
    const [menu, setMenu] = useState(false)
    const [icono, setIcono] = useState("./menu.svg");

    function handleClick() {
        if (icono == "./menu.svg") {
            setIcono("./cerrar.svg")
            setMenu(true)
            document.body.style.overflow = 'hidden';
        } else {
            setIcono("./menu.svg")
            setMenu(false)
            document.body.style.overflow = 'scroll';
        }

    }

    return (
        <>
            <div className="flex sm:hidden justify-center" onClick={handleClick}>
                <img className="w-6 h-6" src={icono} alt="Menu hamburguesa" />
            </div>
            {menu && <Menu />}
        </>
    );

}

export default Hamburguesa;
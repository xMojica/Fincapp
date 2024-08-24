function Menu() {
    return (
        <div className="absolute top-20 right-0 pt-6 flex flex-col w-full items-center h-screen  bg-[var(--secundario)] justify-start gap-4 sm:hidden ">
            <div className="flex w-3/4 justify-center rounded-md h-10 bg-[var(--primario)] items-center"><a className="flex justify-center w-full text-center " href="#inicio">Inicio</a></div>
            <div className="flex w-3/4 justify-center rounded-md h-10 bg-[var(--primario)] items-center"><a className="flex justify-center w-full text-center" href="#acerca">Acerca</a></div>
            <div className="flex w-3/4 justify-center rounded-md h-10 bg-[var(--primario)] items-center"><a className="flex justify-center w-full text-center" href="#quien-soy">Quien soy?</a></div>
            <div className="flex w-3/4 justify-center rounded-md h-10 bg-[var(--primario)] items-center"><a className="flex justify-center w-full text-center" href="#contacto">Contacto</a></div>
        </div>

    )
}

export default Menu


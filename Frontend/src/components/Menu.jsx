function Menu() {
    return (
        <div class="absolute top-20 right-0 pt-6 flex flex-col w-1/2 h-screen rounded-lg bg-[var(--secundario)] justify-start gap-3 sm:hidden">
            <div className="flex justify-center rounded-lg h-10 mx-5 bg-[var(--primario)] items-center"><a className="flex justify-center w-full text-center" href="#inicio">Inicio</a></div>
            <div className="flex justify-center rounded-lg h-10 mx-5 bg-[var(--primario)] items-center"><a className="flex justify-center w-full text-center" href="#acerca">Acerca</a></div>
            <div className="flex justify-center rounded-lg h-10 mx-5 bg-[var(--primario)] items-center"><a className="flex justify-center w-full text-center" href="#quien-soy">Quien soy?</a></div>
            <div className="flex justify-center rounded-lg h-10 mx-5 bg-[var(--primario)] items-center"><a className="flex justify-center w-full text-center" href="#contacto">Contacto</a></div>
        </div>

    )
}

export default Menu


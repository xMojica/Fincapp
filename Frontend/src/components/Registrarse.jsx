function Registrarse() {

    function handleClick() {
        alert("Esta funcionalidad estará habilitada proximamente, Santiago Mojica está trabajando en ella");
    }

    return (
        <button
            className="w-1/2 p-3 rounded-r-2xl hover:text-violet-700 hover:scale-110 transition-transform"
            onClick={handleClick}
        >
            Registrarse
        </button>
    )
}

export default Registrarse
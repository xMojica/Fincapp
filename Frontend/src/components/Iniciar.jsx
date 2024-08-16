
function Iniciar() {

    function handleClick() {
        alert("Esta funcionalidad estará habilitada proximamente, Santiago Mojica está trabajando en ella");
    }

    return (
        <button
            className="w-1/2 bg-violet-700 rounded-md p-3 hover:scale-110 transition-transform"
            onClick={handleClick}
        >
            Iniciar
        </button>
    );
}

export default Iniciar;

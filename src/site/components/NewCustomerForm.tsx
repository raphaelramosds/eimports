export function NewCustomerForm() {
    return (
        <form
            action=""
            className="form-wrapper"
        >
            <h2 className="form-title">
                Adicionar cliente
            </h2>
            <input
                className="form-input"
                placeholder="Nome"
                type="text"
            />
            <input
                className="form-input"
                placeholder="Número"
                type="text"
            />
            <button
                className="form-submit mt-4"
            >Adicionar</button>
        </form>
    )
}
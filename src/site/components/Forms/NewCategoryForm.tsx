export function NewCategoryForm() {
    return (
        <form
            action=""
            className="form-wrapper"
        >
            <h2 className="form-title">
                Adicionar categoria
            </h2>
            <input
                className="form-input"
                placeholder="Categoria"
                type="text"
            />
            <button
                className="form-submit mt-4"
            >Adicionar</button>
        </form>
    )
}
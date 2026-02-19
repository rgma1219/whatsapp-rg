import React from "react";
import { Link } from "react-router";

function ErrorNotFoundScreen() {
    return (
        <div>
            <h1>UPS. PAGINA NO ENCONTRADA</h1>
            <p>La página que buscas no existe o ha sido eliminada/movida</p>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
}

export default ErrorNotFoundScreen;

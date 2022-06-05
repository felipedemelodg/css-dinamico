import { elem } from "./elemento-html.js";
import { controlador } from "./controlador.js";

function pegarIdEValor(e) {
    controlador(e.target.id, e.target.value)
}
elem.mover.addEventListener('input', pegarIdEValor, false)
elem.arredonda.addEventListener('input', pegarIdEValor, false)
elem.cor.addEventListener('change', pegarIdEValor, false)
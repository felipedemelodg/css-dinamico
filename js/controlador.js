
export function controlador(id, valor) {
    const root = document.documentElement
    const sufix = id != 'color' ? "%" : ""
    root.style.setProperty(`--${id}`, valor + sufix)
}
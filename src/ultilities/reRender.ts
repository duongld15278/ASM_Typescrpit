import { ComponentBase } from "../main"

export async function rerender(elementId, content: ComponentBase) {
    if (elementId) {
        document.querySelector(elementId).innerHTML = await content.render();
    }
    if (content.afterRender) content.afterRender();
}
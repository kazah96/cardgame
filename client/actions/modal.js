export function showModal(name) {
    return {
        type: "SHOW_MODAL",
        name,
    }
}

export function closeModal() {
    return {
        type: "CLOSE_MODAL",
    }
}
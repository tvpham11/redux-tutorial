
export const toggleUser = (name) => {
    return {
        type: 'TOGGLE_USER',
        id: name.id
    }
}
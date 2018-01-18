export const initialState = {
    Todos: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'TODO_LIST': {
            const data = action.payload;
            return {
                ...state,
                ...data
            }
        }
        default:
            return state;
    }
};
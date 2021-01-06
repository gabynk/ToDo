const INITIAL_STATE = {
    data: []
}

export default function todos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                data: [
                    ...state.data,
                    action.data
                ]
            }
        case 'DELETE_TODO':
            const newData = state.data.filter(item => {
                return item.id != action.id
            })

            return {
                ...state,
                data: newData
            }
        case 'DELETE_ALL_TODO':
            return {
                ...state,
                data: INITIAL_STATE
            }
        default:
            return state
    }
};

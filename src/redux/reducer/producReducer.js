const initialState = {
    loading: false,
    moreLoading: false,
    error: null,
    data: [],
    pages: [],
    isListEnd: false,
}
export const producReducer = (state = initialState, action) => {
    console.log({ action });
    switch (action.type) {
        case 'API_REQUEST':
            if (!action.payload.isPaging) {
                return { ...state, loading: true }
            } else {
                return { ...state, moreLoading: true }
            }


        case 'API_SUCCESS_PAGE_ONE':
            return {
                ...state,
                data: [...action.payload.products],
                pages: [...action.payload.pages],
                error: '',
                loading: false,
                moreLoading: false,

            }

        case 'API_SUCCESS_PAGE_OTHER':
            console.log('pagereducersave page in state', state.pages);
            return {
                ...state,
                data: [...state.data, ...action.payload.products],
                error: '',
                loading: false,
                moreLoading: false
            }

        case 'API_FAILURE':
            return {
                ...state,
                error: action.error,
                loading: false,
                moreLoading: false
            }
        case 'API_LIST_END':
            return {
                ...state,
                isListEnd: true,
                loading: false,
                moreLoading: false
            }

        default:
            return state;
    }
}
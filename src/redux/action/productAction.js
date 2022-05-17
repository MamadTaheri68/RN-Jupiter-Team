// import SearchProductsByTitleService from '../../services/SearchProductsByTitleService'

export const productAction = (params) => {
    return async (dispatch) => {
        try {
            await dispatch({ type: 'API_REQUEST', payload: { page: params.page } });
            // const productState = await SearchProductsByTitleService();
            // call api request
            productState=[
                {id:1,title:'jnkjnjk'},
                {id:2,title:'jnkjnjk'},
                {id:3,title:'jnkjnjk'},
                {id:4,title:'jnkjnjk'},
                {id:5,title:'jnkjnjk'},
                {id:6,title:'jnkjnjk'},
                {id:7,title:'jnkjnjk'},
                {id:8,title:'jnkjnjk'}
        ]
            if (productState.length > 0) {
                await dispatch({ type: 'API_SUCCESS', data: productState });
            } else {
                await dispatch({ type: 'API_LIST_END' })
            }
        } catch (err) {
            console.log(err);
            await dispatch({ type: 'API_FAILURE', error: err.message });

        }

    }
}
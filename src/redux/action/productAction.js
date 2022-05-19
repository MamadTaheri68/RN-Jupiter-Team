import SearchProductsByTitleService from '../../services/SearchProductsByTitleService'
import PageingProductsByTitleService from './../../services/PageingProductsByTitleService';


export const productsAction = (queryString) => {
    return async (dispatch) => {
        try {
            await dispatch({ type: 'API_REQUEST', payload: { isPaging: false } });
            const serviceResult = await SearchProductsByTitleService(queryString);
            const { pages, products } = serviceResult;
            console.log('pagesactionOnepagebefromserver',pages);
            if (products.length > 0) {
                await dispatch({ type: 'API_SUCCESS_PAGE_ONE', payload: { products:products, pages:pages } });
            } else {
                await dispatch({ type: 'API_LIST_END' })
            }
        } catch (err) {
            console.log(err);
            await dispatch({ type: 'API_FAILURE', error: err.message });

        }

    }
}
export const productMoreActions = (queryString) => {
    return async (dispatch, getState) => {
        try { 
            const {pages} = { ...getState().producReducer };
            await dispatch({ type: 'API_REQUEST', payload: { isPaging: true } });
           
            console.log('value',pages)
            const indexPage = pages.findIndex(item => item.check === true);
            pages[indexPage].check = false;
            indexNextPage=indexPage + 1;
            pages[indexNextPage].check = true;
            let pageNext = pages.find(item => item.check === true);
            if (pageNext.link !== null) {
                const products = await PageingProductsByTitleService(queryString,pageNext.link);
                 await dispatch({ type: 'API_SUCCESS_PAGE_OTHER', payload: { products } });   
                
            } else {
                await dispatch({ type: 'API_LIST_END' })
            }

        } catch (err) {
            console.log(err);
            await dispatch({ type: 'API_FAILURE', error: err.message });

        }

    }
}
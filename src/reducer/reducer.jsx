const initialstate = {
    products: [],
};

//const reducer avec : 
    //switch action
        // 3 case + 1 default
        // cas : case 'action utilisé dans actions'
           

const reducer = (state = initialstate, action) => {
    switch(action.type){
        case 'ADD_PRODUCT' :  
            //return { l'etat actuel, changement d'état des products : 
            // [ etat actuel des products, action]}
            return {
                ...state,
                products: [...state.products, action.payload]
            }
            
        case 'REMOVE_PRODUCT' :
            //return { l'etat actuel, changement d'état des products : 
            //l'etat des products auquel cas on filtre l'product avec son product id !== action}
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
            
        case 'UPDATE_PRODUCT' :
            //On parcourt le tableau products pour trouver l'product en question grâce à son ID, s'il existe:
                //on modifie la quantity de l'product par la nouvelle quantity choisie, 
                //sinon, on change rien
                return {
                    ...state,
                    products: state.products.map((product) =>
                      product.id === action.payload.productId
                        ? { ...product, quantity: action.payload.quantity }
                        : product
                    ),
                  };

        default : 
         return state;
    }
}
export default reducer;
//const (export au debut a la fin) avec son type et son payload qui reçois en valeur le produit

export const add_product = (product) => ({
    type : 'ADD_PRODUCT',
    payload : product,
})
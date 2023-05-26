//const (export au debut a la fin) avec son type et son payload qui reçois en valeur l'ID produit

export const remove_product = (productId) => ({
    type : 'REMOVE_PRODUCT',
    payload : productId,
})

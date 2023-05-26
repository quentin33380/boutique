//const (export au debut a la fin) avec son type et son payload qui reçois en valeur l'ID produit et la quantitée

export const update_product = (productId, quantity) => ({
    type: 'UPDATE_PRODUCT',
    payload: { productId, quantity },
  });

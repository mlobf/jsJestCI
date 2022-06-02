/**
 * A quantidade vendida pode ser de 1 ou mais unidades
 *
 *-> Se o estoque ficar negativo um exception deve ser lançada.
 *-> O Valor de venda nao pode ser maior que o valor de compra.
 *
 * @param {*} product
 * @param {*} amount
 */

//import Product from "../model/product";

export default function sellProduct(product, amount) {
  product.stock -= 1;
  return product;
}

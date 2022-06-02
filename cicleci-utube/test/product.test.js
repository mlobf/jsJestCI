//* A quantidade vendida pode ser de 1 ou mais unidades

import Product from "../src/model/product";
import sellProduct from "../src/service/sellProduct";

test("Deve testar se ", () => {
  let produto = new Product("Celular", 500.0, 900.0, 10);
  sellProduct(produto, 1);
  expect(produto.stock).toBe(9);
});

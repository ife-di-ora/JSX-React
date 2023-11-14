// product price component

import React from "react";
import { Product } from "../../product";

const Price = () => {
  return (
    <p className="fs-4 product--price">
      ₦{Intl.NumberFormat().format(Product.price)}
    </p>
  );
};

export default Price;

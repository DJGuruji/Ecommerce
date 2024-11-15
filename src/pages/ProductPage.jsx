

import React from "react";
import ProductList from "../components/ProductList";
import Category from "../components/Category";
import PriceRangeFilter from "../components/PriceRangeFilter";


const ProductPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="  px-4 py-8">
       
        <div>
          <Category />
          <PriceRangeFilter />
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          <div className="">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

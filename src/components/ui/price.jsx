import React from 'react'



const Price = ({ salePrice, originalPrice }) => {
  return (
    <div className="book__price">
        {salePrice ? (
          <>
            <span className="book__price--normal">
              ${originalPrice}
              </span>
            ${salePrice}
          </>
        ) : (
          <>${originalPrice}.00</>
        )}
      </div>
  );
};

export default Price;
import React from "react";
import cartItemStyles from "./quickbuy-cart-item.module.scss";
import { useProduct } from "hooks/product.hook";
export default function QuickbuyCartItem({ id, size, count, onAdd }) {
  const { data } = usequickbuyProduct(id);
  return (
    <div className={cartItemStyles.quickbuyCartContainer}>
      <img
        src={data?.coverPhoto}
        className={cartItemStyles.image}
        loading="lazy"
      />
      <div className={cartItemStyles.quickbuyTextContainer}>
        <h4>{data?.productName || ""}</h4>
        <span>Size: {size || "-"}</span>
      </div>
      <span className={cartItemStyles.quickbuyPrice}>
        {data?.salePrice * count || "0"}$
      </span>
      <div className={cartItemStyles.quickbuyButtons}>
        <button>-</button>
        <span>{count || "0"}</span>
        <button onClick={() => onAdd(id, size)}>+</button>
      </div>
    </div>
  );
}

import { Box } from "@mui/material";
import React from "react";
import ComponentsOfSAH from "./ComponentsOfSAH";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  toggle,
  removeProduct,
  createProduct,
  addToRecentlyProducts,
} from "@/app/wishListProductSlice";

function MemberExclusives({ className, right, left }) {
  const meProducts = useSelector((state) => state.wishList.meProducts);
  const dispatch = useDispatch();

  return (
    <>
      <Box
        className={className}
        sx={{
          maxWidth: "1440px",
          display: "flex",
          margin: "auto",
        }}
      >
        {left}
        {meProducts.map((product) => (
          <ComponentsOfSAH
            recently={() => dispatch(addToRecentlyProducts(product))}
            toggled={product.toggle}
            addItem={() => dispatch(addItem(product))}
            heartIcon={() => dispatch(toggle(product))}
            removeItem={() => dispatch(removeProduct(product.image1))}
            heartIconDark={() => dispatch(toggle(product))}
            onClick={() => dispatch(createProduct(product))}
            image={product.image1}
            price={product.price}
            productName={product.productName}
            productType={product.productType}
            discount={product.discount}
            sale={product.sale}
          />
        ))}
        {right}
      </Box>
    </>
  );
}

export default MemberExclusives;

{
  /* <ComponentsOfSAH
          image={"/ME1.webp"}
          sale={"$147"}
          discount={"$210"}
          productName={"Ultraboost Made To Be Remade Running Shoes"}
          productDescription={"Men's Running"}
          membersOnly={"Members only"}
        />
        <ComponentsOfSAH
          image={"/ME2.webp"}
          sale={"$108"}
          discount={"$180"}
          productName={"adidas 4D Krazed Shoes"}
          productDescription={"Men's Originals"}
          membersOnly={"Members only"}
        />
        <ComponentsOfSAH
          image={"/ME3.webp"}
          sale={"$148"}
          discount={"$210"}
          productName={"Ultraboost Made To Be Remade Running Shoes"}
          productDescription={"Men's Running"}
          membersOnly={"Members only"}
        />
        <ComponentsOfSAH
          image={"/ME4.webp"}
          discount={"$130"}
          sale={"$78"}
          productName={"Adizero x Parley Running Shoes"}
          productDescription={"Men's Running"}
          membersOnly={"Members only"}
        />
        <ComponentsOfSAH
          image={"/ME1.webp"}
          sale={"$147"}
          discount={"$210"}
          productName={"Ultraboost Made To Be Remade Running Shoes"}
          productDescription={"Men's Running"}
          membersOnly={"Members only"}
        />
        <ComponentsOfSAH
          image={"/ME2.webp"}
          sale={"$108"}
          discount={"$180"}
          productName={"adidas 4D Krazed Shoes"}
          productDescription={"Men's Originals"}
          membersOnly={"Members only"}
        />
        <ComponentsOfSAH
          image={"/ME3.webp"}
          sale={"$148"}
          discount={"$210"}
          productName={"Ultraboost Made To Be Remade Running Shoes"}
          productDescription={"Men's Running"}
          membersOnly={"Members only"}
        />
        <ComponentsOfSAH
          image={"/ME4.webp"}
          discount={"$130"}
          sale={"$78"}
          productName={"Adizero x Parley Running Shoes"}
          productDescription={"Men's Running"}
          membersOnly={"Members only"}
        />
        <ComponentsOfSAH
          image={"/ME1.webp"}
          sale={"$147"}
          discount={"$210"}
          productName={"Ultraboost Made To Be Remade Running Shoes"}
          productDescription={"Men's Running"}
          membersOnly={"Members only"}
        />
        <ComponentsOfSAH
          image={"/ME2.webp"}
          sale={"$108"}
          discount={"$180"}
          productName={"adidas 4D Krazed Shoes"}
          productDescription={"Men's Originals"}
          membersOnly={"Members only"}
        /> */
}

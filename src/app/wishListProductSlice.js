import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    bag: [],
  },
  reducers: {
    addToBag(state, action) {
      if (
        state.bag.find(
          (product) => product.image1 === action.payload.image1
        ) !== undefined
      ) {
        state.bag.filter((product) => product.image1 !== action.payload.image1);
        console.log("exists");
      } else {
        state.bag.unshift({
          image1: action.payload.image1,
          image2: action.payload.image2,
          image3: action.payload.image3,
          image4: action.payload.image4,
          productName: action.payload.productName,
          productType: action.payload.productType,
          toggle: action.payload.toggle,
          discount: action.payload.discount,
          sale: action.payload.sale,
          quentity: 1,
          toggleBag: true,
        });
        console.log("nothing");
      }
    },
    removeFromBag(state, action) {
      state.bag = state.bag.filter(
        (product) => product.image1 !== action.payload.image1
      );
      state.bag.map((product) => {
        if (product.image1 === action.payload.image1) {
          product.toggleBag = false;
        }
      });
      state.bag.map((product) => {
        if (product.image1 === action.payload.image1) {
          product.quentity = 0;
        }
      });
    },
    handleChange(state, action) {
      state.bag.map((product) => {
        if (product.image1 === action.payload.image1) {
          product.counter = action.payload;
        }
      });
    },
    toggleProduct(state, action) {
      state.bag.forEach((product) => {
        if (product.image1 === action.payload.image1) {
          product.toggle = !product.toggle;
        }
      });
    },
    toggleButton(state, action) {
      state.bag.forEach((product) => {
        if (product.image1 === action.payload.image1) {
          product.toggleBag = true;
        }
      });
      console.log(action.payload.toggleBag);
    },
  },
});

const wishListProducts = createSlice({
  name: "wishListProducts",
  initialState: {
    product: [],
    wishListProducts: [],
    sIProducts: [
      {
        image1: "/siFirst1.webp",
        image2: "/siFirst2.webp",
        image3: "/siFirst3.webp",
        image4: "/siFirst4.jpg",
        productName: "the velosamba vegan cycling shoes",
        productType: "Performance",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/siSecond1.webp",
        image2: "/siSecond2.webp",
        image3: "/siSecond3.webp",
        image4: "/siSecond1.webp",
        productName: "the velosamba vegan cycling shoes",
        productType: "Performance",
        toggle: true,
        discount: "$130",
        sale: "$90",
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/siThird.webp",
        image2: "/siThird2.webp",
        image3: "/siThird3.webp",
        image4: "/siThird4.webp",
        productName: "ADIDAS ADVENTURE SHIRT",
        productType: "Performance",
        toggle: true,
        discount: "$130",
        sale: "$90",
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/siFourth1.webp",
        image2: "/siFourth2.webp",
        image3: "/siFourth3.webp",
        image4: "/siFourth4.webp",
        productName: "ADIDAS ADVENTURE SHIRT",
        productType: "Performance",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
        toggleBag: false,
      },
      {
        image1: "/first-photo.webp",
        image2: "/first-photo2.webp",
        image3: "/second-photo.webp",
        image4: "/second-photo2.webp",
        productName: "the velosamba vegan cycling shoes",
        productType: "Performance",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/third-photo.webp",
        image2: "/third-photo2.webp",
        image3: "/fifth-photo.webp",
        image4: "/fifth-photo2.webp",
        productName: "the velosamba vegan cycling shoes",
        productType: "Performance",
        toggle: true,
        discount: "$130",
        sale: "$90",
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/sixth-photo.jpg",
        image2: "/sixth-photo2.webp",
        image3: "/seventh-photo.webp",
        image4: "/seventh-photo2.webp",
        productName: "ADIDAS ADVENTURE SHIRT",
        productType: "Performance",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/second-photo2.webp",
        image2: "/first-photo.webp",
        image3: "/second-photo.webp",
        image4: "/first-photo2.webp",
        productName: "the velosamba vegan cycling shoes",
        productType: "Performance",
        toggle: true,
        discount: "$130",
        sale: "$90",
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/fifth-photo.webp",
        image2: "/third-photo.webp",
        image3: "/third-photo2.webp",
        image4: "/fifth-photo2.webp",
        productName: "the velosamba vegan cycling shoes",
        productType: "Performance",
        toggle: true,
        discount: "$130",
        sale: "$90",
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/seventh-photo.webp",
        image2: "/sixth-photo.jpg",
        image3: "/sixth-photo2.webp",
        image4: "/seventh-photo2.webp",
        productName: "ADIDAS ADVENTURE SHIRT",
        productType: "Performance",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
    ],
    naProducts: [
      {
        image1: "/NA1.webp",
        image2: "/NA2.webp",
        image3: "/NA3.webp",
        image4: "/NA4.webp",
        productName: "4DFWD Running Shoes",
        productType: "new",
        toggle: true,
        discount: "$130",
        sale: "$90",
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/NA5.webp",
        image2: "/NA6.webp",
        image3: "/NA7.webp",
        image4: "/NA8.webp",
        productName: "4DFWD 2 W",
        productType: "best seller",
        toggle: true,
        discount: "$130",
        sale: "$90",
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/NA9.jpg",
        image2: "/NA10.webp",
        image3: "/NA11.jpg",
        image4: "/NA12.webp",
        productName: "4DFWD Running Shoes",
        productType: "Performance",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/NA3.webp",
        image2: "/NA5.webp",
        image3: "/NA2.webp",
        image4: "/NA4.webp",
        productName: "4DFWD 2 W",
        productType: "best seller",
        toggle: true,
        discount: "$130",
        sale: "$90",
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/NA4.webp",
        image2: "/NA5.webp",
        image3: "/NA6.webp",
        image4: "/NA7.webp",
        productName: "the velosamba vegan cycling shoes",
        productType: "Performance",
        toggle: true,
        discount: "$130",
        sale: "$90",
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/NA8.webp",
        image2: "/NA9.jpg",
        image3: "/NA10.webp",
        image4: "/NA11.webp",
        productName: "4DFWD 2 W",
        productType: "best seller",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/NA12.webp",
        image2: "/NA13.webp",
        image3: "/NA14.webp",
        image4: "/NA1.jpg",
        productName: "the velosamba vegan cycling shoes",
        productType: "Performance",
        toggle: true,
        discount: "$130",
        sale: "$90",
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/NA2.webp",
        image2: "/NA3.webp",
        image3: "/NA1.webp",
        image4: "/NA4.webp",
        productName: "the velosamba vegan cycling shoes",
        productType: "Performance",
        toggle: true,
        discount: "$130",
        sale: "$90",
        quentity: 1,
        toggleBag: false,
      },
    ],
    wtProducts: [
      {
        image1: "/WT1.webp",
        image2: "/WT2.webp",
        image3: "/WT3.webp",
        image4: "/WT4.webp",
        sale: "$67",
        discount: "$95",
        productName: "Swift Run Shoes",
        productDescription: "Sportswear",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/WT5.webp",
        image2: "/WT6.webp",
        image3: "/WT7.webp",
        image4: "/WT8.webp",
        sale: "$67",
        discount: "$95",
        productName: "Swift Run Shoes",
        productDescription: "Sportswear",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/WT9.jpg",
        image2: "/WT10.jpg",
        image3: "/WT11.webp",
        image4: "/WT12.webp",
        sale: "$67",
        discount: "$95",
        productName: "Swift Run Shoes",
        productDescription: "Sportswear",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/WT13.webp",
        image2: "/WT14.webp",
        image3: "/WT1.webp",
        image4: "/WT2.webp",
        sale: "$67",
        discount: "$95",
        productName: "Swift Run Shoes",
        productDescription: "Sportswear",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/WT3.webp",
        image2: "/WT4.webp",
        image3: "/WT5.webp",
        image4: "/WT6.webp",
        sale: "$67",
        discount: "$95",
        productName: "Swift Run Shoes",
        productDescription: "Sportswear",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/WT7.webp",
        image2: "/WT8.webp",
        image3: "/WT9.jpg",
        image4: "/WT10.jpg",
        sale: "$67",
        discount: "$95",
        productName: "Swift Run Shoes",
        productDescription: "Sportswear",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/WT11.webp",
        image2: "/WT12.webp",
        image3: "/WT13.webp",
        image4: "/WT14.webp",
        sale: "$67",
        discount: "$95",
        productName: "Swift Run Shoes",
        productDescription: "Sportswear",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/WT2.webp",
        image2: "/WT3.webp",
        image3: "/WT4.webp",
        image4: "/WT5.webp",
        sale: "$67",
        discount: "$95",
        productName: "Swift Run Shoes",
        productDescription: "Sportswear",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
    ],
    meProducts: [
      {
        image1: "/ME1.webp",
        image2: "/ME2.webp",
        image3: "/ME3.webp",
        image4: "/ME4.webp",
        sale: "$147",
        discount: "$210",
        productName: "Ultraboost Made To Be Remade Running Shoes",
        productDescription: "Men's Running",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/ME5.webp",
        image2: "/ME6.webp",
        image3: "/ME7.webp",
        image4: "/ME8.webp",
        sale: "$147",
        discount: "$210",
        productName: "Ultraboost Made To Be Remade Running Shoes",
        productDescription: "Men's Running",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/ME9.webp",
        image2: "/ME10.jpg",
        image3: "/ME11.webp",
        image4: "/ME12.webp",
        sale: "$147",
        discount: "$210",
        productName: "Ultraboost Made To Be Remade Running Shoes",
        productDescription: "Men's Running",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/ME13.webp",
        image2: "/ME14.webp",
        image3: "/ME1.webp",
        image4: "/ME2.webp",
        sale: "$147",
        discount: "$210",
        productName: "Ultraboost Made To Be Remade Running Shoes",
        productDescription: "Men's Running",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/ME3.webp",
        image2: "/ME4.webp",
        image3: "/ME5.webp",
        image4: "/ME6.webp",
        sale: "$147",
        discount: "$210",
        productName: "Ultraboost Made To Be Remade Running Shoes",
        productDescription: "Men's Running",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/ME7.webp",
        image2: "/ME8.webp",
        image3: "/ME9.webp",
        image4: "/ME10.webp",
        sale: "$147",
        discount: "$210",
        productName: "Ultraboost Made To Be Remade Running Shoes",
        productDescription: "Men's Running",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/ME11.webp",
        image2: "/ME12.webp",
        image3: "/ME13.webp",
        image4: "/ME14.webp",
        sale: "$147",
        discount: "$210",
        productName: "Ultraboost Made To Be Remade Running Shoes",
        productDescription: "Men's Running",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/ME2.webp",
        image2: "/ME3.webp",
        image3: "/ME1.webp",
        image4: "/ME4.webp",
        sale: "$147",
        discount: "$210",
        productName: "Ultraboost Made To Be Remade Running Shoes",
        productDescription: "Men's Running",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
    ],
    amshProducts: [
      {
        image1: "/siFirst1.webp",
        image2: "/siFirst2.webp",
        image3: "/siFirst3.webp",
        image4: "/siFirst4.jpg",
        productName: "the velosamba vegan cycling shoes",
        productType: "Performance",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/siSecond1.webp",
        image2: "/siSecond2.webp",
        image3: "/siSecond3.webp",
        image4: "/siSecond1.webp",
        productName: "the velosamba vegan cycling shoes",
        productType: "Performance",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/siThird.webp",
        image2: "/siThird2.webp",
        image3: "/siThird3.webp",
        image4: "/siThird4.webp",
        productName: "ADIDAS ADVENTURE SHIRT",
        productType: "Performance",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/siFourth1.webp",
        image2: "/siFourth2.webp",
        image3: "/siFourth3.webp",
        image4: "/siFourth4.webp",
        productName: "ADIDAS ADVENTURE SHIRT",
        productType: "Performance",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/first-photo.webp",
        image2: "/first-photo2.webp",
        image3: "/second-photo.webp",
        image4: "/second-photo2.webp",
        productName: "the velosamba vegan cycling shoes",
        productType: "Performance",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/third-photo.webp",
        image2: "/third-photo2.webp",
        image3: "/fifth-photo.webp",
        image4: "/fifth-photo2.webp",
        productName: "the velosamba vegan cycling shoes",
        productType: "Performance",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/sixth-photo.jpg",
        image2: "/sixth-photo2.webp",
        image3: "/seventh-photo.webp",
        image4: "/seventh-photo2.webp",
        productName: "ADIDAS ADVENTURE SHIRT",
        productType: "Performance",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/second-photo2.webp",
        image2: "/first-photo.webp",
        image3: "/second-photo.webp",
        image4: "/first-photo2.webp",
        productName: "the velosamba vegan cycling shoes",
        productType: "Performance",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/fifth-photo.webp",
        image2: "/third-photo.webp",
        image3: "/third-photo2.webp",
        image4: "/fifth-photo2.webp",
        productName: "the velosamba vegan cycling shoes",
        productType: "Performance",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/seventh-photo.webp",
        image2: "/sixth-photo.jpg",
        image3: "/sixth-photo2.webp",
        image4: "/seventh-photo2.webp",
        productName: "ADIDAS ADVENTURE SHIRT",
        productType: "Performance",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/NA1.webp",
        image2: "/first-photo.webp",
        image3: "/first-photo2.webp",
        image4: "/second-photo.webp",
        productName: "4DFWD Running Shoes",
        productType: "new",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/NA2.webp",
        image2: "/second-photo2.webp",
        image3: "/third-photo2.webp",
        image4: "/third-photo.webp",
        productName: "4DFWD 2 W",
        productType: "best seller",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/NA3.webp",
        image2: "/first-photo.webp",
        image3: "/fourth-photo2.webp",
        image4: "/fifth-photo.webp",
        productName: "4DFWD Running Shoes",
        productType: "Performance",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/NA4.webp",
        image2: "/fifth-photo2.webp",
        image3: "/sixth-photo.jpg",
        image4: "/sixth-photo2.webp",
        productName: "4DFWD 2 W",
        productType: "best seller",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/seventh-photo2.webp",
        image2: "/seventh-photo.webp",
        image3: "/NA1.webp",
        image4: "/third-photo.webp",
        productName: "the velosamba vegan cycling shoes",
        productType: "Performance",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
      {
        image1: "/ME2.webp",
        image2: "/ME1.webp",
        image3: "/NA1.webp",
        image4: "/ME3.webp",
        productName: "4DFWD 2 W",
        productType: "best seller",
        price: "$130",
        toggle: true,
        quentity: 1,
        toggleBag: false,
      },
    ],
  },
  reducers: {
    addItem(state, action) {
      state.wishListProducts.push({
        toggleBag: action.payload.toggleBag,
        image1: action.payload.image1,
        image2: action.payload.image2,
        image3: action.payload.image3,
        image4: action.payload.image4,
        productName: action.payload.productName,
        productType: action.payload.productType,
        toggle: false,
        discount: action.payload.discount,
        sale: action.payload.sale,
        quentity: 1,
      });
    },
    toggle(state, action) {
      state.sIProducts.forEach((product) => {
        if (product.image1 === action.payload.image1) {
          product.toggle = !product.toggle;
        }
      });
      state.naProducts.forEach((product) => {
        if (product.image1 === action.payload.image1) {
          product.toggle = !product.toggle;
        }
      });
      state.wtProducts.forEach((product) => {
        if (product.image1 === action.payload.image1) {
          product.toggle = !product.toggle;
        }
      });
      state.meProducts.forEach((product) => {
        if (product.image1 === action.payload.image1) {
          product.toggle = !product.toggle;
        }
      });
      state.amshProducts.forEach((product) => {
        if (product.image1 === action.payload.image1) {
          product.toggle = !product.toggle;
        }
      });
      state.wishListProducts.forEach((product) => {
        if (product.image1 === action.payload.image1) {
          product.toggle = !product.toggle;
        }
      });
      state.product.forEach((product) => {
        if (product.image1 === action.payload.image1) {
          product.toggle = !product.toggle;
        }
      });
      // const reduxStore = store.getState();
      // const bag = reduxStore.product.bag;
      // store.dispatch(
      //   bag.forEach((product) => {
      //     if (product.image1 === action.payload.image1) {
      //       product.toggle = !product.toggle;
      //     }
      //   })
      // );
    },
    removeProduct(state, action) {
      state.wishListProducts = state.wishListProducts.filter(
        (product) => product.image1 !== action.payload
      );
    },
    createProduct(state, action) {
      state.product = [];
      [];
      state.product.push(action.payload);
    },
  },
});

const recentlyProducts = createSlice({
  name: "recentlyProducts",
  initialState: {
    recentlyProducts: [],
  },
  reducers: {
    addToRecentlyProducts(state, action) {
      if (state.recentlyProducts.length === 12) {
        state.recentlyProducts.pop();
      }
      if (
        state.recentlyProducts.find(
          (product) => product.image1 === action.payload.image1
        ) !== undefined
      ) {
        state.recentlyProducts.filter(
          (product) => product.image1 !== action.payload.image1
        );
        console.log("exists");
      } else {
        state.recentlyProducts.unshift(action.payload);
        console.log("nothing");
      }
    },
  },
});

export const {
  addToBag,
  removeFromBag,
  handleChange,
  toggleProduct,
  toggleButton,
} = productSlice.actions;
export const product = productSlice.reducer;

export const { addItem, removeProduct, toggle, createProduct } =
  wishListProducts.actions;
export const wishList = wishListProducts.reducer;

export const { addToRecentlyProducts } = recentlyProducts.actions;
export const recentlys = recentlyProducts.reducer;
// export const toggleItem = (array, item) => {
//   return array.map((obj) => {
//     if (obj.image1 === item.image1) {
//       return { ...obj, toggle: !obj.toggle };
//     }
//     return obj;
//   });
// };

// export const toggle = (item) => {
//   return (dispatch, getState) => {
//     const state = getState();
//     const { wishList } = state;

//     const updatedWishListProducts = toggleItem(wishList.wishListProducts, item);
//     const updatedSIProducts = toggleItem(wishList.sIProducts, item);

//     dispatch(
//       toggle({
//         wishListProducts: updatedWishListProducts,
//         sIProducts: updatedSIProducts,
//       })
//     );
//   };
// };

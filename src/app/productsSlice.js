// import { createSlice } from "@reduxjs/toolkit";
// import store from "./store";

// const productSlice = createSlice({
//   name: "products",
//   initialState: {
//     bag: [],
//   },
//   reducers: {
//     addToBag(state, action) {
//       state.bag.push(action.payload);
//     },
//     removeFromBag(state, action) {
//       state.bag = state.bag.filter(
//         (product) => product.image1 !== action.payload.image1
//       );
//       state.counter = 0;
//     },
//     handleChange(state, action) {
//       state.bag.map((product) => {
//         if (product.image1 === action.payload.image1) {
//           product.counter = action.payload;
//         }
//       });
//     },
//   },
// });

// export const { addToBag, toggleProduct, removeFromBag, handleChange } =
//   productSlice.actions;
// export default productSlice.reducer;

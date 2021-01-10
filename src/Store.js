import create from "zustand";

export const [globalStore] = create((set) => ({
  cart: [],
  item1counter: 0,
  setitem1Counter: (item1counter) =>
    set((x) => ({ item1counter: x.item1counter + 1 })),
  item2counter: 0,
  item3counter: 0,
  item1: { name: "item1", price: 10, id: 0 },
  item2: { name: "item2", price: 20, id: 1 },
  item3: { name: "item3", price: 30, id: 2 },
  item4: { name: "item4", price: 40, id: 3 },
  item5: { name: "item5", price: 50, id: 4 },
  item6: { name: "item6", price: 60, id: 5 },
  item7: { name: "item7", price: 70, id: 6 },
  item8: { name: "item8", price: 80, id: 7 },
  addItemtocart: (cart) => set((x) => ({ ...x, cart })),
  setdeleteiteminCart: (cart) => set((x) => ({ cart })),
  clearCart: (cart) => set((x) => ({ cart })),
  currentLoginUser: "",
  setcurrentLoginUser: (currentLoginUser) => set((x) => ({ currentLoginUser })),
  fname: "",
  lname: "",
  age: "",
  setfname: (fname) => set((x) => ({ fname })),
  setlname: (lname) => set((x) => ({ lname })),
  setage: (age) => set((x) => ({ age })),

  //additem1: () =>
  // set((x) => [...x.cartitems, { nameofProduct: "item1", price: "10" }]),
  //additem1: () => set({ nameofProduct: "item1", price: "10" }),
  // setitem1counter: () =>
  //   set((counter) => ({ item1counter: counter.item1counter + 1 })),
  // incrementCartitems: () =>
  //   set((state) => ({ cartitems: state.cartitems + 1 })),
}));

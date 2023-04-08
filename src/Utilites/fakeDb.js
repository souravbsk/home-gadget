// add data in localStorage
const addToDb = (id) => {
  const shoppingItem = getToDb();

  console.log(id);
  const quantity = shoppingItem[id];
  if (quantity) {
    const newQuantityUpdate = quantity + 1;
    shoppingItem[id] = newQuantityUpdate;
  } else {
    shoppingItem[id] = 1;
  }
  console.log(shoppingItem);
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingItem));
};

// get data from localStorage
const getToDb = () => {
  let shoppingItem = {};
  const storeCart = localStorage.getItem("shoppingCart");
  if (storeCart) {
    shoppingItem = JSON.parse(storeCart);
  }
  return shoppingItem;
};

// delete item from localStorage
const removeToDb = (id) => {
  const shoppingItem = getToDb();
  if (id in shoppingItem) {
    delete shoppingItem[id]
  }
  localStorage.setItem("shoppingCart",JSON.stringify(shoppingItem))

};

// clear data from localStorage
const clearToDb = () => {
  localStorage.clear("shoppingCart");
};

export { addToDb, getToDb, clearToDb, removeToDb };

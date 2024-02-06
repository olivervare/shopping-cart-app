import {useState} from 'react'
import CartDrawer from "./components/CartDrawer.jsx";
import ShoppingPaper from "./components/ShoppingPaper.jsx";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import items from './data/items.json'

function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(id) {
    setCartItems(currentItems => {
      if (currentItems.find(item => item.id === id) == null) {
        return [...currentItems, {id, itemQuantity: 1}]
      } else {
        return currentItems.map(item => {
          if (item.id === id) {
            return {...item, itemQuantity: item.itemQuantity + 1}
          } else {
            return item
          }
        })
      }
    })
  }

  function handleRemove(id) {
    setCartItems(currentItems => {
      return currentItems.filter(item => item.id !== id);
    })
  }

  return (
    <>
      <h1>THE SHOPPING CART APP</h1>
      <CartDrawer cartItems={cartItems} handleRemove={handleRemove}/>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
            {items && items.map(item => (
              <Grid item xs={3} key={item.id} >
                <ShoppingPaper item={item} handleAddToCart={handleAddToCart}/>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  )
}

export default App

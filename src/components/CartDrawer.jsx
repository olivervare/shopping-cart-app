import {useState} from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import {IconButton, Stack, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {DrawerItem} from "./DrawerItem.jsx";
import items from '../data/items.json';

export default function CartDrawer({cartItems, handleRemove}) {
  const [isOpen, setIsOpen] = useState(false);

  const grandTotal = cartItems.reduce((total, cartItem) => {
    const item = items.find(i => i.id === cartItem.id)
    return total + (item?.price || 0) * cartItem.itemQuantity
  }, 0)

  return (
    <>
      <IconButton style={{display: 'flex', marginLeft: 'auto'}}
                  size='large'
                  edge='end'
                  color='primary'
                  aria-label='logo'
                  onClick={() => setIsOpen(true)}
      >
        <ShoppingCartIcon/>
      </IconButton>
      <Drawer
        anchor='right'
        open={isOpen} onClose={() => setIsOpen(false)}
      >
        <Box p={2} width='350px' textAlign='center'>
          <Typography variant='h4' component='div'>
            Cart view
          </Typography>
          <Stack gap={3}>
            {cartItems.map(item => (
              <DrawerItem key={item.id} {...item} handleRemove={handleRemove} />
            ))}
            <Divider />
            <div className='total'>
              <p>excl VAT: {(grandTotal - (grandTotal * 0.2)).toFixed(2)} €</p>
              <p>VAT: {(grandTotal * 0.2).toFixed(2)} €</p>
              <p>Grand total: {grandTotal.toFixed(2)} €</p>
            </div>
          </Stack>
        </Box>
      </Drawer>
    </>
  )
}
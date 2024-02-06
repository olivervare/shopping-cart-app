import items from '../data/items.json'
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import IconButton from "@mui/material/IconButton";

export function DrawerItem(props) {
  const item = items.find(i => i.id === props.id);
  if (item == null) return null;

  return (
    <Stack gap={2} direction='row' style={{display: 'flex', alignItems: 'center'}}>
      <img src={item.img} alt={'pic of product'} style={{width: '125px', height: '75px', objectFit: 'cover'}}/>
      <div style={{marginRight: 'auto'}}>
        <div>
          {item.name} {' '} {<span style={{fontSize: '.65rem'}}>x{props.itemQuantity}</span>}
        </div>
        <div style={{fontSize: '.75rem'}}>price: {item.price} €</div>
      </div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div style={{margin: '5px'}}>{item.price * props.itemQuantity} €</div>
        <IconButton>
          <HighlightOffOutlinedIcon variant='outlined' color='error' style={{width: '25px'}} onClick={() => props.handleRemove(item.id)}/>
        </IconButton>
      </div>
      <Divider/>
    </Stack>
  )
}
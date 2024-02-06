import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export default function ShoppingPaper({item, handleAddToCart}) {


  return (
    <Container
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 340,
          height: 320
        },
      }}
    >
      <Paper elevation={3}>
        <img style={{width: '140px', height:'140px', objectFit: 'cover', marginTop: '5px'}} src={item.img} alt={item.name} />
        <p>Product: {item.name}</p>
        <p>Price: {item.price} €</p>
        <Button variant="contained" sx={{m: 1}} onClick={() => handleAddToCart(item.id)}>Add to cart</Button>
      </Paper>
    </Container>
  )
}
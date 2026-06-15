import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import "./Rental.css";

function Rental(){
    return(
<div className="Rental"> 

           <Typography
      variant="h4"
      align="center"
      sx={{
        mt: 3,
        mb: 3,
        fontWeight: 'bold'
      }}
    >
      Rental cars
    </Typography> 
<div className="rentalCards">
 <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 160 }}
        image="https://images.91wheels.com/assets/c_images/gallery/maruti/celerio-x/maruti-celerio-x-0-1766750391.png?w=520&q=40"
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Maruti Celerio 2022
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Manual | Petrol | 5 Seats<br></br>
         
         <b>₹318/hr</b> 

        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 160 }}
        image="https://imgd.aeplcdn.com/642x336/cw/cars/chevrolet/beat.jpg?q=80"
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chevrolet Beat 2015
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Manual | Diesel | 5 Seats<br></br>
          
         <b>₹318/hr</b>  
        </Typography>
      </CardContent>
    </Card>
    </div>
    
</div>

    )
}
export default Rental;
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import './Preowned.css';

function Preowned(){
    return(
<div className="preowned"> 

           <Typography
      variant="h4"
      align="center"
      sx={{
        mt: 3,
        mb: 3,
        fontWeight: 'bold'
      }}
    >
      Pre-owned cars
    </Typography> 
<div className="carcards">
 <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 160 }}
        image="https://imgd.aeplcdn.com/1056x594/n/2s8d33a_1591331.jpg?q=80"
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          S-Presso MARUTI S-PRESSO VXI
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Kannur | 85 Kms Away<br></br>

          2019 | Petrol | 62 529 km<br></br>
         <b> ₹3 90 000</b>  <Button variant="outlined" size="small">Calculate EMI</Button><br></br><br></br>
          <Button variant="outlined" size="small">Contact Dealer</Button> <Button variant="contained" size="small">Book a test drive</Button>

        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 160 }}
        image="https://imgd.aeplcdn.com/664x374/n/x38ai5a_1440041.jpg?q=80"
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Vitara Brezza ZDI
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Kannur | 85 Kms Away<br></br>

          2018 | Diesel | 60 589 km<br></br>
         <b> ₹9 90 000</b>  <Button variant="outlined" size="small">Calculate EMI</Button><br></br><br></br>
          <Button variant="outlined" size="small">Contact Dealer</Button> <Button variant="contained" size="small">Book a test drive</Button>

        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 160 }}
        image="https://imgd.aeplcdn.com/1056x594/n/9herrua_1559465.jpg?q=80"
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Baleno 1.2 DELTA CVT
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Cochin | 5 Kms Away<br></br>

          2019 | Petrol | 51 529 km<br></br>
         <b> ₹6 90 000</b>  <Button variant="outlined" size="small">Calculate EMI</Button><br></br><br></br>
          <Button variant="outlined" size="small">Contact Dealer</Button> <Button variant="contained" size="small">Book a test drive</Button>

        </Typography>
      </CardContent>
    </Card>
    </div>
    
</div>

    )
}
export default Preowned;
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import './Weddingcars.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Weddingcar(){

  const theme = createTheme({
  palette: {
    ochre: {
      main: '#E3D026'
      
    },
  },
});
    return(
<div className="wedding"> 

           <Typography
      variant="h4"
      align="center"
      sx={{
        mt: 3,
        mb: 3,
        fontWeight: 'bold'
      }}
    >
      Wedding cars
    </Typography> 
<div className="weddingcards">
 <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 160 }}
        image="https://images.hgmsites.net/med/2025-audi-a6-performance-4-0-tfsi-quattro-angular-front-exterior-view_100965885_m.webp"
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Audi A6
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <div className="wbtn">
             <Button variant="contained" size="small">Call Now</Button>
             <Button variant="contained" color="success" size="small">Whatsapp</Button>

              <ThemeProvider theme={theme}>
              <Button variant="contained" color="ochre" size="small">
          Book Now
        </Button>
        
          </ThemeProvider><br></br><br></br>
          </div>
          Local City Rate:<br></br>
Rs. 10000/- (Max. 8 hr | Max. 80 km)<br></br>
Ext Km: Rs.50/- per km<br></br>
Ext.Hour: Rs.500/- per hr<br></br>
Driver Bata: Rs.500/-<br></br>
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 160 }}
        image="https://www.ccarprice.com/products/Volvo_S90_2026_3.jpg"
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Volvo S90
        </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           <div className="wbtn">
             <Button variant="contained" size="small">Call Now</Button>
             <Button variant="contained" color="success" size="small">Whatsapp</Button>

              <ThemeProvider theme={theme}>
              <Button variant="contained" color="ochre" size="small">
          Book Now
        </Button>
        
          </ThemeProvider><br></br><br></br>
          </div>
          Local City Rate:<br></br>
Rs. 12000/- (Max. 8 hr | Max. 80 km)<br></br>
Ext Km: Rs.50/- per km<br></br>
Ext.Hour: Rs.500/- per hr<br></br>
Driver Bata: Rs.500/-<br></br>
        </Typography>
      </CardContent>
    </Card>
    
    </div>
    
</div>

    )
}
export default Weddingcar;
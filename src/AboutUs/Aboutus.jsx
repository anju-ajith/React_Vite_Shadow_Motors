import Typography from '@mui/material/Typography';
import {Card,
  CardMedia,
  CardContent} from '@mui/material';
import './Aboutus.css';
import rentalImg from '../assets/Aboutus.webp';
function Aboutus(){
    return(

        <div className="aboutus"> 

           <Typography
      variant="h3"
      align="center"
      sx={{
        mt: 3,
        mb: 3,
        fontWeight: 'bold'
      }}
    >
      About Us
    </Typography>  
<Card
      sx={{
        display: 'flex',
        //  maxWidth: 800,
        height:300,
        marginLeft:8,
        marginRight:8,
        textAlign:'justify'
      }}
    ><CardMedia
        component="img"
        sx={{
          width: 250
        }}
        image={rentalImg}
        alt="Rental Car"
      />

      <CardContent>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
        >
          About our company
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
        >
          Shadow Motors is India’s first professional on-site car inspection company, introducing advanced tools and AI-powered report calculations to deliver accurate and reliable results. We specialize in used car inspections for both buyers and sellers, ensuring every car is thoroughly checked for your peace of mind.We are over 10 years of experience in the automobile industry and trusted name in the used car market. Our comprehensive 300+ point inspection process, combined with skilled professionals and cutting-edge technology, helps detect hidden issues such as structural damage or flood-affected vehicles, protecting you from costly mistakes.
        </Typography>
      </CardContent>
      </Card>

        </div>

    )
}
export default Aboutus;
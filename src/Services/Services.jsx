import './Services.css';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import ServiceCard from './ServiceCard';
import preOwnedImg from '../assets/preOwned.jpg';
import rentalImg from '../assets/rental.jpg';
import weddingImg from '../assets/wedding.jpg';
function Services(){
    return(
        <div className="service">
            
         <Typography
      variant="h3"
      align="center"
      sx={{
        mt: 3,
        mb: 3,
        fontWeight: 'bold'
      }}
    >
      Our Services
    </Typography> 

      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 3,
        flexWrap: 'wrap',
        mt: 4
      }}
    >
     <ServiceCard
        image={preOwnedImg}
        title="Pre-owned Car"
        description="Ensuring a thorough pre-purchase inspection is crucial when buying a used car.we utilize advanced technology and a meticulous process to provide you with a comprehensive assessment of the vehicle's condition.Our experts provide honest evaluations, professional guidance, and end-to-end assistance in documentation, finance, and delivery. We pride ourselves on transparent transactions and long-term relationships built on trust and satisfaction."
      />

      <ServiceCard
        image={rentalImg}
        title="Rental Car"
        description="Shadow Motors offers flexible car rental options, be it hourly, weekly, daily, or monthly. With rates starting as low as Rs 150 per hour, you can tailor the rental duration to your specific needs.By renting a car from Shadow Motors, you gain the advantage of driving with your loved ones or friends in a safe and hygienic vehicle. This eliminates any unnecessary interactions with strangers and guarantees complete privacy and safety throughout your journey."
      />

      <ServiceCard
        image={weddingImg}
        title="Wedding Car"
        description="Choose from a wide range of Wedding cars like Audi A4, Audi A6, BMW, Benz C Class, Benz E Class, Jaguar XF and more. We also have Wedding cars in the SUV segment like Jeep, Fortuner, Benz M Class etc. We also undertake decoration service for your WeddingCars at a discounted rate. Book online and avail special benefits. What more, all our cars are vehicles are neat and clean with a sanitizer, fumigation before and after each trip."
      />
       </Box>

            
            </div>
    )

}
export default Services;
import './Contactus.css';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
function Contactus(){
    return(
        <div className="contactus">
         <Typography
      variant="h4"
      align="center"
      sx={{
        mt: 3,
        mb: 3,
        fontWeight: 'bold'
      }}
    >
      Contact Us
    </Typography> 
<div className="contacttxt">

    <div>
<Card variant="outlined">EVM Wheels Car Rentals M/s EVM Passenger Cars India (P) Ltd Address: TC 79/1783-1, Volkswagen Thiruvananthapuram, NH Bypass, Venpalavattom, Anayara PO, Trivandrum, Kerala - 695029 EVM Wheels Bike Rentals M/s Explorides Enterprises Pvt Ltd 23/8, MS&S Chambers Civil Line Road, Padamughal, Ernakulam, Kerala - 682042</Card>
    </div>

    <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125218.54684735388!2d75.72841332197619!3d11.255555506749626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1781502932052!5m2!1sen!2sin" width="800" height="600"  style={{ border: 0 }} allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>



</div>


        </div>
    )
}
export default Contactus;
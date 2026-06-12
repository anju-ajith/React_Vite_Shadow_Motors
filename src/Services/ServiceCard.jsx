import {
  Card,
  CardMedia,
  CardContent,
  Typography
} from '@mui/material';

function ServiceCard({ image, title, description }) {
  return (
    <Card sx={{ maxWidth: 490,textAlign:'justify' }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        
      />

      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
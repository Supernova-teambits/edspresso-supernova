import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  LinearProgress,
  Grid,
} from "@mui/material";

export default function LessonCard({ icon, title, progress, to, value, size=2 }) {
  return (
    <Grid item xs={size}>
      <Card sx={{ maxWidth: 200 }}>
        <CardActionArea component={Link} to={to}>
          <CardMedia component="img" height="140" image={icon} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="p" component="div">
              {title}
            </Typography>
            {value && (
              <Typography gutterBottom variant="p" component="div">
                {value}
              </Typography>
            )}
            {0 < progress && progress < 100 ? (
              <Box sx={{ width: "100%" }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box>
            ) : null}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

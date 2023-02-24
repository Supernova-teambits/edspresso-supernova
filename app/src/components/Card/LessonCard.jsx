import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";

export default function LessonCard({ icon, name, progress, to }) {
  return (
    <Grid item xs={2}>
      <Card sx={{ maxWidth: 200 }}>
        <CardActionArea component={Link} to={to}>
          <CardMedia component="img" height="140" image={icon} alt={name} />
          <CardContent>
            <Typography gutterBottom variant="p" component="div">
              {name}
            </Typography>
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

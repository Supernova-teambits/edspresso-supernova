import { Link } from "react-router-dom";
import {
  LinearProgress,
  Grid,
} from "@mui/material";
import "./LessonCard.scss";
import { MediaImage } from "../../assets/images";

export default function LessonCard({
  icon,
  title,
  progress,
  to,
  value,
  size = 2,
}) {
  return (
    <Grid item xs={size}>
      <div className="LessonCard">
        <Link to={to}>
          {icon ? (
            <img className="LessonCard-img" src={icon} alt={title} />
          ) : (
            <div className="LessonCard-img">
              <MediaImage className="LessonCard-img" />
            </div>
          )}

          <div>
            <p className="LessonCard-title">{title}</p>
            {value && <p className="LessonCard-title" >{value}</p>}
            {0 < progress && progress < 100 ? (
              <LinearProgress
                className="LessonCard-ProgressBar"
                variant="determinate"
                value={progress}
              />
            ) : null}
          </div>
        </Link>
      </div>
    </Grid>
  );
}

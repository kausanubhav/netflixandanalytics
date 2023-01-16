import { ArrowBackOutlined } from '@mui/icons-material';
import { useLocation,Link } from 'react-router-dom';
import './watch.scss';
export default function Watch() {
  const location=useLocation();
  const movie=location.state?.movie;
  return (
    <div className="watch">
      <Link to="/">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      </Link>
      <video
        className="video"
        src={movie.video}
        autoPlay muted controls
      />
    </div>
  );
}
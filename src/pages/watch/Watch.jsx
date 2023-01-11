import { ArrowBackOutlined } from '@mui/icons-material';
import './watch.scss';
import Vid from '../../video/inception.mp4'
export default function Watch() {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <video className="video" src={Vid} autoplay progress controls/>
    </div>
  )
}
import Loader from '../Loader';
import './Preloader.scss';

export default function Preloader(props) {
    return (
        <div className="preloader">
            <Loader optionalClass="preloader__gif" />
        </div>
    )
}
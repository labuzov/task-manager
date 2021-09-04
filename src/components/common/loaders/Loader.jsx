import PreloaderGif from '../../../gifs/loader-1.gif';


export default function Loader(props) {
    return (
        <img className={`loader ${props.optionalClass}`} 
            src={PreloaderGif} alt="Loader" />
    )
}
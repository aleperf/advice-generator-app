import classes from "./SentenceCard.module.scss";
import {useState} from "react";
const SentenceCard = ({advice, onClickButton}) =>{

    const [isFadingIn, setIsFadingIn] = useState(true);
    var timer;

    const fadeIn = () => {
        setIsFadingIn(false);
        timer = setTimeout(() => handleOnClick(), 300)
        
    };

    const handleOnClick = () =>{
        onClickButton()
        setIsFadingIn(true);
        clearTimeout(timer);
    }
   
    return(
    <div className={classes.card}>
    <h2 className={classes['card__id']}>advice #{advice.id}</h2>
    <blockquote className={isFadingIn ? classes.fadein : ''}>“{advice.advice}”</blockquote>
    <div className={classes['card__divider']}></div>
    <button className={classes['card__button']} onClick={() => fadeIn()}>
    </button>
    </div>
    )
    
}


export default SentenceCard;
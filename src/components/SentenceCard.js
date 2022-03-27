import classes from "./SentenceCard.module.scss";

const SentenceCard = ({advice, onClick}) =>{

    return(
    <div className={classes.card}>
    <h2 className={classes['card__id']}>advice #{advice.id}</h2>
    <blockquote>{advice.advice}</blockquote>
    <div className={classes['card__divider']}></div>
    <button className={classes['card__button']} onClick={onClick}>
    </button>
    </div>
    )
    
}


export default SentenceCard;
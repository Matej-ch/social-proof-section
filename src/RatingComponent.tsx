import './RatingComponent.scss'
import starSvg from './assets/icon-star.svg';

function RatingComponent({starCount, text}: { starCount: number, text: string }) {
    return (<article className={'rating-component'}>
        <div className={'stars-container'}>
            {Array.from(Array(starCount), (e, i) => {
                return <span key={i}><img src={starSvg} alt=""/></span>
            })}
        </div>
        <h2>{text}</h2>
    </article>);
}

export default RatingComponent;
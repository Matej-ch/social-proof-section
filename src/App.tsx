import './App.scss'
import RatingComponent from "./RatingComponent";

import anneJpg from "./assets/image-anne.jpg";
import coltonJpg from "./assets/image-colton.jpg";
import ireneJpg from "./assets/image-irene.jpg";
import ReviewComponent from "./ReviewComponent";

function App() {

    const quote = ' We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! '
    const quote2 = ' Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of purchase and the speed of delivery. ';
    const quote3 = ' Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommended them to everyone! ';
    return (
        <main className="App">
            <h1>10,000+ of our users love our products</h1>
            <p>We only provide great products combined with excellent customer service. See what our satisfied customers
                are saying about our services.</p>

            <div className={'rating-component-container'}>
                <RatingComponent starCount={5} text={'Rated 5 Stars in Reviews'}/>
                <RatingComponent starCount={5} text={'Rated 5 Stars in Report Guru'}/>
                <RatingComponent starCount={5} text={'Rated 5 Stars in BestTech'}/>
            </div>

            <div className={'review-component-container'}>
                <ReviewComponent avatar={coltonJpg} name={'Colton Smith'} review={quote}/>
                <ReviewComponent avatar={ireneJpg} name={'Irene Roberts'} review={quote2}/>
                <ReviewComponent avatar={anneJpg} name={'Anne Wallace'} review={quote3}/>
            </div>
        </main>
    )
}

export default App

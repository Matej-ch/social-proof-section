import './ReviewComponent.scss'

function ReviewComponent({avatar, name, review}: { avatar: string, name: string, review: string }) {
    return (<article className={'review-component'}>
        <header>
            <img src={avatar} alt=""/>
            <div>
                <h3>{name}</h3>
                <h4>Verified Buyer</h4>
            </div>
        </header>

        <p><q>{review}</q></p>

    </article>);
}

export default ReviewComponent;
import './ReviewComponent.scss'

function ReviewComponent({avatar, name, review}: { avatar: string, name: string, review: string }) {
    return (<article className={'review-component'}>
        <header>
            <img src={avatar} alt=""/>
            <div>
                <h5>{name}</h5>
                <h6>Verified Buyer</h6>
            </div>
        </header>

        <p><q>{review}</q></p>

    </article>);
}

export default ReviewComponent;
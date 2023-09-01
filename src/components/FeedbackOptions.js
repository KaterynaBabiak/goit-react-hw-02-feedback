import { nanoid } from 'nanoid';

export const FeedbackOptions = () => {
    return (
        <div>
            <p>Please leave a feedback</p>
            <button onClick={() => this.handleClick('good')}>good</button>
            <button onClick={() => this.handleClick('neutral')}>neutral</button>
            <button onClick={() => this.handleClick('bad')}>bad</button>
        </div>

    )

}
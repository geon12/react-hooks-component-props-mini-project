import React from "react";

function Article({title,date="January 1, 1970",preview,minutes}) {

    const emoji = (minutes) => {
        

        const emojiArray = [];
        minutes = parseInt(minutes,10)
        
       
        if (minutes < 30) {
            const num = Math.ceil(minutes/5)
            for (let i=0;i<num;i++) {
                emojiArray.push(<span key={`coffee-${i}`}>&#9749;</span>)
            }
        }
        if (minutes >= 30) {
            const num = Math.ceil(minutes/10)
            for (let i=0;i<num;i++) {
                emojiArray.push(<span key={`bento-${i}`}>&#127857;</span>)
            }
        }
        
        return emojiArray
    };

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <small> - {emoji(minutes)}</small>
            <small>{` ${minutes} min read`}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;
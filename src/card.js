import React from 'react'
import './card.css';

export default function Card({username, followers, todayFollowers, icon, name}) {
    // console.log(name);
    const cardClass = `card ${name}`;

    return (
        <article className={cardClass}>
            <p className="card-title">
                <i className={icon}></i>
                {username}
            </p>
            <p className="card-followers">
                <span className="card-followers-number">{followers}</span>
                <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
                <i className="fas fa-lg fa-angle-up"></i> {todayFollowers} Today
            </p>
        </article>
    )
}

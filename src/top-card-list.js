import React from 'react'
import Card from './card';
import './top-card-list.css';

const cardListData = [
    {
        username: '@Omar',
        id: 1,
        followers: '1483',
        todayFollowers: 12,
        icon: 'fab fa-lg fa-facebook faceColor',
        name: 'facebook',
    },
    {
        username: '@Pepito',
        id: 2,
        followers: '1987',
        todayFollowers: 13,
        icon: 'fab fa-lg fa-instagram instagramColor',
        name: 'instagram',
    },
    {
        username: '@Luisa',
        id: 3,
        followers: '1974',
        todayFollowers: 30,
        icon: 'fab fa-lg fa-youtube youtubeColor',
        name: 'youtube',
    },
    {
        username: '@José',
        id: 4,
        followers: '1983',
        todayFollowers: -2,
        icon: 'fab fa-lg fa-twitter faceColor',
        name: 'twitter',
    },
];

export default function TopCardList() {
    return (
        <section className="top-cards">
        <div className="wrapper">
            <div className="grid">
                {
                    // cardListData.map((cardData, index) => <Card key={index} username={cardData.username} />)
                    
                    // Nota: Usando destructuring para accesar a username de Obj cardData
                    // cardListData.map(({username, id, followers}) => <Card key={id} username={username} followers={followers} />)
                    
                    // Nota: Se utiliza spreed operator para pasar las propiedades de CardListdata
                    //      de manera individual al pasarlo de la forma {...cardData}

                    cardListData.map((cardData) => <Card key={cardData.id} {...cardData} />)
                }
                
                {/* <Card username={'@Leonidas'} />
                <Card username={'@Nero'} />
                <Card username={'@Chancho'} /> */}
                
                {/* <article className="card twitter">
                    <p className="card-title">
                        <i className="fab fa-lg fa-twitter faceColor"></i>
                        @clinker
                    </p>
                    <p className="card-followers">
                        <span className="card-followers-number">28 K</span>
                        <span className="card-followers-title">Followers</span>
                    </p>
                    <p className="card-today">
                        <i className="fas fa-lg fa-angle-up"></i> 12 Today
                    </p>
                </article>
                <article className="card instagram">
                    <p className="card-title">
                        <i className="fab fa-lg fa-instagram instagramColor"></i>
                        @clinker
                    </p>
                    <p className="card-followers">
                        <span className="card-followers-number">1987</span>
                        <span className="card-followers-title">Followers</span>
                    </p>
                    <p className="card-today">
                        <i className="fas fa-lg fa-angle-up"></i> 12 Today
                    </p>
                </article>
                <article className="card youtube">
                    <p className="card-title">
                        <i className="fab fa-lg fa-youtube youtubeColor"></i>
                        @clinker
                    </p>
                    <p className="card-followers">
                        <span className="card-followers-number">1987</span>
                        <span className="card-followers-title">Followers</span>
                    </p>
                    <p className="card-today">
                        <i className="fas fa-lg fa-angle-up"></i> 12 Today
                    </p>
                </article> */}
            </div>
        </div>
    </section>
    )
}

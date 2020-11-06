import React from 'react';
import CardSmall from './cardsmall';
import './overview.css';

const cardSmallList = [
    {
        icon: 'fab fa-lg fa-facebook faceColor',
        pageViews: '87',
        growth: 4,
        key: 1,
    },
    {
        icon: 'fab fa-lg fa-facebook faceColor',
        pageViews: '35',
        growth: 14,
        key: 2,
    },
    {
        icon: 'fab fa-lg fa-facebook faceColor',
        pageViews: '5264',
        growth: 2,
        key: 3,
    },
    {
        icon: 'fab fa-lg fa-facebook faceColor',
        pageViews: '55',
        growth: -4,
        key: 4,
    },

]

export default function Overview(){

    return (
        <section className="overview">
        
        <div className="wrapper">
            <h2>Overview - Today</h2>
            <div className="grid">
                {
                    
                    cardSmallList.map(({ icon, pageViews, growth, key }) => (

                        <CardSmall 
                            icon={icon} 
                            pageViews={pageViews} 
                            growth={growth} 
                            key={key} 
                        />
                    ))
                }
                
                {/* <div class="card-small">
                    <p class="card-small-views">Likes</p>
                    <p class="card-small-icon">
                        <i class="fab fa-lg fa-facebook faceColor"></i>
                    </p>
                    <p class="card-small-number">
                        52</p>
                    <p class="card-small-percentage is-danger">
                        <i class="fas fa-lg fa-angle-down"></i>
                        2%
                    </p>
                </div>
                <div class="card-small">
                    <p class="card-small-views">Page Views</p>
                    <p class="card-small-icon">
                        <i class="fab fa-lg fa-facebook"></i>
                    </p>
                    <p class="card-small-number">
                        5264</p>
                    <p class="card-small-percentage">
                        <i class="fas fa-lg fa-angle-up"></i> 2%
                    </p>
                </div>
                <div class="card-small">
                    <p class="card-small-views">Likes</p>
                    <p class="card-small-icon">
                        <i class="fab fa-lg fa-instagram instagramColor"></i>
                    </p>
                    <p class="card-small-number">
                        87</p>
                    <p class="card-small-percentage">
                        <i class="fas fa-lg fa-angle-down"></i> 222%
                    </p>
                </div>
                <div class="card-small">
                    <p class="card-small-views">Profile Views</p>
                    <p class="card-small-icon">
                        <i class="fab fa-lg fa-twitter faceColor"></i>
                    </p>
                    <p class="card-small-number">
                        87</p>
                    <p class="card-small-percentage">
                        <i class="fas fa-lg fa-angle-down"></i> 2%
                    </p>
                </div>
                <div class="card-small">
                    <p class="card-small-views">Page Views</p>
                    <p class="card-small-icon">
                        <i class="fab fa-lg fa-meetup"></i>
                    </p>
                    <p class="card-small-number">
                        52 K</p>
                    <p class="card-small-percentage">
                        <i class="fas fa-lg fa-angle-down"></i> 2%
                    </p>
                </div>
                <div class="card-small">
                    <p class="card-small-views">Page Views</p>
                    <p class="card-small-icon">
                        <i class="fab fa-lg fa-amazon"></i>
                    </p>
                    <p class="card-small-number">
                        827</p>
                    <p class="card-small-percentage is-danger">
                        <i class="fas fa-lg fa-angle-down"></i> 2%
                    </p>
                </div>
                <div class="card-small">
                    <p class="card-small-views">Page Views</p>
                    <p class="card-small-icon">
                        <i class="fab fa-lg fa-youtube youtubeColor"></i>
                    </p>
                    <p class="card-small-number">
                        456</p>
                    <p class="card-small-percentage">
                        <i class="fas fa-lg fa-angle-up"></i> 2%
                    </p>
                </div> */}
            </div>
        </div>
    </section>
    )
}
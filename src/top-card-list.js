import React from 'react'

export default function TopCardList() {
    return (
        <section className="top-cards">
        <div className="wrapper">
            <div className="grid">
                <article className="card facebook">
                    <p className="card-title">
                        <i className="fab fa-lg fa-facebook faceColor"></i>
                        @orosas
                    </p>
                    <p className="card-followers">
                        <span className="card-followers-number">1987</span>
                        <span className="card-followers-title">Followers</span>
                    </p>
                    <p className="card-today">
                        <i className="fas fa-lg fa-angle-up"></i> 12 Today
                    </p>
                </article>
                <article className="card twitter">
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
                </article>
            </div>
        </div>
    </section>
    )
}

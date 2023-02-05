import React from 'react'
import './cards.css'
import img1 from '../../assets/nat-5.jpg'
import img2 from '../../assets/nat-8.jpg'
import img3 from '../../assets/nat-8.jpg'
import img4 from '../../assets/nat-9.jpg'



function Card() {
  return (
    <div>
    <div className="row">
    <div className="col-1-of-3">
       <div className="card">
           <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">
                    <img src={img1} alt="Tour photo" className="popup__img" />
                </div>
                <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">The Sea Explorer</span>
                </h4>
                <div className="card__details">
                    <ul>
                        <li>3 day tours</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                    </ul>
                </div>
           </div>
           <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                    <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">$297</p>
                    </div>
                    <a href="#popup" className="btn btn--white">Book now!</a>
                </div>
            </div>
       </div>
    </div>


    <div className="col-1-of-3">
        <div className="card">
            <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">
                    <img src={img2} alt="Tour photo" className="popup__img"/>
                </div>
                <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2">The Forest Hiker</span>
                </h4>
                <div className="card__details">
                    <ul>
                        <li>7 day tours</li>
                        <li>Up to 40 people</li>
                        <li>6 tour guides</li>
                        <li>Sleep in provided tents</li>
                        <li>Difficulty: medium</li>
                    </ul>
                </div>

            </div>
            <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                    <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">$497</p>
                    </div>
                    <a href="#popup" className="btn btn--white">Book now!</a>
                </div>
            </div>
        </div>
    </div>


    <div className="col-1-of-3">
        <div className="card">
            <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">
                    <img src={img3} alt="Tour photo" className="popup__img"/>
                </div>
                <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--3">The Snow Adventurer</span>
                </h4>
                <div className="card__details">
                    <ul>
                        <li>5 day tours</li>
                        <li>Up to 15 people</li>
                        <li>3 tour guides</li>
                        <li>Sleep in provided tents</li>
                        <li>Difficulty: hard</li>
                    </ul>
                </div>

            </div>
            <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                    <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">$897</p>
                    </div>
                    <a href="#popup" className="btn btn--white">Book now!</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className="popup" id="popup">
            <div className="popup__content">
                <div className="popup__left">
                    <img src={img2} alt="Tour photo" className="popup__img"/>
                    <img src={img4} alt="Tour photo" className="popup__img"/>
                </div>
                <div className="popup__right">
                    <a href="#section-tours" className="popup__close">&times;</a>
                    <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
                    <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                    <p className="popup__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Sed sed risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio facilisis mauris sit
                        amet massa vitae. Mi bibendum neque egestas congue. Placerat orci nulla pellentesque dignissim enim
                        sit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Malesuada pellentesque elit eget
                        gravida cum sociis natoque penatibus et. Proin fermentum leo vel orci porta non pulvinar neque laoreet.
                        Gravida neque convallis a cras semper. Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
                        vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam libero justo laoreet sit. Amet massa
                        vitae tortor condimentum lacinia quis vel eros donec. Sit amet facilisis magna etiam. Imperdiet sed
                        euismod nisi porta.
                    </p>
                    <a href="#" className="btn btn--green">Book now</a>
                </div>
            </div>
        </div>
</div>
  )
}

export default Card
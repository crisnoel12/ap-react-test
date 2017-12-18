import React, { Component } from 'react';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Footer from './Footer';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';

class Landing extends Component {

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <section className="hero is-landing is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1>Hello, welcome to Reactor!</h1>
            </div>
          </div>
        </section> 
        <section id="landing-sec-one" className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-4-tablet is-offset-3-tablet">
                <h2 id="what-we-do">What We Do</h2>
              </div>
              <div className="column is-4-tablet">
                <h5 className="topic-heading">We Do</h5>
                <p>The quick brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="landing-sec-two" className="section light-sage">
          <div className="container">
            <div className="columns">
              <div className="column is-6-tablet">
                <article className="media">
                  <figure className="media-left">
                    <p className="image is-128x128 is-200x200-tab">
                      <img src={img1} alt="reactor 1"/>
                    </p>
                  </figure>
                  <div className="media-content">
                    <h5 className="topic-heading">Cuisine Down Home Southern Cooking</h5>
                    <p>The quick brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.</p>
                  </div>
                </article>
              </div>
              <div className="column is-6-tablet">
                <article className="media">
                  <figure className="media-left">
                    <p className="image is-128x128 is-200x200-tab">
                      <img src={img2} alt="reactor 2"/>
                    </p>
                  </figure>
                  <div className="media-content">
                    <h5 className="topic-heading">Pos Hardware More Options In Less Space</h5>
                    <p>The quick brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section id="landing-sec-three" className="section maui">
          <div className="container">
            <h5 className="has-text-centered sub-heading">Maui By Air The Best Way Around The Island</h5>
            <div className="columns">
              <div className="column">
                <figure className="image is-square">
                  <img src={img3} alt="reactor 3"/>
                </figure>
                <div className="desc has-text-centered">
                  <h5>East Josianefurt</h5>
                  <table>
                    <caption>085 Daron Via</caption>
                  </table>
                </div>
              </div>
              <div className="column">
                <figure className="image is-square">
                  <img src={img4} alt="reactor 4"/>   
                </figure>
                <div className="desc has-text-centered">
                  <h5>South Cristopherport</h5>
                  <table>
                    <caption>162 Chandler Ville</caption>
                  </table>
                </div>
              </div>
              <div className="column">
                <figure className="image is-square">
                  <img src={img5} alt="reactor 5"/>
                </figure>
                <div className="desc has-text-centered">
                  <h5>Concepcionbury</h5>
                  <table>
                    <caption>7643 Kylie Burgs</caption>
                  </table>
                </div>
              </div>
              <div className="column">
                <figure className="image is-square">
                  <img src={img6} alt="reactor 6"/>
                </figure>
                <div className="desc has-text-centered">
                  <h5>Reychester</h5>
                  <table>
                    <caption>5590 Gabe Views Apt. 044</caption>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <hr/>
        </section> 
        <Newsletter></Newsletter>
        <Footer></Footer>
      </div>
    );
  }
}

export default Landing;

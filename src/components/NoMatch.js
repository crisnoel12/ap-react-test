import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  constructor(){
    super();
    this.url = window.location.href;
  }
  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-6 is-offset-4">
                <article className="message is-danger">
                  <div className="message-header">
                    <p>404 Page Not Found</p>
                    <button className="delete" aria-label="delete"></button>
                  </div>
                  <div className="message-body has-text-centered">
                    Cannot find url at <span className="has-text-info">{this.url}</span><br/>
                    <Link to="/" className="has-text-info">Go to Homepage</Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NoMatch;
import React, { Component } from 'react';
import { flashMsg } from '../scripts/helpers';
import axios from 'axios';
import qs from 'querystring';

class Newsletter extends Component {
  constructor() {
    super();
    this.state = {
      emailErr: false
    }
    this.url = 'http://dev3.apppartner.com/Reactors/scripts/add-email.php';
  }

  subscribe = (e) => {
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let emailInput = document.getElementsByName("email")[0];
    if (email !== "" && email.includes("@") && email.includes(".")) { // Send post request
      axios.post(this.url, qs.stringify({'email': email}))
        .then((res) => {
          console.log(res.data);
          this.setState({ emailErr: false });
          emailInput.removeAttribute("class");
          flashMsg("You are now subscribed.");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else { // Show errors
      this.setState({emailErr: true});
      emailInput.setAttribute("class", "input is-danger");
    }
  }

  render() {
    return (
      <section id="newsletter" className="section">
        <div className="container has-text-centered">
          <h2 className="sub-heading">SUBSCRIBE TO NEWSLETTER</h2>
          <div className="columns">
            <form onSubmit={this.subscribe} method="post" className="column is-6-tablet is-offset-3-tablet sub-form">
              <div className="control has-text-centered">
                <input type="email" ref="email" name="email" placeholder="Your Email" required/>
                { 
                  this.state.emailErr 
                    ? <span id="emailErr" className="has-text-danger">Please enter a valid email</span> 
                    : null 
                }
                <input className="sub-btn dark-slate-blue" type="submit" value="Subscribe" />
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Newsletter;
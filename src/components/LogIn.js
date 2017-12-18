import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { flashMsg, removeClass } from '../scripts/helpers';
import axios from 'axios';
import qs from 'querystring';

class LogIn extends Component {
  constructor(){
    super();
    this.state = {
      emailErr: false,
      passwordErr: false
    }
    this.url = 'http://dev3.apppartner.com/Reactors/scripts/user-login.php';
  }

  logIn = (e) => {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let emailInput = document.getElementsByName("email")[0];
    let passwordInput = document.getElementsByName("password")[0];

    // Validate and show errors
    if (email === "" && !email.includes("@") && !email.includes(".")) {
      this.setState({emailErr: true});
      emailInput.setAttribute("class", "input is-danger");
      if (password === "") {
        this.setState({ passwordErr: true });
        passwordInput.setAttribute("class", "input is-danger");
      }
    } else { // send post request
      axios.post(this.url, qs.stringify({
        'email': email,
        'password': password
      }))
        .then((res) => {
          console.log(res.data);
          removeClass([emailInput, passwordInput]);
          this.setState({ emailErr: false });
          this.setState({ passwordErr: false });
          flashMsg("Log in successful.");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-6 is-offset-4">
                <div className="user-func-nav">
                  <Link to="/signup" className="gray">SIGN UP</Link>
                  <Link to="/login" className="gray is-active">LOGIN</Link>
                </div>
                <form onSubmit={this.logIn} className="user-func-form">
                  <div className="control">
                    <input type="email" name="email" ref="email" placeholder="Email" required/>
                    {
                      this.state.emailErr
                        ? <span id="emailErr" className="has-text-danger">Please enter a valid email</span>
                        : null
                    }
                    <input type="password" name="password" ref="password" placeholder="Password" required/>
                    {
                      this.state.passwordErr
                        ? <span id="passwordErr" className="has-text-danger">Please enter a password</span>
                        : null
                    }
                    <span id="passwordErr" className="has-text-danger"></span>
                    <input className="faded-red" type="submit" value="SIGN UP" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LogIn;
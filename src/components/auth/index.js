import React from "react";
import styles from './styles.module.css';
import logo from '../../logo.png';
import codeLogo from '../../code-logo.png'


class AuthView extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleChange(key, event) {
    const newState = {};
    newState[key] = event.target.value;
    this.setState(newState);
  }

  render() {

    return (
      <div
        className={styles.login}
      >
        <div className={styles.authForm}>
          <img className = {styles.logo} src={logo} alt="logo" />
          <div className = {styles.especial}>
            <img src={codeLogo}/>
            <b>edition</b>
          </div>
          <input
            placeholder="Nome"
            disabled={this.props.loading}
            onChange={(event) => this.handleChange("name", event)}
            value={this.state.name}
          />
          <input
            placeholder="E-mail"
            disabled={this.props.loading}
            onChange={(event) => this.handleChange("email", event)}
            value={this.state.email}
          />
          <input
            type="password"
            placeholder="Senha"
            disabled={this.props.loading}
            onChange={(event) => this.handleChange("password", event)}
            value={this.state.password}
          />
          <button className={styles.enterButton}
            disabled={this.props.loading}
            onClick={() => this.props.handleLogin(this.state)}
          >
            Entrar
          </button>
          {this.props.error && <p>{this.props.error}</p>}
          <small className="footer"> Por <a href="https://www.linkedin.com/in/beatrizbenedicto/" target="_blank" rel="norefferr"> Beatriz Benedicto</a>, 2020</small>
        </div>
      </div>
    );
  }
}

export default AuthView;

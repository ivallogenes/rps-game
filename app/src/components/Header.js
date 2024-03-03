import { Link } from "react-router-dom";
import logo from '../logo.svg';

export default function Header() {
  return (
    <header className="App-header">
      <div className="content-wrapper">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Insert Coin</p>

        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/" className="reset-button">Reset</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

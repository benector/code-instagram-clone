
import { Link } from 'react-router-dom';
import Avatar from '../avatar';
import logo from '../../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faCamera, faSignOutAlt} from  '@fortawesome/free-solid-svg-icons';
import { faTimesCircle} from  '@fortawesome/free-regular-svg-icons';
import styles from './styles.module.css';


const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  }

const Header = () => {
    return(
        <header className={styles.appHeader}>
                <img src={logo} className={styles.appLogo}alt="logo" />
                <div className={styles.searchBar}>
                    <FontAwesomeIcon style= {{width: 15}}icon={faSearch} />
                    <input type="text"  placeholder="Pesquisar"/>
                    <FontAwesomeIcon style= {{width: 15}} icon={faTimesCircle} />
                </div>
                <div className={styles.menu}>
                    <Link to="/"><FontAwesomeIcon icon={faHome}  /></Link>
                    <Link to="/criar"><FontAwesomeIcon icon={faCamera} /></Link>
                    <FontAwesomeIcon icon={faSignOutAlt} className={styles.menuItem} onClick={handleLogout}/>
                    <img className={styles.userAvatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS275fgbLRUvZTthUPudJHdKymk096IE-8LFg&usqp=CAU"/>
                </div>
        </header>
    );
}

export default Header;
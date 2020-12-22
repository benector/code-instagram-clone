
import { Link } from 'react-router-dom';
import classNames from 'classnames';
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
                <div className={styles.appLogo}>
                    <img src={logo} className={styles.logo} alt="logo" />

                </div>
                <div className={styles.searchBar}>
                    <div className={styles.searchBarItens}>
                        <FontAwesomeIcon style= {{width: 15}}icon={faSearch} />
                        <input type="text"  placeholder="Pesquisar"/>
                        <FontAwesomeIcon style= {{width: 15}} icon={faTimesCircle} />
                    </div>
                </div>
                <div className={styles.menu}>
                    <Link to="/"><FontAwesomeIcon className={styles.menuItem}  icon={faHome}  /></Link>
                    <Link to="/criar"><FontAwesomeIcon className={styles.menuItem}   icon={faCamera} /></Link>
                    <FontAwesomeIcon icon={faSignOutAlt} className={styles.menuItem}  className={styles.menuItem} onClick={handleLogout}/>
                    <img className={classNames(styles.userAvatar,styles.menuItem)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS275fgbLRUvZTthUPudJHdKymk096IE-8LFg&usqp=CAU"/>
                </div>
        </header>
    );
}

export default Header;
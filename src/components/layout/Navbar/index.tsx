import { Link } from "react-router-dom";
import { useTranslations } from '../../../hooks/useTranslations';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setLanguage } from "../../../store/languageSlice";
import { contactData } from "../../../utils/contactData";
import styles from './Navbar.module.css';

function Navbar(){
    const lang = useSelector((state: RootState) => state.language.lang);
    const dispatch = useDispatch();
    const t = useTranslations();

    const toggleLanguage = () => {
      dispatch(setLanguage(lang === 'es' ? 'en' : 'es'));
    };

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 fixed-top">
                <Link className={`navbar-brand ${styles.title}`} to="/">
                        { contactData.name }
                </Link>

                <div className="ms-auto">
                  <button className="btn btn-outline-light" onClick={toggleLanguage}>
                    {lang === 'es' ? 'EN' : 'ES'}
                  </button>
                </div>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarContent"
                  aria-controls="navbarContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        {t.navbar.home}
                      </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">
                          {t.navbar.about}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/skills">
                          {t.navbar.skills}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects">
                          {t.navbar.projects}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                          {t.navbar.contact}
                        </Link>
                    </li>
                  </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
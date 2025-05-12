import { useTranslations } from '../../../hooks/useTranslations';
import { contactData } from "../../../utils/contactData";

function Footer(){
    const t = useTranslations();
    
    return (<>
        <footer className="bg-dark text-white mt-5 py-4">
            <div className="container text-center">
              <h5 className="mb-3">{ contactData.name }</h5>

              <div className="mt-3">
                <a href={ contactData.github } target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                  <i className="bi bi-github"></i>
                </a>
                <a href={ contactData.linkedIn } target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>

              <p className="mt-3 mb-0">&copy; {new Date().getFullYear()} { contactData.name }. {t.footer.rights}</p>
            </div>
        </footer>
    </>)
}

export default Footer;
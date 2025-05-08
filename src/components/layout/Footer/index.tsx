import { useTranslations } from '../../../hooks/useTranslations';

function Footer(){
    const t = useTranslations();
    
    return (<>
        <footer className="bg-dark text-white mt-5 py-4">
            <div className="container text-center">
              <h5 className="mb-3">Jose Angel Full-Stack Developer</h5>

              <div className="mt-3">
                <a href="https://github.com/angeldev902" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                  <i className="bi bi-github"></i>
                </a>
                <a href="www.linkedin.com/in/jose-angel-rojas-esteban-b61555202" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>

              <p className="mt-3 mb-0">&copy; {new Date().getFullYear()} Jose Angel Full-Stack Developer. Todos los derechos reservados.</p>
            </div>
        </footer>
    </>)
}

export default Footer;
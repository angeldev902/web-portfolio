import styles from './ContactInfo.module.css';

type ContactInfoParams = {
    email: string,
    github: string,
    linkedIn: string
    image:string
}

const ContactInfo = ( {email, github, linkedIn, image }: ContactInfoParams ) => {
    return(<>
        <section id="contacto" className="container py-5 mt-5">
            <div className="row justify-content-center text-center">
              <div className="col-md-8">
                <h2 className="mb-4">Contacto</h2>
                <img src={ image } className={`${styles.letterIcon}`} alt="contact" />
                <p className="lead">
                  ¿Te interesa trabajar conmigo o tienes alguna pregunta?
                  No dudes en escribirme o visitar mis redes profesionales.
                </p>
            
                <div className="mt-4">
                  <p className="mb-2">
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${ email }`} className="text-decoration-none">
                      { email }
                    </a>
                  </p>
            
                  <div className="d-flex justify-content-center gap-4 mt-3">
                    <a
                      href={`${ github }`}
                      className={`btn btn-outline-dark ${styles.contactButton}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub 
                      <i className="bi bi-github"></i>
                    </a>
            
                    <a
                      href={`${ linkedIn }`}
                      className={`btn btn-outline-primary ${styles.contactButton}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </section>
    </>);
}

export default ContactInfo;
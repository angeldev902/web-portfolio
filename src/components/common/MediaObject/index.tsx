import styles from './MediaObject.module.css';

type MediaObjectProps = {
    title:string;
    text:string;
    picture:string;
}

const MediaObject = ({ title, text, picture }: MediaObjectProps) => {
    return(<>
        <section className="container my-5">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 mb-4 mb-md-0">
                <h2>{ title }</h2>
                <p>
                  { text }
                </p>
              </div>
              <div className="col-12 col-md-6 text-center">
                <img src={ picture } alt="Mi foto" className={`img-fluid rounded-circle ${styles.picture}`}/>
              </div>
            </div>
        </section>
    </>)
}

export default MediaObject;
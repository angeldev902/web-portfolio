import { Link } from "react-router-dom";
import styles from './Section.module.css';

type SectionProps = {
    title: string,
    text:string,
    buttonText?:string,
    url?:string,
    image:string
}

const Section = ({ title, text, buttonText, url, image }: SectionProps) => {
    return(<>
        <section
             className={`projects-preview text-white py-5 mt-3 mb-7 ${styles.imageBackground}`} 
             style={{ backgroundImage: `url('${image}')` }}
            >
             <div className="container text-center bg-opacity-75 p-4 rounded">
               <h3 className="mb-3">{title}</h3>
               <p className="lead">{text}</p>
               {url && buttonText && (
                 <Link className="btn btn-outline-light mt-3" to={url}>
                   {buttonText}
                 </Link>
               )}
            </div>
        </section>
    </>)
}

export default Section;
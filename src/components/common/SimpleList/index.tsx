import styles from './SimpleList.module.css';

type SimpleListPorps = {
    title:string,
    list:string[],
    text?:string,
    imgSrc: string;
    reverse?: boolean;
    finalText?:string
}

const SimpleList = ({ title, list, text, imgSrc, reverse, finalText }:SimpleListPorps) => {
    return(<>
        <div className={`d-flex flex-column flex-md-row ${reverse ? 'flex-md-row-reverse' : ''} align-items-center my-5`}>
            <div className="col-md-6 p-4">
              <img src={imgSrc} className={`img-fluid rounded ${styles.picture}`} alt={title} />
            </div>
            <div className="col-md-6 p-4">
                <h3>{ title }</h3>
                { text && (
                    <p>{ text }</p>
                )}
                <ul>
                    { list.map( element => (
                        <li key={element}>{element}</li>
                    ))}
                </ul>
                { finalText && (
                    <p>{ finalText }</p>
                )}
            </div>
        </div>
    </>)
}

export default SimpleList;
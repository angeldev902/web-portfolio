import styles from './ProjectCard.module.css';
type ProjectCardProps = {
    title:string,
    description:string,
    technologies:string,
    activities:string[],
    translation: {
        description:string,
        technologies:string,
        challenges: string
    }
    demoLink?:string,
    githubLink?:string,
    image?:string
    backgroundImage?:string
} 

const ProjectCard = ({ title, description, technologies, activities, translation, demoLink, githubLink, image, backgroundImage}: ProjectCardProps) => {
    return(<>
        <div 
            className={`container mt-3 card mb-4 shadow-sm ${styles.backgroundImage}`}
            style={{
              backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
            }}
            >
            <div className="row g-0">
              {/* Imagen del proyecto */}
              {image && (
                <div className="col-md-4">
                  <img src={image} alt={title} className="img-fluid rounded-start" />
                </div>
              )}

              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
          
                  <p className="card-text"><strong>{translation.description}:</strong> {description}</p>
                  <p className="card-text"><strong>{translation.technologies}:</strong> {technologies}</p>

                  <p className="card-text"><strong>{translation.challenges}:</strong></p>

                  <ul>
                    { activities.map( element => (
                        <li key={element}>{element}</li>
                    ))}
                  </ul>
          
                  <div className="d-flex gap-2">
                    {demoLink && (
                      <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                        Demo
                      </a>
                    )}
                    {githubLink && (
                      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>)
}   

export default ProjectCard;

import Hero from "../../components/common/Hero";
import MediaObject from "../../components/common/MediaObject";
import List from "../../components/common/List";
import Section from "../../components/common/Section";
import portfolioImages from "../../utils/pictures";
import { useTranslations } from "../../hooks/useTranslations";

const technologies = ['Javascript', 'TypeScript', 'React', 'Angular', 'Node.js', 'Express.js', 'NestJS', 'Java', 'Spring boot', 'MongoDB', 'MySQL', 'Git'];

function Portfolio() {
    const t = useTranslations();
    return(
        <>
            <Hero
            title="Jose Angel Rojas Esteban"
            subtitle={`${t.portfolio.title} | React | Angular | Node.js`}
            images={portfolioImages.hero}
            />

            <MediaObject
                title={t.navbar.about}
                text={t.portfolio.resume}
                picture={portfolioImages.picture}
            />

            <List
                title={t.portfolio.technologies}
                list={technologies}
            />

            <Section
                title={t.portfolio.projects}
                text={t.portfolio.projectsAbput}
                buttonText={t.portfolio.seeProjects}
                url="/projects"
                image={portfolioImages.projectPicture1}
            />

        </>
    )
}

export default Portfolio;
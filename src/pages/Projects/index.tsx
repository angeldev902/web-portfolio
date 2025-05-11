import Hero from "../../components/common/Hero";
import portfolioImages from "../../utils/pictures";
import ProjectCard from "../../components/common/ProjectCard";
import { useTranslations } from "../../hooks/useTranslations";

function Projects(){
    const t = useTranslations();
    return(<>
        <Hero
            title={t.projects.professionalProjects}
            subtitle={t.projects.projectsText}
            images={portfolioImages.projects}
        />
        <ProjectCard
            title={'JVP Logística'}
            description={t.projects.jvp.description}
            technologies={'Node.js, Express.js, MongoDB, Angular.js, Angular, GitLab'}
            activities={t.projects.jvp.activities}
            translation={t.projects.translations}
            backgroundImage={portfolioImages.car}
        />
        <ProjectCard
            title={'ILOVEAT'}
            description={t.projects.iloveat.description}
            technologies={'Node.js, Express.js, MongoDB, Angular, GitLab'}
            activities={t.projects.iloveat.activities}
            translation={t.projects.translations}
            backgroundImage={portfolioImages.food}
        />
        <ProjectCard
            title={'CARLOGIC'}
            description={t.projects.carlogic.description}
            technologies={'Node.js, Express.js, MySQL, Angular, Angular.js, GraphQL, GitHub'}
            activities={t.projects.carlogic.activities}
            translation={t.projects.translations}
            backgroundImage={portfolioImages.packageImage}
        />
        <ProjectCard
            title={'CX Team'}
            description={t.projects.cxteam.description}
            technologies={'Angular, Firebase, GitHub'}
            activities={t.projects.cxteam.activities}
            translation={t.projects.translations}
            backgroundImage={portfolioImages.survey}
        />
        <ProjectCard
            title={'2Rocket'}
            description={t.projects.rocket.description}
            technologies={'Node.js, Express.js, MySQL, Angular, GitHub'}
            activities={t.projects.rocket.activities}
            translation={t.projects.translations}
            backgroundImage={portfolioImages.packageImage2}
        />
        <ProjectCard
            title={'Yatch Visit'}
            description={t.projects.yacht.description}
            technologies={'Spring Boot, PostgreSQL, Next.js, React.js, GitHub'}
            activities={t.projects.yacht.activities}
            translation={t.projects.translations}
            backgroundImage={portfolioImages.yatch}
        />
        <ProjectCard
            title={'Sistema de Tickets'}
            description={t.projects.tickets.description}
            technologies={'Spring Boot, PostgreSQL, React.js, GitHub'}
            activities={t.projects.tickets.activities}
            translation={t.projects.translations}
            backgroundImage={portfolioImages.ticket}
        />
        <ProjectCard
            title={'Vanvien'}
            description={t.projects.vanvien.description}
            technologies={'NestJS, Microsoft SQL Server, GitHub'}
            activities={t.projects.vanvien.activities}
            translation={t.projects.translations}
            backgroundImage={portfolioImages.shoes}
        />
        <ProjectCard
            title={'Otros proyectos'}
            description={t.projects.others.description}
            technologies={'Laravel, Pthon, Django, React.js, Angular, Electron.js, GraphQL'}
            activities={t.projects.others.activities}
            translation={t.projects.translations}
            backgroundImage={portfolioImages.developer}
        />
    </>)
}

export default Projects;
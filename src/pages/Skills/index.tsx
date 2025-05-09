import portfolioImages from "../../utils/pictures";
import Hero from "../../components/common/Hero";
import SimpleList from "../../components/common/SimpleList";
import { useTranslations } from "../../hooks/useTranslations";
import { data } from "react-router-dom";
import List from "../../components/common/List";

const programmingLanguages = ['JavaScript', 'TypeScript', 'Java', 'Python', 'PHP', 'SQL', 'C#'];
const frameworks = ['Node.js', 'Express.js', 'NestJS', 'Next.js', 'Spring Boot', 'Django', 'Angular', 'React.js', 'Angular.js'];
const db = ['MongoDB', 'MySQL', 'PostgreSQL', 'Microsoft SQL Server', 'Firebird'];
const backend = ['REST', 'GraphQL', 'JWT', 'Swagger', 'OAuth2', 'Jest', 'SuperTest', 'JUnit', 'Mockito'];
const styles = ['HTML5', 'CSS', 'SCSS', 'Bootstrap', 'Angular Material'];
const tools = ['Git', 'GitHub', 'GitLab', 'Docker', 'Vite', 'Webpack', 'Nginx', 'CI/CD'];

function Skills(){
    const t = useTranslations();
    return(<>
        <Hero
            title={t.skills.hardSkills}
            images={portfolioImages.skills}
        />
        <SimpleList
            title={t.skills.programmingLanguages}
            list={programmingLanguages}
            imgSrc={portfolioImages.programmingLanguages}
            finalText={t.skills.programmingLanguagesText}
        />
        <SimpleList
            title={t.skills.frameworks}
            list={frameworks}
            imgSrc={portfolioImages.skills[2]}
            reverse={true}
            finalText={t.skills.frameworksText}
        />
        <SimpleList
            title={t.skills.dataBases}
            list={db}
            imgSrc={portfolioImages.database}
        />
        <SimpleList
            title="Back-end / APIs"
            list={backend}
            imgSrc={portfolioImages.server}
            reverse={true}
        />
        <SimpleList
            title={t.skills.styles}
            list={styles}
            imgSrc={portfolioImages.styles}
        />
        <SimpleList
            title={t.skills.tools}
            list={tools}
            imgSrc={portfolioImages.github}
            reverse={true}
        />
        <List
            title={t.skills.softSkills}
            list={t.about.skills}
        />
    </>)
}

export default Skills;
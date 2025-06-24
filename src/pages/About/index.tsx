import MediaObject from "../../components/common/MediaObject";
import SimpleList from "../../components/common/SimpleList";
import List from "../../components/common/List";
import portfolioImages from "../../utils/pictures";
import { useTranslations } from "../../hooks/useTranslations";
import styles from "./About.module.css";

function About(){
    const t = useTranslations();
    return(
        <>
            <div className={styles.mainContainer}>
                <MediaObject
                    title={t.navbar.about}
                    text={t.about.me}
                    picture={portfolioImages.picture}
                />
                <SimpleList
                    title={t.about.experience}
                    list={t.about.goals}
                    text={t.about.experieciaText}
                    imgSrc={portfolioImages.experience}
                />
                <SimpleList
                    title={t.about.goalsTitle}
                    list={[]}
                    text={t.about.goalsText}
                    imgSrc={portfolioImages.goals}
                    reverse={true}
                />
                <SimpleList
                    title={t.about.workPhilosophy}
                    list={[]}
                    text={t.about.workPhilosophyText}
                    imgSrc={portfolioImages.workPhilosophy}
                />
            </div>
            <List
                title={t.navbar.skills}
                list={t.about.skills}
            />
        </>
    )
}

export default About;
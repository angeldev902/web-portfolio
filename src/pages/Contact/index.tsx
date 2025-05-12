import ContactInfo from "../../components/common/ContactInfo";
import { contactData } from "../../utils/contactData";
import portfolioImages from "../../utils/pictures";
import { useTranslations } from "../../hooks/useTranslations";

function Contact() {
    const t = useTranslations();
    return(<>
        <div className="container min-vh-100 p-auto">
            <ContactInfo
                email={contactData.email}
                github={contactData.github}
                linkedIn={contactData.linkedIn}
                image={portfolioImages.letter}
                title={t.navbar.contact}
                text={t.contact.contactText}
            />
        </div>
    </>)
}

export default Contact;
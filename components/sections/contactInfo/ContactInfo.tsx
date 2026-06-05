import styles from "./ContactInfo.module.css";

export default function ContactInfo() {
    return (
        <section className="container stack">
            <h1>Välkommen att kontakta oss.</h1>
            <p>
                Har du en fråga eller vill komma i kontakt med oss? Du är alltid varmt välkommen att
                höra av dig och vi återkommer så snart vi kan.
            </p>
            <a href="mailto:info@lewabostad.se" className={styles.email}>
                info@lewabostad.se
            </a>
            <div className={`stack ${styles.acquisitionBlock}`}>
                <h3>Markförvärv</h3>
                <p>
                    Lewa Bostad är alltid intresserade av att förvärva mark för framtida
                    bostadsprojekt i Stockholmsregionen. Vi söker främst tomter för småhus, parhus
                    och radhus – både planlagda och oplanlagda.
                </p>
                <p>
                    Om du har mark att sälja eller vill diskutera en möjlig utveckling, är du varmt
                    välkommen att kontakta oss. Vi är en trygg och erfaren aktör som tar ansvar
                    genom hela processen.
                </p>
                <p>Tveka inte att höra av dig - vi lyssnar gärna.</p>
            </div>
        </section>
    );
}

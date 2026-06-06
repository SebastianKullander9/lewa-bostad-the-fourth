import styles from "./ContactAquisition.module.css";

export default function ContactAquisition() {
    return (
        <div className={`stack container ${styles.acquisitionBlock}`}>
            <h3>Markförvärv</h3>
            <p>
                Lewa Bostad är alltid intresserade av att förvärva mark för framtida bostadsprojekt
                i Stockholmsregionen. Vi söker främst tomter för småhus, parhus och radhus – både
                planlagda och oplanlagda.
            </p>
            <p>
                Om du har mark att sälja eller vill diskutera en möjlig utveckling, är du varmt
                välkommen att kontakta oss. Vi är en trygg och erfaren aktör som tar ansvar genom
                hela processen.
            </p>
            <p>Tveka inte att höra av dig - vi lyssnar gärna.</p>
        </div>
    );
}

export type PolicyParagraph = {
    type: "paragraph";
    text: string;
};

export type PolicySubheading = {
    type: "subheading";
    text: string;
};

export type PolicyListItem = {
    title?: string;
    text: string;
};

export type PolicyList = {
    type: "list";
    items: PolicyListItem[];
};

export type PolicyBlock = PolicyParagraph | PolicySubheading | PolicyList;

export type PolicySection = {
    title: string;
    blocks: PolicyBlock[];
};

export type PolicyData = {
    title: string;
    sections: PolicySection[];
};

export const integritetspolicyData: PolicyData = {
    title: "Integritetspolicy",
    sections: [
        {
            title: "1. Inledning",
            blocks: [
                {
                    type: "paragraph",
                    text: "Denna integritetspolicy (Policyn) innehåller regler och riktlinjer för den behandling av personuppgifter som görs av Lewa Bostad i egenskap av personuppgiftsansvarig, oavsett vilken typ av personuppgifter det är fråga om och vems personuppgifter det rör. Policyn förklarar hur vi samlar in och behandlar personlig information. Den beskriver också dina rättigheter och hur du kan göra dem gällande. Du är alltid välkommen att kontakta oss vid eventuella frågor, se kontaktuppgifter nedan.",
                },
            ],
        },
        {
            title: "2. Vad är en personuppgift?",
            blocks: [
                {
                    type: "paragraph",
                    text: "Personuppgifter är all slags information som direkt eller indirekt kan hänföras till en fysisk person som är i livet. Exempelvis kan bilder och ljudupptagningar som behandlas i dator vara personuppgifter även om inga namn nämns. Krypterade uppgifter och olika slags elektroniska identiteter (t.ex. IP-nummer) är personuppgifter ifall de kan kopplas till fysiska personer.",
                },
                {
                    type: "paragraph",
                    text: "Behandling av personuppgifter är allt som sker med personuppgifterna. Varje åtgärd som vidtas med personuppgifter utgör en behandling, oberoende av om den utförs automatiserat eller ej. Exempel på vanliga behandlingar är insamling, registrering, organisering, strukturering, lagring, bearbetning, överföring och radering.",
                },
            ],
        },
        {
            title: "3. Var behandlar vi dina personuppgifter?",
            blocks: [
                {
                    type: "paragraph",
                    text: "Vi strävar alltid efter att dina personuppgifter ska behandlas inom EU/EES och alla våra egna IT-system finns inom EU/EES. Vid systemmässig support och underhåll kan vi dock vara tvungna att överföra informationen till ett land utanför EU/EES, t.ex. om vi delar dina personuppgifter med ett personuppgiftsbiträde som, antingen själv eller genom en underleverantör, är etablerad eller lagrar information i ett land utanför EU/EES. Biträdet får i dessa fall endast ta del av den information som är relevant för ändamålet (t.ex. loggfiler).",
                },
                {
                    type: "paragraph",
                    text: "Oavsett i vilket land dina personuppgifter behandlas vidtar vi alla rimliga legala, tekniska och organisatoriska åtgärder för att säkerställa att skyddsnivån är densamma som inom EU/EES.",
                },
            ],
        },
        {
            title: "4. Vilka personuppgifter behandlar vi om dig?",
            blocks: [
                {
                    type: "paragraph",
                    text: "På Lewa Bostads webbplats kan du anmäla ditt intresse för att erhålla information om bostadsprojekten. Insamling sker via Lewa Bostads webbplats.",
                },
                {
                    type: "list",
                    items: [
                        {
                            title: "Personuppgifterna hanteras för att",
                            text: "Administrera intresseanmälningar för Lewa Bostads olika bostadsprojekt. Detta för att kunna skicka ut information om pågående och kommande bostadsprojektet, samt att förmedla uppgifterna till aktuell auktoriserad mäklare. Personuppgifterna får också användas för marknadsundersökningar av Lewa Bostad samt dess personuppgiftsbiträden.",
                        },
                        {
                            title: "Personuppgifter som behandlas",
                            text: "Personuppgifter som behandlas av Lewa Bostad är bland annat: namn, e-postadress, födelseår, nuvarande postnummer, antal personer som ska bo i din bostad, storlek på den bostad du söker, vilket område du helst vill bo i, hur du bor i dagsläget (hus, bostadsrätt, hyresrätt, studentboende, föräldrar, inneboende, annat).",
                        },
                        {
                            title: "Rättslig grund",
                            text: "Samtycke från den registrerade. Du kan när som helst avstå från att ta emot information från oss genom att klicka på avsluta prenumeration i e-post som vi skickar till dig. Vi behandlar dina uppgifter enbart med stöd av ditt samtycke enligt artikel 6.1 a i dataskyddsförordningen (GDPR). Vi behandlar inte några känsliga personuppgifter.",
                        },
                        {
                            title: "Lagringsperiod",
                            text: "Personuppgifterna ska raderas när intressenten meddelat att han eller hon inte längre önskar stå kvar som intressent.",
                        },
                    ],
                },
            ],
        },
        {
            title: "5. Hur länge sparar vi dina personuppgifter?",
            blocks: [
                {
                    type: "list",
                    items: [
                        {
                            title: "För intresseanmälan och grundläggande information",
                            text: "24 månader från din senaste aktivitet (t.ex. öppning av e-post, klick på länk, eller annan interaktion med våra utskick).",
                        },
                        {
                            title: "För nyhetsbrev och marknadsföring",
                            text: "36 månader från din senaste aktivitet med våra nyhetsbrev.",
                        },
                        {
                            title: "För förmedling av uppgifter till auktoriserad mäklare",
                            text: "12 månader efter att projektet avslutats (dvs. när alla bostäder i projektet har sålts eller projektet på annat sätt avslutats).",
                        },
                        {
                            title: "För marknadsundersökningar och analys",
                            text: "Anonymiserad/aggregerad data lagras i maximalt 5 år för statistiska och analytiska ändamål. Data som kan kopplas till dig som individ raderas enligt lagringsperioderna för ovan nämnda ändamål.",
                        },
                    ],
                },
            ],
        },
        {
            title: "6. Till vem lämnar vi ut dina personuppgifter?",
            blocks: [
                {
                    type: "paragraph",
                    text: "Vi delar personuppgifter endast med betrodda samarbetspartners som agerar enligt våra instruktioner, exempelvis IT-leverantörer, mäklare, hyresvärdar och marknadsföringsbyråer. I vissa fall kan dessa parter vara självständigt personuppgiftsansvariga, t.ex. mäklare eller bostadsrättsföreningar.",
                },
                {
                    type: "paragraph",
                    text: "Alla personuppgiftsbiträden har tecknat personuppgiftsbiträdesavtal med oss som säkerställer att behandlingen sker enligt våra instruktioner och med lämpliga säkerhetsåtgärder.",
                },
            ],
        },
        {
            title: "7. Rutiner vid insamling av personuppgifter",
            blocks: [
                {
                    type: "paragraph",
                    text: "Lewa Bostad behandlar personuppgifter på ett säkert och ansvarsfullt sätt, och endast de medarbetare som behöver uppgifterna för sitt arbete har tillgång till dem.",
                },
            ],
        },
        {
            title: "8. Dina rättigheter",
            blocks: [
                {
                    type: "paragraph",
                    text: "Du har enligt dataskyddsförordningen (GDPR) flera rättigheter gällande de personuppgifter som Lewa Bostad behandlar om dig:",
                },
                {
                    type: "list",
                    items: [
                        {
                            title: "Rätt till tillgång",
                            text: "du kan begära information om vilka personuppgifter vi har om dig.",
                        },
                        {
                            title: "Rätt till rättelse",
                            text: "du kan be oss rätta felaktiga eller ofullständiga uppgifter.",
                        },
                        {
                            title: "Rätt till radering",
                            text: "du kan begära att vi tar bort dina uppgifter när de inte längre behövs för de ändamål de samlats in för eller om du återkallar ditt samtycke.",
                        },
                        {
                            title: "Rätt att invända",
                            text: "du kan motsätta dig viss behandling, till exempel direktmarknadsföring.",
                        },
                        {
                            title: "Rätt till dataportabilitet",
                            text: "du kan begära att få ut de uppgifter du själv lämnat till oss i ett strukturerat format.",
                        },
                    ],
                },
                {
                    type: "paragraph",
                    text: "Om vi inte kan radera uppgifter omedelbart på grund av lagstadgade krav, till exempel bokförings- eller skattelagstiftning, begränsar vi behandlingen så att uppgifterna endast används för dessa syften fram till dess att de kan tas bort.",
                },
                {
                    type: "paragraph",
                    text: "Lewa Bostad behandlar endast personnummer när det är nödvändigt, till exempel för säker identifiering, och använder i första hand födelsedatum när det räcker.",
                },
                {
                    type: "paragraph",
                    text: "För att utöva dina rättigheter, återkalla samtycke eller ställa frågor kring dataskydd kontaktar du oss via de kontaktuppgifter som anges nedan. Du har också rätt att lämna klagomål till Integritetsmyndigheten (IMY) (www.imy.se) om du anser att dina uppgifter behandlas i strid med GDPR.",
                },
            ],
        },
        {
            title: "9. Cookies",
            blocks: [
                {
                    type: "paragraph",
                    text: "Vi använder cookies på vår webbplats för att förbättra användarupplevelsen och för att samla in anonym statistik om hur webbplatsen används. Cookies är små textfiler som sparas på din enhet när du besöker webbplatsen.",
                },
                {
                    type: "subheading",
                    text: "Typer av cookies vi använder",
                },
                {
                    type: "list",
                    items: [
                        {
                            title: "Nödvändiga cookies",
                            text: "Krävs för att webbplatsen ska fungera som avsett och kan inte stängas av i våra system.",
                        },
                        {
                            title: "Analytiska cookies",
                            text: "Används för att förstå hur webbplatsen används och för att förbättra innehåll och funktionalitet. Vi använder till exempel Google Analytics för att samla in statistik i anonymiserad form. Dessa cookies sätts endast om du godkänner det.",
                        },
                        {
                            title: "Funktionscookies",
                            text: "Gör att webbplatsen kan komma ihåg dina inställningar och val, till exempel språk eller formulärdata.",
                        },
                    ],
                },
                {
                    type: "subheading",
                    text: "Hantering av cookies",
                },
                {
                    type: "paragraph",
                    text: "Du väljer själv om du vill tillåta analytiska cookies. Du kan när som helst ändra eller återkalla ditt samtycke via cookie-inställningarna på webbplatsen.",
                },
                {
                    type: "paragraph",
                    text: "Du kan också blockera eller radera cookies via inställningarna i din webbläsare, men tänk på att vissa funktioner på webbplatsen då kan påverkas.",
                },
            ],
        },
        {
            title: "10. Uppdatering av Policyn",
            blocks: [
                {
                    type: "paragraph",
                    text: "Vi kan från tid till annan uppdatera denna integritetspolicy. Den senaste versionen finns alltid publicerad på vår webbplats. Vid större ändringar som påverkar dig väsentligt kommer vi informera dig på lämpligt sätt.",
                },
            ],
        },
        {
            title: "11. Kontaktuppgifter",
            blocks: [
                {
                    type: "paragraph",
                    text: "Om du vill utöva dina rättigheter, återkalla ditt samtycke eller ställa frågor kring behandlingen av dina personuppgifter, eller har någon annan fråga kan du kontakta:",
                },
                {
                    type: "list",
                    items: [
                        {
                            title: "Personuppgiftsansvarig",
                            text: "Lewa Bostad SB (org.nr. xxxxxxxx)",
                        },
                        {
                            title: "Kontakt",
                            text: "info@lewabostad.se",
                        },
                        {
                            title: "Adress",
                            text: "Ingmar Bergmans Gata 2, 114 34 Stockholm",
                        },
                    ],
                },
            ],
        },
    ],
};

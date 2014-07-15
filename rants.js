var problemer = {
    identitet: "Identifiser deg!!",
    signatur: "Vennligst signer her",
    kommunikasjon: "Vi må kunne sende meldinger uten at noen kan lese eller forandre meldingene",
    beskyttelse: "Interne ressurser skal være tilgjengelig for bare de med rettigheter",
    robot: "Forhindre mis"
}

var rants = [
{ 
	navn: "Brukernavn og passord",
	rant: "Jeg husker ikke passordet mitt",
	problem: problemer.identitet,
	losning: "En navnelapp og en delt hemmelighet",
	issues: ["Passordet må være langt for å være bra", "Dårlige passord gjettes", "Mindre dårlige passord kan knekkes", "Gjenbruk - og lekkasjer"],
	funker: "Så lenge du ikke trenger veldig mye sikkerhet",
	terningkast: 4
},
{ 
	navn: "Fingeravtrykksleser",
	problem: problemer.identitet,
	rant: "Jeg gidder ikke huske enda et passord", 
	losning: "En bildesensor tar bilde av fingeren din og lager et syyykt langt passord som er helt unikt for brukeren",
	issues: ["Bare så bra som sensoren er", "Relativt kostbart", "Brukbart bare der du har en sensor"],
	funker: "Tja",
	terningkast: 3
},
{
  	navn: "Password-Manager",
  	rant: "Jeg gidder ikke huske enda et passord",
  	losning: "Lagre alle passordene dine hos en leverandør som tilbyr tjenester for generering og bruk av disse",
  	issues: ["Alt på ett sted", "Helt avhengig av at leverandøren leverer", "Screwed om leverandøren blir hacket"],
  	funker: "",
  	terningkast: 3
  },
  {
  	navn: "SSO og logg deg inn med facebook",
  	rant: "Aaaargh, jeg orker ikke lage enda et brukernavn og passord for dette søplenettstedet",
  	losning: "La en tiltrodd 3.part håndterer håndtere lagring ",
  	issues: ["Yep"],
  	funker: "",
  	terningkast: 5
  },
{ 
	navn: "2 - faktor autentisering",
	problem: problemer.identitet,
	rant: "Yikes. Noen har hacka gmailen og facebooken min",
	losning: "Brukernavn, passord + engangspassord som kommer fra en dings",
	issues: ["Jeg glemmer dingsen", "Dingser koster penger", "Krever bokføring hos sender og mottaker", "Dyrt", "Krever en del infrastruktur"],
	funker: "Veldig bra så lenge du husker dingsen. Når du mister dingsen blir det klønete",
	terningkast: 5
},
{ 
	navn: "BankID Java-applet",
	problem: problemer.signatur,
	rant: "Føkkings JAVA", 
	losning: "Vi lager en JAVA-applet som kjører på alle browsere.",
	issues: ["Java som en browser plugin", "Java som en browser plugin", "Java som en browser plugin", "Java som en browser plugin"],
	funker: "Teknisk sett - Men nå er 2014 og ikke 2004. Det kan gjøres bedre.",
	alternativer: "BankID-mobil eller en løsning basert på JavaScript",
	terningkast: 1
},
{ 
	navn: "SSL/TLS",
	problem: problemer.kommunikasjon,
	rant: "Hvor er hengelåsen?",
	losning: "KRYPTO-magi som involverer sertifikater, pålitelige 3.parter og masse røverspråk",
	issues: ["Må bygges inn i alle browsere", "Krever solide 3.parter"],
	funker: "JA",
	terningkast: 6
},
{ 
	navn: "BankId - Dongle",
	problem: problemer.identitet,
	rant: "AAAAAArgh, jeg må inn i nettbanken for å overføre penger, og har glemt BankID-greia mi", 
	losning: "2-faktor autentisering hvor donglen genererer engangspassord",
	issues: ["Ganske kostbart", "Veldig glembart", "Mye makk når dongelen forsvinner"],
	funker: "Funker når du har den",
	alternativer: ['Lapp med koder', 'App', "SMS"],
	terningkast: 4
},
{ 
	navn: "Citrix & Virtuell desktop",
	rant: problemer.beskyttelse,
	problem: "Interne applikasjoner skal være tilgjengelig over alt",
	losning: "Fjernstyr din PC på innsiden",
	issues: ["Vil så og si alltid oppleves som tregere enn en vanlig PC", "Blir ikke bedre enn nettverket det brukes over", "IT-avdelinger liker å låse ned ting", "Kommer nesten alltid i tillegg til en PC"],
	funker: "Til sitt bruk. Men brukes ofte til helt andre ting.",
	terningkast: 2
},
{ 
	navn: "VPN",
	rant: "Jeg får ikke tilgang til $common når jeg sitter hjemme",
	problem: problemer.beskyttelse,
	losning: "Kryptert tilkobling fra din PC din til kontoret sitt nettverk, slik at ting funker omtrent som om du sitter på Skur39",
	issues: ["Krever en del båndbredde", "Litt styr å sette opp"],
	styrker: ["Funker med de aller fleste typer devices", "Fleksibelt", "Oppleves som sømløst", "Krever gode identitetsløsninger for å være årntli sikkert (f.eks RSA-dongle)"],
	funker: "",
	terningkast: 5
},
{ 
	navn: "DigPost & eBoks",
	rant: "Ååå, jeg har ikke lyst på enda en digital postkasse. Jeg har jo epost",
	problem: problemer.kommunikasjon,
	losning: "Et epost-lignende system som tilbyr sentralisert sikker kommunikasjon",
	issues: ["Binding til leverandør", "Enda en postkasse", "Meldingene kan i teorien leses av leverandøren"],
	funker: "Er avhengig av kritisk masse, men er et brukbart kompromiss i dagens infrastruktur",
	terningkast: [6, 1]
},
{ 
	navn: "Captcha",
	rant: "Jeg klarer ikke logge in på LinkedIn fordi de har en ubrukelig Captcha", 
	problem: problemer.robot,
	losning: "Mennesker er sykt bra på å gjenkjenne mønster, så vi bruker et bilde",
	issues: ["Datamaskiner blir kjappere og kjappere", "Mønstrene blir må da bli vanskeligere og vanskeligere", "Utrolig irriterende når du har bomma mer enn en gang"],
	funker: "En gang i tiden, så kanskje",
	terningkast: 2
},
{
	navn: "Antivirus",
	rant: "Datan min er blir så syyyykt treg pga antivirus",
	problem: problemer.robot,
	losning: "Et program som overvåker alt som skjer på maskina",
	issues: ["Krever en god del ressurser", "Vanskelig å kjenne igjen virus-aktig aktivitet", "Noen av problemene kan løses på andre måter enn antivirus"],
	alternativer: "",
	funker: "",
	terningkast: 3
},
{
	navn: "Brannmur",
	rant: "Argh, jeg får ikke BitTorrent til å fungere",
	problem: problemer.robot,
	losning: "La en spesialprogramvare kontrollere tilgangen til nettverket",
	issues: ["Krever en del administrasjon", "Noen av problemene kan løses på andre måter enn antivirus"],
	alternativer: "",
	funker: "",
	terningkast: 3
},
{
	navn: "Filtrerende Web-Proxy",
	rant: "Jeg klikka på en link på Socialcast og så står det bare [Blocked by proxy: Social media]",
	problem: "Folk går inn på sider som de kanskje ikke burde gått inn på i arbeidstida",
	losning: "Send all internettrafikk gjennom en mellomtjener som kan luke vekk alt som er farlig, uønsket, uproduktivt eller smakløst",
	issues: ["Tar mer en", "", "Kan fort misbrukes av overivrige administratorer", "P"],
	funker: "Til en viss grad, men ",
	terningkast: 3
},
{
  	navn: "Bankid på mobil ",
  	rant: "Mista telefonen",
  	losning: "",
  	issues: ["Yep"],
  	funker: "",
  	terningkast: 0
  },
  {
  	navn: "WiFi",
  	rant: "Det WiFi-passordet er så sykt vanskelig",
  	problem: "Du vil gjerne kunne bruke trådløst nettverk uten at alle kan avlytte det",
  	losning: "Krypto-magi på all trådløs kommunikasjon med et hemmelig men delt passord",
  	issues: ["Passordet må være langt for å være bra", "Kan hackes likevel avhengig av protokoll (WEP)"],
  	funker: "Ja, men av og til trenger man mer sikkerhet i tillegg (SSL)",
  	terningkast: 4
  },
{
	navn: "SPAM-filter",
	rant: "Hvorfor kommer ikke den helsikes mailen frem",
	problem: "Noen på internett vil sende deg reklame som du ikke har bedt om",
	losning: "",
	issues: ["Ting som ser ut som SPAM er ikke alltid spam", "Tar ikke bort kjerneproblemet", "Gjør epost sakte men sikkert dårligere"],
	funker: "Av og til",
	terningkast: 4
},
];

/*
--

# Brannmur

---

# DRM

###  

---

# Spam-filter


---

# Skriv inn passord


---

# AAAAAArgh, hvorfor får jeg ikke installert inn Spotify

# Admin-tilgang og slikt


---

# Du må oppdatere X

### Software inneholder feil
Og derfor må det opps

###

---

# Du har blitt logget ut fra www.nettbank-og-webmailen-din.com

### Hva er greia?
* Misbruk om du sitter på nettkafe eller på "offentlig" pc
* Minsker konsekvensen for sesjons-stjeling
* 

---

# Du har blitt logget ut fra pcen din

### Hva er greia?


*/
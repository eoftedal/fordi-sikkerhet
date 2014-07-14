var rants = [
{ 
	navn: "Brukernavn og passord",
	rant: "Jeg husker ikke passordet mitt",
	problem: "Hvem er du?",
	losning: "En navnelapp og en delt hemmelighet",
	issues: ["Passordet må være langt for å være bra", "Dårlige passord gjettes", "Mindre dårlige passord kan knekkes", "Gjenbruk - og lekkasjer"],
	funker: "Så lenge du ikke trenger veldig mye sikkerhet",
	terningkast: 3
},
{ 
	navn: "Fingeravtrykksleser",
	problem: "Hvem er du?",
	rant: "Jeg gidder ikke huske enda et passord", 
	losning: "En bildesensor som tar bilde av fingeren din og lager et sykt langt passord som identifiserer bare deg",
	issues: ["Det for det meste...", "Må prøve 9 ganger for at det skal gå gjennom", "Folk kutter av fingeren din og slikt"],
	funker: "Tja",
	terningkast: 3
},
{ 
	navn: "2 - faktor autentisering",
	problem: "Hvem er du? Serriøst",
	rant: "Når brukernavn og passord ikke er nok", 
	losning: "Brukernavn, passord + en delt hemmelighet som blir brukt bare en gang",
	issues: ["Jeg glemmer dingsen", "Dingser koster penger", "Krever bokføring hos sender og mottaker", "Dyrt", "Krever en del infrastruktur"],
	funker: "Veldig bra så lenge du husker dingsen",
	terningkast: 4
},
{ 
	navn: "BankID Java-applet",
	problem: "Vennligst signer her",
	rant: "Føkkings JAVA", 
	losning: "Vi lager en JAVA-applet som kjører på alle browsere.",
	issues: ["Java som en browser plugin", "Java som en browser plugin", "Java som en browser plugin", "Java som en browser plugin"],
	funker: "Teknisk sett - Men nå er 2014 og ikke 2004. Det kan gjøres bedre.",
	alternativer: "BankID-mobil eller en løsning basert på JavaScript",
	terningkast: 1
},
{ 
	navn: "SSL/TLS",
	problem: "Vi må kunne sende meldinger uten at noen kan lese eller forandre meldingene",
	rant: "?",
	losning: "KRYPTO-magi som involverer sertifikater, pålitelige 3.parter og masse røverspråk",
	issues: ["Må bygges inn i alle browsere", "Krever solide 3.parter"],
	funker: "JA",
	terningkast: 6
},
{ 
	navn: "BankId - Dongle",
	rant: "AAAAAArgh, jeg må inn i nettbanken for å overføre penger, og har glemt BankID-greia mi", 
	losning: "2-faktor autentisering hvor donglen genererer engangspassord",
	issues: ["Ganske kostbar", "Veldig glembar", "Enda en dings"],
	funker: "Jepp",
	alternativer: ['Lapp med koder', 'App', "SMS"],
	terningkast: 4
},
{ 
	navn: "Citrixn / Virtuell desktop",
	rant: "Jeg må logge på Citrix på jobben og det er ganske mye pain å jobbe inni der", 
	losning: "Virtuell desktop",
	issues: ["Sårbart for nettverk", "IT-avdelinger liker å låse ned ting"],
	funker: "",
	terningkast: 2
},
{ 
	navn: "VPN",
	rant: "Jeg får ikke tilgang til $common når jeg sitter hjemme", 
	losning: "SSL på nettverksnivå",
	issues: [""],
	funker: "",
	terningkast: 5
},
{ 
	navn: "DigPost",
	rant: "Ååå, jeg har ikke lyst på enda en digital postkasse. Jeg har jo epost", 
	problem: "Epost er usikkert og kan sniffes",
	losning: "En stor silo som tilbyr sending, lesing og mottak",
	issues: ["Enkeltleverandør", "Støtter ikke eksisterende systemer (epost)"],
	funker: "Ja, men er avhengig av kritisk masse",
	terningkast: 6
},
{ 
	navn: "Captcha",
	rant: "Jeg klarer ikke logge in på LinkedIn fordi de har en ubrukelig Captcha", 
	problem: "Jeg tror du er en datamaskin  ",
	losning: "Mennesker er sykt bra på å gjenkjenne mønster, så vi bruker et bilde",
	issues: ["Datamaskiner blir kjappere og kjappere"],
	funker: "",
	terningkast: 2
},
{
	navn: "Antivirus",
	rant: "Datan min er blir så syyyykt treg pga antivirus",
	problem: "Enkelte programmer gjør ting du ikke vil de skal gjøre",
	losning: "Et program som overvåker alt som skjer på maskina",
	issues: ["Krever en god del ressurser", "Vanskelig å kjenne igjen virus-aktig aktivitet", "Noen av problemene kan løses på andre måter enn antivirus"],
	alternativer: "",
	funker: "",
	terningkast: 3
},
{
	navn: "Brannmur",
	rant: "Argh, jeg får ikke BitTorrent til å fungere",
	problem: "Hackere kan ta over maskina di om du har sårbar programvare som er tilknyttet internett",
	losning: "La en brannmur kontrollere tilgang til nettverket",
	issues: ["Krever en del admin", "", "Noen av problemene kan løses på andre måter enn antivirus"],
	alternativer: "",
	funker: "",
	terningkast: 3
},
{
	navn: "SSO og logg deg inn med facebook",
	rant: "Aaaargh, jeg orker ikke lage enda et brukernavn og passord for dette søplenettstedet",
	losning: "La en tiltrodd 3.part håndterer håndtere lagring ",
	issues: [""],
	funker: "",
	terningkast: 0
},{
  	navn: "Bankid på mobil ",
  	rant: "Mista telefonen",
  	losning: "",
  	issues: [""],
  	funker: "",
  	terningkast: 0
  },
  {
  	navn: "WiFi",
  	rant: "Det WiFi-passordet er så sykt vanskelig",
  	problem: "Du vil gjerne kunne bruke trådløst nettverk uten at alle kan avlytte det"
  	losning: "Krypto-magi på all trådløs kommunikasjon med et hemmelig men delt passord",
  	issues: ["Passordet må være langt for å være bra", "Kan hackes likevel"],
  	alternativer:
  	funker: "Ja, men av og til trenger man mer sikkerhet (aka SSL)",
  	terningkast: 4
  },
{
	navn: "SPAM-filter",
	rant: "Hvorfor kommer ikke den helsikes mailen frem",
	problem: "Noen på internett vil sende deg reklame som du ikke har bedt om"
	losning: "",
	issues: ["Ting som ser ut som SPAM er ikke alltid spam", "Tar ikke bort kjerneproblemet", "Gjør epost sakte men sikkert dårligere"],
	funker: "Av og til",
	terningkast: 4
},
];

/*
{ 
	navn: "",
	rant: "", 
	losning: "",
	issues: [""],
	funker: "",
	terningkast: 0
},

*/

/*

# Antivirus

### Datamaskina di kan bli kontrollert av andre


---

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
/*
{ 
	navn: "",
	rant: "", 
	losning: "",
	problemer: [""],
	funker: "",
	terningkast: 0
},

*/

var rants = [
{ 
	navn: "Brukernavn og passord",
	rant: "Jeg husker ikke passordet mitt", 
	losning: "En navnelapp og en delt hemmelighet",
	problemer: ["Passordet må være langt for å være bra", "Dårlige passord kan hackes relativt enkelt", "Passordgjenbruk - og lekkasjer"],
	funker: "Så lenge du ikke trenger veldig mye sikkerhet",
	terningkast: 2
},
{ 
	navn: "Fingeravtrykksleser",
	rant: "Jeg gidder ikke huske enda et passord", 
	losning: "La oss bruke fingeren din, den mister du sikkert ikke!!", 
	problemer: ["Det for det meste...", "Må prøve 9 ganger for at det skal gå gjennom", "Folk kutter av fingeren din og slikt"],
	funker: "Tja",
	terningkast: 2
},
{ 
	navn: "2 - faktor autentisering",
	rant: "Når brukernavn og passord ikke er nok", 
	losning: "Brukernavn, passord + en delt hemmelighet som blir brukt bare en gang",
	problemer: ["Jeg glemmer dingsen", "Dingser koster penger", "Krever bokføring hos sender og mottaker", "Dyrt", "Krever en del infrastruktur"],
	funker: "Veldig bra så lenge du husker dingsen",
	terningkast: 4
},
{ 
	navn: "BankID java-applet",
	rant: "Føkkings JAVA", 
	losning: "Vi lager en JAVA-applet som kjører på alle browsere.",
	problemer: ["Java må installeres overalt", "Java må være oppdatert overalt!", "Java er en plugin", "Det funker ikke"],
	funker: "Teknisk sett - Men nå er 2014 og ikke 2004. Det kan gjøres bedre.",
	alternativer: "SSL/TLS",
	terningkast: 3
},
{ 
	navn: "SSL/TLS",
	rant: "Vi må kunne sende meldinger uten at noen kan lese eller forandre meldingene", 
	losning: "KRYPTO-magi hvor man utveksler sertifikater og verifiserer disse hos en 3. part",
	problemer: ["Må bygges inn i alle browsere", "3. parter blir nøkkelen"],
	funker: "JA",
	terningkast: 5
},
{ 
	navn: "BankId - Dongle",
	rant: "AAAAAArgh, jeg må inn i nettbanken for å overføre penger, og har glemt BankID-greia mi", 
	losning: "2-faktor autentisering hvor donglen genererer engangspassord",
	problemer: ["Ganske kostbar", "Veldig glembar", "Enda en dings"],
	funker: "Jepp",
	alternativer: ['Lapp med koder', 'App', "SMS"],
	terningkast: 4
},
{ 
	navn: "Citrixn / Virtuell desktop",
	rant: "Jeg må logge på Citrix på jobben og det er ganske mye pain å jobbe inni der", 
	losning: "Virtuell desktop",
	problemer: ["Sårbart for nettverk", "IT-avdelinger liker å låse ned ting"],
	funker: "",
	terningkast: 0
},
{ 
	navn: "VPN",
	rant: "Jeg får ikke tilgang til $common når jeg sitter hjemme", 
	losning: "SSL på nettverksnivå",
	problemer: [""],
	funker: "",
	terningkast: 5
},
{ 
	navn: "DigPost",
	rant: "Ååå, jeg har ikke lyst på enda en digital postkasse. Jeg har jo epost", 
	problem: "Epost er usikkert og kan sniffes"
	losning: "En stor silo som tilbyr sending, lesing og mottak",
	problemer: ["Enkeltleverandør", "Støtter ikke eksisterende systemer (epost)"],
	funker: "Ja, men er avhengig av kritisk masse",
	terningkast: "Tør ikke"
},
{ 
	navn: "Captcha",
	rant: "Jeg klarer ikke logge in på LinkedIn fordi de har en ubrukelig Captcha", 
	problem: 
	losning: "",
	problemer: [""],
	funker: "",
	terningkast: 0
},

];

/*


---

# Captcha

## Jeg tror du er en robot



--- 

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
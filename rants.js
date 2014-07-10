/*
,{ 
	navn: "",
	greia: "", 
	losning: "",
	problemer: [""],
	funker: "",
	terningkast: 0
}

*/

var rants = [
{ 
	navn: "Brukernavn og passord",
	greia: "Jeg husker ikke passordet mitt", 
	losning: "En navnelapp og en delt hemmelighet",
	problemer: ["Du glemmer passordet", "Passordet er plutselig ikke hemmelig lengre", "Vanskelige regler for å få laget et godkjent passord", "Passordet må skiftes ofte"],
	funker: "Så lenge du ikke trenger veldig mye sikkerhet",
	terningkast: 2
},
{ 
	navn: "Fingeravtrykksleser",
	greia: "Jeg gidder ikke huske enda et passord", 
	losning: "La oss bruke fingeren din, den mister du sikkert ikke!!", 
	problemer: ["Det for det meste...", "Må prøve 9 ganger for at det skal gå gjennom", "Folk kutter av fingeren din og slikt"],
	funker: "Tja",
	terningkast: 2
},
{ 
	navn: "2 - faktor autentisering",
	greia: "Når brukernavn og passord ikke er nok", 
	losning: "Brukernavn, passord + en delt hemmelighet som blir brukt bare en gang",
	problemer: ["Jeg glemmer dingsen", "Dingser koster penger", "Krever bokføring hos sender og mottaker", "Dyrt", "Krever en del infrastruktur"],
	funker: "Veldig bra så lenge du husker dingsen",
	terningkast: 4
},
{ 
	navn: "BankID java-appleten",
	greia: "Det er penger involvert så da må ting være supersikkert. Og det er 1999", 
	losning: "Vi lager en JAVA-applet som kjører på alle browsere. Det funker sikkert!",
	problemer: [""],
	funker: "",
	terningkast: 1
},
{ 
	navn: "SSL",
	greia: "Vi må kunne snakke sammen uten at noen lytter på oss", 
	losning: "Vi lager en JAVA-applet som kjører på alle browsere. Det funker sikkert!",
	problemer: [""],
	funker: "",
	terningkast: 6
},
];

/*
# BankID - applet

### Problem: Sikker kommunikasjon

--

* Ekstra sikker kommunikasjon (Applet -> Server) 
* En delt gjenbrukt hemmelighet (passord)
* En engangshemmelighet (dongle/sms/etc)

--

### Hvorfor er du irritert: 
- Java-Applet er noe dritt og funker ikke på X
- Jeg glemmer BankID-dongelen

--

### Funker det?
Teknisk sett - Men nå er 2014 og ikke 2004. Det kan gjøres bedre.

---

# BankId - Dongle

- Engangspassord må leveres på en eller annen måte
- Papir, sms, egen app, eller DONGLE
- Enda en dings du må ha med deg og som du mister
- Dyrt

---

# BankId - Java applet

## Sikker kommunikasjon

- Java må installeres overalt og deretter oppdateres over alt
- Blir egentlig ikke brukt så mye lengre
- Har en del sikkerhetshull som oppdateres
- Klønete oppdateringsmekanisme
- Om java ikke oppdateres har du sikkerhetshull 

### Funker det?
Ja

## Er det nødvendig?
Ikke nå lengre


---

# Citrix

## Lat som du er på kontoret selv om du sitter hjemme


--- 


---

# VPN

## Lat som du er på kontoret selv om du sitter hjemme


---

# DigiPost

## Sikker kommunikasjon og oppbevaring


---

# SSL (hengelåsen)

## Sikker kommunikasjon

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
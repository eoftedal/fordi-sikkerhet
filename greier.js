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
},{ 
	navn: "Fingeravtrykksleser",
	greia: "Jeg gidder ikke huske enda et passord", 
	losning: "La oss bruke fingeren din, den mister du sikkert ikke!!", 
	problemer: ["Det for det meste...", "Må prøve 9 ganger for at det skal gå gjennom", "Folk kutter av fingeren din og slikt"],
	funker: "Tja",
	terningkast: 2
},{ 
	navn: "2 - faktor autentisering",
	greia: "Når brukernavn og passord ikke er nok", 
	losning: "Brukernavn, passord + en delt hemmelighet som blir brukt bare en gang",
	problemer: ["Jeg glemmer dingsen", "Dingser koster penger", "Krever bokføring hos sender og mottaker", "Dyrt", "Krever en del infrastruktur"],
	funker: "Veldig bra så lenge du husker dingsen",
	terningkast: 4
},{ 
	navn: "",
	greia: "", 
	losning: "",
	problemer: [""],
	funker: "",
	terningkast: 0
}
];

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


var subslideSeparator = "\n\n--\n\n";
var template =  
				"# {{greia}}"+subslideSeparator+
				"### {{navn}}"+subslideSeparator+
				"### {{funker}}"+subslideSeparator+
				"### Terningkast: {{terningkast}}"+subslideSeparator+
				"{{problemer}}\n\n"+
				"---\n\n";

var arrayTemplate = "* {{content}}\n";

var leggTilGreier = function(){
	var outer = "";
	
	function replace(tag, replaceWith, str){
		return str.replace('{{'+tag+'}}', replaceWith ? replaceWith : "");
	};

	_.each(rants, function(rant){
		var inner = _.clone(template);

		for(var prop in rant){
			var theProp = rant[prop];
			var text = "";

			if(typeof theProp === "object"){

				for(arr in theProp){					
					var value = theProp[arr];
					var tmpl = _.clone(arrayTemplate);

					text += tmpl.replace('{{content}}', value ? value : "");					
				}			
			} else {
				text = theProp;
			}

			console.log(text);
		
			inner = replace(prop, text, inner);	
		}

		outer += inner;	
	});

	outer += "#slutt"

  var newDiv = document.getElementById("source");
  var newContent = document.createTextNode(outer); 
  newDiv.appendChild(newContent); //add the text node to the newly created div. 
};

/*
---



---


---
*/
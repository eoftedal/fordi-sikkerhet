var leggTilGreier = function(){

	var subslide = "\n\n--\n\n";
	var slide = "\n\n---\n\n";

	var templates = {
		"rant" : "##Rant: {{value}}"+ subslide,
		"navn" : "##Løsning: {{value}}"+ subslide,
		"funker": "###Funker det? \n\n{{value}}"+ subslide,
		"problemer": "{{value}}"+ subslide,
		"terningkast" : "### Terningkast:\n\n![Alt text](dice-{{value}}.png)",
		
		"_array" : "* {{value}}\n",
		"_main": "{{rant}}"+
					"{{navn}}"+				
					"{{issues}}"+
					"{{funker}}"+
					"{{terningkast}}"+
					"\n\n---\n\n"

	};

	var arrayTemplate = "* {{content}}\n";
	
	function replace(tag, replaceWith){

		if(typeof replaceWith === 'number'){
			replaceWith = ""+replaceWith;
		}

		var str = templates[tag];
		if(str && replaceWith.length > 0){
			return str.replace('{{value}}', replaceWith ? replaceWith : "");
		} else {
			return "";
		}
	};

	function replaceObjects(rants){
		var result = "";

		_.each(rants, function(rant){
			var rantResult = templates['_main'];
			
			for(var prop in rant){

				var value = rant[prop];
				var text_til_denne_ranten = "";

				if(typeof value === "object"){

					for(idx in value){		
						var arrayValue = value[idx];
						text_til_denne_ranten += replace('_array', arrayValue);						
					}		

				} else {
					text_til_denne_ranten = value;
				}
			
				var replacedText = replace(prop, text_til_denne_ranten);
				rantResult = rantResult.replace('{{'+prop+'}}', replacedText ? replacedText : "");

			}
			result += rantResult;
		});

		return result;	
	}


	var outer = replaceObjects(rants);

	outer += "#slutt"

  var newDiv = document.getElementById("source");
  var newContent = document.createTextNode(outer); 
  newDiv.appendChild(newContent);
};
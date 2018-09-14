// Zadatak

var datum = new Date();
	//Deklariramo varijablu datum i pridodamo
	//joj vrijednost današnjeg datuma

var vrijeme = datum.getHours();
	//deklariramo varijablu vrijeme i pridamo
	//joj vrijednost sati - današnjeg dana
	
vrijeme = 8	

if (vrijeme >= 19)
{

	alert("dobra večer. vrijeme je za odmor");

}
else if (vrijeme >= 11)
{

	alert("dobar dan spremni smo za nove zadatke");

}
else
{

	alert("dobro jutro");

}	

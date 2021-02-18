


//mes30() = calcula a soma dos meses com 30dias
//mes31() = calcula a soma dos meses com 31dias
//anoBixesto() = calcula a soma do mes de fevereiro
//GetDiaD() = deve ser chamada no início do SCO
//o objetivo do cód é liberar a proxima aula 7 dias após o início da mesma.


var dia = 0;
var mes = 0;
var ano = 0;
var diaD = 0;
var mesD = 0;
var anoD = 0;



function mes30(){

	if (dia <= 23) {
		diaD = dia + 7;
		mesD = mes;
		anoD = ano
		//;
	} else if (dia > 23) {
		diaD=dia + 7 - 30;
		mesD=mes + 1;
		anoD=ano
		//;
	}
	console.log("mes30");
	console.log("data de final " + diaD +"/" + mesD +"/" + anoD);
	// gravar a variavel da data
	gravaData();

	//VardiaD.set('" + diaD + "');VarmesD.set('" + mesD + "');VaranoD.set('" + anoD + "')");



};

function mes31(){
	if (dia <= 24) {
		diaD = dia + 7;
		mesD = mes;
		anoD = ano;
		//;

	} else if (dia > 24) {
		if(mes==12){
			diaD=dia + 7 - 31;
			mesD=mes + 1 -12;
			anoD=ano +1;
			//;
		}else{
			diaD=dia + 7 - 31;
			mesD=mes + 1;
			anoD=ano;
			//;
		}

	}
	console.log("mes31");
	console.log("data de final " + diaD +"/" + mesD +"/" + anoD);
	// gravar a variavel da data
	gravaData();

	//VardiaD.set('" + diaD + "');VarmesD.set('" + mesD + "');VaranoD.set('" + anoD + "')");

};

function anoBixesto(){
	if (ano % 4 == 0) {
		console.log("ano bixesto,29");
		if (dia == 22) {
			diaD = dia + 7;
			mesD = mes;
			anoD = ano;
			console.log("bixesto1");


		} else {
			diaD = dia + 7 - 29;
			mesD = mes + 1;
			anoD = ano;
			console.log("bixesto2");


		}
	} else {
			console.log("ano normal,28");
			diaD = dia + 7 - 28;
			mesD = mes + 1;
			anoD = ano;


	}
			console.log("anoBixesto");
			console.log("data final " + diaD +"/" + mesD +"/" + anoD);
			// gravar a variavel da data
		gravaData();
	//VardiaD.set('" + diaD + "');VarmesD.set('" + mesD + "');VaranoD.set('" + anoD + "')");

};


	function GetDiaD() {
		//código abaixo pega a data da máquina do cara
		var today_date = new Date();
		var date_str = today_date.getDate() + "/" + today_date.getMonth() + 1 + "/" + today_date.getFullYear();
		dia = today_date.getDate();
		mes = today_date.getMonth() + 1;
		ano = today_date.getFullYear();

if (dia <= 21) {
			mesD = mes;
			diaD = dia + 7;
			anoD = ano;
			//document.getElementById("data").innerHTML = "minha data é" + diaD +"/" + mesD +"/" + ano;
			console.log("minha data é" + diaD +"/" + mesD +"/" + ano);

		// gravar a variavel da data
		gravaData();
         //VardiaD.set('" + diaD + "');VarmesD.set('" + mesD + "');VaranoD.set('" + anoD + "')");

	} else {
		switch (mes) {
			case 1 :
				//JANEIRO
				//mes de 31 dias
				mes31();
				break;
			case 2 :
				//FEVEREIRO
				//mes de 28 ou 29 dias
				anoBixesto();
				break;
			case 3 :
				//MARÇO
				//mes de 31 dias
				mes31();
				break
			case 4 :
				//ABRIL
				//mes de 30 dias
				mes30();
				break;
			case 5 :
				//MAIO
				//mes de 31 dias
				mes31();
				break;
			case 6 :
				//JUNHO
				//mes de 30 dias
				mes30();
				break;
			case 7 :
				//JULHO
				//mes de 31 dias
				mes31();
				break;
			case 8 :
				//AGOSTO
				//mes de 31 dias
				mes31();
				break;
			case 9 :
				//SETEMBRO
				//mes de 30 dias
				mes30();
				break;
			case 10 :
				//OUTUBRO
				//mes de 31 dias
				mes31();
				break;
			case 11 :
				//NOVEMBRO
				//mes de 30 dias
				mes30();
				break;
			case 12 :
				//DEZEMBRO
				//mes de 31 dias
				mes31();
		}

	}
	console.log(diaD +"/" + mesD +"/" + anoD);
};

function gravaData(){
	localStorage.setItem("dia7G",JSON.stringify(diaD));
	localStorage.setItem("mes7G",JSON.stringify(mesD));
	localStorage.setItem("ano7G",JSON.stringify(anoD));
}

/*
//esta função apaga os dados setados
function apagaDados(){
	localStorage.clear();
}
apagaDados();
*/

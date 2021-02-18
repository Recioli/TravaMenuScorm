

function AvancaSCO(btA) {
	let today_date = new Date()  ;
  let dia = today_date.getDate();
	let mes =today_date.getMonth() + 1;
	let ano =today_date.getFullYear();

	let data_ini = dia + "/" + mes + "/" + ano;
	console.log("data inicio " + "=" + data_ini);

let diaD = JSON.parse(window.localStorage.getItem('dia7G'));
let mesD = JSON.parse(window.localStorage.getItem('mes7G'));
let anoD = JSON.parse(window.localStorage.getItem('ano7G'));


	let data_Fim= diaD + "/" + mesD + "/" + anoD;
  console.log("data recuperada " + "=" + data_Fim);

if (dia >= diaD && mes >= mesD && ano >= anoD) {

			gravaEncontroLs();
		 	habilitaBt(btA);
			$('#respModal').text('Próximo encontro liberado!');
			$('#Modal').modal('show');
			//	window.location.reload();

	} else if (dia < diaD && mes > mesD && ano==anoD) {

		$('#respModal').text('Próximo encontro liberado!');
		$('#Modal').modal('show');
		gravaEncontroLs();
		habilitaBt(btA);
	  //window.location.reload();

	} else if (ano>anoD) {

		$('#respModal').text('Próximo encontro liberado!');
		$('#Modal').modal('show');
		gravaEncontroLs();
		habilitaBt(btA);
	 //window.location.reload();

	} else {

		$('#respModal').text("Este encontro está programado para ser concluido dia: "+ data_Fim);
		$('#Modal').modal('show');

	}
}

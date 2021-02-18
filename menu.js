

//setar 1 a mais:
var nEncontros = 46;
var encontroAtual;


//main
gravaEncontro();

function gravaEncontro(){

if (localStorage.getItem('encontroLs7') === null) {

      console.log("if null");
      gravaEncontroLs();
      criaMenu();
    } else{
      encontroAtual =  JSON.parse(window.localStorage.getItem("encontroLs7"));
      console.log("if nao null");
      console.log("encontroAtual"+encontroAtual);
      criaMenu();

      }

}


function gravaEncontroLs(){
  let encontroLs7 = JSON.parse(window.localStorage.getItem("encontroLs7"));
  encontroAtual = encontroLs7+1;
  localStorage.setItem("encontroLs7",JSON.stringify(encontroAtual));
  localStorage.setItem("clique7",JSON.stringify(false));


}


function criaMenu(){

  for(i=1; i<nEncontros;i++){
    let encontros = "Encontro" + " " +  i;
    let mid = '"'+"bt" + i+'"';
    let mid2 = '"'+"btconc" + i+'"';


    const insert = document.querySelector("#indice");
    const novoElementoIndex=

                        `
                        <div class="inline-flex container-fluid">
                          <button  id = ${mid} class="btn btn-danger disabled " type="button"  name="button">${encontros}</button>
                          <button  id = ${mid2} class="btn  btn-warning invisivel" type="button"  name="button">Concluir</button>
                        </div>
                        `
                         insert.insertAdjacentHTML("beforeend", novoElementoIndex);

    }

      botoesLiberados();


}

function botoesLiberados(){
  let bc = eval("'"+"btconc" + encontroAtual+"'");
  let ultimoBtLiberado = encontroAtual +1;
  let clique = JSON.parse(window.localStorage.getItem("clique7"));

  if(encontroAtual==1 && clique==false){
    habilitaBt('bt1');

  }else if(encontroAtual==1 && clique==true){
  habilitaBt('bt1');
  habilitaConc(bc);

  }else{
      for (var i = 1; i < ultimoBtLiberado; i++) {
          let b = eval("'"+"bt" + i+"'");
          habilitaBt(b);
        }
        if(clique == true){

        habilitaConc(bc);
        }
    }

}

function habilitaBt(id){
  if(encontroAtual>nEncontros-1){
    document.querySelector('.btn-light').classList.remove('invisivel');
    console.log("aqui"+encontroAtual);
    enconroAtual = nEncontros-2;
  }
  else{
    let btenabled = document.getElementById(id);
    btenabled.classList.add("btn-primary");
    btenabled.classList.remove("btn-danger");
    btenabled.classList.remove("disabled");
  }

}

function habilitaConc(id2){
    const btconc = document.getElementById(id2);
    btconc.classList.remove("invisivel");
}


function reloadPage(){
   window.location.reload();
}


function ConcluiSCO(){

      $('#respModal').text('Parabéns você finalizou a capacitação inicial');
      $('#Modal').modal('show');

      //  doLMSInitialize();
        doLMSSetValue('cmi.core.score.raw', '100');
        doLMSSetValue('cmi.core.lesson_status', 'completed');
        //alert("Párabéns você finalizou a capacitação inicial");
        doQuit();
        doLMSCommit('');

}

//CONTROLE DOS BOTOES

ControleBtDinamico();
function ControleBtDinamico(){

        for (var i = 1; i < nEncontros; i++) {
          let bx2 = i+1;
          const btA = eval('"'+'bt'+ i + '"');
          const concA = eval('"'+"btconc" + i+ '"');
          const btB = eval('"'+'bt' + bx2+ '"');
          let encN = i;

          document.getElementById(btA).addEventListener("click", function(){
            let clique = JSON.parse(window.localStorage.getItem("clique7"));
            console.log(clique);

              if(encontroAtual == encN && clique==false){
                  GetDiaD();

                  habilitaConc(concA);
                  localStorage.setItem("clique7",JSON.stringify(true));
                  //mostra conteudo
                  AvancaSCO(btB);
                  abreURL(mLink[encN]);

              }if(encontroAtual == encN && clique==true){
                    habilitaConc(concA);
                      AvancaSCO(btB);
                    abreURL(mLink[encN]);

                  //mostra conteudo
              }if( encN < encontroAtual){
                    //se for maior não faz nada
                  //SO MOSTRA O conteudo

                  abreURL(mLink[encN]);
              }
            }, false);
            document.getElementById(concA).addEventListener("click", function(){
                AvancaSCO(btB);
            }, false);
}

        }

//primeira criação de comando bt
//valendo isso dinamizado
//encontro1++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
document.querySelector("#bt1").addEventListener("click", function(){
let clique = JSON.parse(window.localStorage.getItem("clique1"));
console.log(clique);
  if(encontroAtual == 1 && clique==false){
      GetDiaD();
      habilitaConc('btconc1');
      localStorage.setItem("clique1",JSON.stringify(true));
      console.log('pegaData e mostra conteudo');
      //mostra conteudo
  }else if(encontroAtual == 1 && clique==true){
        habilitaConc('btconc1');
        console.log('so mostra conteudo e habilita conc1');
  }else{
          console.log('so mostra conteudo');
      //SO MOSTRA O conteudo
  }
}, false);

document.querySelector("#btconc1").addEventListener("click", function(){
    AvancaSCO('bt2');

}, false);

*/
//encontro2++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

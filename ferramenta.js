

function setaEncontroLs(){

      var dataDehoje = new Date();
      var diaDeHoje =dataDehoje.getDate();
      var minhaSenha = document.getElementById('senha').value;
      var senhaValida = minhaSenha.substring(2,4);
      var meuEncontro = minhaSenha.substring(0,2);
      var senhaCompara = diaDeHoje * 3;
      encontroAtual = meuEncontro++;

  if (senhaValida == senhaCompara) {
      localStorage.setItem("encontroLs7",JSON.stringify(encontroAtual));
      localStorage.setItem("clique7",JSON.stringify(false));
      let btf = document.getElementById("caixa");
      btf.classList.add("dispNone");
  }else {
      alert("senha incorreta");
  }
}

function abreCaixa(){

var bt = document.getElementById("caixa");
bt.classList.remove("dispNone");

}

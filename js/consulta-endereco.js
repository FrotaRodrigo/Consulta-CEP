let cep = document.getElementById('cep');
let rua = document.getElementById('Rua');
let bairro = document.getElementById('Bairro');
let cidade = document.getElementById('Cidade');
let estado = document.getElementById('Estado');
let IBGE = document.getElementById('IBGE')


cep.value = '01001000'

cep.addEventListener('blur', function(e) {
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+ cep +'/json/?callback=popularForm';
    document.body.appendChild(script);  
});

  function popularForm (resposta){

    if("erro" in resposta){
        alert('CEP não encontrado');
        return;
    }

    console.log(resposta);
   rua.value = resposta.logradouro; 
   bairro.value = resposta.bairro;
   cidade.value = resposta.localidade;
   estado.value = resposta.uf;
   IBGE.value = resposta.ibge;   
} 
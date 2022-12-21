//viacep.com.br/ws/RS/Porto Alegre/Domingos Jose/json/

let rua = document.getElementById('Rua');
let cidade = document.getElementById('Cidade');
let uf = document.getElementById('Estado');
let btnCep = document.getElementById('btnBuscarCep');
let listaCep = document.getElementById('listaCep');

rua.value = 'Domingos Jose';
cidade.value = 'Porto Alegre';
uf.value = 'RS';

btnCep.addEventListener('click', function(e){
    e.preventDefault();

    let urlBase = 'https://viacep.com.br/ws';
    let parametros = uf.value + '/' + cidade.value + '/' + '/json/';
    let callback = '?callback-popularNaoSeiMeuCep'

    let script = document.createElement('script');
    script.src =  urlBase + parametros + callback;
    document.body.appendChild(script)
});

function popularNaoSeiMeuCep(resposta) {

    if(!Array.isArray(resposta)) {
        alert('O retorno não é uma lista de CEPs')
        return;
    }

    reposta.forEach(function(i) {

        let li = document.createElement('li');
        let endereco = i.logradouro + ' | ' + i.bairro + ' | ' + i.localidade + ' | ' + i.uf + ' | ' + i.cep;
        li.innerHTML = endereco;
        li.setAttribute('onclick', 'exibirCep('+i.cep.replace('-','')+')')
        listaCep.appendChild(li);

    })

}

function exibirCep(cep){
    alert(cep);
}

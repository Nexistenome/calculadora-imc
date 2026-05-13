const nivel = [
    'Abaixo do peso',
    'Peso normal',
    'Sobrepeso',
    'Obesidade grau I',
    'Obesidade grau II',
    'Obesidade grau III'
];


const form = document.querySelector('.form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value.replace(',','.'));
    const altura = Number(inputAltura.value.replace(',','.'));

    if(!peso || !altura || peso <= 0 || altura <= 0){
        setResultado('Preencha valores válidos para peso e altura.',false);
        return;
    }

    const imc = getImc(peso, altura).toFixed(2);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} - ${nivelImc}.`;
    setResultado(msg, true);
});

function getImc(p, a){
    return p / (a**2);
}

function getNivelImc(imc){
    if(imc <= 18.5) return nivel[0];
    if(imc <= 24.9) return nivel[1];
    if(imc <= 29.9) return nivel[2];
    if(imc <= 34.9) return nivel[3];
    if(imc <= 39.9) return nivel[4];
    return nivel[5]
}

function criaP (className){
    const p = document.createElement('p');
    p.classList.add(className);
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const className = isValid ? 'paragrafo-resultado' : 'bad';
    const p = criaP(className);
    p.innerHTML = msg;

    resultado.appendChild(p);
}
const startInclude = document.getElementById('startInclude');
const endExclude = document.getElementById('endExclude');
const testThisPrime = document.getElementById('testThisPrime');

function isPrime(){
    if(testThisPrime.value < 2) return testThisPrime.value+" Não é um numero primo!";
    for (let i = 2; i < testThisPrime.value; i++) { 
        if(testThisPrime.value % i === 0) return testThisPrime.value+" Não é um numero primo!";
    }
    return testThisPrime.value+" É um numero primo!";
}

function isPrimeArray(valor){
    if(valor < 2) return false;
    for (let i = 2; i < valor; i++) { 
        if(valor % i === 0) return false;
    }
    return true;
}

function printAllPrimes(){
    const primos = [];
    const resultadoArrayH1 = document.getElementById('resultadoArray');

    if (endExclude.value - startInclude.value > 100) {
        resultadoArrayH1.innerText = "Os valores de início e fim só podem ter diferença de no máximo 100 números.";
        return;
    }
    for (let i = startInclude.value; i < endExclude.value; i++) {
        if(isPrimeArray(i)){ 
            primos.push(i);
        }
    }
    resultadoArrayH1.innerText = primos.join(", ");
}
function redenrizaValida() {
    const resultadoH1 = document.getElementById('resultado');
    resultadoH1.innerText = isPrime();
}

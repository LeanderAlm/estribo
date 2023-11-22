function calcularSomatorio() {
   
    var inputNumero = document.getElementById("number").value;
    
    if (/^\d+$/.test(inputNumero)) {
        var numero = parseInt(inputNumero, 10);
        
        if (numero > 0) {
            var soma = 0;

            for (var i = 1; i < numero; i++) {
                if (i % 3 === 0 || i % 5 === 0) {
                    soma += i;
                }
            }

            document.getElementById("resultado").innerText = "O somatório dos valores divisíveis por 3 ou 5 é: " + soma;
        } else {
            alert("Por favor, insira um número inteiro positivo.");
        }
    } else {
        alert("Por favor, insira um número inteiro positivo válido.");
    }
}
function calcularSalario() {
    const valorPorHora = parseFloat(document.getElementById("valorHora").value);
    const horasTrabalhadas = parseFloat(document.getElementById("horasTrabalhadas").value);
    const salarioBruto = valorPorHora * horasTrabalhadas;
    const descontoIR = salarioBruto * 0.11;
    const descontoINSS = salarioBruto * 0.08;
    const descontoSindicato = salarioBruto * 0.05;
    const totalDescontos = descontoIR + descontoINSS + descontoSindicato;
    const salarioLiquido = salarioBruto - totalDescontos;

    const resultados = [
        `Salário Bruto: R$${salarioBruto.toFixed(2)}`,
        `Desconto IR (11%): R$${descontoIR.toFixed(2)}`,
        `Desconto INSS (8%): R$${descontoINSS.toFixed(2)}`,
        `Desconto Sindicato (5%): R$${descontoSindicato.toFixed(2)}`,
        `Total de Descontos: R$${totalDescontos.toFixed(2)}`,
        `Salário Líquido: R$${salarioLiquido.toFixed(2)}`
    ];

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = resultados.map(resultado => `<p>${resultado}</p>`).join('');
}

const valorInvestido = 3500;
const taxaPorMes = 1.8;
const meses = 24;
const valorDesejado = 3800;
const valorMensal = 4000;


function simularInvestimento(valorDeInicio,taxaPorMes,meses) {
  let saldoFinal = valorDeInicio;

  for (let i = 1; i < meses; i++) {
    saldoFinal += saldoFinal *(taxaPorMes/100);
    
  }

  return saldoFinal.toFixed(3);
}

const gastos = {
  luz:320,
  agua:150,
  internet:180,
  tvPorAssinatura:300,
  alimentacao:2200,
  gas:80,
}
function AdministrarGastos(gastos) {
  let TotalGastos = 0;
  for (let categoria in gastos) {
    TotalGastos += gastos[categoria];
    
  }
  return TotalGastos;
}
console.log(AdministrarGastos(gastos));

function ObterMesRecente() {
  const meses = [
    "janeiro/2024",
    "fevereiro/2024",
    "março/2024",
    "abril/2024",
    "maio/2024",
    "junho/2024",
    "julho/2024",
    "agosto/2024",
    "setembro/2024",
    "outubro/2024",
    "novembro/2024",
    "dezembro/2024",
    "janeiro/2025",
    "fevereiro/2025",
    "março/2025",
    "abril/2025",
    "maio/2025",
    "junho/2025",
    "julho/2025",
    "agosto/2025",
    "setembro/2025",
    "outubro/2025",
    "novembro/2025",
    "dezembro/2025",
  ];
  const dataAtual = new Date();
  console.log(dataAtual.getMonth());
  console.log(dataAtual.getFullYear());
}

function ObterRelatorio(valorInvestido,TaxaPorMes,meses,gastos,valorDesejado,valorMensal) {
  const saldoInvestido = simularInvestimento(valorDeInicio,TaxaPorMes,meses);
  const totalDespesas = AdministrarGastos(gastos);
  const mesRecente = ObterMesRecente();
  
  console.log("   RELATORIO DAS FINANÇAS   ");
  console.log(`MES:${mesRecente}`);
  console.log(`saldo final investido:${valorMensal}`);
}

console.log(simularInvestimento(valorInvestido,taxaPorMes,meses,gastos))
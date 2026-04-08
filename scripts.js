const converteButton = document.querySelector("#converte-button");

const currencySelector = document.querySelector(".currency-select")

function converter() {
  const valorIput = document.querySelector("#number-input2").value;
  const currencyToConvert = document.querySelector(".currency-to-convert");
  const currencyConverted = document.querySelector(".currency-converted");
      const valorDolar = 5.15;
      const valorEuro = 5.98;
      const valorLibra = 6.98;
  
  //const  valueConvertEuro = valorIput / valorEuro;   meue erro ao tenta 

  if(currencySelector.value =="dolar"){
     currencyConverted.innerHTML = new Intl.NumberFormat('en-US', {
       style: 'currency', 
       currency: 'USD' }).format(valorIput / valorDolar); // VALOR CONVERTIDO PARA DOLAR


  }
    if(currencySelector.value == "euro"){
         currencyConverted.innerHTML = new Intl.NumberFormat('en-US', {
       style: 'currency', 
       currency: 'EUR' }).format(valorIput / valorEuro); // VALOR CONVERTIDO PARA EURO

    }
   if(currencySelector.value == "libra"){
         currencyConverted.innerHTML = new Intl.NumberFormat('en-US', {
       style: 'currency', 
       currency: 'GBP' }).format(valorIput / valorLibra); // VALOR CONVERTIDO PARA LIBRA

    }

 


  currencyToConvert.innerHTML = new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL' }).format(valorIput); // VALOR DIGITADO NO INPUT

     
 
}
function changeCurrency()
{
  const currencyName = document.getElementById("currency-p")
  const currencyImage = document.getElementById("currency-image")

  if(currencySelector.value =="dolar"){
    currencyName.innerHTML = "Dolar amereicano"
    currencyImage.src = "./assets/estados-unidos (1) 1.png"

  }

  if(currencySelector.value =="euro"){
  currencyName.innerHTML = "Euro europeu"
 currencyImage.src = "./assets/Euro-currency.png"
     
  }
    if(currencySelector.value =="libra"){
  currencyName.innerHTML = "Libra esterlina"
 currencyImage.src = "./assets/currency-libra.png"
     
  }
  converter()
}




currencySelector.addEventListener("change", changeCurrency);
converteButton.addEventListener("click", converter);

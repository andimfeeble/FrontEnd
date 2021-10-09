function imprimaQuadradoAsterisco(n) {
  for (var coluna = 0; coluna < n; coluna++){
      var linhaDeAsteriscos = ''
      for (var linha = 0; linha < n; linha++) {
          linhaDeAsteriscos = linhaDeAsteriscos + '*'
      }
      console.log(linhaDeAsteriscos)
  }
}
imprimaQuadradoAsterisco()

function buscaNumerosPrimos(num) {
  var numerosPrimos = [2, 3]
  for (var numeroAtual = 4; numeroAtual <= num; numeroAtual++) {
    var quantidadeDeDivisores = 0
    for(var numeroMenor = 2; numeroMenor < numeroAtual; numeroMenor++) {
      if (numeroAtual % numeroMenor == 0) {
        quantidadeDeDivisores ++
      }
    }
    if (quantidadeDeDivisores == 0) {
      numerosPrimos.push(numeroAtual);
    }
  }
  console.log(numerosPrimos);
}
buscaNumerosPrimos()

function verificaPalindromo(palavra) {
  normal = ''
  invert = ''
  for (var indice = 0; indice < palavra.length; indice++) {
    normal += palavra[indice]
  }
  for (var indice = palavra.length - 1; indice >= 0; indice--) {
    invert += palavra[indice]
  }
  if (normal == invert) {
    console.log('Esta palavra é um Palindromo!')
    console.log(normal)
    console.log(invert)
  }
  else {
    console.log('Esta palavra não é Palindromo')
    console.log(normal)
    console.log(invert)
  }
}
verificaPalindromo('')
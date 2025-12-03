/* Relação consumo Etanol x Gasolina x Diesel

ETANOL X GASOLINA
Distância / Rendimento: 30% menor
Consumo em litros: 30% maior

DIESEL X GASOLINA
Distância / Rendimento: ~15% maior
Consumo em litros: ~15% menor

*/
let horas, consumoMedio, consumoTotal, velocidadeMedia, distancia, precoGasolina, precoEtanol, tipoCombustivel

horas = 13
velocidadeMedia = 110
consumoMedio = 14
precoEtanol = 3.899
precoGasolina = 5.899
tipoCombustivel = 0 // Se for 0= Etanol. Se for 1= Gasolina

distancia = horas * velocidadeMedia
console.log(`A distância total de viagem será de ${distancia} km`)

consumoTotal = distancia / consumoMedio
console.log(`O consumo total em litros será de ${consumoTotal.toLocaleString('pt-BR')} litros`)

console.log(`O custo para abastecer com gasolina será de ${ (consumoTotal * precoGasolina).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'} )}`)
console.log(`O custo para abastecer com etanol será de ${ (consumoTotal * precoEtanol).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'} )}`)
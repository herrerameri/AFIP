
function fromDecimalToString(decimalImporte, intCant, decimalCant){  
  var strSeparated = decimalImporte.toString().split('.');
  var intPart = pad(repeatChar('0', intCant), strSeparated[0], intCant);
  var decimalPart = repeatChar('0', decimalCant);
  if(strSeparated.length > 1)
    decimalPart = pad(repeatChar('0', decimalCant), strSeparated[1]);
  return intPart + decimalPart;
}
function fromStringToDate(stringDate){
  var anio = parseInt(stringDate.split('/')[2]);
  var mes = parseInt(stringDate.split('/')[1]);
  var dia = parseInt(stringDate.split('/')[0]);
  if(anio < 100) anio = '20' + anio;
  if(mes < 10) mes = '0' + mes;
  if(dia < 10) dia = '0' + dia;
  return anio + '' + mes + '' + dia; 
}

function fromIntToDate(intDate) {
  const secondsInDay = 24 * 60 * 60;
  const excelEpoch = new Date(1899, 11, 31);
  const excelEpochAsUnixTimestamp = excelEpoch.getTime();
  const missingLeapYearDay = secondsInDay * 1000;
  const delta = excelEpochAsUnixTimestamp - missingLeapYearDay;
  const excelTimestampAsUnixTimestamp = intDate * secondsInDay * 1000;
  const parsed = excelTimestampAsUnixTimestamp + delta;
  var date = new Date(parsed);
  var anio = date.getFullYear();
  var mes = parseInt(date.getMonth()) +1;
  var dia = parseInt(date.getDate());
  if(mes < 10) mes = '0' + mes;
  if(dia < 10) dia = '0' + dia;
  return anio + '' + mes + '' + dia;
};
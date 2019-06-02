const LONG_PERIODOS_PAGO  = 6;
const CHAR_PERIODOS_PAGO = '0';
const LONG_PERIODOS_DDJJ  = 6;
const CHAR_PERIODOS_DDJJ = '0';

class Periodos {
  constructor(row){
    this.Pago = this.getPago(row);
    this.DDJJ = this.getDDJJ(row); 
  }

  getPago(row){
    var periodoPago = row.periodos.pago; 
    if(!periodoPago)
      periodoPago = row.periodos.ddjj;
    return pad(repeatChar(CHAR_PERIODOS_PAGO, LONG_PERIODOS_PAGO), periodoPago, LONG_PERIODOS_PAGO);
  }

  getDDJJ(row){
    var periodoDDJJ = row.periodos.ddjj; 
    if(!periodoDDJJ)
      periodoDDJJ = row.periodos.pago;
    return pad(repeatChar(CHAR_PERIODOS_DDJJ, LONG_PERIODOS_DDJJ), periodoDDJJ, LONG_PERIODOS_DDJJ);
  }
}
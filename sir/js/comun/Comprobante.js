const LONG_COMPROBANTE_TIPO = 3;
const CHAR_COMPROBANTE_TIPO = '0';
const LONG_COMPROBANTE_PUNTOVENTA = 5;
const CHAR_COMPROBANTE_PUNTOVENTA = '0';
const LONG_COMPROBANTE_NUMERO = 8;
const CHAR_COMPROBANTE_NUMERO = '0';

class Comprobante {
  constructor(row){
    this.Tipo = this.getTipoComprobante(row);
    this.PuntoVenta = this.getPuntoVenta(row);
    this.Numero = this.getNumeroComprobante(row);
    this.Fecha = this.getFechaComprobante(row);
  }
  
  getTipoComprobante(row){
    return pad(repeatChar(CHAR_COMPROBANTE_TIPO, LONG_COMPROBANTE_TIPO),
            row.comprobante.tipo, 
            LONG_COMPROBANTE_TIPO);
  }

  getPuntoVenta(row){
    var puntoVenta = row.comprobante.puntoVenta;
    if(!puntoVenta)
      puntoVenta = row.comprobante.puntoVentaNumero.substring(0, 4);
    
    return pad(repeatChar(CHAR_COMPROBANTE_PUNTOVENTA, LONG_COMPROBANTE_PUNTOVENTA),
                puntoVenta, LONG_COMPROBANTE_PUNTOVENTA);    
  }

  getNumeroComprobante(row){
    var numero = row.comprobante.numero;
    if(!numero)
      numero = row.comprobante.puntoVentaNumero.substring(4, row.comprobante.puntoVentaNumero.length);
    
    return pad(repeatChar(CHAR_COMPROBANTE_NUMERO, LONG_COMPROBANTE_NUMERO),
                numero, LONG_COMPROBANTE_NUMERO);    
  }

  getFechaComprobante(row){
    var intRow = parseInt(row.comprobante.fecha);
    if(intRow)
      return fromIntToDate(intRow);
    return fromStringToDate(row.comprobante.fecha);
  }
}
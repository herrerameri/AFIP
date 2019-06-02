const LONG_COMPROBANTEVENTA_TIPO = 3;
const CHAR_COMPROBANTEVENTA_TIPO = '0';
const LONG_COMPROBANTEVENTA_PUNTOVENTA = 5;
const CHAR_COMPROBANTEVENTA_PUNTOVENTA = '0';
const LONG_COMPROBANTEVENTA_NUMERO = 8;
const CHAR_COMPROBANTEVENTA_NUMERO = '0';

class ComprobanteVenta {
  constructor(row){
    this.Tipo = this.getTipoComprobante(row);
    this.PuntoVenta = this.getPuntoVenta(row);
    this.Numero = this.getNumeroComprobante(row);
    this.Fecha = this.getFechaComprobante(row);
  }
  
  getTipoComprobante(row){
    return pad(repeatChar(CHAR_COMPROBANTEVENTA_TIPO, LONG_COMPROBANTEVENTA_TIPO),
            row.comprobante.tipo, 
            LONG_COMPROBANTEVENTA_TIPO);
  }

  getPuntoVenta(row){
    var puntoVenta = row.comprobante.puntoVenta;
    if(!puntoVenta)
      puntoVenta = row.comprobante.puntoVentaNumero.substring(0, 4);
    
    return pad(repeatChar(CHAR_COMPROBANTEVENTA_PUNTOVENTA, LONG_COMPROBANTEVENTA_PUNTOVENTA),
                puntoVenta, LONG_COMPROBANTEVENTA_PUNTOVENTA);    
  }

  getNumeroComprobante(row){
    var numero = row.comprobante.numero;
    if(!numero)
      numero = row.comprobante.puntoVentaNumero.substring(4, row.comprobante.puntoVentaNumero.length);
    
    return pad(repeatChar(CHAR_COMPROBANTEVENTA_NUMERO, LONG_COMPROBANTEVENTA_NUMERO),
                numero, LONG_COMPROBANTEVENTA_NUMERO);    
  }

  getFechaComprobante(row){
    var isString = row.comprobante.fecha.includes('/');
    if(!isString)
      return fromIntToDate(intRow);
    return fromStringToDate(row.comprobante.fecha);
  }
}
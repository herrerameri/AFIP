const LONG_COMPROBANTECOMPRA_TIPO = 3;
const CHAR_COMPROBANTECOMPRA_TIPO = '0';
const LONG_COMPROBANTECOMPRA_PUNTOVENTA = 5;
const CHAR_COMPROBANTECOMPRA_PUNTOVENTA = '0';
const LONG_COMPROBANTECOMPRA_NUMERO = 16;
const CHAR_COMPROBANTECOMPRA_NUMERO = '0';

class ComprobanteCompra {
  constructor(row){
    this.Tipo = this.getTipoComprobante(row);
    this.PuntoVenta = this.getPuntoVenta(row);
    this.Numero = this.getNumeroComprobante(row);
    this.Fecha = this.getFechaComprobante(row);
  }
  
  getTipoComprobante(row){
    return pad(repeatChar(CHAR_COMPROBANTECOMPRA_TIPO, LONG_COMPROBANTECOMPRA_TIPO),
            row.comprobante.tipo, 
            LONG_COMPROBANTECOMPRA_TIPO);
  }

  getPuntoVenta(row){
    var puntoVenta = row.comprobante.puntoVenta;
    if(!puntoVenta)
      puntoVenta = row.comprobante.puntoVentaNumero.substring(0, 4);
    
    return pad(repeatChar(CHAR_COMPROBANTECOMPRA_PUNTOVENTA, LONG_COMPROBANTECOMPRA_PUNTOVENTA),
                puntoVenta, LONG_COMPROBANTECOMPRA_PUNTOVENTA);    
  }

  getNumeroComprobante(row){
    var numero = row.comprobante.numero;
    if(!numero)
      numero = row.comprobante.puntoVentaNumero.substring(4, row.comprobante.puntoVentaNumero.length);
    
    return pad(repeatChar(CHAR_COMPROBANTECOMPRA_NUMERO, LONG_COMPROBANTECOMPRA_NUMERO),
                numero, LONG_COMPROBANTECOMPRA_NUMERO);    
  }

  getFechaComprobante(row){
    var isString = row.comprobante.fecha.includes('/');
    if(!isString)
      return fromIntToDate(intRow);
    return fromStringToDate(row.comprobante.fecha);
  }
}
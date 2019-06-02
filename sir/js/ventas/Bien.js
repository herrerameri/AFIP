const LONG_BIEN_CODIGO  = 50;
const CHAR_BIEN_CODIGO = '0';
const LONG_BIEN_CANTIDAD  = 8;
const CHAR_BIEN_CANTIDAD = '0';

class Bien {
  constructor(row){
    this.Codigo = this.getCodigoBien(row, 50);
    this.Cantidad = this.getCantidad(row, 8);    
  }

  getCodigoBien(row){
    return pad(repeatChar(CHAR_BIEN_CODIGO, LONG_BIEN_CODIGO), row.bien.codigo, LONG_BIEN_CODIGO)
  }

  getCantidad(row){
    return pad(repeatChar(CHAR_BIEN_CANTIDAD, LONG_BIEN_CANTIDAD), row.bien.cantidad, LONG_BIEN_CANTIDAD)
  }
}
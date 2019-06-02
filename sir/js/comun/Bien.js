const LONG_BIEN_CODIGO  = 50;
const CHAR_BIEN_CODIGO = '0';
const LONG_BIEN_CANTIDAD  = 8;
const CHAR_BIEN_CANTIDAD = '0';
const LONG_BIEN_DESCRIPCION  = 40;
const CHAR_BIEN_DESCRIPCION = ' ';

class Bien {
  constructor(row){
    this.Codigo = this.getCodigoBien(row);
    this.Cantidad = this.getCantidad(row); 
    this.Descripcion = this.getDescripcion(row); 
  }

  getCodigoBien(row){
    return pad(repeatChar(CHAR_BIEN_CODIGO, LONG_BIEN_CODIGO), row.bien.codigo, LONG_BIEN_CODIGO)
  }

  getCantidad(row){
    return pad(repeatChar(CHAR_BIEN_CANTIDAD, LONG_BIEN_CANTIDAD), row.bien.cantidad, LONG_BIEN_CANTIDAD)
  }

  getDescripcion(row){
    return pad(repeatChar(CHAR_BIEN_DESCRIPCION, LONG_BIEN_DESCRIPCION), row.bien.descripcion, LONG_BIEN_DESCRIPCION)
  }
}
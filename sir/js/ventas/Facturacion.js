
const PROPORCION_DEFAULT = '000';
const LONG_FACTURACION_PROPORCION = 3;

class Facturacion {
  constructor(row){
    this.Parcial = this.getFacturacionParcial(row);
    this.Proporcion = this.getProporcion(row);
  }
  getFacturacionParcial(row){
    return row.facturacion.parcial;
  }
  getProporcion(row){
    return row.facturacion.proporcion ? 
          pad(PROPORCION_DEFAULT, row.facturacion.proporcion, LONG_FACTURACION_PROPORCION) :
          PROPORCION_DEFAULT;
  }
}
class Venta {
  constructor(row){
    this.Comprobante = new ComprobanteVenta(row);
    this.Cuit = this.getCuit(row, 11);
    this.Importes = new Importes(row);
    this.Facturacion = new Facturacion(row);
    this.Bien = new Bien(row);
  }  	

  getCuit(row){
    return removeChar(row.cuit, '-');
  }

  toString(){
      return this.Comprobante.Tipo + this.Comprobante.PuntoVenta + 
             this.Comprobante.Numero + this.Comprobante.Fecha + this.Cuit + 
             this.Importes.Neto + this.Importes.IvaFacturado + this.Importes.Iva105 +
             this.Facturacion.Parcial + this.Facturacion.Proporcion +
             this.Bien.Codigo + this.Bien.Cantidad;
  }
}


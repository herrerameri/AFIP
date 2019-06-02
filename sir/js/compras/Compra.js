class Compra {
  constructor(row){
    this.Comprobante = new ComprobanteCompra(row);
    this.Cuit = this.getCuit(row);
    this.Importes = new Importes(row);
    this.Retencion = new Retencion(row);
    this.Bien = new Bien(row);
    this.Periodos = new Periodos(row);
    this.TipoAfectacion = this.getTipoAfectacion(row);
  }  	

  getCuit(row){
    return removeChar(row.cuit, '-');
  }

  getTipoAfectacion(row){
    return row.tipoAfectacion;
  }

  toString(){
      return this.Comprobante.Tipo + this.Comprobante.Fecha + this.Comprobante.PuntoVenta + 
             this.Comprobante.Numero + this.Cuit + this.Bien.Descripcion + 
             this.Importes.Neto + this.Importes.IvaFacturado + this.Importes.Iva105 +
             this.Retencion.Monto + this.Retencion.Motivo +
             this.Periodos.Pago + this.Periodos.DDJJ + this.TipoAfectacion;
  }
}


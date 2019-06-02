class Importes {
  constructor(row){
    this.Neto = this.getImporteNeto(row);
    this.IvaFacturado = this.getIvaFacturado(row);
    this.Iva105 = this.getIva105(row);
  }

  getImporteNeto(row){
    return fromDecimalToString(row.importes.neto, 13, 2);
  }

  getIvaFacturado(row){
    var ivaFacturado = row.importes.ivaFacturado; 
    if(!ivaFacturado)
      ivaFacturado = row.importes.iva105;

    return fromDecimalToString(ivaFacturado, 13, 2);
  }

  getIva105(row){
    var iva105 = row.importes.iva105; 
    if(!iva105)
      iva105 = row.importes.ivaFacturado;

    return fromDecimalToString(iva105, 13, 2);
  }
}
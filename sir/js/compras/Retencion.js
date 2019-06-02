
const MOTIVO_DEFAULT = '00';
const MONTO_DEFAULT = '000000000000000';

class Retencion {
  constructor(row){
    this.Monto = this.getMonto(row);
    this.Motivo = this.getMotivo(row);
  }
  getMonto(row){
    if(!row.retencion)
      return MONTO_DEFAULT;
    
      return row.retencion.monto ? 
          fromDecimalToString(row.retencion.monto, 13, 2) :
          MONTO_DEFAULT;
  }
  getMotivo(row){
    if(!row.retencion)
      return MOTIVO_DEFAULT;
    return row.retencion.motivo ? 
          pad(MOTIVO_DEFAULT, row.retencion.motivo, LONG_RETENCION_MOTIVO) :
          MOTIVO_DEFAULT;
  }
}
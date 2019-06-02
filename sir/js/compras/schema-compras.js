const schemaCompras = {
  'COMPROBANTE':{
    prop: 'comprobante',
    required: true,
    type: {
      'Tipo': {
        prop: 'tipo',
        type: String,
        required: true
      },
      'Punto venta': {
        prop: 'puntoVenta',
        type: String
      },
      'Número': {
        prop: 'numero',
        type: String
      },
      'Punto venta y número': {
        prop: 'puntoVentaNumero',
        type: String
      },
      'Fecha': {
        prop: 'fecha',
        type: String,
        required: true
      }
    }
  },
  'CUIT':{
    prop: 'cuit',
    type: String,
    required: true
  },
  'Tipo Afectación':{
    prop: 'tipoAfectacion',
    type: String,
    required: true
  },
  'IMPORTE':{
    prop: 'importes',
    required: true,
    type: {
      'Neto':{
        prop: 'neto',
        type: String,
        required: true
      },
      'Iva facturado':{
        prop: 'ivaFacturado',
        type: String
      },
      'Iva 10,5':{
        prop: 'iva105',
        type: String
      }
    }
  },  
  'RETENCION':{
    prop: 'retencion',
    required: true,
    type: {
      'Monto retención':{
        prop: 'monto',
        type: String,
      },
      'Motivo retención':{
        prop: 'motivo',
        type: String,
      }
    }
  },
  'BIEN': {
    prop: 'bien',
    required: true,
    type: {
      'Descripción bien':{
        prop: 'descripcion',
        type: String,
        required: true
      }
    }
  },
  'PERIODOS':{
    prop: 'periodos',
    required: true,
    type: {
      'Periodo Pago':{
        prop: 'pago',
        type: String
      },
      'Periodo DDJJ':{
        prop: 'ddjj',
        type: String
      }
    }
  },  
}

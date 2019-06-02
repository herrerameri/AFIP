const schemaVentas = {
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
  'FACTURACION':{
    prop: 'facturacion',
    type: {
      'Parcial': {
        prop: 'parcial',
        type: String,
        required: true
      },
      'Proporción':{
        prop: 'proporcion',
        type: String,
        
      }
    }
  },
  'BIEN': {
    prop: 'bien',
    required: true,
    type: {
      'Código del bien':{
        prop: 'codigo',
        type: String,
        required: true
      },
      'Cantidad':{
        prop: 'cantidad',
        type: String,
        required: true
      },
    }
  }
}

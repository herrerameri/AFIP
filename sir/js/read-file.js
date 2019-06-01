(function () {
  'use strict';     

  const procesarCompras = document.getElementById('procesar-compras');
  const procesarVentas = document.getElementById('procesar-ventas');

  function inputValidas(archivo, nroHoja){
    return archivo.files.length > 0 && parseInt(nroHoja); 
  }

  function limpiarError(campoError){
    campoError.innerHTML = '';
  }

  function mostrarError(campoError, texto){
    campoError.innerHTML = texto;
  }

  procesarCompras.addEventListener('click', () => { 
      const archivoCompras = document.getElementById('xls-compras');
      const hojaCompras = document.getElementById('xls-compras-hoja').value;
      const errorCompras = document.getElementById('error-compras');
      limpiarError(errorCompras);

      if(inputValidas(archivoCompras, hojaCompras)){     
        readXlsxFile(archivoCompras.files[0], { sheet: parseInt(hojaCompras) }).then((rows) => {
              console.log(rows)
          })
          return;
      }
      mostrarError(errorCompras, 'Se necesita un archivo y número de hoja.')      
  });

  procesarVentas.addEventListener('click', () => {  
      const archivoVentas = document.getElementById('xls-ventas');
      const hojaVentas = document.getElementById('xls-ventas-hoja').value;
      const errorVentas = document.getElementById('error-ventas');   
      limpiarError(errorVentas);

      if(inputValidas(archivoVentas, hojaVentas)){
        readXlsxFile(archivoVentas.files[0], { sheet: parseInt(hojaVentas) }).then((rows) => {
            console.log(rows)
        })
        return;
      }
      mostrarError(errorVentas, 'Se necesita un archivo y número de hoja.')      
  });

})();
# AFIP
Proyecto para generación de archivos de carga masiva solicitados por distintos módulos de AFIP Argentina.

## Requerimientos
- `NodeJS > v8.9.0`
- `git clone https://github.com/herrerameri/AFIP.git`

## SIR - Sistema integral de recupero
Esta herramienta permite transformar los datos de un `xlsx` o `xls` en un archivo `txt` con el formato compatible para ser importado en la página de SIR de AFIP.

![captura tool](/sir/images/screenshot.png)

### Columnas que debe tener el archivo de entrada
VENTA - cabecera exacta que se espera encontrar en el archivo
Tipo	Punto Venta	Número	Fecha	CUIT	Neto	Iva 10,5	Parcial	Código del bien	Cantidad

COMPRA - cabecera exacta que se espera encontrar en el archivo
Tipo	Fecha	Punto venta	Número	CUIT	PROVEEDOR	Descripción bien	Neto	Iva facturado	Iva 10,5	Periodo DDJJ			

### Cómo utilizar esta herramienta
Pasos: 

1. Una vez hecho el `git clone` indicado en los requerimientos
2. Dentro de la carpeta AFIP que ha sido clonada abrir una terminal y correr: `node sir/app.js`
3. Abrir el navegador en `http://localhost:3005`
4. Subir el archivo e indicar la hoja a procesar

### Importante
El fichero una vez subido, no puede estar abierto.
Si se editó, refrescar la página para volver a subirlo.
Tiene que tener 1 fila última con algún contenido porque la última fila se omite.

### Cosas que pasan
- La fecha tiene que estar en formato correcto, yo uso TEXT(CELDA, "dd/MM/yyyy") y copio y pego valores
- No debe haber fórmulas (copiar valor)
- Si son NC, quitar signo
- Si son NC, período pago va como 000000 (yyyyMM) -> sólo pago, ddjj sí se completa
- A veces manda vacío el cod de bien, y es porque es una NC del de arriba, copiarlo
- En COMPRAS :
	- Importe IVA suele ser Iva Facturado
	- IVA DEST es Iva Destinado, en el sistema se llama 10,5 pero no es real, porque en la afip es IVA DESTINADO 
	- Ver períodos, informa 1 pero el sistema pone los 2 iguales
	- Monto retención y motivo nunca me los manda, el sistema pone defaults
	- Suele incluir una columna de IVA Remanente pero no la uso p esto
	- Tipo afectación = D
- Suele haber comprobantes duplicados y el sistema se queja
- Si da error porque no encuentra un artículo para una fecha, es porque estoy en Taboga y no es Taboga Hnos

### En AFIP
Entrar al SIR
Representando a Taboga Hnos Saci
F8144
Subir mes a mes la presentación

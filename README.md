# AFIP
Proyecto para generación de archivos de carga masiva solicitados por distintos módulos de AFIP Argentina.

## Requerimientos
- `NodeJS > v8.9.0`
- `git clone https://github.com/herrerameri/AFIP.git`

## SIR - Sistema integral de recupero
Esta herramienta permite transformar los datos de un `xlsx` o `xls` en un archivo `txt` con el formato compatible para ser importado en la página de SIR de AFIP.

![captura tool](/sir/images/screenshot.png)

### Columnas que debe tener el archivo de entrada
TBD

### Cómo utilizar esta herramienta
Pasos: 

1. Una vez hecho el `git clone` indicado en los requerimientos
2. Dentro de la carpeta AFIP que ha sido clonada abrir una terminal y correr: `node sir/app.js`
3. Abrir el navegador en `http://localhost:3005`
4. Subir el archivo e indicar la hoja a procesar


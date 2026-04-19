/* Estilos generales de la pagina */
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* Encabezado */
header {
  background-color: #2c2c7a;
  color: #fbbf24;
  text-align: center;
  padding: 20px;
  margin-bottom: 30px;
}

header p {
  color: white;
  margin: 0;
}

/* Caja del formulario */
.formulario {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #cccccc;
}

.formulario h2 {
  color: #2c2c7a;
  margin-bottom: 15px;
}

/* Etiquetas del formulario */
.formulario label {
  display: block;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 4px;
  color: #444444;
}

/* Campos de texto */
.formulario input,
.formulario textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 14px;
}

/* Boton guardar */
.formulario button {
  width: 100%;
  margin-top: 15px;
  padding: 10px;
  background-color: #2c2c7a;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.formulario button:hover {
  background-color: #1a1a5e;
}

/* Mensaje de error */
#mensajeError {
  color: red;
  font-size: 13px;
  margin-top: 8px;
  min-height: 18px;
}

/* Titulo de la seccion de tarjetas */
h2 {
  color: #2c2c7a;
  margin-bottom: 15px;
}

/* Mensaje cuando no hay productos */
#mensajeVacio {
  color: #888888;
  font-size: 15px;
  padding: 20px 0;
}

/* Tarjeta de producto */
.tarjeta {
  background-color: white;
  border: 1px solid #cccccc;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
}

.tarjeta img {
  width: 100%;
  height: 170px;
  object-fit: cover;
}

.tarjeta-cuerpo {
  padding: 12px;
}

.tarjeta-cuerpo h3 {
  margin: 0 0 6px 0;
  font-size: 16px;
  color: #222222;
}

.tarjeta-cuerpo p {
  font-size: 14px;
  color: #666666;
  margin: 0 0 10px 0;
}

/* Precio final */
.precio-final {
  font-size: 18px;
  font-weight: bold;
  color: #222222;
}

/* Precio original tachado cuando hay descuento */
.precio-original {
  font-size: 13px;
  color: #999999;
  text-decoration: line-through;
  margin-left: 6px;
}

/* Etiqueta de descuento */
.etiqueta-descuento {
  background-color: #d1fae5;
  color: #15803d;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 20px;
  margin-left: 6px;
}

/* Boton eliminar */
.boton-eliminar {
  display: block;
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  background-color: white;
  color: #e53e3e;
  border: 1px solid #e53e3e;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.boton-eliminar:hover {
  background-color: #e53e3e;
  color: white;
}

/* Pie de pagina */
footer {
  background-color: #2c2c7a;
  color: white;
  text-align: center;
  padding: 15px;
  margin-top: 40px;
}

/*
* Ejercicio #1: Calcular el área de un rectángulo
* Escribe una función que reciba la longitud y el ancho de un rectángulo y devuelva su área.
* La funcion no debe devolver un console.log() sino retornar un valor, llamaremos a la funcion dentro de un console.log().
* La idea de esto es comprender que algunas funciones retornan un valor y otras simplemente hacen otras cosas, como
* imprimir un mensaje por consola. Las que retornan algo, deberán incluir la palabra clave return .
* Longitud = ancho x alto
* console.log(calcularAreaRectangulo(5, 3)); // Resultado: 15
*/

function calcularAreaRectangulo(longitud, ancho) {
  return longitud * ancho;
}

console.log(calcularAreaRectangulo(5, 3));


/*
* Ejercicio #2: Contar palabras en una cadena
* Escribe una función que reciba una cadena de texto (string) y devuelva la cantidad de palabras en la cadena.
* console.log(contarPalabras("Humahuaca es un lugar copado")); // Resultado: 5
*/

function contarPalabras(cadena) {
  const cadenaLimpia = cadena.trim();
  if (cadenaLimpia === "") return 0;
  const palabras = cadenaLimpia.split(/\s+/);
  return palabras.length;
}

console.log(contarPalabras("Humahuaca es un lugar copado"));
console.log(contarPalabras("Humahuaca  es     un  lugar copado"));


/*
* Ejercicio #3: Contar vocales en una cadena
* Escribe una función que reciba una cadena y cuente el número de vocales.
* console.log(contarVocales("JavaScript")); // Resultado: 3
*/

function contarVocales(cadena) {
  const vocales = cadena
    .toLowerCase()
    .match(/[aeiouáéíóú]/g);
  return vocales ? vocales.length : 0;
}

console.log(contarVocales("JavaScript"));
console.log(contarVocales("Matías"));


/*
* Ejercicio #4: Encontrar el palíndromo 
* Escribe una función que reciba un string y devuelva true o false si el string es un palíndromo.
* Ejemplos, neuquen, reconocer, rallar
* console.log(esPalindromo("neuquen")); // true
*/

function esPalindromo(cadena) {
  const cadenaSinEspacios = cadena
    .toLowerCase()
    .replace(/\s/g, '');

  const cadenaInvertida = cadenaSinEspacios
    .split('')
    .reverse()
    .join('');

  return cadenaSinEspacios === cadenaInvertida;
}

// Ejemplos:
console.log(esPalindromo("neuquen")); // true
console.log(esPalindromo("Reconocer")); // true
console.log(esPalindromo("Matías")); // false
console.log(esPalindromo("Luz aZul")); // true

/*
* Ejercicio #5. Crear un programa para convertir la edad de un perro a años humanos
* Escribe una función que tome un valor de un usuario, utilizando una ventana emergente prompt y calcule la edad canina,
* que equivale a 7 veces la edad humana.
* Esta funcion no debe devolver un valor sino mostrar por consola un mensaje como el del ejemplo.
* edadCanina(7); // Tu perro tiene 49 años humanos
*/

function edadCanina() {
  const edad = prompt("Ingresa la edad de tu perro:");
  console.log(`Tu perro tiene ${edad * 7} años humanos`);
}

// Ejemplo:
edadCanina();

/*
* Ejercicio #6. Convertir la primera letra de cada palabra en mayúscula
* Escribe una función que reciba una cadena y convierta la primera letra de cada palabra en mayúscula.
* console.log(capitalizarPalabras("hola mundo desde javascript")); // Resultado: "Hola Mundo Desde Javascrip
*/

function capitalizarPalabras(cadena) {
  const palabras = cadena.split(' ');
  const palabrasCapitalizadas = palabras.map(palabra => {
    if (palabra.length === 0) {
      return '';
    }
    return palabra
      .charAt(0)
      .toUpperCase() + palabra
        .slice(1)
        .toLowerCase();
  });
  return palabrasCapitalizadas.join(' ');
}

console.log(capitalizarPalabras("hola mundo desde javascript")); // Resultado: "Hola Mundo Desde Javascript"


/*
* Ejercicio #7. Generar los primeros N números de la sucesión de Fibonacci
* Escribe una función que tome un número n y devuelva los primeros n números de la sucesión de Fibonacci.
* console.log(fibonacci(5)); // Resultado: [0, 1, 1, 2, 3]
*/

/**
 * Genera un array con los primeros N números de la sucesión de Fibonacci.
 * @param {number} n - La cantidad de números de Fibonacci a generar.
 * @returns {number[]} Un array con los primeros n números.
 */
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const sucesion = [0, 1];
  for (let i = 2; i < n; i++) {
    const proximoNumero = sucesion[i - 1] + sucesion[i - 2];
    sucesion.push(proximoNumero);
  }
  return sucesion;
}

console.log(fibonacci(5)); // Resultado: [0, 1, 1, 2, 3]

/*
* Ejercicio #8. Lista de Productos
*/
const productos = [
{ id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
{ id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
{ id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
{ id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
{ id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];

// 1. Usando forEach: Mostrar en consola cada producto con su nombre y precio
productos.forEach(producto => {
  console.log(`${producto.nombre} - $${producto.precio}`);
});

// 2. Usando map: Crear un array con solo los nombres de los productos
const nombresProductos = productos.map(producto => producto.nombre);
console.log(nombresProductos);

// 3. Usando filter: Obtener productos electrónicos con stock mayor a 20
const productosFiltrados = productos.filter(producto => {
  return producto.categoria === 'electrónica' && producto.stock > 20;
});
console.log(productosFiltrados);

// 4. Usando find: Encontrar el producto con id 3
const productoEncontrado = productos.find(producto => producto.id === 3);
console.log(productoEncontrado)

// 5. Usando reduce: Calcular el valor total del inventario (precio * stock)
const valorTotalInventario = productos.reduce((acumulador, producto) => {
  const valorProducto = producto.precio * producto.stock;
  return acumulador + valorProducto;
}, 0);
console.log(`Valor Total del Inventario: $${valorTotalInventario}`);

/*
* Ejercicio #9. Estudiantes y calificaciones
*/
const estudiantes = [
{ id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
{ id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
{ id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
{ id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];

const calcularPromedio = (calificaciones) => {
  if (calificaciones.length === 0) return 0;
  const suma = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
  return suma / calificaciones.length;
};

// 1. Usando forEach: Mostrar nombre y edad de cada estudiante
estudiantes.forEach(estudiante => {
  console.log(`${estudiante.nombre} - ${estudiante.edad} años`);
});

// 2. Usando map: Crear array de objetos con nombre y promedio de calificaciones
const promediosEstudiantes = estudiantes.map(estudiante => ({
  nombre: estudiante.nombre,
  promedio: calcularPromedio(estudiante.calificaciones)
}));
console.log(promediosEstudiantes);


// 3. Usando filter: Obtener estudiantes con promedio mayor a 7.5
const estudiantesAltoRendimiento = estudiantes.filter(estudiante => {
  return calcularPromedio(estudiante.calificaciones) > 7.5;
});
console.log(estudiantesAltoRendimiento);

// 4. Usando find: Encontrar estudiante llamado 'María'
const maria = estudiantes.find(estudiante => estudiante.nombre === 'María');
console.log(maria);

// 5. Usando reduce: Calcular la edad promedio de los estudiantes
const sumaEdades = estudiantes.reduce((acumulador, estudiante) => {
  return acumulador + estudiante.edad;
}, 0);
const edadPromedio = sumaEdades / estudiantes.length;
console.log(`Edad Promedio de estudiantes: ${edadPromedio.toFixed(2)} años`);

/*
* Ejercicio #10. Estudiantes y calificaciones
*/
const peliculas = [
{ id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
{ id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
{ id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
{ id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
{ id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];

// 1. Usando forEach: Mostrar título y año de cada película
peliculas.forEach(pelicula => console.log(`${pelicula.titulo} (${pelicula.año})`));

// 2. Usando map: Crear array de títulos en mayúsculas
const titulosMayusculas = peliculas.map(pelicula => pelicula.titulo.toUpperCase());
console.log(titulosMayusculas);

// 3. Usando filter: Obtener películas de drama con rating mayor a 8.5
const dramasPopulares = peliculas.filter(pelicula => pelicula.genero === 'drama' && pelicula.rating > 8.5);
console.log(dramasPopulares);

// 4. Usando find: Encontrar película estrenada en 2014
const pelicula2014 = peliculas.find(pelicula => pelicula.año === 2014);
console.log(pelicula2014);

// 5. Usando reduce: Calcular la duración total de todas las películas
const duracionTotal = peliculas.reduce((acumulador, pelicula) => acumulador + pelicula.duracion, 0);
console.log(`Duración Total de Películas: ${duracionTotal} minutos`);
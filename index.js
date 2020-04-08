// ================================================================
// ====           Declarando los elementos del HTML            ====
// ====             (Nada que hacer por aquí...)               ====
// ================================================================

const countriesUnorderedList = document.getElementById('countries');

const sortByPopulationButton = document.getElementById('sortByPopulation');
const sortByNameButton = document.getElementById('sortByName');

// ================================================================
// ====       TODO: Completar la función parseCountries        ====
// ====                                                        ====
// ====     La misma debe recorrer los hijos del elemento      ====
// ====    almacenado en countriesUnorderedList y retornar     ====
// ====    un arreglo de objectos con el siguiente formato     ====
// ====                                                        ====
// ====             [                                          ====
// ====               {                                        ====
// ====                 name: 'País de ejemplo',               ====
// ====                 population: 1000000,                   ====
// ====                 code: 'xx'                             ====
// ====               },                                       ====
// ====               ...                                      ====
// ====             ]                                          ====
// ====                                                        ====
// ====        Presta principal atención a que el valor        ====
// ====          almacenado en la propiedad population         ====
// ====           de cada objeto debe ser un número            ====
// ================================================================

function parseCountries() {
  let countries = [];

  // Completa aquí la lógica de la función...

  return countries;
}

// ================================================================
// ====      TODO: Completar la función displayCountries       ====
// ====                                                        ====
// ====       La misma debe utilizar el arreglo recibido       ====
// ====     para reemplazar en el HTML el orden del listado    ====
// ====                                                        ====
// ====                                                        ====
// ====        Presta principal atención a que el valor        ====
// ====       de la poblacion se muestre tal como estaba       ====
// ====  al comienzo de la ejecusión (con separador de miles)  ====
// ================================================================

function displayCountries(countries) {

  // Completa aquí la lógica de la función...

}

// ================================================================
// ====    TODO: Completar el funcionamiento de los botones    ====
// ====                                                        ====
// ====       Utilizando las funciones que desarrollaste       ====
// ====     anteriormente, los botones tienen como objetivo    ====
// ====   realizar efectivamente el ordenamiento de la lista   ====
// ================================================================

sortByPopulationButton.addEventListener('click', function () {
  let countries = parseCountries();

  // Completa aquí la lógica para ordenar por población (de mayor a menor) del arreglo countries

  displayCountries(countries);

  sortByNameButton.className = '';
  sortByPopulationButton.className = 'active';
});

sortByNameButton.addEventListener('click', function () {
  let countries = parseCountries();

  // Completa aquí la lógica para ordenar por nombre (alfabéticamente) del arreglo countries

  displayCountries(countries);

  sortByPopulationButton.className = '';
  sortByNameButton.className = 'active';
});

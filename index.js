// ================================================================
// ====           Declarando los elementos del HTML            ====
// ====             (Nada que hacer por aquí...)               ====
// ================================================================

const countriesUnorderedList = document.getElementById('countries') // lista

const sortByPopulationButton = document.getElementById('sortByPopulation') //boton
const sortByNameButton = document.getElementById('sortByName') // boton

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
  let countries = []
  let countriesName = Array.from(countriesUnorderedList.getElementsByTagName('span')) //obtengo el arreglo de spans
  let countriesPop = Array.from(countriesUnorderedList.getElementsByTagName('strong')) //obtengo el arreglo de spans
  let countriesCode = Array.from(countriesUnorderedList.getElementsByTagName('li')) //obtengo el arreglo de Li

  for (let i = 0; i < countriesName.length; i++) {
    countries.push({
      name: countriesName[i].innerText,
      population: parseInt(countriesPop[i].innerText.replace(/\./g, '')),
      code: countriesCode[i].className
    })
  }
  return countries
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
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //Expresion regular para agregar separador de miles (https://blog.abelotech.com/posts/number-currency-formatting-javascript/)
}

function displayCountries(countries) {
  countriesUnorderedList.innerHTML = '' //elimino lo que esté dentro

  // Esta funcion recibe un arreglo de objetos y debe retornar el HTML
  for (let i = 0; i < countries.length; i++) {
    const listElement = document.createElement('li')
    const spanElement = document.createElement('span')
    const strongElement = document.createElement('strong')

    listElement.classList.add(countries[i].code)
    spanElement.textContent = countries[i].name
    strongElement.textContent = formatNumber(countries[i].population)

    listElement.append(spanElement, strongElement)
    countriesUnorderedList.append(listElement)
  }
}

// ================================================================
// ====    TODO: Completar el funcionamiento de los botones    ====
// ====                                                        ====
// ====       Utilizando las funciones que desarrollaste       ====
// ====     anteriormente, los botones tienen como objetivo    ====
// ====   realizar efectivamente el ordenamiento de la lista   ====
// ================================================================

sortByPopulationButton.addEventListener('click', function () {
  let countries = parseCountries()
  // Completa aquí la lógica para ordenar por población (de mayor a menor) del arreglo countries
  countries.sort((a, b) => {
    return b.population - a.population
  })

  displayCountries(countries)

  sortByNameButton.className = ''
  sortByPopulationButton.className = 'active'
})

sortByNameButton.addEventListener('click', function () {
  let countries = parseCountries()

  // Completa aquí la lógica para ordenar por nombre (alfabéticamente) del arreglo countries
  countries.sort((a, b) => {
    return b.name > a.name ? -1 : 1
  })

  displayCountries(countries)

  sortByPopulationButton.className = ''
  sortByNameButton.className = 'active'
})

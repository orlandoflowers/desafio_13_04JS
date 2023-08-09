const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://media.bizj.us/view/img/12499454/back-of-the-house*1200xx4912-4912-1224-0.jpg",
    rooms: 5,
    m: 500,
  },
];


//constantes

const button = document.querySelector(".btn");
const container = document.querySelector(".propiedades");

const roomInput = document.querySelector(".roomsSelected");
const minMetersInput = document.getElementById("minMeters");
const maxMetersInput = document.getElementById("maxMeters");

const totalElements = document.getElementById("totalElements");

//funcion inicial que recorre todo el array
function displayAll() {
  for (let dpto of propiedadesJSON) {
    const template = `
      <div class="propiedad">
        <div
          class="img"
          style="background-image: url(${dpto.src});"
        ></div>
        <section>
          <h5>${dpto.name}</h5>
          <div class="d-flex justify-content-between">
            <p>Cuartos: ${dpto.rooms}</p>
            <p>Metros: ${dpto.m}</p>
          </div>
          <p class="my-3">${dpto.description}</p>
          <button class="btn btn-info">Ver más</button>
        </section>
      </div>`;
    container.innerHTML += template;
    totalElements.innerHTML = propiedadesJSON.length;
    console.log(dpto);
  }
}

//funcion que filtra por cuartos y metros
function displayRooms() {
  let count = 0;
  // alert si hay algun input vacio
  if (
    (roomInput.value === "") ||
    (minMetersInput.value === "") ||
    (maxMetersInput.value === "")
  ) {
    alert("Debe ingresar todos los valores");
    // se avanza si el input es mayor a 0 y si el minimo es menor al maximo
  } else if (
    parseInt(roomInput.value) > 0 &&
    parseInt(minMetersInput.value) > 0 &&
    parseInt(maxMetersInput.value) > parseInt(minMetersInput.value)
  ) {
    //se resetea a 0 el container y el contador
    container.innerHTML = "";
    totalElements.innerHTML = "";
    // loop del array siempre que los cuartos sean mayor o igual y los metros de cada vivienda sean mayores al minimo y menores al maximo
    for (let dpto of propiedadesJSON) {
      if (dpto.rooms >= roomInput.value && dpto.m >= minMetersInput.value && dpto.m <= maxMetersInput.value) {
        const template = `
          <div class="propiedad">
            <div
              class="img"
              style="background-image: url(${dpto.src});"
            ></div>
            <section>
              <h5>${dpto.name}</h5>
              <div class="d-flex justify-content-between">
                <p>Cuartos: ${dpto.rooms}</p>
                <p>Metros: ${dpto.m}</p>
              </div>
              <p class="my-3">${dpto.description}</p>
              <button class="btn btn-info">Ver más</button>
            </section>
          </div>`;
          // se agrega al array por cada repetición
        container.innerHTML += template;
        // se suma 1 al contador de los totales
        count++;
      }
      totalElements.innerHTML = count;
    }
  }
}

// evento del boton dispara la funcion principal para filtrar
button.addEventListener("click", displayRooms);

// invocando la funcion que se inicia por defecto
displayAll();

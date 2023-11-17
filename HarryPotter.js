const API_URL = 'https://wizard-world-api.herokuapp.com';

async function getHouses() {
    const respuesta = await fetch(`${API_URL}/Houses`);
    const data = await respuesta.json();
    return data;
}

async function getWizards() {
    const respuesta = await fetch(`${API_URL}/Wizards`);
    const data = await respuesta.json();
    return data;
}

async function mostrarIngredients(idElixir, id){
    var ubicacion = document.getElementById(id);
    const respuesta = await fetch(`${API_URL}/Elixirs/${idElixir}`);
    const data = await respuesta.json();

    ubicacion.innerHTML = '';
    if (data.ingredients.length !== 0){
        ubicacion.innerHTML += `<button onclick="amagarIngredients('${idElixir}', '${id}')">Amaga ingredients</button>`;
        for (const ingredient of data.ingredients){
            ubicacion.innerHTML += `<li>${ingredient.name}</li>`; 
        }
    }
    else {
        ubicacion.innerHTML += `<button onclick="amagarIngredients('${idElixir}', '${id}')">
                            Amaga ingredients</button><p>No hi ha ingredients coneguts</p>`;
    }
    

}

async function amagarIngredients(idElixir, id){
    var ubicacion = document.getElementById(id);
    ubicacion.innerHTML = '';
    ubicacion.innerHTML += `<button onclick="mostrarIngredients('${idElixir}', '${id}')">Mostra ingredients</button>`;
}

window.onload = async () => { //se esperará a q cargue el html y luego ejecutará este cacho de código

    const dataWiz = await getWizards();
    var element = document.getElementById('personatges');
    //debugger;
    var id=0;
    for (const wizard of dataWiz) {
        const newElement = document.createElement('ul');
        newElement.innerHTML = `<li><h2> ${wizard.firstName} ${wizard.lastName} </h2></li>`;
        for (const elixir of wizard.elixirs) {
            newElement.innerHTML += `${elixir.name}<ul id="${id}"><button onclick="mostrarIngredients('${elixir.id}', '${id}')">Mostra ingredients</button></ul>`;
            id++;
        }
        element.appendChild(newElement);
    }

    const dataHou = await getHouses();
    element = document.getElementById('cases');
    console.log(dataHou);
    console.table(dataHou);
    for (const houses of dataHou) {
        const element2 = document.getElementById(houses.name);
        console.log(element2);
        const element1 = document.createElement('p');
        element1.innerHTML += `${houses.name}`
        element2.appendChild(element1);
    }

};

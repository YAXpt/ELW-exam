const API_URL = 'https://wizard-world-api.herokuapp.com';

async function getWizards() {
    const respuesta = await fetch(`${API_URL}/Wizards`);
    const data = await respuesta.json();
    //console.table(data);
    //console.log(data);
    return data;
}

async function mostrarIngredients(idElixir){
    var ubicacion = document.getElementById('personatges');
    const respuesta = await fetch(`${API_URL}/Elixirs/${idElixir}`);
    const data = await respuesta.json();
    console.table(data);
    console.log(data);
    debugger;
    for (const ingredient of data.ingredients){
        const newElement = document.createElement('li');
        newElement.textContent = ingredient.name;
        ubicacion.appendChild(newElement)
        //ubicacion.innerHTML += `<li>${ingredient.name}</li>`;     
    }
    
    /*ubicacion.innerHTML += `
        <li id="${idElem}">
            ${idElem}    
            <p class="count">1</p>
            <button onclick="deleteItem('${idElem}')">Delete</button>
        </li>
        `     */ 
}


window.onload = async () => { //se esperará a q cargue el html y luego ejecutará este cacho de código

    const dataHP = await getWizards();

    const element = document.getElementById('personatges');

    //debugger;

    for (const wizard of dataHP) {
        const newElement = document.createElement('ul');
        newElement.innerHTML = `<li><h2> ${wizard.lastName} </h2><li>`;
        for (const elixir of wizard.elixirs) {
            newElement.innerHTML += `<br>${elixir.name}</br><button onclick="mostrarIngredients('${elixir.id}')">Ingredients</button>`;
        }
        element.appendChild(newElement);
      /*for(const elix of dataHP[1].elixirs){ //mcet
        const newElementP = document.createElement('p');
        newElementP.innerHTML += elix.name;
        element.appendChild(newElementP);
        }*/
    }
};

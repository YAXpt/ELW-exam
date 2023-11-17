const API_URL = 'https://wizard-world-api.herokuapp.com';

async function getWizards() {
    const respuesta = await fetch(`${API_URL}/Wizards`);
    const data = await respuesta.json();
    //console.table(data);
    //console.log(data);
    return data;
}

async function getElixirs(idWizard) {
    const respuesta = await fetch(`${API_URL}/Wizards/{${idWizard}}`);
    const data = await respuesta.json();
    console.table(data.elixirs);
    console.log(data);
    return data.elixirs;
}

/*async function getWizards() {
    const respuesta = await fetch(`${API_URL}/Wizards`);
    const data = await respuesta.json();
    console.table(data[0].elixirs);
    console.log(data);
    return data;
}*/

window.onload = async () => { //se esperará a q cargue el html y luego ejecutará este cacho de código

      const dataHP = await getWizards();
      const element = document.getElementById('personatges');
      //debugger;
      for (const wizard of dataHP) {
        const newElementLi = document.createElement('li');
        newElementLi.innerHTML += "<h2>" + wizard.firstName + "</h2>";
        element.appendChild(newElementLi);
      }
      element.appendChild(getElixirs(wizard.id).name)
      //debugger;
      /*for (const elix of dataHP[1].elixirs){
        const newElementP = document.createElement('p');
        newElementP.innerHTML += elix.name;
        element.appendChild(newElementP);
        }*/
      /*for (const elix of dataHP[0].elixirs){
        const newElement = document.createElement('p');
        newElement.innerHTML += elix.name;
        element.appendChild(newElement);*/

    };

      /*
        console.table(dataHP);
        console.log(dataHP);
      for (var wiz=0; wiz<17; wiz++) {
        const newElement = document.createElement('li');
        newElement.innerHTML += dataHP[wiz].lastName;
        for (const elix of dataHP){
            //newElement.innerHTML += dataHP[wiz].elixirs[elix].name;
        }
        element.appendChild(newElement);
      }*/
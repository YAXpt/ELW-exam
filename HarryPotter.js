const API_URL = 'https://wizard-world-api.herokuapp.com';

async function getWizards() {
    const respuesta = await fetch(`${API_URL}/Wizards`);
    const data = await respuesta.json();
    //console.table(data);
    //console.log(data);
    return data;
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
      debugger;
      
      //debugger;
      
      for (const wizard of dataHP) {
        const newElementLi = document.createElement('li');
        newElementLi.innerHTML += "<h2>" + wizard.lastName + "</h2>";
        element.appendChild(newElementLi);
        for (const elix of dataHP[1].elixirs){
            const newElementP = document.createElement('p');
            newElementP.innerHTML += elix.name;
            element.appendChild(newElementP);
            }
      }

    };

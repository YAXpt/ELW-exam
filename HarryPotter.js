const API_URL = 'https://wizard-world-api.herokuapp.com';

async function getWizards() {
    const respuesta = await fetch(`${API_URL}/Wizards`);
    const data = await respuesta.json();
    console.table(data);
    console.log(data);
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

      for (const wizard of dataHP) {
        const newElement = document.createElement('li');
        newElement.innerHTML += "<h2>" + wizard.firstname + "</h2>";
        element.appendChild(newElement);
      }

      /*for (var wiz=0; wiz<17; wiz++) {
        const newElement = document.createElement('li');
        newElement.innerHTML += dataHP[wiz].lastName;
        element.appendChild(newElement);
      }*/
  };
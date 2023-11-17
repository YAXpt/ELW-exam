const API_URL = 'https://wizard-world-api.herokuapp.com';

async function getWizards() {
    const respuesta = await fetch(`${API_URL}/Wizards`);
    debugger;
    const data = await respuesta.json();
    console.table(data.elixirs);
    console.log(data);
    return data;
}

window.onload = async () => { //se esperará a q cargue el html y luego ejecutará este cacho de código

      const dataHP = await getWizards();
      const element = document.getElementById('personatges');

      for (const anime of animes) {
        const newElement = document.createElement('li');
        newElement.innerHTML += "<h2>" + dataHP.data + "</h2>";
        element.appendChild(newElement);
      }
  };
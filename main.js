const form = document.getElementById('form-carnet');

let Lignes = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    ajouterLigne();
    jourCalcul();
});

function ajouterLigne() {
    const inputNom = document.getElementById('nom');
    const inputTéléphone = document.getElementById('téléphone');

    let ligne = '<tr>'
    ligne += `<td>${inputNom.value} </td>`;
    ligne += `<td>${inputTéléphone.value}</td>`;
    ligne += '</tr>';

    Lignes += ligne;

    inputNom.value = '';
    inputTéléphone.value = '';
}

function jourCalcul() {
    const corpsTableau = document.getElementById('tableauContact').querySelector('tbody');
    corpsTableau.innerHTML += Lignes;
}


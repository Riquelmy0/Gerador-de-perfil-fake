
function innerInHtml({results}) {
    const imagem = document.getElementById('imagem');
    imagem.src = results[0].picture.large;

    const nomeDousuario = document.getElementById('nomeUser');
    nomeDousuario.textContent = results[0].name.first + " " + results[0].name.last;;


    //part the information add//
    const email = document.getElementById('span1');
    const celular = document.getElementById('span2');
    const idade = document.getElementById('span3');
    const genero = document.getElementById('span4');
    const pais = document.getElementById('span5');
    const lastName = document.getElementById('span6');

    let valoremailmdf = results[0].email;
    let novoEmail = valoremailmdf.replace('example', 'gmail');
    email.textContent = novoEmail;

    celular.textContent = results[0].cell;
    idade.textContent = results[0].dob.age + ' anos';

    if (results[0].gender === 'female') {
        genero.textContent = 'Feminino';
    } else {
        genero.textContent = 'Masculino';
    }

    pais.textContent = results[0].location.country;
    lastName.textContent = results[0].name.last;

}


async function getApiData() {

    const resultado = await fetch('https://randomuser.me/api/').then(resulted => resulted.json());
    innerInHtml(resultado);
    console.log(resultado)
}

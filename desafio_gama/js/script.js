
const form = document.getElementById('form')

form.addEventListener('submit',(e)=>{
    // nao queremos que a pagina recarregue quando apertamos enter
    e.preventDefault();    
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    console.log({nome,email});
    // queremos passar infos pro local storage
    let data = {
        nome,
        email
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData)
    
})
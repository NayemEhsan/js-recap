console.log('storage')

const addLocalStorage = () =>{
    const idInput = document.getElementById('storage-Id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-Value');
    const value = valueInput.value;

    //
    if(id && value){
        localStorage.setItem(id ,value);
    }
    
    idInput.value = "";
    valueInput.value = "";
}
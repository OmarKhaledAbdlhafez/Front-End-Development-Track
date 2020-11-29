console.log('helioo');
const sizePicker = document.getElementById('sizePicker');
const colorPicker = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas');

sizePicker.addEventListener('submit' ,(e)=>{
    e.preventDefault();
    const h = document.getElementById('inputHeight').value;
    const w = document.getElementById('inputWidth').value;
    console.log(`from submited with h =${h} and w = ${w}`);
    makeGrid(w , h);
});
function makeGrid(w,h){
    table.innerHTML='';
    for (let  i = 0 ; i <h ;i++ ){
        const row =table.insertRow();
        for (let  j= 0 ; j <w ;j++ ){
            const col = row.insertCell();
            col.onclick=setcolor;
            col.ondblclick=clear;
        }
    }

}
function setcolor(){
    this.style.background= colorPicker.value;
}
function clear(){
    this.style.background = '#fff';
}
makeGrid(5,5);
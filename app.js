/* 
    1 : when the arrow icon clicked the main validate function run
*/


const inputarea = document.querySelectorAll('.form-item-area');;
inputarea.forEach(area => {
    const nextarrow = area.lastElementChild;
    nextarrow.addEventListener('click', () => {
        const input = area.children[1];
        if (input.type = "text") {
            usernamevalidate(input.value);
            return;
        }
    })
})

function usernamevalidate(value) {
    if (value === '') {
        errorfunc('red');
    } else {}
}


function errorfunc(color) {
    const container = document.getElementsByClassName('container')[0];
    container.style.backgroundImage = color

}
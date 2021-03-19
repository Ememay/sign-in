/* 
    1 : get all inputs divition and get neseccery element by it
    2 : get current arrow icon,  2-1 get current input, 2-2 get next input divition
    3 : check the input type and then send to another specific function, 3-1: err shake inputarea
    4 : all specific function for validate each part , 4 : username input, 4-1 : password input
    5 : error funtion for change parent background to valid or unvalid state 
    6 : switch to next input area
*/

// 1
const inputarea = document.querySelectorAll('.form-item-area');;
inputarea.forEach(area => {
        // 2
        const nextarrow = area.lastElementChild;
        nextarrow.addEventListener('click', () => {
            // 2-1
            const input = area.children[1];
            // 2-2
            const nextinputarea = area.nextElementSibling;
            // 3
            if (input.type === 'text' && usernamevalidate(input.value)) {
                switchinput(area, nextinputarea);
            } else if (input.type === 'password' && passwordvalidate(input.value)) {
                switchinput(area, nextinputarea);
            } else {
                // 3-1
                area.classList.add('shakeinputeror');
                setTimeout(() => {
                    area.classList.remove('shakeinputeror');
                }, 500)
            }


        })
    })
    // 4
let unvaliecolor = 'red';
let valiecolor = 'green';

function usernamevalidate(value) {
    if (value === '' || value.length < 6) {
        validateeror(unvaliecolor);
        return false;
    } else {
        validateeror(valiecolor);
        return true
    }
}
// 4-1
function passwordvalidate(value) {
    if (value.length < 6 || value.length > 16) {
        validateeror(unvaliecolor);
        return false;
    } else {
        validateeror(valiecolor);
        return true
    }
}
// 5 
function validateeror(color) {
    const container = document.querySelector('.container');
    container.style.backgroundImage = "unset";
    container.style.backgroundColor = color;
}
// 6 
function switchinput(prearea, nextarea) {
    prearea.classList.remove('showon');
    prearea.classList.add('showoff');
    nextarea.classList.add('showon');
    nextarea.classList.remove('showoff');
}
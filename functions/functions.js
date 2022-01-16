let count = 0

let counterDOM = document.querySelector('#counter')
let upDOM = document.querySelector('#up')
let downDOM = document.querySelector('#down')


counterDOM.innerHTML = count

upDOM.addEventListener("click", clickEvent);
downDOM.addEventListener("click", clickEvent);

function clickEvent(){
    this.id == "up" ?  count += 1 : count -= 1
    counterDOM.innerHTML = count
}
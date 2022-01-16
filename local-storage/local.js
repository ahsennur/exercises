let count =  localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0

let counterDOM = document.querySelector('#counter')
let upDOM = document.querySelector('#up')
let downDOM = document.querySelector('#down')


counterDOM.innerHTML = count

upDOM.addEventListener("click", clickEvent);
downDOM.addEventListener("click", clickEvent);

function clickEvent(){
    this.id == "up" ?  count += 1 : count -= 1
    localStorage.setItem("counter", count)
    counterDOM.innerHTML = count
}
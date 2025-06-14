let inpnumb = 1

function createInput (type /* String */, className /* String */){
    let inp = document.createElement("input")
    inp.type = type
    inp.classList.add(className)
    inp.id = "input"+inpnumb.toString()
    inpnumb++
    return inp
}

function resetInpNumb(){
    inpnumb = 1
}

export {createInput, resetInpNumb}
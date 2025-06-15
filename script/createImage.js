function createImage (src /* String */, className){
    let img = document.createElement("img") 
    img.src = src
    img.classList.add(className)
    return img
}

export {createImage}
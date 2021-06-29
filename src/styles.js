

export function setVisible(bool){
    const div = document.getElementsByClassName('main');
    if(bool){
        div.style.cssText = "display: block;";
    }
    else{
        div.style.cssText = "display: none;";
    }
}
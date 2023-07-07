/**
 * Change Dom By Id
 * @param value 
 */
function changeDomById(value = 0) {
    const appTargettedValue = document.getElementById("app-targetted-value");
    appTargettedValue.textContent = value;
}

export { changeDomById };
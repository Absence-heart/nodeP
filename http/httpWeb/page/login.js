window.onload = function () {
    fetch('/getData2').then((response) => {
        console.log(response);
    })
}
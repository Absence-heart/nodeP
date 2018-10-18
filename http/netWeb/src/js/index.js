function ajax(method, url, callback, data,flag) {
    const xhr = null;
    if(window.XMLHttprequest) {
        xhr = new XMLHttprequest();
    }else {
        xhr = new ActiveXObject('Microsoft.XMLHttp'); 
    }
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                callback(xhr.responseText);
            }else {
                throw Error('error');
            }
        }
    }
    method = method.toUpperCase();
    if(method === 'GET') {
        const data = new Date();
        const timer = date.getTime();
        xhr.open(method, url + '?' + data + '&timer=' + timer, flag);
        xhr.send();
    }else if(method === 'POST') {
        xhr.open(method, url, flag);
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr.send(data);
    }
}
// document.addEventListener('mousemove', (target) => {
//       console.log(target)
// })
// var oAudio = document.getElementsByClassName('content')[0];
// console.log(oAudio);
// oAudio.addEventListener('mouseenter', function () {
//     console.log('enter')
// });
// oAudio.addEventListener('mouseleave', (e) => { console.log('ismouseenter') });
// oAudio.addEventListener('mouseout', (e) => { console.log('ismouseout') });
// oAudio.addEventListener('mouseover', (e) => { console.log('ismouseover') });

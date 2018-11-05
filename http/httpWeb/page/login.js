const login = function() {
    let stuNum = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let param = "?username=" + stuNum + "&password=" + password;
    let ajx = new XMLHttpRequest();
    ajx.open("GET", '/login' + param, true);
    ajx.send(null);
    ajx.onreadystatechange = function () {
        if(ajx.readyState === 4 && ajx.status === 200) {
            console.log(ajx.responseText);
            if(ajx.responseText === "OK") {
                location.href = '/isLogin.html';
            }
            if(ajx.responseText === "FAIL") {
                alert("密码或账户错误,请重新登陆");
                location.href = '/login.html';
            }
        }
    }
};
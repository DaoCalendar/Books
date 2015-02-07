function post(data, url){
    $.post(url, data)
        .done(function(data){
            console.log(data);
        })
}

function get(url){
    $.get(url)
        .done(function(data){
            console.log(data);
        })
}

function signin(){
    var data = {
            mail: "a.gambit@gamil.com",
            password: "1111"
        },
        url = "/api/sign-in";

    post(data, url);
}

function signup(){
    var data = {
            mail: "a.gambit@gamil.com",
            password: "1111"
        },
        url = "/api/sign-up";

    post(data, url);
}

function logout(){
    var url = "/api/logout";
    get(url);
}

function status(){
    var url = "/api/status";
    get(url);
}
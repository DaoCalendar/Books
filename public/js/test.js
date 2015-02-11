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
            mail: "abcd.gambit@gamil.com",
            password: "1111"
        },
        url = "/api/sign-in";

    post(data, url);
}

function signup(){
    var data = {
            mail: "abcd.gambit@gamil.com",
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

function createBook(){
    var data = {
            author: "abcd.gambit@gamil.com",
            name: "1111",
            path: "1111",
            img: "1111",
            info: "1111"
        },
        url = "/api/create";

    post(data, url);
}

function bookEdit(){
    var url = "/api/edit-book";
    get(url);
}
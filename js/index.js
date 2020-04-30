$(document).ready(function () {
    console.log(localStorage)
    // if (localStorage.length === 0) {
    //     $('#log_in_area').css("display", "block");
    //     $('#log_out_area').css("display", "none");
    //     return;
    // }
    if (localStorage.email == "") {
        $('#log_in_area').css("display", "block");
        $('#log_out_area').css("display", "none");
    }

    if (localStorage.email !== "") {
        $('#log_in_area').css("display", "none");
        $('#log_out_area').css("display", "block");
    }

    if (localStorage.isAdmin !== "true") {
        $('#admin_mid').css("display", "none");
    } else {
        $('#admin_mid').css("display", "block");
    }
    // if (localStorage.email === "") {
    //     alert("請去登入!!!");
    //     return window.location.href = "../index.html";
    // }
    // console.log("ready!");
    // var cookie = document.cookie;
    // var result = cookie.replace("token=", "bearer ")
    // console.log(cookie);
    // if (cookie === "token=undefined") {
    //     console.log(result);
    //     $('#membership').css("display", "inline");
    //     alert("請登入或註冊會員");
    //     return false;
    // } else {
    //     // console.log(result);
    //     $('#membership').css("display", "none");
    //     console.log(cookie);
    // }

    // var API = "http://192.168.43.56:3000/user/profile";

    // $.ajax({
    //     url: API,
    //     type: "GET",
    //     dateType: "json",
    //     cache: false,
    //     success: function (res) {
    //         if (res) {
    //             // alert("感謝登入");
    //             var div_userlogo = document.getElementById("user_name");
    //             var span_useername = document.createElement("span");
    //             var name = document.createTextNode(res.name);
    //             div_userlogo.appendChild(span_useername.appendChild(name));
    //             $('#log_in_area').css("display", "none"); //test
    //             $('#log_out_area').css("display", "inline"); //test
    //         } else {
    //             $('#log_in_area').css("display", "flex"); //test
    //             $('#log_out_area').css("display", "none"); //test
    //         }
    //         // if (!res.username) {
    //         //     // console.log('logout');
    //         //     alert("請先登入");
    //         //     window.location.assign("http://192.168.43.56:3000/log_in.html");
    //         // }
    //         // var user_logo_content = ``
    //         // setTimeout(function () { document.cookie = ""; }, 3000);
    //     },
    //     error: (err) => {
    //         console.log(err.responseJSON);
    //         // alert(err.responseJSON.message);
    //         $('#log_in_area').css("display", "flex"); //test
    //         $('#log_out_area').css("display", "none"); //test
    //         // $('#user_name_logo').css("display", "none"); //test
    //     }
    // });
});

function log_out() {

    localStorage.email = "";
    localStorage.name = "";
    localStorage.token = "";
    localStorage.isAdmin = "";
    localStorage.id = "";



    $('#log_out_area').css("display", "none");
    window.location.href = "/index.html";

    // var API = "http://192.168.43.56:3000/auth/logout";

    // $.ajax({
    //     url: API,
    //     type: "GET",
    //     dateType: "json",

    //     cache: false,
    //     success: function (res) {
    //         console.log(res);
    //         $('#log_in_area').css("display", "none"); //test
    //         $('#log_out_area').css("display", "inline"); //test

    //         // var user_logo_content = ``

    //         // setTimeout(function () { document.cookie = ""; }, 3000);
    //     },
    //     error: (err) => {
    //         console.log(err.responseJSON);
    //         $('#log_in_area').css("display", "none"); //test
    //         $('#log_out_area').css("display", "none"); //test
    //         // $('#user_name_logo').css("display", "none"); //test
    //     }
    // });
}

$(document).ready(function () {
  console.log(localStorage);
  // if (localStorage.length === 0) {
  //     $('#log_in_area').css("display", "block");
  //     $('#log_out_area').css("display", "none");
  //     return;
  // }
  if (localStorage.email == "") {
    $("#log_in_area").css("display", "block");
    $("#log_out_area").css("display", "none");
    $("#regis_login_hint").css("display", "inline");
  }

  if (localStorage.email !== "") {
    $("#log_in_area").css("display", "none");
    $("#log_out_area").css("display", "block");
    $("#regis_login_hint").css("display", "none");
  }
  if (localStorage.length == 0) {
    $("#log_in_area").css("display", "block");
    $("#log_out_area").css("display", "none");
    $("#regis_login_hint").css("display", "inline");
  }

  if (localStorage.isAdmin !== "true") {
    $("#admin_mid").css("display", "none");
  } else {
    $("#admin_mid").css("display", "block");
  }
});

function log_out() {
  localStorage.email = "";
  localStorage.name = "";
  localStorage.token = "";
  localStorage.isAdmin = "";
  localStorage.id = "";

  $("#log_out_area").css("display", "none");
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

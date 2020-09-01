function ShowRegisterPwd1() {
  var x = document.getElementById("registerPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function ShowEnsurePwd1() {
  var x = document.getElementById("ensure_pwd");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function handle_submit(e) {
  e.preventDefault();

  $("#submit_btn").css("display", "none");
  $("#loading_btn").css("display", "block");
  $("#loading_btn").css("margin", "auto");

  // console.log(gender);
  var username = $("#username").val();
  var email = $("#registerEmail").val();
  var password = $("#registerPassword").val();
  var ensure_pwd = $("#ensure_pwd").val();
  var gender = $("#gender").val();
  var category = $("#category").val();
  var service = $("#service").val();
  var position = $("#position").val();
  var address = $("#address").val();
  var phone = $("#phone").val();

  var API = "http://192.168.43.56:5002/api/member/Register";

  if (password.length < 8 || password.length > 12) {
    alert("密碼請輸入8~12碼!!");
    $("#submit_btn").css("display", "block");
    $("#loading_btn").css("margin", "auto");
    $("#submit_btn").css("margin", "auto");
    $("#loading_btn").css("display", "none");
    return;
  } else if (password !== ensure_pwd) {
    alert("密碼不相符!!");
    $("#submit_btn").css("display", "block");
    $("#loading_btn").css("margin", "auto");
    $("#submit_btn").css("margin", "auto");
    $("#loading_btn").css("display", "none");
    return;
  } else if (
    email === "" ||
    password === "" ||
    username === "" ||
    service === "" ||
    position === "" ||
    address === "" ||
    phone === ""
  ) {
    alert("資料不完整 請再檢查一下!!");
    $("#submit_btn").css("display", "block");
    $("#loading_btn").css("margin", "auto");
    $("#submit_btn").css("margin", "auto");
    $("#loading_btn").css("display", "none");
    return;
  }
  console.log({
    Name: username,
    Email: email,
    Password: password,
    Gender: gender,
    Race: category,
    Service_Unit: service,
    Position: position,
    Address: address,
    Phone: phone,
  });
  $.ajax({
    url: API,
    type: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // dataType: "json",
    data: JSON.stringify({
      Name: username,
      Email: email,
      Password: password,
      Gender: gender,
      Race: category,
      Service_Unit: service,
      Position: position,
      Address: address,
      Phone: phone,
    }),
    cache: false,
    success: function (res) {
      console.log(res);
      // window.location.assign(`http://192.168.43.56:3000/email_deliver.html?email=${email}`);
      $("#exampleModal_email_deliver").modal("show");
    },
    error: function (err) {
      // console.log("此信箱已註冊過!!");
      // alert("此信箱已註冊過!!");
      alert(err.responseText);
      $("#submit_btn").css("display", "block");
      $("#submit_btn").css("margin", "auto");
      $("#loading_btn").css("margin", "auto");
      $("#loading_btn").css("display", "none");

      console.log(err.responseText);
    },
  });
  return;

  // e.preventDefault();
}

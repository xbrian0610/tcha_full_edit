function get_all_member_info() {
  var API =
    "http://192.168.43.56:5002/api/member/GetUpdateData?email=" +
    localStorage.email;

  $.ajax({
    url: API,
    type: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.token,
    },
    dataType: "json",
    cache: false,
    success: function (res) {
      console.log(res);
      $("#username").val(res.name);
      $("#gender").val(res.gender);
      $("#service").val(res.service_Unit);
      $("#position").val(res.position);
      $("#address").val(res.address);
      $("#phone").val(res.phone);
    },
    error: function (err) {
      console.log(err);
    },
  });
}

function edit_info(e) {
  e.preventDefault();

  var edit_name = $("#username").val();
  var edit_gender = $("#gender").val();
  var edit_service = $("#service").val();
  var edit_position = $("#position").val();
  var edit_address = $("#address").val();
  var edit_phone = $("#phone").val();
  var API = "http://192.168.43.56:5002/api/member/Update";

  // if (pre_pwd === "") {
  //     alert("請輸入您的舊密碼或驗證信中的新密碼");
  //     return;
  // }
  // if (pre_pwd === new_pwd) {
  //     alert("新密碼與舊密碼相同!!請換一組新密碼!!");
  //     return;
  // }
  // if (new_pwd !== ensure_pwd) {
  //     alert('"新密碼"與"確認新密碼"的內容不相符!');
  //     return;
  // }
  // console.log({ pre_pwd: pre_pwd, new_pwd: new_pwd });
  // console.log({
  //     Email: localStorage.email,
  //     Password: pre_pwd,
  //     NewPassword: new_pwd
  // });
  $.ajax({
    url: API,
    type: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.token,
    },
    data: JSON.stringify({
      email: localStorage.email,
      name: edit_name,
      gender: edit_gender,
      address: edit_address,
      service_Unit: edit_service,
      phone: edit_phone,
      position: edit_position,
    }),
    cache: false,
    success: function (res) {
      console.log(res);
      alert(res);

      localStorage.email = "";
      localStorage.name = "";
      localStorage.token = "";
      localStorage.isAdmin = "";

      // document.cookie = "token=" + res.token + ";";
      window.location.assign("http://192.168.43.56:5501/index.html");
    },
    error: function (err) {
      console.log(err);
      alert(err);
    },
  });
}

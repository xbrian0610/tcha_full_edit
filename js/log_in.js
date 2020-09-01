//前端
function login_submit(e) {
  e.preventDefault();

  var email = $("#email").val();
  var password = $("#password").val();
  var API = "http://192.168.43.56:5002/api/member/Login";
  if (email === "") {
    alert("請輸入信箱");
    return false;
  }
  if (password === "") {
    alert("請輸入密碼");
    return false;
  }

  $.ajax({
    url: API,
    type: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      Email: email,
      Password: password,
    }),
    cache: false,
    success: function (res) {
      // console.log(res);

      // console.log('email->' + email, 'password->' + password);
      console.log("success:", res);
      const gender = res.member.gender === "1" ? "先生" : "小姐";

      alert(`歡迎 ${res.member.name} ${gender}登入!!`);
      $("#log_in_area").css("display", "none");

      // console.log(res.data[0].password);

      console.log(res.token);
      // console.log(res.member.email);
      // console.log(res.member.password);
      localStorage.setItem("email", res.member.email);
      localStorage.setItem("name", res.member.name);
      localStorage.setItem("token", res.token);
      localStorage.setItem("isAdmin", res.member.isAdmin);
      localStorage.setItem("id", res.member.id);
      // localStorage.setItem("password", res.member.password);
      // console.log("email==" + email);
      // console.log("password==" + password);
      // console.log(res.token);
      // console.log(token);
      // document.cookie = "token=" + res.token + ";";
      // session_cookie = res.token;
      // console.log(session_cookie);

      window.location.href = "/index.html";
    },
    error: function (err) {
      alert(err.responseText);
      // if (err.rows == null) {

      console.log(err.responseText);
      // alert(err.responseJSON.message);
      // }
    },
  });
}

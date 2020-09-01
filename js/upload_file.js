function only_memb() {
  // if (localStorage.length == "" || localStorage.email == "") {
  //   alert("請登入會員才能上傳檔案!!");
  //   window.location.href = "../index.html";
  // }
  var API = "http://192.168.43.56:5002/api/news/GetDataList";

  $.ajax({
    url: API,
    type: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.token,
    },
    cache: false,
    success(res) {
      for (let i = 0; i < res.length; i += 1) {
        const content = `
                <tr id = news${i + 1}>
                <td><a class="news_title_hover_f" onclick="get_content_front(${
          res[i].news_Id
          })">${res[i].news_Title}</a></td>
                <td>${res[i].createTime.substr(0, 10)}</td>
                </tr>`;
        $("#news_table_content").append(content);
      }
    },
    error(err) {
      console.log(err);
    },
  });
}
function change1() {
  if ($("#upload_file_video").val()) {
    $("#file_name_video").html($("#upload_file_video").val());
  }
}

function change11() {
  if ($("#upload_file_pdf").val()) {
    $("#file_name_pdf").html($("#upload_file_pdf").val());
  }
}

function change111() {
  if ($("#upload_file_course").val()) {
    $("#file_name_course").html($("#upload_file_course").val());
  }
}

// function uploadPpt() {

//     // e.preventDefault();

//     var for_ppt = $("#for_ppt").prop('files');
//     var API = "http://192.168.43.56:5002/api/fileupload";
//     var form_data = new FormData();

//     var file = document.getElementById("for_ppt");

//     if (file.length < 1) {
//         alert('請選擇PPT檔案');
//         return false;
//     }
//     console.log(for_ppt)
//     for (let i = 0; i < for_ppt.length; i++) {
//         form_data.append('UploadFile', for_ppt[i]);
//     }
//     form_data.append('Member_Id', localStorage.id);
//     $.ajax({
//         url: API,
//         type: "POST",
//         processData: false, // required
//         contentType: false, //requiredc
//         headers: {
//             // 'Content-Type': 'multipart/form-data',
//             'Authorization': 'Bearer ' + localStorage.token
//         },
//         data: form_data,
//         success: function (res) {
//             alert("上傳檔案成功");
//             document.getElementById("for_ppt").value = "";
//         },
//         error: function (err) {

//             console.log(err);
//             console.log(form_data);
//             alert("請選擇檔案");
//         }
//     })
// }

function uploadDoc() {
  // e.preventDefault();

  var for_doc = $("#upload_file_video").prop("files");
  var API = "http://192.168.43.56:5002/api/fileupload";
  var form_data = new FormData();

  var file = document.getElementById("upload_file_video");
  console.log(file);

  if (file.length < 1) {
    alert("請選擇PPT檔案");
    return false;
  }
  console.log(for_doc);

  for (let i = 0; i < for_doc.length; i++) {
    form_data.append("UploadFile", for_doc[i]);
  }
  form_data.append("Member_Id", localStorage.id);
  $.ajax({
    url: API,
    type: "POST",
    processData: false, // required
    contentType: false, //requiredc
    headers: {
      // 'Content-Type': 'multipart/form-data',
      Authorization: "Bearer " + localStorage.token,
    },
    data: form_data,
    success: function (res) {
      alert("上傳檔案成功");
      document.getElementById("file_name_video").innerHTML =
        "目前尚未選擇任何檔案";
    },
    error: function (err) {
      console.log(err.responseJSON.message);
      console.log(form_data);
      alert(err.responseJSON.message);
    },
  });
}
function uploadPdf() {
  // e.preventDefault();

  var for_doc = $("#upload_file_pdf").prop("files");
  var API = "http://192.168.43.56:5002/api/fileupload";
  var form_data = new FormData();

  var file = document.getElementById("upload_file_pdf");
  console.log(file);

  if (file.length < 1) {
    alert("請選擇PPT檔案");
    return false;
  }
  console.log(for_doc);

  for (let i = 0; i < for_doc.length; i++) {
    form_data.append("UploadFile", for_doc[i]);
  }
  form_data.append("Member_Id", localStorage.id);
  $.ajax({
    url: API,
    type: "POST",
    processData: false, // required
    contentType: false, //requiredc
    headers: {
      // 'Content-Type': 'multipart/form-data',
      Authorization: "Bearer " + localStorage.token,
    },
    data: form_data,
    success: function (res) {
      alert("上傳檔案成功");
      document.getElementById("file_name_pdf").innerHTML =
        "目前尚未選擇任何檔案";
    },
    error: function (err) {
      console.log(err.responseJSON.message);
      console.log(form_data);
      alert(err.responseJSON.message);
    },
  });
}

function uploadCourse() {
  // e.preventDefault();

  var for_doc = $("#upload_file_course").prop("files");
  var API = "http://192.168.43.56:5002/api/fileupload";
  var form_data = new FormData();

  var file = document.getElementById("upload_file_course");
  console.log(file);

  if (file.length < 1) {
    alert("請選擇PPT檔案");
    return false;
  }
  console.log(for_doc);

  for (let i = 0; i < for_doc.length; i++) {
    form_data.append("UploadFile", for_doc[i]);
  }
  form_data.append("Member_Id", localStorage.id);
  $.ajax({
    url: API,
    type: "POST",
    processData: false, // required
    contentType: false, //requiredc
    headers: {
      // 'Content-Type': 'multipart/form-data',
      Authorization: "Bearer " + localStorage.token,
    },
    data: form_data,
    success: function (res) {
      alert("上傳檔案成功");
      document.getElementById("file_name_course").innerHTML =
        "目前尚未選擇任何檔案";
    },
    error: function (err) {
      console.log(err.responseJSON.message);
      console.log(form_data);
      alert(err.responseJSON.message);
    },
  });
}

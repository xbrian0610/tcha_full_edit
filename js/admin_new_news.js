// const tmp_content = document.getElementsByClassName('news_details');

function create_news(e) {
  e.preventDefault();
  const new_news_title = $("#create_news_title").val();
  const new_news_content = CKEDITOR.instances.news_creater_content.getData();

  var API = "http://192.168.43.56:5002/api/news";

  if (new_news_title === "") {
    alert("請輸入標題");
    return;
  }
  if (new_news_content === "") {
    alert("請輸入內容");
    return;
  }

  console.log(new_news_title);
  console.log(new_news_content);

  $.ajax({
    url: API,
    type: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.token,
    },
    // dataType: "json",
    data: JSON.stringify({
      News_Title: new_news_title,
      News_Content: new_news_content,
    }),
    cache: false,
    success: function (res) {
      console.log(res);
      alert("新增成功");
      window.location.assign(`http://192.168.43.56:5501/admin_news.html`);
    },
    error: function (err) {
      // console.log("此信箱已註冊過!!");
      // alert("此信箱已註冊過!!");
      alert(err.responseText);

      console.log(err.responseText);
    },
  });
}

const tmp_content = document.getElementsByClassName('news_details');
const edit_title = document.getElementById('create_news_title');

// console.log(get_tmp_html);

function hidden_edit() {
    $("#admin_newsEditId_content").css("display", "none");
    var parameters = location.search.substring(1).split("&");
    console.log(parameters);//get ?"id=3"
    var temp = parameters[0].split("=");
    console.log(temp);//"id","3"
    l = unescape(temp[1]);//get "3"
    // const test = document.getElementById("log").innerHTML = l;
    console.log(l);

    var API = "http://192.168.43.56:5002/api/news/GetData?id=" + l;

    $.ajax({
        url: API,
        type: "GET",
        headers: {
            'Authorization': 'Bearer ' + localStorage.token
        },
        cache: false,
        success: function (res) {
            console.log(res);

            // alert("#")
            // window.location.assign(`http://192.168.43.56:5500/admin_news_content.html?id=${target_id}`);
            // alert("success"); href="./admin_news_content.html"
            const tit_content = `
            <div>消息標題：${res.news_Title}</div>
            <hr />
        `;
            const content = `
                <div>${res.news_Content}</div>
            `;
            console.log(content)
            $("#target_tit").append(tit_content);
            $("#news_details").append(content);
        },
        error: function (err) {
            // console.log("此信箱已註冊過!!");
            // alert("此信箱已註冊過!!");
            alert(err.responseText);

            console.log(err.responseText);
        }
    });

}


const test = $('textarea[name=editor_news_content]').val();


function edit_content() {

    console.log($('#create_news_title'));
    $("#admin_newsId_content").css("display", "none");
    $("#admin_newsEditId_content").css("display", "block");
    const get_tmp_html = tmp_content[0].outerHTML;
    CKEDITOR.instances.editor_news_content.setData(get_tmp_html);
    // const tmp_content = CKEDITOR.instances.editor_news_content.getData();
    // $("#editor_news_content").append(get_tmp_html);
    // console.log(get_tmp_html);
    console.log(get_tmp_html);
    // console.log(CKEDITOR.instances.editor_news_content.setData(`<strong>黃榮凱</strong>`));


    // $("#admin_news_table").css("display", "block");
    var parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    l = unescape(temp[1]);
    // const test = document.getElementById("log").innerHTML = l;
    console.log(l);

    var API = "http://192.168.43.56:5002/api/news/GetData?id=" + l;

    $.ajax({
        url: API,
        type: "GET",
        headers: {
            'Authorization': 'Bearer ' + localStorage.token
        },
        cache: false,
        success: function (res) {
            console.log(res);



            // alert("#")
            // window.location.assign(`http://192.168.43.56:5500/admin_news_content.html?id=${target_id}`);
            // alert("success"); href="./admin_news_content.html"

            // const edit_title = document.getElementById('create_news_title');



            const content = `<div>${res.news_Content}</div>`;
            console.log(content)
            $("#news_details").append(content);

            $('#create_news_title').val(res.news_Title);


            // const get_tmp_html = tmp_content[0].outerHTML;
            // CKEDITOR.instances.editor_news_content.setData(get_tmp_html);
        },
        error: function (err) {
            // console.log("此信箱已註冊過!!");
            // alert("此信箱已註冊過!!");
            alert(err.responseText);

            console.log(err.responseText);
        }
    });




}



function bk_news_content(e) {
    e.preventDefault();

    var parameters = location.search.substring(1).split("&");
    console.log(parameters);//get ?"id=3"
    var temp = parameters[0].split("=");
    console.log(temp);//"id","3"
    l = unescape(temp[1]);//get "3"
    // const test = document.getElementById("log").innerHTML = l;
    console.log(l);

    const new_news_title = $('#create_news_title').val();
    const new_news_content = CKEDITOR.instances.editor_news_content.getData();
    console.log(new_news_title);
    console.log(new_news_content);
    const origin_news_id = l;

    var API = "http://192.168.43.56:5002/api/News"

    $.ajax({
        url: API,
        type: "PUT",
        headers: {
            'Authorization': 'Bearer ' + localStorage.token,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            News_Id: origin_news_id,
            News_Title: new_news_title,
            News_content: new_news_content
        }),
        cache: false,
        success: function (res) {
            console.log(res);

            // alert("#")
            // alert("success"); href="./admin_news_content.html"

            // const edit_title = document.getElementById('create_news_title');

            alert("修改成功!!!")
            window.location.assign(`http://192.168.43.56:5500/admin_news.html`);

            // const content = `<div>${res.news_Content}</div>`;
            // console.log(content)
            // $("#news_details").append(content);

            // $('#create_news_title').val(res.news_Title);


            // const get_tmp_html = tmp_content[0].outerHTML;
            // CKEDITOR.instances.editor_news_content.setData(get_tmp_html);
        },
        error: function (err) {
            // console.log("此信箱已註冊過!!");
            // alert("此信箱已註冊過!!");
            alert(err.responseText);

            console.log(err.responseText);
        }
    });
    // alert("new_news_title" + new_news_title);
    // alert("new_news_content" + new_news_content);

    $("#admin_news_table").css("display", "block");
    $("#admin_news_list").css("display", "none");

}
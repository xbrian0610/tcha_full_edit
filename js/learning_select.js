// var current_page = 1;
// var records_per_page = 3;

// var objJson = [
//     {
//         adName: [{
//             "course": "長者膳食營養保健(多族語言測試)",
//             "time": "2",
//             "class": "A"
//         }]
//     },
//     {
//         adName: [{
//             "course": "長者口腔保健(僅漢語測試)",
//             "time": "3",
//             "class": "B"
//         }]
//     },
//     {
//         adName: [{
//             "course": "慢性疾病與用藥安全",
//             "time": "2",
//             "class": "C"
//         }]
//     },
//     {
//         adName: [{
//             "course": "長者懷舊與頭腦保健",
//             "time": "2",
//             "class": "D"
//         }]
//     },
//     {
//         adName: [{
//             "course": "肌力升級與運動保健",
//             "time": "2",
//             "class": "E"
//         }]
//     },
//     {
//         adName: [{
//             "course": "其他",
//             "time": "2",
//             "class": "F"
//         }]
//     },
//     {
//         adName: [{
//             "course": "其他",
//             "time": "2",
//             "class": "F"
//         }]
//     },
//     {
//         adName: [{
//             "course": "其他",
//             "time": "2",
//             "class": "F"
//         }]
//     },
//     {
//         adName: [{
//             "course": "其他",
//             "time": "2",
//             "class": "F"
//         }]
//     }

// ]; // Can be obtained from another source, such as your objJson variable
// for (let index = 0; index < objJson.length; index++) {

//     $(".tab_pagi").append(
//         `
//             <tr>
//                 <td scope="row">${objJson[index].adName[0].class}</td>
//                 <td>${objJson[index].adName[0].course}</td>
//                 <td>${objJson[index].adName[0].time}</td>
//                 <td><a href="#"><img src="./image/play.png "></a></td>
//             </tr>
//         `
//     );
// }


// function prevPage() {
//     if (current_page > 1) {
//         current_page--;
//         changePage(current_page);
//     }
// }

// function nextPage() {
//     if (current_page < numPages()) {
//         current_page++;
//         changePage(current_page);
//     }
// }

// function changePage(page) {
//     var btn_next = document.getElementById("btn_next");
//     var btn_prev = document.getElementById("btn_prev");
//     var listing_table = document.getElementById("listingTable");
//     var page_span = document.getElementById("page");

//     // Validate page
//     if (page < 1) page = 1;
//     if (page > numPages()) page = numPages();

//     $(".tab_pagi").empty()

//     for (var i = (page - 1) * records_per_page; i < (page * records_per_page); i++) {
//         $(".tab_pagi").append(
//             `
//                 <tr>
//                     <td scope="row">${objJson[i].adName[0].class}</td>
//                     <td>${objJson[i].adName[0].course}</td>
//                     <td>${objJson[i].adName[0].time}</td>
//                     <td><a href="#"><img src="./image/play.png "></a></td>
//                 </tr>
//             `
//         );

//     }
//     page_span.innerHTML = page;

//     if (page == 1) {
//         btn_prev.style.visibility = "hidden";
//     } else {
//         btn_prev.style.visibility = "visible";
//     }

//     if (page == numPages()) {
//         btn_next.style.visibility = "hidden";
//     } else {
//         btn_next.style.visibility = "visible";
//     }
// }

// //計算分頁的數量
// function numPages() {
//     return Math.ceil(objJson.length / records_per_page);
// }

const API = "";

function getLearnOnline(callback) {
    $.ajax({
        url: `${API}s`,
        type: "GET",
        dataType: "json",
        cache: false,
        success(res) {
            if (callback) {
                callback();
            }
            for (let i = 0; i < res.length; i += 1) {
                const content = `
                <tr id = LearnOnline${i + 1}>
                    <td>${res[i].tag}</td>
                    <td>${res[i].coursename}</td>
                    <td>${res[i].time}</td>
                    <td><a href="#">${res[i].video}</a></td>
                </tr>`;
                $("#tab_pagi").append(content);
            }
        },
        error(err) {
            console.log(err);
        }
    });
}

function SetValueToInput(VideoType) {
    var input, filter, table, tr, td, i, txtValue;

    if (VideoType == 0) {
        document.getElementById("learning_online_select").value = "";
    } if (VideoType == 1) {
        document.getElementById("learning_online_select").value = "A";
    } if (VideoType == 2) {
        document.getElementById("learning_online_select").value = "B";
    } if (VideoType == 3) {
        document.getElementById("learning_online_select").value = "C";
    } if (VideoType == 4) {
        document.getElementById("learning_online_select").value = "D";
    } if (VideoType == 5) {
        document.getElementById("learning_online_select").value = "E";
    } if (VideoType == 6) {
        document.getElementById("learning_online_select").value = "F";
    }
    input = document.getElementById("learning_online_select");
    filter = input.value.toUpperCase();
    table = document.getElementById("learning_online_table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
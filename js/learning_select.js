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
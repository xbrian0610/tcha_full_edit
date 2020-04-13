function handle_submit(e) {
    e.preventDefault();

    var userInfo = {};
    const form = e.target.elements;
    for (var i = 0; i < form.length; i += 1) {
        const element = form[i];
        userInfo = {
            ...userInfo,
            [element.name]: element.value
        }
    }
    console.log(userInfo)

    $('#exampleModal_email_deliver').modal('show');
}
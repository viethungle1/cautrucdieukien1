let login=prompt("Enter:")
let messenger = (login == "Employee") ? "Hello":
    (login == "Director") ? "Greeting":
        (login == "") ? "No login":
            "";
alert(messenger)
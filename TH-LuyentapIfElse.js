let usename=prompt("Username");
if (usename=='admin') {
    let password = prompt('Password');
    if (password=='themaster') {
        alert('welcome');
    }else if (password == null) {
        alert('cancled');
    }else {
        alert('wrong password');
    }
}else if (usename==null) {
    alert('cancled');
}else {
    alert("i don't know you")
}
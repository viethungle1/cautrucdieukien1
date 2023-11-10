let browser=prompt("Enter browser name")
switch (browser) {
    case 'edge':
        alert("You've got the Edge!");
        break
    case 'chrome':
        alert("You've got the Chrome!");
        break
    case 'firefox':
    case 'Opera':
        alert('Okay we support these browsers too');
        break
    default:
        alert('We hope that this page looks ok!')
}
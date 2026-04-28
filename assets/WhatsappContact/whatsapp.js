<<<<<<< HEAD
function whatsapp() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const whatsappURL = 'https://wa.me/2348105630089/?text='
    + 'Name: ' + name + '%0a'
    + 'Message: ' + message;

    window.open(whatsappURL, '_blank').focus();
}

const sendMessage = document.getElementById('send');
sendMessage.addEventListener('click', whatsapp);
=======
function whatsapp() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const whatsappURL = 'https://wa.me/2348033884008/?text='
    + 'Name: ' + name + '%0a'
    + message;

    window.open(whatsappURL, '_blank').focus();
}

const sendMessage = document.getElementById('send');

sendMessage.addEventListener('click', whatsapp);
>>>>>>> 75222faff23f9a7584219e30e9320fbb8bc55053

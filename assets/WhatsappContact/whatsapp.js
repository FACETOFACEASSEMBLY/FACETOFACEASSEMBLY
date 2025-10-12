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
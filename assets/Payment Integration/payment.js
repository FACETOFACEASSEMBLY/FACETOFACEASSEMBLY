function updateDisplayAmount() {
    const amount = document.getElementById('amount').value;
    const display = document.getElementById('displayAmount');

    if (amount && amount > 0) {
        display.textContent = `Amount to Pay: ${Number(amount).toLocaleString('en-NG', {
            style: 'currency',
            currency: 'NGN',
        })}`;
    } else {
        display.textContent = '';
    }
}

function payWithPaystack() {
    const emailInput = document.getElementById('email');
    const amountInput = document.getElementById('amount');

    const email = emailInput.value;
    const amount = amountInput.value;

    if (!email || !amount || amount < 0) {
        alert('Please enter your email and the amount before transanction');
        return;
    }

    new PaystackPop().newTransaction({
        key: 'pk_live_f815dbee167ebaa4ebfcec8159fc879f62f62be7',
        email,
        amount: amount * 100,
        onSuccess: (transanction) => {
            console.log('Success', transanction);
            alert('Payment Successful');
            emailInput = '';
            amountInput = '';
            display = '';
        },
        onCancel: () => console.log('Payment has been cancelled'),
        onError: (error) => console.log('Error', error.message),
    });


}

function showThankYouPopup() {
    const popup = document.getElementById("thankYouPopup");
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 1500);
}


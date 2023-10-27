const paymentMethods = {
        "any": {
            "methods": [
                {"TRC20 (Tether)": "TYZummwRaq2KFJcWjW8rw3eiZsFLjaKWYw"},
                {"TON (The Open Network)": "UQB-yl4o65zi9MdOdCEQ83PF6nZIC0ZfD-roqwzKfBaY_Q-s"},
                {"BTC (Bitcoin)": "bc1qelx9zythl5xmqzs4jgftyagnnmhqxtt2x9f9x5"},
                {"BNB (Binance)": "bnb1alfrfft4jh3rmg5dwmjgccdyqydxhtm3fc8cxn"},
                {"ETH (Ethereum)": "0x270fc6EE9a7f0a491486e784C9be406C36A4F710"}
            ],
            "title": "Support to cazqev's projects",
            "document__title": "Cazqev's projects support"
        }
    }
;

document.addEventListener("DOMContentLoaded", function () {
    console.log("Page loaded. Created by @cazqev")
    const urlParams = new URLSearchParams(window.location.search);
    const host = urlParams.get("host");


    if (host in paymentMethods) {
        document.title = paymentMethods[host]['document__title'];

        const container = document.querySelector('.container');
        const h1 = document.createElement('h1');
        h1.textContent = paymentMethods[host]['title'];
        container.appendChild(h1);

        paymentMethods[host].methods.forEach((wallet, index) => {
            const paymentMethod = document.createElement('div');
            paymentMethod.classList.add('payment-method');

            const paymentTitle = document.createElement('div');
            paymentTitle.classList.add('payment-title');
            paymentTitle.textContent = Object.keys(wallet)[0] + ":";
            paymentMethod.appendChild(paymentTitle);

            const walletId = document.createElement('div');
            walletId.classList.add('wallet-id');
            walletId.textContent = Object.values(wallet)[0];
            paymentMethod.appendChild(walletId);

            container.appendChild(paymentMethod);
        });

        document.querySelectorAll('.wallet-id').forEach(walletElement => {
            walletElement.addEventListener('click', function () {
                const selection = window.getSelection();
                const range = document.createRange();
                range.selectNodeContents(this);
                selection.removeAllRanges();
                selection.addRange(range);

                try {
                    document.execCommand('copy');
                    selection.removeAllRanges();

                    // Уведомление о копировании
                    Toastify({
                        text: "Copied!",
                        duration: 3000,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: 'right', // `left`, `center` or `right`
                        backgroundColor: "linear-gradient(to right, #00c6ff, #0072ff)",
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                    }).showToast();

                } catch (e) {
                    console.error('Не удалось скопировать реквизиты', e);
                }
            });
        });

    } else {
        const host = "any"
        document.title = paymentMethods[host]['document__title'];

        const container = document.querySelector('.container');
        const h1 = document.createElement('h1');
        h1.textContent = paymentMethods[host]['title'];
        container.appendChild(h1);

        paymentMethods[host].methods.forEach((wallet, index) => {
            const paymentMethod = document.createElement('div');
            paymentMethod.classList.add('payment-method');

            const paymentTitle = document.createElement('div');
            paymentTitle.classList.add('payment-title');
            paymentTitle.textContent = Object.keys(wallet)[0] + ":";
            paymentMethod.appendChild(paymentTitle);

            const walletId = document.createElement('div');
            walletId.classList.add('wallet-id');
            walletId.textContent = Object.values(wallet)[0];
            paymentMethod.appendChild(walletId);

            container.appendChild(paymentMethod);
        });

        document.querySelectorAll('.wallet-id').forEach(walletElement => {
            walletElement.addEventListener('click', function () {
                const selection = window.getSelection();
                const range = document.createRange();
                range.selectNodeContents(this);
                selection.removeAllRanges();
                selection.addRange(range);

                try {
                    document.execCommand('copy');
                    selection.removeAllRanges();

                    // Уведомление о копировании
                    Toastify({
                        text: "Copied!",
                        duration: 3000,
                        close: true
                    }).showToast();

                } catch (e) {
                    console.error('Не удалось скопировать реквизиты', e);
                }
            });
        });
    }
    ;
});

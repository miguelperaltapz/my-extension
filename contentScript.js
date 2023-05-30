(() => {
    let currentTicket = "";

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, ticketId } = obj;

        if (type === "NEW") {
            currentTicket = ticketId;
            newTicketLoaded();
        }
    });

    const newTicketLoaded = () => {
        const email = document.getElementsByClassName("email-text");

        if (email) {

            function obfuscateEmail(email) {
                let splitEmail = email.split('@');
                let firstTwoChars = splitEmail[0].substring(0, 2);
                let obfuscatedEmail = firstTwoChars + '***@' + splitEmail[1];
                return obfuscatedEmail;
            }

            email.innerHTML = obfuscateEmail(email.innerHTML);
        }
    }
})();


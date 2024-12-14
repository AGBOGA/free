document.addEventListener('DOMContentLoaded', () => {
    // Simulation de paiement par mobile pour la création de carte bancaire
    const cardForm = document.getElementById('card-form');
    cardForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const phone = document.getElementById('phone').value.trim();
        const recipientPhone = '91048994'; // Numéro de réception des paiements
        if (phone) {
            alert(`Paiement de 100 FCFA effectué avec succès depuis le numéro ${phone}. Redirection vers la page de création de carte.`);
            // Simule l'envoi de l'argent au numéro mobile spécifié
            sendMoney(phone, 100, recipientPhone);
            // Redirection après 1 secondes
        setTimeout(() => {
            window.location.href = "creationcarte.html";
        }, 3000);
           
        } else {
            alert('Veuillez entrer un numéro de téléphone valide.');
        }
    });

    // Formulaire de contact
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        fetch('/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
        .then(response => response.text())
        .then(data => {
            alert('Message envoyé avec succès');
        })
        .catch(error => {
            alert('Erreur lors de l\'envoi du message');
        });
    });
});

function sendMoney(phone, amount, recipientPhone) {
    // Simulation d'un envoi d'argent. En pratique, cela nécessiterait une intégration avec un service de paiement.
    console.log(`Envoyer ${amount} FCFA de ${phone} à ${recipientPhone}`);
    alert(`L'argent a été envoyé au numéro ${recipientPhone}.`);
}

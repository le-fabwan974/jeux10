document.addEventListener('DOMContentLoaded', function() {
    const resultModal = document.getElementById('resultModal');
    const closeModal = document.querySelector('#resultModal .close');
    const nextLevelButton = document.getElementById('nextLevelButton');
    const resultText = document.getElementById('resultText');
    const options = document.querySelectorAll('.option');
    
    options.forEach(option => {
        option.addEventListener('click', function() {
            if (this.dataset.answer === 'correct') {
                showResult("Bravo ! Vous avez trouvé la bonne réponse !", 'https://i.ibb.co/0ZYx1cP/success.jpg');
            } else {
                showResult("Dommage ! Essayez encore.", 'https://i.ibb.co/Yd7XYMP/try-again.jpg');
            }
        });
    });

    function showResult(message, imageUrl) {
        resultText.innerText = message;
        document.getElementById('resultImage').src = imageUrl;
        document.getElementById('resultImage').style.display = 'block';
        resultModal.style.display = 'block';
        nextLevelButton.style.display = 'inline-block';
    }

    closeModal.onclick = function() {
        resultModal.style.display = 'none';
    }

    nextLevelButton.onclick = function() {
        window.location.href = 'fin.html'; // Remplacez par l'URL de la page finale
    }
});

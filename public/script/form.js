document.getElementById('supportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const Severidade = document.getElementById('Severidade').value;

    let nivel = '';
    switch(Severidade) {
        case 'baixo':
            nivel = '1';
            break;
        case 'medio':
            nivel = '2';
            break;
        case 'alto':
            nivel = '3';
            break;
    }

    const mensagem = `O chamado foi analisado pela nossa inteligência artificial, e de acordo com a Severidade (${Severidade}) e o descritivo, o mesmo foi escalonado, com um título já atribuído, para um analista de Nível ${nivel}.`;

    document.getElementById('modalMessage').textContent = mensagem;

    const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
    resultModal.show();
});
function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === "") return;

    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.innerText = userInput;
    document.getElementById('chatbox').appendChild(userMessage);

    document.getElementById('userInput').value = '';

    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        botMessage.innerText = "Esta é uma resposta do chatbot.";
        document.getElementById('chatbox').appendChild(botMessage);

        document.getElementById('chatbox').scrollTop = document.getElementById('chatbox').scrollHeight;
    }, 500);
}

document.getElementById('sendBtn').addEventListener('click', sendMessage);

document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
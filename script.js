document.getElementById("movingButton").addEventListener("click", function() {
    const container = document.querySelector('.container');
    const button = document.getElementById("movingButton");

    // Obtém a altura e largura da div container
    const maxTop = container.clientHeight - button.offsetHeight;
    const maxLeft = container.clientWidth - button.offsetWidth;

    // Gera posições aleatórias dentro da div container
    const newTop = Math.random() * maxTop;
    const newLeft = Math.random() * maxLeft;

    // Aplica as novas coordenadas ao botão
    button.style.top = `${newTop}px`;
    button.style.left = `${newLeft}px`;
});

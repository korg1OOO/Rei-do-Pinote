document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || []; /* pega os agendamento antigo dai se nao tiver comeca um array vazio */
    
    agendamentos.push({
        servico: servico,
        data: data,
        hora: hora
    });

    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

    alert("Seu serviço foi agendado!");
    window.location.href = '../html/historico.html';
});
function mostrarAgendamentos() {
    let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    const historyDiv = document.getElementById('services-history');

    if (agendamentos.length > 0) {
        historyDiv.innerHTML = '';
        agendamentos.forEach(appointment => {
            const serviceItem = document.createElement('div');
            serviceItem.className = 'service-item';
            serviceItem.innerHTML = `
                <h3>${appointment.servico}</h3>
                <p>Data: ${appointment.data}</p>
                <p>Hora: ${appointment.hora}</p>
            `;
            historyDiv.appendChild(serviceItem);
        });
    } else {
        historyDiv.innerHTML = "<p>Nenhum serviço agendado ainda.</p>";
    }
}

document.addEventListener('DOMContentLoaded', mostrarAgendamentos);
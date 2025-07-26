// Lista de fichajes simulados
const fichajes = [
  { nombre: 'Empleado 1', entrada: '08:00', salida: '16:00', estado: 'Fichado' },
  { nombre: 'Empleado 2', entrada: '09:00', salida: '17:00', estado: 'Fichado' },
  { nombre: 'Empleado 3', entrada: '', salida: '', estado: 'Sin fichar' },
  { nombre: 'Empleado 4', entrada: '07:30', salida: '15:30', estado: 'Fichado' }
];

// Crear panel de fichajes
function mostrarFichajes() {
  const dashboard = document.getElementById('dashboard');

  fichajes.forEach((empleado) => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <h2>${empleado.nombre}</h2>
      <p><strong>Entrada:</strong> ${empleado.entrada || '—'}</p>
      <p><strong>Salida:</strong> ${empleado.salida || '—'}</p>
      <p><strong>Estado:</strong> ${empleado.estado}</p>
    `;

    dashboard.appendChild(card);
  });
}

window.addEventListener('DOMContentLoaded', mostrarFichajes);

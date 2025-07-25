// Registrar Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('✅ Service Worker registrado'))
    .catch(err => console.error('❌ Error al registrar SW:', err));
}

// Crear gráficos
const ctx1 = document.getElementById('chart1').getContext('2d');
const ctx2 = document.getElementById('chart2').getContext('2d');

new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
    datasets: [{
      label: 'Horas trabajadas',
      data: [8, 7, 9, 6, 8],
      backgroundColor: 'rgba(54, 162, 235, 0.6)'
    }]
  }
});

new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
    datasets: [{
      label: 'Horas trabajadas',
      data: [7, 8, 8, 7, 9],
      backgroundColor: 'rgba(255, 99, 132, 0.6)'
    }]
  }
});

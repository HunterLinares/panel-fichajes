// Datos de ejemplo
const labels = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

const dataEmpleado1 = {
  labels: labels,
  datasets: [{
    label: 'Horas trabajadas',
    data: [8, 7.5, 9, 8, 7],
    backgroundColor: 'rgba(54, 162, 235, 0.6)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
  }]
};

const dataEmpleado2 = {
  labels: labels,
  datasets: [{
    label: 'Horas trabajadas',
    data: [7, 8, 8.5, 7.5, 8],
    backgroundColor: 'rgba(255, 99, 132, 0.6)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};

// Configuración de los gráficos
const config1 = {
  type: 'bar',
  data: dataEmpleado1,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

const config2 = {
  type: 'bar',
  data: dataEmpleado2,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// Renderizar los gráficos
window.addEventListener('DOMContentLoaded', () => {
  const ctx1 = document.getElementById('chart1').getContext('2d');
  const ctx2 = document.getElementById('chart2').getContext('2d');

  new Chart(ctx1, config1);
  new Chart(ctx2, config2);
});

// Etiquetas de los días
const labels = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

// Lista de empleados con sus horas trabajadas
const empleados = [
  { nombre: 'Empleado 1', horas: [8, 7.5, 9, 8, 7] },
  { nombre: 'Empleado 2', horas: [7, 8, 8.5, 7.5, 8] },
  { nombre: 'Empleado 3', horas: [6, 7, 7.5, 8, 6.5] },
  { nombre: 'Empleado 4', horas: [9, 8.5, 9, 9, 8] }
];

// Función para crear tarjetas y gráficos
function crearPanel() {
  const dashboard = document.getElementById('dashboard');

  empleados.forEach((empleado, index) => {
    // Crear tarjeta
    const card = document.createElement('div');
    card.className = 'card';

    const titulo = document.createElement('h2');
    titulo.textContent = empleado.nombre;

    const canvas = document.createElement('canvas');
    canvas.id = `chart${index}`;

    card.appendChild(titulo);
    card.appendChild(canvas);
    dashboard.appendChild(card);

    // Crear gráfico
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Horas trabajadas',
          data: empleado.horas,
          backgroundColor: `rgba(${100 + index * 30}, ${150 - index * 20}, ${200 - index * 10}, 0.6)`,
          borderColor: `rgba(${100 + index * 30}, ${150 - index * 20}, ${200 - index * 10}, 1)`,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
}

// Ejecutar al cargar
window.addEventListener('DOMContentLoaded', crearPanel);

// Blood Pressure Chart
const ctx = document.getElementById('bloodPressureChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Blood Pressure',
            data: [120, 122, 125, 123, 126, 128, 125],
            borderColor: '#3DD598',
            tension: 0.4,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false,
                min: 110,
                max: 130
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Interactivity
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Button clicked!');
    });
});

document.querySelectorAll('.calendar-day').forEach(day => {
    day.addEventListener('click', () => {
        document.querySelector('.calendar-day.active').classList.remove('active');
        day.classList.add('active');
    });
});


// User Profile

// Popup Validation
const pop = document.querySelector("#popup");
const close = document.querySelector(".close");
pop.addEventListener('click', () => {
    document.querySelector(".bg-modal").style.display = "flex"
})
close.addEventListener('click', () => {
    document.querySelector(".bg-modal").style.display = "none"
})

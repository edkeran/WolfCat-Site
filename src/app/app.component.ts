import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.initParticles();
  }
  
  title = 'wolfcat_studios';

  
  initParticles() {
    (window as any).particlesJS("particles-js", {
      particles: {
        number: {
          value: 50, // Puedes ajustar este valor para cambiar la cantidad de partículas
          density: {
            enable: true,
            value_area: 800, // Puedes ajustar este valor para cambiar la dispersión de las partículas
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "star",
        },
        size: {
          value: 6, // Puedes ajustar este valor para cambiar el tamaño de las partículas
        },
        move: {
          enable: true,
          speed: 2, // Puedes ajustar este valor para cambiar la velocidad de movimiento de las partículas
        },
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "repulse" },
        },
      },
      line_linked: {
        enable: false,
      },
    });
  }

}

import { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";

const Reloj = () => {
  const [tiempo, setTiempo] = useState('');
  const [fecha, setFecha] = useState('');

  const digitalClock = () => {
    const f = new Date();
    const dia = String(f.getDate()).padStart(2, '0');
    const mes = String(f.getMonth() + 1).padStart(2, '0');
    const anio = f.getFullYear();
    const diaSemana = f.getDay();

    const timeString = f.toLocaleTimeString();

    const semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const showSemana = semana[diaSemana];

    setTiempo(timeString);
    setFecha(`${dia}-${mes}-${anio} ${showSemana}`);
  };

  useEffect(() => {
    digitalClock(); // Inicializa el reloj
    const intervalId = setInterval(digitalClock, 1000); // Actualiza cada segundo

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar
  }, []);

  return (
    <Container>
    <div className="reloj">
      <p className="tiempo">{tiempo}</p>
      <p className="fecha">{fecha}</p>
    </div>
    </Container>
  );
};

export default Reloj;
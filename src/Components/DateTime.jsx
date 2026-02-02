import { useEffect, useState } from "react";

function Relogio() {
  const [horaAtual, setHoraAtual] = useState("");
  const [saudacao, setSaudacao] = useState("");

  function atualizarHora() {
    const agora = new Date();
    const h = agora.getHours();
    const m = String(agora.getMinutes()).padStart(2, "0");
    const s = String(agora.getSeconds()).padStart(2, "0");

    // Saudação
    if (h < 12) setSaudacao("Bom dia");
    else if (h < 18) setSaudacao("Boa tarde");
    else setSaudacao("Boa noite");

    setHoraAtual(`${String(h).padStart(2, "0")}:${m}`);
  }

  useEffect(() => {
    atualizarHora();
    const intervalo = setInterval(atualizarHora, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div id="relogio">
      <h1>{saudacao}</h1>
      <h1>{horaAtual}</h1>
    </div>
  );
}

export default Relogio;

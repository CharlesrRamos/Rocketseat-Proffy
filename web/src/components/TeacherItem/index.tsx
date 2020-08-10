import React from "react";

import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";
import "./style.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/44650185?s=460&u=c0530b9f74a73a5c67da306122e6f4cfad90b027&v=4"
          alt="Charles Ramos"
        />
        <div>
          <strong>Charles Ramos</strong>
          <span>Fisico</span>
        </div>
      </header>

      <p>
        Entusiasta pelo segredos do universo e sua expansão
        <br />
        <br />
        Apaixonado por destruir as teses loucas sobre a terra plana e te levando
        aos lugares mais lindos da galaxia.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="Icone do Whats" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;

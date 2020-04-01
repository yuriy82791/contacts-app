import React from "react";
import ReactDOM from "react-dom";
import Contacts from "./components/contacts";

const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовский",
    phone: "+380956319521",
    gender: "male"
  },
  {
    firstName: "Робин",
    lastName: "Щербатская",
    phone: "+380931460123",
    gender: "female"
  },
  {
    firstName: "Аномный",
    lastName: "Анонимус",
    phone: "+380666666666"
  },
  {
    firstName: "Лилия",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
  },
  {
    firstName: "Маршэн",
    lastName: "Эриксонян",
    phone: "+380739432123",
    gender: "male"
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбэс",
    phone: "+380956319521",
    gender: "male"
  }
];

ReactDOM.render(
  <React.StrictMode>
    <section className="contacts-wrapper">
      <Contacts contacts={contacts} />
    </section>
  </React.StrictMode>,
  document.getElementById("root")
);

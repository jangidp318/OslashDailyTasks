import React, { useContext } from "react";
import LocaleContext from "./LocaleContext";

const text = {
  en: {
    header: "Home",
    paragraph: `*In a multi-hundred line assembly file, only one comment 80% of the way down - // Gets tricky here. Check out my Github. *In a multi-hundred line assembly file, only one comment 80% of the way down - // Gets tricky here. Albeit an archaic language, C is still relevant for systems programming. Unit test your methods. C is dead. Djikstra is the man. `
  },
  es: {
    header: "Inicio",
    paragraph: `Al momento de escoger cuÃ¡l tecnologÃ­a usar en el frontend de un proyecto nuevo, nos enfrentamos a una delicada e importante decisiÃ³n que va a influir mucho en el futuro de nuestra aplicaciÃ³n, por lo que es importante escoger tecnologÃ­as que complementen y faciliten el desarrollo. Recientemente Facebook hizo pÃºblico ReactJS, una librerÃ­a Javascript de cÃ³digo abierto, que les ha beneficiado en el desarrollo de algunas de sus plataformas, por ejemplo Instagram. `
  }
};

export default function Home() {
  const {locale} = useContext(LocaleContext)
  return (
    <div className="home">
          <React.Fragment>
            <h1>{text[locale].header}</h1>
            <p>{text[locale].paragraph}</p>
          </React.Fragment>
    </div>
  );
}

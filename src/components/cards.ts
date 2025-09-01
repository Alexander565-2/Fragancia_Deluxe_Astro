interface cards_props {
  id: string;
  casaComercial: string;
  Referencia: string;
  Codigo: string;
  Descripcion: string;
  notas: string[];
}

const notas_colors:Record<string,string> = {
  "Acuatica":"#08bfdf",
  "Almizcle":"#f28598",
  "Amaderado":"#ab743e",
  "Chipre":"#7ab050",
  "Citrico":"#eee22e",
  "Cuero":"#5c4533",
  "Especiada":"#fbae2e",
  "Fougere":"#117899",
  "Floral":"#ef6244",
  "Frutal":"#1ca86c",
  "Oriental":"#653186",
  "Vanilla":"#444c4e",
  "Ambar":"#e0293d",
  "Aromatica":"#ced2d5"
}

const create_card = (info_cards: cards_props):HTMLDivElement => {
  const msj_body = `${info_cards.Referencia} - ${info_cards.Codigo} de ${info_cards.casaComercial}`;
  const url_ws =
    "https://wa.me/593998094332?text=Hola%2C%20buenas%20tardes%2C%20vengo%20a%20pedir%20informacion%20por%20este%20producto:%20" +
    encodeURIComponent(msj_body);

  const div_card: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  const img_card: HTMLImageElement = document.createElement(
    "img"
  ) as HTMLImageElement;
  const div_card_body: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  const h5_title_card: HTMLHeadingElement = document.createElement(
    "h5"
  ) as HTMLHeadingElement;
  const p_text_card: HTMLParagraphElement = document.createElement(
    "p"
  ) as HTMLParagraphElement;
  const a_button_card: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;
  const div_img_card:HTMLDivElement = document.createElement("div") as HTMLDivElement;
  const div_notas_card:HTMLDivElement = document.createElement("div") as HTMLDivElement;

  div_card.className = "card col d-flex";
  div_card.style.width = "17rem";

  img_card.src = `/Fragancia_Deluxe_Astro/Perfumes/${info_cards.id}.png`;
  img_card.alt = info_cards.id
  img_card.className = "card-img-top";
  img_card.style.objectFit="cover"
  img_card.style.height="15em"
  div_card.appendChild(img_card);

  div_card_body.className = "card-body";
  h5_title_card.textContent = `${info_cards.Referencia}:${info_cards.Codigo}`;
  h5_title_card.className = "card-title";

  p_text_card.textContent = `${info_cards.Descripcion}`;
  p_text_card.className = "card-text";
  const div_p_card:HTMLDivElement = document.createElement("div") as HTMLDivElement
  div_p_card.className="container overflow-y-auto"
  div_p_card.style.scrollbarWidth="none"
  div_p_card.style.width="14em"
  div_p_card.style.height="6em"
  div_p_card.appendChild(h5_title_card)
  div_p_card.appendChild(p_text_card)
  div_card_body.appendChild(div_p_card);

  div_notas_card.className = "d-flex flex-wrap gap-2 mt-2 overflow-y-auto"
  div_notas_card.style.height="3.8em"
  info_cards.notas.forEach((nota)=>{
    let nota_badge:HTMLSpanElement = document.createElement("span") as HTMLSpanElement;
    nota_badge.className = "badge text-dark"
    nota_badge.style.height = "1.8em"
    nota_badge.style.backgroundColor = `${notas_colors[nota]}`
    nota_badge.textContent=`${nota}`
    div_notas_card.appendChild(nota_badge)
  })

  div_card_body.appendChild(div_notas_card)
  a_button_card.className = "btn btn-primary mt-2";
  a_button_card.href = url_ws;
  a_button_card.textContent = "Comprar";
  div_card_body.appendChild(a_button_card);

  div_card.appendChild(div_card_body);

  return div_card;
};

export default create_card;
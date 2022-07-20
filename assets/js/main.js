const iconsData = [
  {
    url: "./assets/img/icons/htmlIcon.svg",
    alt: "html ícone",
    bgColor: "#FFF",
    textColor: "#F1662A",
  },
  {
    url: "./assets/img/icons/cssIcon.svg",
    alt: "css ícone",
    bgColor: "#33A9DC",
    textColor: "#FFF",
  },
  {
    url: "./assets/img/icons/jsIcon.svg",
    alt: "java script ícone",
    bgColor: "#000000",
    textColor: "#F7DF1E",
  },
  {
    url: "./assets/img/icons/bootstrapIcon.svg",
    alt: "bootstrap ícone",
    bgColor: "#7E13F8",
    textColor: "#FFF",
  },
  {
    url: "./assets/img/icons/sassIcon.svg",
    alt: "sass ícone",
    bgColor: "#FFF",
    textColor: "#CD6799",
  },
  {
    url: "./assets/img/icons/styledIcon.svg",
    alt: "styled ícone",
    bgColor: "#FF6196",
    textColor: "#FFF",
  },
  {
    url: "./assets/img/icons/tsIcon.svg",
    alt: "type script ícone",
    bgColor: "#FFF",
    textColor: "#3178C6",
  },
  {
    url: "./assets/img/icons/reactIcon.svg",
    alt: "react ícone",
    bgColor: "#00D8FF",
    textColor: "#272626",
  },
  {
    url: "./assets/img/icons/firebaseIcon.svg",
    alt: "firebase ícone",
    bgColor: "#FCCA3F",
    textColor: "#272626",
  },
  {
    url: "./assets/img/icons/figmaIcon.svg",
    alt: "figma ícone",
    bgColor: "#0ACF83",
    textColor: "#272626",
  },
  {
    url: "./assets/img/icons/databaseIcon.svg",
    alt: "databases ícone",
    bgColor: "#FFF",
    textColor: "#000000",
  },
  {
    url: "./assets/img/icons/vscodeIcon.svg",
    alt: "vs code ícone",
    bgColor: "#0065A9",
    textColor: "#272626",
  },
  {
    url: "./assets/img/icons/nextIcon.svg",
    alt: "nextJS ícone",
    bgColor: "#272626",
    textColor: "#FFF",
  },
  {
    url: "./assets/img/icons/authIcon.svg",
    alt: "auth ícone",
    bgColor: "#FFF",
    textColor: "#F12A2A",
  },
  {
    url: "./assets/img/icons/nodeIcon.svg",
    alt: "node ícone",
    bgColor: "#000000",
    textColor: "#83CD29",
  },
  {
    url: "./assets/img/icons/apiIcon.svg",
    alt: "APIs ícone",
    bgColor: "#33A9DC",
    textColor: "#FFF",
  },
];
const textData = [
  {
    title: "hello",
    conhecimento: "avançado",
    texto: "cola o texto aki",
  },
  {
    title: "hello",
    conhecimento: "avançado",
    texto: "cola o texto aki",
  },
  {
    title: "titulo2",
    conhecimento: "básico",
    texto: "cola o texto aki",
  },
  {
    title: "titulo2",
    conhecimento: "básico",
    texto: "cola o texto aki",
  },
  {
    title: "titulo2",
    conhecimento: "básico",
    texto: "cola o texto aki",
  },
  {
    title: "titulo2",
    conhecimento: "básico",
    texto: "cola o texto aki",
  },
  {
    title: "titulo2",
    conhecimento: "básico",
    texto: "cola o texto aki",
  },
  {
    title: "titulo2",
    conhecimento: "básico",
    texto: "cola o texto aki",
  },
  {
    title: "titulo2",
    conhecimento: "básico",
    texto: "cola o texto aki",
  },
  {
    title: "titulo2",
    conhecimento: "básico",
    texto: "cola o texto aki",
  },
  {
    title: "titulo2",
    conhecimento: "básico",
    texto: "cola o texto aki",
  },
  {
    title: "titulo2",
    conhecimento: "básico",
    texto: "cola o texto aki",
  },
  {
    title: "titulo2",
    conhecimento: "básico",
    texto: "cola o texto aki",
  },
  {
    title: "titulo2",
    conhecimento: "básico",
    texto: "cola o texto aki",
  },
  {
    title: "titulo2",
    conhecimento: "básico",
    texto: "cola o texto aki",
  },
  {
    title: "titulo2",
    conhecimento: "básico",
    texto: "cola o texto aki",
  },
];

function cursor() {
  const cursor = document.querySelector(".cursor");
  const cursorInner = document.querySelector(".cursor2");

  document.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
  });
  document.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorInner.style.left = x + "px";
    cursorInner.style.top = y + "px";
  });
  document.addEventListener("mouseover", function (e) {
    if (e.target.tagName === "A" || e.target.hasAttribute("draggable")) {
      cursor.style.borderColor = "#c5283d";
    }
  });
  document.addEventListener("mouseout", function (e) {
    if (e.target.tagName === "A" || e.target.hasAttribute("draggable")) {
      cursor.style.borderColor = "black";
    }
  });
  document.addEventListener("click", function () {
    cursorInner.style.width = "20px";
    cursorInner.style.height = "20px";
    setTimeout(() => {
      cursorInner.style.width = "15px";
      cursorInner.style.height = "15px";
    }, 200);
  });
}
cursor();

function logo() {
  const logoContainer = document.querySelector(".logoContainer");
  document.addEventListener("mousemove", function (e) {
    logoContainer.childNodes.forEach((element) => {
      if (element.tagName === "IMG") {
        const x = e.clientX;
        const y = e.clientY;
        const SPEED = Number(element.getAttribute("data-move"));
        moveLogo(element, SPEED, x, y);
      }
    });
  });
}
const moveLogo = (element, SPEED, x, y) => {
  element.style.transform = `translate(${(SPEED * x) / 100}px, ${
    (SPEED * y) / 100
  }px)`;
};
logo();

function drag() {
  let dragged;
  const indicator = document.querySelector(".support");
  const presentation = document.querySelector(".presentation");
  document.addEventListener("dragstart", (event) => {
    dragged = event.target;
    event.target.style.opacity = "0.5";
    indicator.style.width = "4rem";
  });
  document.addEventListener("dragend", (event) => {
    event.target.style.opacity = "1";
    indicator.style.width = "7rem";
  });
  //é necessário a prevenção do evento 'dragover' para poder funcionar o drop em uma div
  document.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  document.addEventListener("drop", (event) => {
    event.preventDefault();
    if (
      event.target.classList.contains("replacement") &&
      dragged.hasAttribute("draggable")
    ) {
      //clonando item
      const newItem = createClone(dragged);
      //adicionando item
      const parent = event.target.parentNode;
      changeChild(parent, event.target, newItem);
      presentationStyle();
    }
    if (
      event.target.classList.contains("presentation") &&
      dragged.hasAttribute("draggable")
    ) {
      const parent = event.target.firstElementChild.lastElementChild;
      const previousElement = parent.lastElementChild;
      //clonando item
      const newItem = createClone(dragged);
      changeChild(parent, previousElement, newItem);
      presentationStyle();
    }
  });
  const createClone = (element) => {
    const newElement = element.cloneNode(true);
    newElement.style.opacity = "1";
    newElement.classList.add("replacement");
    return newElement;
  };
  const changeChild = (parent, remove, add) => {
    parent.removeChild(remove);
    parent.appendChild(add);
  };
  const presentationStyle = () => {
    //animando ação
    presentation.style.transform = `scale(1.05)`;
    setTimeout(() => {
      presentation.style.transform = `scale(1)`;
    }, 200);
    //alterando informações
    changePresentation();
  };
}
drag();

function changePresentation() {
  const currentIcon = document.querySelector(".replacement");
  let currentIconObj;

  const presentation = document.querySelector(".presentation");
  const card = document.querySelector(".card");

  let presentationIndex;
  //função para definir o correto index para o texto apresentado
  iconsData.forEach((icon, index) => {
    const currentIconUrl =
      currentIcon.src.split("/")[currentIcon.src.split("/").length - 1];
    const iconUrl = icon.url.split("/")[icon.url.split("/").length - 1];
    if (currentIconUrl === iconUrl) {
      currentIconObj = icon;
      presentationIndex = index;
    }
  });
  //recuperando o objeto correto
  const currentText = textData[presentationIndex];
  //modificando os texts
  card.firstElementChild.innerHTML = currentText.title;
  presentation.childNodes[5].innerHTML = currentText.conhecimento;
  presentation.childNodes[9].innerHTML = currentText.texto;
  //modificando estilo
  presentation.style.backgroundColor = currentIconObj.bgColor;
  presentation.style.color = currentIconObj.textColor;
}
changePresentation();

function addIcons() {
  const toolsContainer = document.querySelector(".toolsContainer");
  iconsData.forEach((icon) => {
    const IMG = document.createElement("img");
    IMG.src = icon.url;
    IMG.alt = icon.alt;
    IMG.setAttribute("draggable", true);
    toolsContainer.appendChild(IMG);
  });
}
addIcons();

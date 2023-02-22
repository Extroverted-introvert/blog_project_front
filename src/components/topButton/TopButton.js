import React from "react";
import "./TopButton.css";

const theme = {
  body: "linear-gradient(to right, #EDF9FE, #FEFAF9)",
  text: "#001C55",
  button_color: "#FEFAF9",
  highlight: "#A6E1FA",
  dark: "#00072D",
  secondaryText: "#7F8DAA",
  imageHighlight: "#0E6BA8",
  compImgHighlight: "#E6E6E6",
  jacketColor: "#0A2472",
  headerColor: "#0E6BA877",
};

export default function TopButton() {
  function GoUpEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      document.getElementById("topButton").style.visibility = "visible";
    } else {
      document.getElementById("topButton").style.visibility = "hidden";
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  const onMouseEnter = (color, bgColor) => {
    /* For the button */
    const topButton = document.getElementById("topButton");
    topButton.style.color = color;
    topButton.style.backgroundColor = bgColor;

    /* For arrow icon */
    const arrow = document.getElementById("arrow");
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  const onMouseLeave = (color, bgColor) => {
    /* For the button */
    const topButton = document.getElementById("topButton");
    topButton.style.color = color;
    topButton.style.backgroundColor = bgColor;

    /* For arrow icon */
    const arrow = document.getElementById("arrow");
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  const theme = {
    body: "linear-gradient(to right, #EDF9FE, #FEFAF9)",
    text: "#001C55",
    button_color: "#FEFAF9",
    highlight: "#A6E1FA",
    dark: "#00072D",
    secondaryText: "#7F8DAA",
    imageHighlight: "#0E6BA8",
    compImgHighlight: "#E6E6E6",
    jacketColor: "#0A2472",
    headerColor: "#0E6BA877",
  };  

  return (
    <div
      onClick={GoUpEvent}
      id="topButton"
      style={{
        color: theme.body,
        backgroundColor: theme.text,
        border: `solid 1px ${theme.text}`,
      }}
      title="Go up"
      onMouseEnter={() => onMouseEnter(theme.text, theme.button_color)}
      onMouseLeave={() => onMouseLeave(theme.button_color, theme.text)}
    >
      <i class="fas fa-arrow-up" id="arrow" aria-hidden="true" />
    </div>
  );
}

const card = document.querySelector(".box") as HTMLDivElement;

const getMouseDirection = (
  event: MouseEvent,
  targetElement: HTMLDivElement
) => {
  const width = targetElement.offsetWidth;
  const height = targetElement.offsetHeight;

  if (!width || !height) return "";

  const x =
    (event.clientX - targetElement.offsetLeft - width / 2) *
    (width > height ? height / width : 1);
  const y =
    (event.clientY - targetElement.offsetTop - height / 2) *
    (height > width ? width / height : 1);

  const direction =
    Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;

  const directionTexts = ["上", "右", "下", "左"];

  return directionTexts[direction];
};

const handleCardMouseEnter = (event: MouseEvent) => {
  card.innerHTML = getMouseDirection(event, card);
};

const handleCardMouseLeave = () => {
  card.innerHTML = "";
};

card.addEventListener("mouseenter", handleCardMouseEnter);
card.addEventListener("mouseleave", handleCardMouseLeave);

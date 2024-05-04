const container2 = document.getElementById("root");
function customRender(reactElement, container) {
  const element = document.createElement(reactElement.type);
  element.textContent = reactElement.props.children;
  container.appendChild(element);
}

const reactElement = {
  type: "h1",
  props: {
    children: "Hello World!",
  },
};
customRender(reactElement, container2);

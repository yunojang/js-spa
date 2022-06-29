import { render } from "./utils/render";

const App = () => {
  const dom = document.createElement("div");

  render("<div>app</div>", dom);
  return dom;
};

export default App;

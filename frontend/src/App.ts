import Route from './route';

interface AppProps {
  $target: HTMLElement;
}

function App({ $target }: AppProps) {
  this.render = () => {
    new Route({ $target }).render();
  };
}

export default App;

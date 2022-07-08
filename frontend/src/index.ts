import App from './App';

const root = document.getElementById('app') ?? document.body;
new App({ $target: root }).render();

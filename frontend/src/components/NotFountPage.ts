function NotFound({ $target }) {
  const $dom = document.createElement('div');
  const { href } = location;

  $dom.innerHTML = `
    <div>
      <h1>404 NotFound</h1>
      <span>${href} is invalid URL, Please check your URL</span>
    </div>
  `;

  this.render = () => {
    $target.append($dom);
  };
}

export default NotFound;

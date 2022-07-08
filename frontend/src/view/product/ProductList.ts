function ProductList({ $target }) {
  const $dom = document.createElement('div');
  $dom.innerHTML = `
    <div>
      <h1>상품 목록</h1>
    </div>
  `;

  this.render = () => {
    $target.append($dom);
  };
}

export default ProductList;

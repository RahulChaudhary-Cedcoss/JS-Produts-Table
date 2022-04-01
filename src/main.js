var productarray = [];
function myFunction() {
  var Id = document.getElementById("pID").value;
  var Name = document.getElementById("pName").value;
  var Price = document.getElementById("pPrice").value;


  var product = {
    ProductId: Id,
    ProductName: Name,
    ProductPrice: Price,
  };
  productarray.push(product);
  html =
    "<table><tr><th>Product Id</th><th>Product Name</th><th>Product Price</th></tr>";
  productarray.forEach((element) => {
    html +=
      "<tr><td>" +
      element.ProductId +
      "</td><td>" +
      element.ProductName +
      "</td><td>" +
      element.ProductPrice +
      "</td></tr>";
  });
  html += "</table>";
  document.getElementById("Display").innerHTML = html;
}

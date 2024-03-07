import Productdetails from "./Productdetails";

function Product() {
  return (
    <div className="bg-info-subtle">
      <div className="container">
        <div className="row">
          <Productdetails name="IPHONE 15" Price="79990" />
          <Productdetails name="IPHONE 15 PLUS" Price="89990" />
          <Productdetails name="IPHONE 15 PRO" Price="110000" />
          <Productdetails name="IPHONE 15 PRO MAX" Price="151000" />
          <Productdetails name="IPHONE 14 PRO" Price="93990" />
          <Productdetails name="IPHONE 14 PRO MAX" Price="105000" />
        </div>
      </div>
    </div>
  );
}

export default Product;

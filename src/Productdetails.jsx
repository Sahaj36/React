function Productdetails(props) {
  const {name, Price} = props

  return (
    <div className="col-md-4 mt-5 mb-5">
      <div className="card bg-body-tertiary" style={{ width: "18rem" }}>
        {/* <img
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692923777972"
          className="card-img-top"
          alt="..."
        /> */}
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6>Price : {Price}</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            View More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Productdetails;

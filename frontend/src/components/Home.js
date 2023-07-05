import React from 'react';




const Carousel = ()=>{
    return(
        <div
  id="carouselExampleSlidesOnly"
  className="carousel slide"
  data-mdb-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img
        src="/images/carousel.png"
        className="d-block w-100"
        alt="Wild Landscape"
      />
    </div>
    <div className="carousel-item">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
        className="d-block w-100"
        alt="Camera"
      />
    </div>
    <div className="carousel-item">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
        className="d-block w-100"
        alt="Exotic Fruits"
      />
    </div>
  </div>
</div>

    );
    
};

const Why = ()=>{
  return(
<div className="projcard-container container-fluid">
  <div className="projcard projcard-blue">
    <div className="projcard-innerbox">
      <img
        className="projcard-img"
        src="/images/web.jpg"
      />
      <div className="projcard-textbox">
        <div className="projcard-title"><h1 className="underline-heading">Who We Are?</h1>
</div>
        <div className="projcard-subtitle">
          {/* This explains the card in more detail */}
        </div>
        <div className="projcard-bar" />
        <div className="projcard-description">
          
          Our herbal product offers a range of benefits. It is made from natural ingredients, free from harmful chemicals. Our product promotes overall wellness, providing relief from common ailments. With its gentle yet effective formula, it supports the body's natural healing processes. Experience the power of nature with our herbal product.
        </div>
        <div>

          <a class="btn btn-success View-Product " href="/product" role="button">View Product</a>

          </div>
      </div>
    </div>
  </div>
</div>


  );
};

// home product

function Viewproduct() {
  return (
    <div className="section-header text-center mx-auto mb-5 wow fadeInUp"
    data-wow-delay="0.1s"
>
    <h1 className="display-5 mb-3 underline-heading">Latest Products</h1><br></br><br></br>
    
    <div className="row">
      <div className="col-md-3 col-sm-6">
        <div className="product-grids">
          <div className="product-images">
            <a href="#" className="images">
              <img className="pic-1" src="/images/09.jpg" />
            </a>
            <ul className="product-link">
              <li>
                <a href="/product">
                  <i className="fa fa-eye"></i>View product
                </a>
              </li>
            </ul>
          </div>
          <div className="product-contents">
            <h3 className="titles">
              <a href="#">Hair Oil</a>
            </h3>
            <div className="prices">LKR 700.00</div>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="product-grids">
          <div className="product-images">
            <a href="#" className="images">
              <img className="pic-1" src="/images/404.jpg" alt="Product 2" />
            </a>
            <ul className="product-link">
              <li>
                <a href="/product">
                  <i className="fa fa-eye"></i>View products
                </a>
              </li>
            </ul>
          </div>
          <div className="product-contents">
            <h3 className="titles">
              <a href="#">Tooth Powder</a>
            </h3>
            
            <div className="prices">LKR 100.00</div>
            
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="product-grids">
          <div className="product-images">
            <a href="#" className="images">
              <img className="pic-1" src="/images/14.jpg" alt="Product 2" />
            </a>
            <ul className="product-link">
              <li>
                <a href="/product">
                  <i className="fa fa-eye"></i>View products
                </a>
              </li>
            </ul>
          </div>
          <div className="product-contents">
            <h3 className="titles">
              <a href="#">Hair Powder</a>
            </h3>
            
            <div className="prices">LKR 150.00</div>
            
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="product-grids">
          <div className="product-images">
            <a href="#" className="images">
              <img className="pic-1" src="/images/ger.jpeg" alt="Product 2" />
            </a>
            <ul className="product-link">
              <li>
                <a href="/product">
                  <i className="fa fa-eye"></i>View products
                </a>
              </li>
            </ul>
          </div>
          <div className="product-contents">
            <h3 className="titles">
              <a href="#">Dry Ginger</a>
            </h3>
            
            <div className="prices">LKR 250.00</div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

// benifits
function MyComponent(){
  return(
    <div className="section-header text-center mx-auto mb-5 wow fadeInUp"
    data-wow-delay="0.1s">
      <h1 className="display-5 mb-3 underline-heading">Why Auwshi? </h1><br></br><br></br>
<div className="row row-cols-1 row-cols-md-3 g-4">
<div className="col">
  <div className="card h-100">
    <img id="figure" src="https://media.istockphoto.com/id/1149801914/photo/facial-body-cosmetic-products-leaves-and-flowers-blossom-on-white-desktop-background-whith.jpg?s=612x612&w=0&k=20&c=VPKLROvVYuwyzjKqESCw4lMbPtZaYIjPo71UhbHg_I4=" />
    <div className="card-body">
      <h5 className="card-title">Natural and Organic</h5>
      <p className="card-text">
      Herbal products are often considered more natural and organic compared to synthetic medications. 
      </p>
    </div>
    {/* <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div> */}
  </div>
</div>
<div className="col">
  <div className="card h-100">
    <img id="figure" src="https://www.perfect365.com/wp-content/uploads/shutterstock_486713719.jpg" />
    <div className="card-body">
      <h5 className="card-title">Fewer Side Effects</h5>
      <p className="card-text">Herbal products are generally believed to have fewer side effects compared to synthetic drugs</p>
    </div>
    {/* <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div> */}
  </div>
</div>
<div className="col">
  <div className="card h-100">
    <img id="figure" src="https://img.freepik.com/premium-photo/flat-lay-composition-with-cosmetic-products-natural-organic-botany-alternative-herb-medicine-natural-skin-care-beauty-products-creation-natural-cosmetics-mortar_121946-593.jpg" />
    <div className="card-body">
      <h5 className="card-title">Potential Health Benefits</h5>
      <p className="card-text">
      Different herbal products are believed to have various health benefits.
      </p>
    </div>
    {/* <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div> */}
  </div>
</div>
</div>
</div>
  );
}

    
  



function App (){

    return(
       <div>
         <Carousel></Carousel>
         <br></br><br></br>
         <Why></Why>
         <br></br><br></br>
         <MyComponent></MyComponent>
         <br></br><br></br>
         <Viewproduct/>
       </div>
    );
};
export default App;

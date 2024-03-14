import { Link, NavLink } from "react-router-dom";
export default function Product_overview_page(){
    return(
<>
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="title" content="JUHUU" />
  <meta
    name="description"
    content="We are a company that was founded with the aim of creating a digital IoT app ecosystem without barriers. We all unite the common passion to create something new and to provide our customers an optimal system for their products."
  />
  <meta name="keywords" content="juhuu, iot, bikebox" />
  <meta name="robots" content="index, follow" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="language" content="German" />
  {/* Add these links in your <head> section */}
  {/* juhuu icon */}
  <link rel="stylesheet" href="assets/css/index.css" />
  <link rel="icon" href="assets/images/juhuu_logo.png" type="image/x-icon" />
  <title>Product Overview page</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    className="bootstrap-5"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
  />
  <link rel="stylesheet" href="assets/css/style.css" />
  {/* Font Awesome */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  />
  {/* Font Awesome */}
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
  />
  
  <div
    className="offcanvas offcanvas-end"
    tabIndex={-1}
    id="offcanvasMenu"
    aria-labelledby="offcanvasMenuLabel"
  >
    <div className="offcanvas-header bg-dark">
      <div className="input-group">
        <input
          type="search"
          className="form-control  border-0"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span className="input-group-text" id="search-addon">
          <i className="bi bi-search" />
        </span>
      </div>
      <i
        className="bi bi-x-lg ms-3"
        type="button"
        style={{ color: "white" }}
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body bg-dark">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <i className="bi bi-archive" />
            Wartehallen
          </a>
        </li>
        <li className="nav-item off-canvas-nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-p-square me-3" /> Radparksysteme
          </a>
        </li>
        <li className="nav-item off-canvas-nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-lock me-3" /> Zugangssysteme
          </a>
        </li>
        <li className="nav-item off-canvas-nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-box me-3" /> Other Products
          </a>
        </li>
        <li className="nav-item off-canvas-nav-item">
          <a className="nav-link" href="#">
            {" "}
            Aktuelles
          </a>
        </li>
        <li className="nav-item off-canvas-nav-item">
          <div className="accordion nav-link px-0" id="accordionExample">
            <div className="accordion-item bg-transparent text-white border-0 px-0">
              <h2 className="accordion-header  bg-transparent">
                <button
                  className="accordion-button collapsed bg-transparent text-white px-3 py-2 accordion-button-off off-canvas-accordion"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Unternehmen
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body bg-transparent">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item off-canvas-nav-item">
          <a href="#" className="nav-link">
            Karriere
          </a>
        </li>
        <li className="nav-item off-canvas-nav-item">
          <div className="accordion  nav-link px-0" id="accordionExample">
            <div className="accordion-item bg-transparent text-white border-0 px-0">
              <h2 className="accordion-header bg-transparent">
                <button
                  className="accordion-button collapsed bg-transparent text-white px-3 py-2 accordion-button-off off-canvas-accordion"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Service und Leistungen
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item off-canvas-nav-item">
          <a className="nav-link" href="#">
            {" "}
            DB Bike+Ride-Offensive
          </a>
        </li>
        <li className="nav-item off-canvas-nav-item">
          <a className="nav-link" href="#">
            {" "}
            Referenzprojekte
          </a>
        </li>
        <li className="nav-item off-canvas-nav-item">
          <a className="nav-link" href="#">
            {" "}
            Kontakt
          </a>
        </li>
      </ul>
    </div>
  </div>
  <section className="product-details">
    <div className="container">
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
          <Link to="/">
              <span>Kienzler</span>
            </Link>
          </li>
          <li className="breadcrumb-item active">
            <span>Radparksysteme</span>
          </li>
        </ol>
      </nav>
      <div className="Beschreibung my-5">
        <h1>Beschreibung</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint rem
          deleniti nostrum, perspiciatis aspernatur eos! Deserunt veniam fugiat
          odio error similique nihil, nisi dicta soluta, voluptatum quaerat
          tempore laudantium. Dolorem asperiores officiis nemo excepturi
          pariatur omnis, inventore cum, exercitationem ex similique corporis.
          Sapiente, provident quaerat culpa ducimus quod ipsam rem veritatis eum
          illum ipsum consectetur corrupti cum, iure officia?
        </p>
        Dolorem asperiores officiis nemo excepturi pariatur omnis, inventore
        cum, exercitationem ex similique corporis. Sapiente, provident quaerat
        culpa ducimus quod ipsam rem veritatis eum illum ipsum consectetur
        corrupti cum, iure officia?
        <p />
      </div>
      <div className="row d-flex my-5">
        <h1>Beschreibung</h1>
        <div className="col mt-3">
          <div className="btn border border-5 px-5 mx-2">Digital</div>
          <div className="btn border border-5 px-5 mx-2">Analog</div>
          <div className="btn border border-5 px-5 mx-2">Ausstattung</div>
        </div>
      </div>
      <div className="Digital my-5">
        <h1>Digital</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint rem
          deleniti nostrum, perspiciatis aspernatur eos! Deserunt veniam fugiat
          odio error similique nihil, nisi dicta soluta, voluptatum quaerat
          tempore laudantium. Dolorem asperiores officiis nemo excepturi
          pariatur omnis, inventore cum, exercitationem ex similique corporis.
          Sapiente, provident quaerat culpa ducimus quod ipsam rem veritatis eum
          illum ipsum consectetur corrupti cum, iure officia? Dolorem asperiores
          officiis nemo excepturi pariatur omnis, inventore cum, exercitationem
          ex similique corporis. Sapiente, provident quaerat culpa ducimus quod
          ipsam rem veritatis eum illum ipsum consectetur corrupti cum, iure
          officia?
        </p>
        <div id="carouselExampleIndicators" className="carousel slide mt-5">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row carousel-product">
                <div className="card col mx-2">
                  <img
                    src="./assets/images/Bike-Container.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4>Bike and Ride box</h4>
                    <h4>B1 Cubes Einstockig</h4>
                    <ul>
                      <li>
                        Flexible Module System for furrhader &amp; E-bikes
                      </li>
                      <li>sichersters Radparksystem durch Einzelboxen</li>
                      <li>Empfohlene ADFC-Qualitat nach DIN</li>
                    </ul>
                    <button className="btn container-fluid bg-dark mt-2 text-white ">
                      Buy this Product
                    </button>
                  </div>
                </div>
                <div className="card col mx-2">
                  <img
                    src="./assets/images/Bike-Container.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4>Bike and Ride box</h4>
                    <h4>B1 Cubes Einstockig</h4>
                    <ul>
                      <li>
                        Flexible Module System for furrhader &amp; E-bikes
                      </li>
                      <li>sichersters Radparksystem durch Einzelboxen</li>
                      <li>Empfohlene ADFC-Qualitat nach DIN</li>
                    </ul>
                    <button className="btn container-fluid bg-dark mt-2 text-white ">
                      Buy this Product
                    </button>
                  </div>
                </div>
                <div className="card col mx-2">
                  <img
                    src="./assets/images/Bike-Container.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4>Bike and Ride box</h4>
                    <h4>B1 Cubes Einstockig</h4>
                    <ul>
                      <li>
                        Flexible Module System for furrhader &amp; E-bikes
                      </li>
                      <li>sichersters Radparksystem durch Einzelboxen</li>
                      <li>Empfohlene ADFC-Qualitat nach DIN</li>
                    </ul>
                    <button className="btn container-fluid bg-dark mt-2 text-white ">
                      Buy this Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row carousel-product">
                <div className="card col mx-3">
                  <img
                    src="./assets/images/Bike-Container.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4>Bike and Ride box</h4>
                    <h4>B1 Cubes Einstockig</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div className="card col mx-3">
                  <img
                    src="./assets/images/Bike-Container.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4>Bike and Ride box</h4>
                    <h4>B1 Cubes Einstockig</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div className="card col mx-3">
                  <img
                    src="./assets/images/Bike-Container.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4>Bike and Ride box</h4>
                    <h4>B1 Cubes Einstockig</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row carousel-product">
                <div className="card col mx-3">
                  <img
                    src="./assets/images/Bike-Container.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4>Bike and Ride box</h4>
                    <h4>B1 Cubes Einstockig</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div className="card col mx-3">
                  <img
                    src="./assets/images/Bike-Container.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4>Bike and Ride box</h4>
                    <h4>B1 Cubes Einstockig</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div className="card col mx-3">
                  <img
                    src="./assets/images/Bike-Container.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4>Bike and Ride box</h4>
                    <h4>B1 Cubes Einstockig</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="bi bi-arrow-left-circle-fill text-black fs-1 rounded-5"
              aria-hidden="true"
            />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="bi bi-arrow-right-circle-fill text-black fs-1 rounded-5"
              aria-hidden="true"
            />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="Analogu pt-5 my-5">
        <h1>Analogue</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint rem
          deleniti nostrum, perspiciatis aspernatur eos! Deserunt veniam fugiat
          odio error similique nihil, nisi dicta soluta, voluptatum quaerat
          tempore laudantium. Dolorem asperiores officiis nemo excepturi
          pariatur omnis, inventore cum, exercitationem ex similique corporis.
          Sapiente, provident quaerat culpa ducimus quod ipsam rem veritatis eum
          illum ipsum consectetur corrupti cum, iure officia? Dolorem asperiores
          officiis nemo excepturi pariatur omnis, inventore cum, exercitationem
          ex similique corporis. Sapiente, provident quaerat culpa ducimus quod
          ipsam rem veritatis eum illum ipsum consectetur corrupti cum, iure
          officia?
        </p>
        <div id="carouselExampleIndicators" className="carousel slide mt-5">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row carousel-product">
                <div className="card col mx-2">
                  <img
                    src="./assets/images/Bike-Container.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4>Bike and Ride box</h4>
                    <h4>B1 Cubes Einstockig</h4>
                    <ul>
                      <li>
                        Flexible Module System for furrhader &amp; E-bikes
                      </li>
                      <li>sichersters Radparksystem durch Einzelboxen</li>
                      <li>Empfohlene ADFC-Qualitat nach DIN</li>
                    </ul>
                    <button className="btn container-fluid bg-dark mt-2 text-white ">
                      Buy this Product
                    </button>
                  </div>
                </div>
                <div className="card col mx-2">
                  <img
                    src="./assets/images/Bike-Container.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4>Bike and Ride box</h4>
                    <h4>B1 Cubes Einstockig</h4>
                    <ul>
                      <li>
                        Flexible Module System for furrhader &amp; E-bikes
                      </li>
                      <li>sichersters Radparksystem durch Einzelboxen</li>
                      <li>Empfohlene ADFC-Qualitat nach DIN</li>
                    </ul>
                    <button className="btn container-fluid bg-dark mt-2 text-white ">
                      Buy this Product
                    </button>
                  </div>
                </div>
                <div className="card col mx-2">
                  <img
                    src="./assets/images/Bike-Container.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4>Bike and Ride box</h4>
                    <h4>B1 Cubes Einstockig</h4>
                    <ul>
                      <li>
                        Flexible Module System for furrhader &amp; E-bikes
                      </li>
                      <li>sichersters Radparksystem durch Einzelboxen</li>
                      <li>Empfohlene ADFC-Qualitat nach DIN</li>
                    </ul>
                    <button className="btn container-fluid bg-dark mt-2 text-white ">
                      Buy this Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row carousel-product">
                <div className="card col mx-3">
                  <img
                    src="./assets/images/Bike-Container.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4>Bike and Ride box</h4>
                    <h4>B1 Cubes Einstockig</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div className="card col mx-3">
                  <img
                    src="./assets/images/Bike-Container.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4>Bike and Ride box</h4>
                    <h4>B1 Cubes Einstockig</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div className="card col mx-3">
                  <img
                    src="./assets/images/Bike-Container.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4>Bike and Ride box</h4>
                    <h4>B1 Cubes Einstockig</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row carousel-product">
                <div className="card col mx-3">
                  <img
                    src="./assets/images/Bike-Container.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4>Bike and Ride box</h4>
                    <h4>B1 Cubes Einstockig</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div className="card col mx-3">
                  <img
                    src="./assets/images/Bike-Container.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4>Bike and Ride box</h4>
                    <h4>B1 Cubes Einstockig</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div className="card col mx-3">
                  <img
                    src="./assets/images/Bike-Container.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4>Bike and Ride box</h4>
                    <h4>B1 Cubes Einstockig</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="bi bi-arrow-left-circle-fill text-black fs-1 rounded-5"
              aria-hidden="true"
            />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="bi bi-arrow-right-circle-fill text-black fs-1 rounded-5"
              aria-hidden="true"
            />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-5">
          <h1 className="heading-section" style={{ fontWeight: "bolder" }}>
            Kontakt
          </h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="wrapper">
            <div className="row mb-5">
              <div className="col-md-3">
                <div className="dbox w-100 text-center">
                  <div className="">
                    <a
                      href="mailto:office@juhuu.app"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <span
                        className="fa fa-envelope fa-3x"
                        style={{ marginBottom: 10 }}
                      />
                    </a>
                  </div>
                  <a
                    href="mailto:office@juhuu.app"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="text">
                      <p> office@juhuu.app</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dbox w-100 text-center">
                  <div className="">
                    <a
                      href="tel:+436609919009"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <span
                        className="fa fa-phone fa-3x"
                        style={{ marginBottom: 10 }}
                      />
                    </a>
                  </div>
                  <a
                    href="tel:+436609919009"
                    style={{ textDecoration: "none", color: "black" }}
                  ></a>
                  <div className="text">
                    <a
                      href="tel:+436609919009"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <p> +43&nbsp;660&nbsp;9919&nbsp;009 </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dbox w-100 text-center">
                  <div className="">
                    <a
                      href="https://www.linkedin.com/company/juhuu/?originalSubdomain=at"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {" "}
                      <span
                        className="fab fa-linkedin fa-3x"
                        style={{ marginBottom: 10 }}
                      />
                    </a>
                  </div>
                  <a
                    href="https://www.linkedin.com/company/juhuu/?originalSubdomain=at"
                    style={{ textDecoration: "none", color: "black" }}
                  ></a>
                  <div className="text">
                    <a
                      href="https://www.linkedin.com/company/juhuu/?originalSubdomain=at"
                      style={{ textDecoration: "none", color: "black" }}
                    ></a>
                    <p>
                      <a
                        href="https://www.linkedin.com/company/juhuu/?originalSubdomain=at"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        @juhuu
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dbox w-100 text-center">
                  <div className="">
                    <a
                      href="https://www.instagram.com/juhuu.app/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <span
                        className="fa-brands fa-instagram fa-3x"
                        style={{ marginBottom: 10 }}
                      />
                    </a>
                  </div>
                  <a
                    href="https://www.instagram.com/juhuu.app/"
                    style={{ textDecoration: "none", color: "black" }}
                  ></a>
                  <div className="text">
                    <a
                      href="https://www.instagram.com/juhuu.app/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <p>@juhuu_app</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-md-7">
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h4 className="mb-4" id="get-in-touch-sec3-h1">
                    Contact Us
                  </h4>
                  <div id="form-message-warning" className="mb-4" />
                  <div id="form-message-success" className="mb-4">
                    <p id="get-in-touch-sec3-p">
                      Your message was sent, thank you!
                    </p>
                  </div>
                  <form id="contact" className="row">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            className="label"
                            htmlFor="vorname"
                            id="get-in-touch-sec3-h1_h1"
                          >
                            Vorname
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="vorname"
                            id="vorname"
                            placeholder="Vorname"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            className="label"
                            htmlFor="nachname"
                            id="get-in-touch-sec3-h1_h2"
                          >
                            Nachname
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="nachname"
                            id="nachname"
                            placeholder="Nachname"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            className="label"
                            htmlFor="email"
                            id="get-in-touch-sec3-h1_h4"
                          >
                            E-mail
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="E-mail"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label
                            className="label"
                            htmlFor="subject"
                            id="get-in-touch-sec3-h1_h4"
                          >
                            Firma
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="subject"
                            id="firma"
                            placeholder="Firma"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label
                            className="label"
                            htmlFor="#"
                            id="get-in-touch-sec3-h1_h5"
                          >
                            Message
                          </label>
                          <textarea
                            name="message"
                            className="form-control"
                            id="message"
                            cols={30}
                            rows={4}
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div
                        className="g-recaptcha"
                        data-sitekey="6Ldg-ccoAAAAACGSOy0mXeMkyySJI_rC4IHFmwvq"
                        style={{ marginBottom: 10 }}
                      />
                      <div
                        className="error-message"
                        style={{ color: "red !important" }}
                      />
                      <div
                        className="success-popup"
                        style={{ display: "none", color: "green !important" }}
                      >
                        <p id="get-in-touch-sec3-p_p1">
                          Your email was sent successfully!
                        </p>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            defaultValue="ABSENDEN"
                            className="btn btn-primary"
                            style={{ backgroundColor: "#881BFB !important" }}
                            onclick="sendMail()"
                          />
                          <div className="submitting" />
                        </div>
                      </div>
                      <p id="get-in-touch-sec3-p_p2">
                        Ich stimme zu, dass meine Angaben zur Beantwortung
                        meiner Anfrage erhoben und verarbeitet werden. Weitere
                        Informationen finden Sie in der Datenschutzerklärung.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-5 d-flex align-items-stretch form-img">
                <div
                  className="info-wrap w-100 p-5 img"
                  style={{ backgroundImage: "url(assets/images/logo.jpg)" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="newsletter-section">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="text-content">
          <h4>
            <i className="bi bi-newspaper" /> Jetzt zum vierteljährlichen
            Newsletter anmelden.
          </h4>
        </div>
        <div className="action-btn">
          <a href="#" className="btn btn-link bg-white text-dark">
            <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* <footer class="footer">
  <div class="container">
      <h6>Starten wir gemeinsam in eine mobile Zukunft? Sprechen Sie uns an!</h6>
      <div class="row my-5">
          <div class="col-4">
              <h5 class="nav-title">For joint projects:</h5>
              <ul class="nav flex-column">
                  <li class="nav-item"><a href="#" class="nav-link"><i class="bi bi-telephone"></i> +49 (0)7831
                          788-0</a></li>
                  <li class="nav-item"><a href="#" class="nav-link"><i class="bi bi-envelope"></i>
                          info(at)kienzler.com</a></li>
              </ul>
          </div>

          <div class="col-4">
              <h5 class="nav-title">For shared career goals:</h5>
              <ul class="nav flex-column">
                  <li class="nav-item"><a href="#" class="nav-link"><i class="bi bi-chevron-right"></i> Our job
                          advertisements</a></li>
                  <li class="nav-item"><a href="#" class="nav-link"><i class="bi bi-chevron-right"></i>
                          personal(at)kienzler.com</a></li>
              </ul>
          </div>

          <div class="col-4">
              <div class="d-flex media-flex">
                  <div class="media-img me-3">
                      <img src="https://www.kienzler.com/typo3conf/ext/kienzler/Resources/Public/img/icon_siegel.png"
                          alt="" />
                  </div>
                  <div class="media-content">
                      <h5>Quality from the Black Forest</h5>
                      <p>Our products are produced in the Kinzigtal in the Black Forest.</p>
                  </div>
              </div>

          </div>
      </div>
  </div>
  <div class="container">
      <div class="d-flex justify-content-between align-items-center">
          <ul class="nav mini-nav">
              <li class="nav-item">
                  <a class="nav-link" href="#">imprint</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">data protection</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
              </li>
          </ul>
          <ul class="nav social-nav">
              <li class="nav-item">
                  <a class="nav-link" href="#"><i class="bi bi-facebook"></i></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#"><i class="bi bi-instagram"></i></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#"><i class="bi bi-linkedin"></i></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#"><i class="bi bi-twitter-x"></i></a>
              </li>
          </ul>
      </div>
  </div>

    </footer> */}
  <div className="containerfooter container-fluid p-0">
    <div className="container-fluid p-0 ">
      {/* Footer */}
      <footer
        className="text-center text-lg-start text-black"
        style={{ backgroundColor: "#f3e8fa" }}
      >
        <section className="container">
          <div className="container text-center text-md-start mt-0 pt-5">
            {/* Grid row */}
            <div className="row mt-5">
              {/* Grid column */}
              <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-1">
                {/* Content */}
                <div className="logo2 text-left">
                  <a href="./index.html">
                    <img
                      src="./assets/images/juhuu_logo.webp"
                      alt="Logo"
                      style={{ height: 50, width: "auto" }}
                    />
                  </a>
                </div>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                />
                <p id="home-footer-p">Werde Teil der Community!</p>
                <div>
                  <a
                    href="https://www.facebook.com/people/JUHUU-BikeBox/100066980422418/"
                    className="text-black me-4"
                    aria-label="Over facebook page"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCvnF_0V1OPodUzXXk1Vu-5w"
                    className="text-black me-4"
                    aria-label="Over youtube page"
                  >
                    <i className="fab fa-youtube" />
                  </a>
                  <a
                    href="https://www.instagram.com/juhuu.app/"
                    className="text-black me-4"
                    aria-label="Over instagram page"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/juhuu/?originalSubdomain=at"
                    className="text-black me-4"
                    aria-label="Over Linkedin page"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-1">
                {/* Links */}
                <h2
                  className="text-uppercase fw-bold"
                  style={{ fontSize: 15 }}
                  id="home-footer-h2"
                >
                  JUHUU BikeBox GmbH
                </h2>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                />
                <a
                  href="tel:+436609919009"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p>
                    <i className="fas fa-phone mr-3" />{" "}
                    +43&nbsp;660&nbsp;9919&nbsp;009
                  </p>
                </a>
                <a
                  href="mailto:office@juhuu.app"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p>
                    <i className="fas fa-envelope mr-3" /> office@juhuu.app
                  </p>
                </a>
                <a
                  href="https://www.google.at/maps/place/Treustra%C3%9Fe+22-24,+1200+Wien,+%C3%96sterreich/@48.2286409,16.3668449,17z/data=!3m1!4b1!4m6!3m5!1s0x476d07b45e9087e1:0x5bde630233712e59!8m2!3d48.2286409!4d16.3668449!16s%2Fg%2F11c5dqbbrw?hl=de&entry=ttu"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <i className="fas fa-home mr-3" />
                  Treustraße 22-24, 1200
                  <p>Wien Austria</p>
                </a>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2">
                {/* Links */}
                <h2
                  className="text-uppercase fw-bold"
                  style={{ fontSize: 15 }}
                  id="home-footer-h2_2"
                >
                  Wichtiges
                </h2>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                />
                <a
                  href="https://docs.juhuu.app/agb"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p id="home-footer-p_1">
                    <i className="text-black" /> AGB
                  </p>
                </a>
                <a
                  href="https://juhuu-bikebox.at/en/legal"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p id="home-footer-p_2">
                    <i className="text-black" /> Datenschutz
                  </p>
                </a>
                <a
                  href="https://juhuu-bikebox.at/en/legal"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p id="home-footer-p_3">
                    <i className="text-black" /> Impressum
                  </p>
                </a>
                <a
                  href="https://juhuu-bikebox.at/en/legal"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p id="home-footer-p_4">
                    <i className="text-black" /> Credits
                  </p>
                </a>
              </div>
              <div className="col-md-5 col-lg-2 col-xl-2 mx-auto mb-2">
                <h2
                  className="text-uppercase fw-bold"
                  style={{ fontSize: 15 }}
                  id="home-footer-h2_3"
                >
                  Download
                </h2>
                <hr
                  className="mt-0 d-inline-block mx-auto"
                  style={{ width: 50, backgroundColor: "#7c4dff", height: 2 }}
                />
                <p>
                  <i className="text-black" />
                  <a href="https://play.google.com/store/apps/details?id=com.juhuu_bikebox.juhuu">
                    <img
                      src="./assets/images/google_play_download.webp"
                      alt="google_play_download"
                      className="googleplay"
                      style={{ width: 120, height: "auto" }}
                    />
                  </a>
                </p>
                <p>
                  <i className="text-black" />
                  <a href="https://apps.apple.com/at/app/juhuu-bikebox/id1603108125">
                    <img
                      src="./assets/images/app_store_download.webp"
                      alt="app_store_download"
                      className="appstore"
                      style={{ width: 120, height: "auto" }}
                    />
                  </a>
                </p>
                <p className="text-nowrap" id="home-footer-p_5">
                  <a href="https://docs.juhuu.app/apk" className="text-black">
                    APK herunterladen
                  </a>
                </p>
              </div>
              {/* Grid column for Partner von section */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
                <h2
                  className="text-uppercase fw-bold footerheading"
                  style={{ fontSize: 15 }}
                  id="home-footer-h2_4"
                >
                  Partner von
                </h2>
                <hr
                  className="mt-0 d-inline-block mx-auto"
                  style={{ width: 50, backgroundColor: "#7c4dff", height: 2 }}
                />
                <p>
                  <i className="text-black" />
                  <a href="https://www.a1.net/">
                    <img
                      src="./assets/images/a1.webp"
                      alt="a1"
                      className="a1"
                      style={{ width: 120, height: "auto" }}
                    />
                  </a>
                </p>
              </div>
            </div>
            <div
              className="text-left p-3 pb-4 footer"
              style={{ backgroundColor: "#f3e8fa" }}
            >
              © <span id="copyright-year">2024</span> Copyright: JUHUU Bikebox
              GmbH
              <p className="text-black" href="https://mdbootstrap.com/">
                Apple, the Apple logo, iPhone, and iPad are trademarks of Apple
                Inc., registered in the U.S and other countries. App Store is a
                service mark of Apple Inc. Google Play and the Google Play logo
                are trademarks of Google LLC. All other trademarks are the
                property of their respective owners.
              </p>
            </div>
          </div>
        </section>
      </footer>
    </div>
  </div>
</>





</>
    );
}
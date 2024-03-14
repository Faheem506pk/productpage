import { Link, NavLink } from "react-router-dom";



export default function Product_overview_page(){
    return(
<>

  <section className="main-product-slider">
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
          <Link to="/">
              <span>Juhuu</span>
              </Link>
          </li>
          <li className="breadcrumb-item">
          <Link to="/">
            
              <span>Fahrradparksysteme</span>
            
            </Link>
          </li>
          <li className="breadcrumb-item active">
            <span>Bike and Ride Box B2 Cargo Einstöckig</span>
          </li>
        </ol>
      </nav>
      <h1 className="h2 product-title">
        <span>Bike and Ride Box</span>{" "}
        <span className="h2">B2 Cargo Einstöckig</span>
      </h1>
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div
            className="swiper-slide cloudimage-360"
            data-index-zero-base={4}
            data-amount={12}
            data-spin-reverse="false"
            data-color={6}
            data-autoplay=""
            data-autoplay-reverse=""
            data-play-once=""
            data-speed={50}
            data-folder="https://www.kienzler.com/fileadmin/user_upload/gliederung_homepage/produkte/radparksysteme/bike_and_ride_box/cargo_box/drehteller/"
            data-filename="image_{index}.jpg"
          />
          <div className="swiper-slide">
            <img src="https://www.kienzler.com/fileadmin/_processed_/0/d/csm_image_0001_128a31a458.webp" />
          </div>
          <div className="swiper-slide">
            <img src="https://www.kienzler.com/fileadmin/_processed_/0/d/csm_image_0001_128a31a458.webp" />
          </div>
        </div>
        <div className="slider-nav">
          <div className="slider-next">
            <i className="bi bi-chevron-left" />
          </div>
          <div className="slider-prev">
            <i className="bi bi-chevron-right" />
          </div>
          <div className="swiper-scrollbar" />
        </div>
      </div>
    </div>
  </section>
  <section className="product-details">
    <div className="container">
      <nav className="sticky-top d-none d-xxl-block bg-white">
        <ul className="nav nav-pills nav-fill nav-sideline product-nav ">
          <li className="nav-item ">
            <a className="nav-link nav-link-in" href="#Description">
              Description
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-in" href="#ProductDataSheets">
              Product Data Sheets
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-in" href="#OptionalAccessories">
              Optional Accessories
            </a>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example p-3 rounded-2"
        tabIndex={0}
      >
        <div className="section-detail" id="Description">
          <div className="row">
            <div className="col-6">
              <h3>Description</h3>
              <p>
                The Bike and Ride Box bike parking system from Kienzler
                Stadtmobiliar offers maximum flexibility - a modular system that
                you can design yourself depending on the required bike park
                capacity and design requirements. The B2 Cargo bicycle box is
                especially suitable for cargo bikes.{" "}
              </p>
              <p>
                Access to the Bike and Ride Box B2 Cargo is regulated, depending
                on customer needs, using the different variants of our KINUS
                access system .
              </p>
              <p>
                If you choose an online booking system , you can conveniently
                book the Bike and Ride Box via our collection portal
                www.bikeandridebox.de , where we already manage over 500 systems
                (also available as an app with Android or iOS operating
                systems). Or you can opt for a customized solution for your
                municipality/region and we will make your systems bookable via
                our own booking portal with fully automated user management . In
                the corresponding product KINUS Individual you can take a look
                at some examples of our over 25 customer-specific booking
                platforms via direct link.
              </p>
            </div>
            <div className="col-6">
              <h3>Highlights</h3>
              <ul>
                <li>Flexible modular system for cargo bikes</li>
                <li>Safest bike parking system thanks to individual boxes</li>
                <li>Compatible with standard cargo bikes</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section-detail mt-5 " id="ProductDataSheets">
          <h3 className="ProductDataSheets-1">Produkt Informationen</h3>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item" style={{ borderTop: "none" }}>
              <h2 className="accordion-header accordion-button-h">
                <button
                  className="accordion-button collapsed accordion-button-1"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#product-collapseOne"
                  aria-expanded="true"
                  aria-controls="product-collapseOne"
                >
                  Technische Daten
                </button>
              </h2>
              <div
                id="product-collapseOne"
                className="accordion-collapse collapse "
              >
                <div className="accordion-body">
                  <div className=" card bg-light border-0 p-3 mb-4">
                    <h3>Tragende Konstruktion</h3>
                    <ul>
                      <li>
                        Tragender geschweißter Türrahmen und Korpusausbildung
                        über Blechbiegeteile
                      </li>
                      <li>Verzinkt</li>
                      <li>In ausgewählten RAL-Tönen pulverbeschichtet</li>
                      <li>Modulare Erweiterungsmöglichkeiten</li>
                    </ul>
                  </div>
                  <div className="row p-3 justify-content-between">
                    <div className="card bg-light border-0 p-4 mb-4 accordion-child-container">
                      <h5>Dach</h5>
                      <h6 className="fw-bold mt-1">Dachaufbau</h6>
                      <ul>
                        <li>Pultdach aus Stahlblechen</li>
                        <li>
                          Verzinkt und in ausgewählten RAL-Tönen
                          pulverbeschichtet
                        </li>
                      </ul>
                      <h6 className="fw-bold">Dachentwässerung</h6>
                      <ul>
                        <li>
                          Entwässerung über geneigtes Pultdach, über Rückwand
                          oberirdisch abgeleitet
                        </li>
                      </ul>
                    </div>
                    <div className="card bg-light border-0 p-4 mb-4 ms-auto accordion-child-container">
                      <h5>Wände</h5>
                      <h6 className="fw-bold mt-1">Seitenwände</h6>
                      <ul>
                        <li>Stahlblech</li>
                        <li>Verzinkt</li>
                        <li>In ausgewählten RAL-Tönen pulverbeschichtet</li>
                        <li>
                          Seitenwände mit blickdichter Belüftungsöffnung
                          versehen
                        </li>
                      </ul>
                      <h6 className="fw-bold">Tür</h6>
                      <ul>
                        <li>
                          Öffnung und offen halten der Tür über Gasdruckfeder
                        </li>
                        <li>
                          Tür mit nicht sichtbaren Scharnieren und nicht
                          sichtbarer Position des Schlosses
                        </li>
                        <li>Türnummer möglich</li>
                        <li>Türgriff als durchführende Griffleiste</li>
                      </ul>
                    </div>
                  </div>
                  <div className="row p-3 justify-content-between">
                    <div className="col-6 card bg-light border-0 p-4 mb-4 accordion-child-container">
                      <h5>Abmessungen</h5>
                      <h6 className="fw-bold mt-1">Länge</h6>
                      <ul>
                        <li>1140 mm</li>
                        <li>Grundmodul</li>
                      </ul>
                      <h6 className="fw-bold">Tiefe</h6>
                      <ul>
                        <li>2800 mm</li>
                        <li>Grundmodul</li>
                      </ul>
                      <h6 className="fw-bold">Höhe</h6>
                      <ul>
                        <li>1575 mm</li>
                        <li>Grundmodul</li>
                      </ul>
                      <h6 className="fw-bold">Fahrradeinstellmaß</h6>
                      <ul>
                        <li>1005 x 1350 x 2795mm</li>
                      </ul>
                    </div>
                    <div className="col-5 card bg-light border-0 p-4 mb-4 ms-auto accordion-child-container">
                      <h5>Fundamente</h5>
                      <h6 className="fw-bold mt-1">Fundamente / Befestigung</h6>
                      <ul>
                        <li>
                          Tragfähiger, ebener Untergrund (z.B. Pflasterbelag,
                          Asphalt, Betonplatte…)
                        </li>
                      </ul>
                      <h6 className="fw-bold">Schneelast / Windlast</h6>
                      <ul>
                        <li>Schneelast 0,85 kN/m²</li>
                        <li>Windlast Zone 2</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header accordion-button-h">
                <button
                  className="accordion-button collapsed accordion-button-1"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Technische Zeichnung
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
              >
                <div id="collapseDrawings">
                  <div className="card-body">
                    <div className="row">
                      <div className="drawings-wrapper col-md-6">
                        <figure>
                          <a
                            href="/assets/images/produktdaten.jpg"
                            data-fancybox="drawings"
                          >
                            <img
                              className="img-fluid"
                              alt="Technische Zeichnung Bike and Ride Box Cargo einstöckig"
                              src="/assets/images/produktdaten.jpg"
                              width={725}
                              height={513}
                            />
                            <div className="plusbtn">
                              <button
                                className="btn btn-primary rounded-circle resize"
                                type="button"
                              >
                                <i className="bi bi-plus fa-lg" />
                              </button>
                            </div>
                          </a>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header accordion-button-h">
                <button
                  className="accordion-button collapsed accordion-button-1"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Ausstattung
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  <ul>
                    <li>Fahrradparker</li>
                    <li>Kleiderhaken</li>
                    <li>Diebstahlsicherung</li>
                    <li>Elektronisches Zugangssystem KINUS</li>
                    <li>Elektronisches Türschloss</li>
                    <li>Stromübergabe</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header accordion-button-h">
                <button
                  className="accordion-button collapsed accordion-button-1"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapse4"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapse4"
                >
                  Optionale Ausstattung
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapse4"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  <ul>
                    <li>Fahrrad-Reparaturstation</li>
                    <li>Ladesteckdose</li>
                    <li>Dachbegrünung</li>
                    <li>Mechanisches Türschloss</li>
                    <li>Photovoltaik-Anlage</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header accordion-button-h">
                <button
                  className="accordion-button collapsed accordion-button-1"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapse5"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapse5"
                >
                  Produktunterlagen zum Download
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapse5"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body" style={{ fontSize: 20 }}>
                  <i
                    className="bi bi-download"
                    style={{ color: "#CD2B23", marginRight: 5 }}
                  />
                  <a
                    className="download-link"
                    target="_blank"
                    href="/fahrradparksysteme?tx_kienzlercart_kienzlercart%5Baction%5D=show&tx_kienzlercart_kienzlercart%5Bcontroller%5D=GeneratePdf&tx_kienzlercart_kienzlercart%5Bproduct%5D=20&tx_kienzlercart_kienzlercart%5Btype%5D=product&type=1954&cHash=c1e7f04396e1fad4f2aaaf7e284ac1bb"
                  >
                    Produktdatenblatt herunterladen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="OptionalAccessories pt-5 mt-5" id="OptionalAccessories">
          <h1>Optional Accessories</h1>
          <div
            id="carouselExampleIndicators2"
            className="carousel slide mt-5 Carousel-Desktop"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators2"
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
                data-bs-target="#carouselExampleIndicators2"
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
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators2"
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
              data-bs-target="#carouselExampleIndicators2"
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
        <div
          className="OptionalAccessories-Responsive d-flex flex-column"
          id="OptionalAccessories"
        >
          <div
            id="carouselExampleIndicators3"
            className="carousel px-0 slide mt-5 col-6 Carousel-responsive"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row carousel-product  px-0">
                  <div className="mx-0">
                    <img
                      src="./assets/images/Bike-Container.webp"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body  px-0">
                      <h5>Bike and Ride box</h5>
                      <h5>B1 Cubes Einstockig</h5>
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
                <div className="row carousel-product  px-0">
                  <div className="mx-0">
                    <img
                      src="./assets/images/Bike-Container.webp"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body  px-0">
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
                <div className="row carousel-product  px-0">
                  <div className="mx-0">
                    <img
                      src="./assets/images/Bike-Container.webp"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body px-0">
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
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators3"
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
              data-bs-target="#carouselExampleIndicators3"
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
                      <p> office@juhuu.app</p>
                    </a>
                  </div>
                  <a
                    href="mailto:office@juhuu.app"
                    style={{ textDecoration: "none", color: "black" }}
                  ></a>
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
                      <p>@juhuu_app</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-md-7">
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4" id="get-in-touch-sec3-h1">
                    Contact Us
                  </h3>
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
                            id="get-in-touch-sec3-h1_h3"
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
  <div className="containerfooter container-fluid p-0">
    <div className="container-fluid p-0 ">
      <footer
        className="text-center text-lg-start text-black"
        style={{ backgroundColor: "#f3e8fa" }}
      >
        <section className="container">
          <div className="container text-center text-md-start mt-0 pt-5">
            <div className="row mt-5">
              <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-1">
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
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-1">
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
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2">
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







    );
}
import './home.css'

function Home(){
    return(
        <body>
            {/* <!-- Masthead--> */}
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Welcome To Our Website!</div>
          <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
          <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
        </div>
      </header>

      <div className="mt-5 row mb-2">
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">World</strong>
          <h3 className="mb-0">Featured post</h3>
          <div className="mb-1 text-muted">Nov 12</div>
          <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <svg className="bd-placeholder-img" width="200" height="250" xmlns="https://dw9to29mmj727.cloudfront.net/promo/2016/6225-SeriesHeaders_NARSHP_2000x800.jpg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success">Design</strong>
          <h3 className="mb-0">Post title</h3>
          <div className="mb-1 text-muted">Nov 11</div>
          <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid mt-1 bg-light" >
      <div class="row mb-2">
        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary"></strong>
              <a href="/iphone.html " class="text-dark"> 
              <h3 class="mb-0">APPLE iPhone 12 (White, 128 GB)</h3>
            </a>
              <div class="mb-1 text-black mt-2"> <h1>₹56,999</h1></div>
              <p class="card-text mb-auto"><li> cm (6.1 inch) Super Retina XDR Display</li>
                <li> 12MP + 12MP | 12MP Front Camera</li>
                <li> A14 Bionic Chip with Next Generation</li>
                <li>  Ceramic Shield</li>
                <li> Industry-leading IP68</li>
                <li> All Screen OLED Display</li>
                </p>
             
              <button type="button" class="btn btn-primary">Buy</button> 
            </div>

            
            <div class="col-auto d-none d-lg-block">
              <a href=" ">
              <img class="bd-placeholder-img" width="200" height="250" src="assets/img/portfolio/1.jpg" alt=""/>
            </a>
            </div>
          

          </div>
        </div>
        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-success"></strong>
             <a href="/ss-bat.html" class="text-dark">
              <h3 class="mb-0">SS SUPER POWER KW Kashmir Willow</h3>
            </a>
              <div class="mb-1 mt-4 text-black" ><h1>₹1,449</h1></div>
              <p class="mb-auto"/>
               <li>Age Group 15+ Yrs</li>
               <li>Blade Made of Kashmir Willow</li>
               <li>Beginner Playing Level</li>
               <li>Bat Grade: Grade 4</li>
               <li>Sport Type: Cricket</li>
               <li>With Cover</li>
              
              <button type="button" class="btn btn-primary">Buy</button> 
            </div>
            <div class="col-auto d-none d-lg-block">
              <div class="col-auto d-none d-lg-block">
                <img class="bd-placeholder-img" width="200" height="250" src='assets/img/portfolio/2.jpg' alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      
      {/* <!-- Services--> */}
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">We Sell all kind of Anime Merch you want.</h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">E-Commerce</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Responsive Design</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Web Security</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Portfolio Grid--> */}
      
      {/* <!-- About--> */}
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2009-2011</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2011</h4>
                  <h4 className="subheading">An Agency is Born</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
              </div>
            </li>
            <li>
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2015</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>July 2020</h4>
                  <h4 className="subheading">Phase Two Expansion</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* <!-- Team--> */}
      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="assets/img/team/karan.jpeg" alt="..." />
                <h4>Karan Singh</h4>
                <p className="text-muted">Lead Developer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-instagram"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." />
                <h4>Anand Kishor</h4>
                <p className="text-muted">Lead Designer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="assets/img/team/pankaj.jpeg" alt="..." />
                <h4>Pankaj Yadav</h4>
                <p className="text-muted">Lead Marketer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
          </div>
        </div>
      </section>
      {/* <!-- Clients--> */}
      <div className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/microsoft.svg" alt="..." aria-label="Microsoft Logo" /></a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/google.svg" alt="..." aria-label="Google Logo" /></a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/facebook.svg" alt="..." aria-label="Facebook Logo" /></a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/ibm.svg" alt="..." aria-label="IBM Logo" /></a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact--> */}
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          {/* <!-- * * * * * * * * * * * * * * *-->
                <!-- * * SB Forms Contact Form * *-->
                <!-- * * * * * * * * * * * * * * *-->
                <!-- This form is pre-integrated with SB Forms.-->
                <!-- To make this form functional, sign up at-->
                <!-- https://startbootstrap.com/solution/contact-forms-->
                <!-- to get an API token!--> */}
          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  {/* <!-- Name input--> */}
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                  <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                </div>
                <div className="form-group">
                  {/* <!-- Email address input--> */}
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                  <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                  <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                </div>
                <div className="form-group mb-md-0">
                  {/* <!-- Phone number input--> */}
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                  <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  {/* <!-- Message input--> */}
                  <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                  <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                </div>
              </div>
            </div>
            {/* <!-- Submit success message-->
                    <!---->
                    <!-- This is what your users will see when the form-->
                    <!-- has successfully submitted--> */}
            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center text-white mb-3">
                <div className="fw-bolder">Form submission successful!</div>
                To activate this form, sign up at
                <br />
                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
              </div>
            </div>
            {/* <!-- Submit error message-->
                    <!---->
                    <!-- This is what your users will see when there is-->
                    <!-- an error submitting the form--> */}
            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
            {/* <!-- Submit Button--> */}
            <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
          </form>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2022</div>
            <div className="col-lg-4 my-3 my-lg-0">
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
              <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Portfolio Modals--> */}
      {/* <!-- Portfolio item 1 modal popup--> */}
      <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* <!-- Project details--> */}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/1.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Threads
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Illustration
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-xmark me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio item 2 modal popup--> */}
      <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* <!-- Project details--> */}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/2.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Explore
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Graphic Design
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-xmark me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio item 3 modal popup--> */}
      <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* <!-- Project details--> */}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/3.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Finish
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Identity
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-xmark me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio item 4 modal popup--> */}
      <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* <!-- Project details--> */}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/4.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Lines
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Branding
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-xmark me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio item 5 modal popup--> */}
      <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* <!-- Project details--> */}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/5.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Southwest
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Website Design
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-xmark me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio item 6 modal popup--> */}
      <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* <!-- Project details--> */}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/6.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Window
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Photography
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-xmark me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </body>
    );
}

export default Home;
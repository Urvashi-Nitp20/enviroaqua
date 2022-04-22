import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom"

const LandingPage = () => {

//   const menu = document.querySelector(".fa-bars");
//   const menuTray = document.querySelector(".mobile-head");
//   menu.addEventListener("click", () => {
//     menuTray.classList.toggle("visible");
//   });

  return (
    <div>
      <header>
        <div class="head">
          <div class="logo">
            EnviroAqua
          </div>
          <div class="hamburger">
            <i class="fas fa-bars fa-2x"></i>
          </div>
          <div class="box-head-middle">
            <table>
              <td>
                <div class="dropdown">
                  {" "}
                  <button class="drop-btn"> Home</button>
                  <div class="dropdown-content">
                    <Link to="/dashboard" className="Link">Dashboard</Link>
                    <Link to="/plots" className="Link">Plots</Link>
                    <Link to="/main" className="Link">Main</Link>
                    
                  </div>
                </div>
              </td>
              <td>
                <div class="dropdown">
                  {" "}
                  <button class="drop-btn">About</button>
                  {/* <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div> */}
                </div>
              </td>
              <td>
                <div class="dropdown">
                  {" "}
                  <button class="drop-btn"> Documentation</button>
                  <div class="dropdown-content">
                    <a href="#">Getting started</a>
                    <a href="#">Why use Enviroaqua?</a>
                    <a href="#">How to use?</a>
                  </div>
                </div>
              </td>
            </table>
          </div>
          <div class="buy-button">
            <button class="buyy-button">Get Started</button>
          </div>
        </div>

        <div class="mobile-head visible">
          <ul>
            <li class="red-link">Organisation</li>
            <li>Agency</li>
            <li>Business</li>
            <li>Startup</li>
            <li>
              <div class="hr"></div>
            </li>
            <li class="red-link">Secondary</li>
            <li>Article-page</li>
            <li>Blog Grid</li>
            <li>About</li>
            <li>Get in Touch</li>
            <li>
              <div class="hr"></div>
            </li>
            <li class="red-link">Documentation</li>
            <li>Getting Started</li>
            <li>Changelog</li>
            <li>Components</li>
            <li>
              <div class="hr"></div>
            </li>
          </ul>
          <button class="buyy-button">Buy now</button>
        </div>
      </header>
      <div class="space"></div>
      <div class="page1">
        <div class="page1-left">
          <h1 class="headline">
            Meet your new<span class="red-text"> favorite them</span>
          </h1>
          <p class="headline-intro">
            Build a beautiful, modern website with TailwindCSS and pre-made
            pages built from scratch.
          </p>

          <div class="buttons">
            <div>
              <button class="purchase">Purchase Domain</button>
            </div>
            <div>
              <button class="learn-more">Learn more</button>
            </div>
          </div>
        </div>
        <div class="page1-right">
          <img src="img/dev-focus.svg" alt="" class="focus" />
        </div>
      </div>

      <main class="page2">
        <div class="cards ">
          <div class="page2-item card1">
            <img src="img/creative-draft.svg" alt="" class="svg1" />
            <h2 class="text-line1">Unleash your creativity</h2>
            <h3 class="text-line2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              pariatur beatae accusantium nesciunt quisquam adipisci amet
              aperiam expedita maiores, voluptates consequatur, iure temporibus
              eum inventore.
            </h3>
          </div>
          <div class="page2-item card2">
            <img src="img/accept-tasks.svg" alt="" class="svg1" />
            <h2 class="text-line1">Get more results</h2>
            <h3 class="text-line2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, hic.
              Ducimus quam ut ea eius recusandae fuga sit amet iusto id,
              sapiente ad similique ex.
            </h3>
          </div>
          <div class="page2-item card3">
            <img src="img/growth-curve.svg" alt="" class="svg1" />
            <h2 class="text-line1">Grow your brand</h2>
            <h3 class="text-line2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus ab numquam eveniet repellat aperiam, aliquam facere
              officiis omnis facilis aspernatur et praesentium ratione quasi
              odio.
            </h3>
          </div>
        </div>

        <div class="experience">
          <div class="absurd">
            {" "}
            <img src="img/experience-tailmars-design.svg" alt="" class="demo" />
          </div>
          <div class="exp-right">
            <h3 class="exp-head">
              Real time updates and activity demographics
            </h3>
            <h3 class="headline-intro demo-text1">
              I don't know what to type here so let me fill some random text.
              Lorem ipsum is hard to consume and I use it as a last resort. So,
              I'll fill random text please and you don't even have to read it.
            </h3>
            <h3 class="headline-intro demo-text2">
              I don't know what to type here so let me fill some random text.
            </h3>
          </div>
        </div>

        <div class="purchase-red">
          <div class="purchase-text">
            <h1 class="purchase-h1">Let us make it easy for you</h1>
            <h3 class="purchase-h3">
              Build modern looking websites with Tailmars
            </h3>
          </div>
          <div class="purchase-buttt">
            <button class="final-purchase">Purchase Now!</button>
          </div>
        </div>

        <div class="purchase-black">
          <h2 class="textt1">Simple pricing</h2>
          <h4 class="textt2">
            For a one-time purchase, you'll get access to lifetime releases of
            landing pages and components as we advance our theme.
          </h4>
        </div>

        <div class="purchase-box">
          <div class="space2"></div>
          {/* <h1 class="textt4">$5</h1> */}
          <h4 class="textt3">Wanna Save Water?</h4>
          <hr noshade />
          <h4 class="textt3">Use for personal or your clients</h4>
          <h4 class="textt3">Access to updates and future realeases</h4>
          <button class="final-purchase">Get Started</button>
        </div>

        <div class="social">
          <div>
            <i class="fab fa-facebook fa-2x"></i>
          </div>
          <div>
            <i class="fab fa-instagram fa-2x"></i>
          </div>
          <div>
            <i class="fab fa-twitter fa-2x"></i>
          </div>
          <div>
            <i class="fab fa-github fa-2x"></i>
          </div>
          <div>
            <i class="fab fa-slack fa-2x"></i>
          </div>
        </div>
        <div class="foot">© 2021 WebLime, Inc. All rights reserved.</div>
      </main>
    </div>
  );
};

export default LandingPage;

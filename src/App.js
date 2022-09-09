import './App.css';
import logo from './assets/wunderlab_logo.png';
import hero from './assets/hero.png';

const App = () => (
  <>
    <nav
      id='header'
      class='fixed w-full z-30 top-0 text-white bg-slate-900 px-12'
    >
      <div class='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
        <div class='pl-4 flex items-center'>
          <a
            class='toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl'
            href='#'
          >
            WUNDERLAB
          </a>
        </div>
        <div
          class='w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 lg:bg-transparent p-4 lg:p-0 z-20'
          id='nav-content'
        >
          <ul class='list-reset lg:flex justify-end flex-1 items-center'>
            <li class='mr-3'>
              <a class='inline-block py-2 px-4 font-bold no-underline' href='#'>
                Work
              </a>
            </li>
            <li class='mr-3'>
              <a
                class='inline-block no-underline font-bold hover:text-gray-800 hover:text-underline py-2 px-4'
                href='#'
              >
                About
              </a>
            </li>
            <li class='mr-3'>
              <a
                class='inline-block no-underline font-bold hover:text-gray-800 hover:text-underline py-2 px-4'
                href='#'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class='pt-24 bg-slate-900 px-12'>
      <div class='container px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center'>
        <div class='w-full md:w-3/5 py-12 text-center'>
          <img class='w-full md:w-4/5 z-50' src={logo} alt='Wunderlab Logo' />
        </div>
        <div class='flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-right'>
          <h1 class='my-4 text-white text-3xl font-extralight leading-tight'>
            Bringing immersive experiences to hybrid events.
          </h1>
        </div>
      </div>
    </div>
    <div class='pt-24 bg-slate-900'>
      <section class='container mx-auto text-center py-6 px-12'>
        <div class='w-full mb-4'>
          <img class='w-full z-50' src={hero} alt='Hero Image' />
        </div>
      </section>
    </div>
    {/* <section class='container mx-auto text-center py-6 mb-12'>
      <h2 class='w-full my-2 text-5xl font-bold leading-tight text-center text-black'>
        Call to Action
      </h2>
      <div class='w-full mb-4'>
        <div class='h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t'></div>
      </div>
      <h3 class='my-4 text-3xl leading-tight'>
        Main Hero Message to sell yourself!
      </h3>
      <button class='mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
        Action!
      </button>
    </section> */}
    <footer class='bg-slate-800'>
      <div class='container mx-auto px-8'>
        <div class='w-full flex flex-col md:flex-row py-6'>
          <div class='flex-1'>
            <p class='uppercase text-gray-500 md:mb-6'>Links</p>
            <ul class='list-reset mb-6'>
              <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                <a
                  href='#'
                  class='no-underline hover:underline text-gray-500 hover:text-pink-500'
                >
                  FAQ
                </a>
              </li>
              <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                <a
                  href='#'
                  class='no-underline hover:underline text-gray-500 hover:text-pink-500'
                >
                  Help
                </a>
              </li>
              <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                <a
                  href='#'
                  class='no-underline hover:underline text-gray-500 hover:text-pink-500'
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div class='flex-1'>
            <p class='uppercase text-gray-500 md:mb-6'>Legal</p>
            <ul class='list-reset mb-6'>
              <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                <a
                  href='#'
                  class='no-underline hover:underline text-gray-500 hover:text-pink-500'
                >
                  Terms
                </a>
              </li>
              <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                <a
                  href='#'
                  class='no-underline hover:underline text-gray-500 hover:text-pink-500'
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div class='flex-1'>
            <p class='uppercase text-gray-500 md:mb-6'>Social</p>
            <ul class='list-reset mb-6'>
              <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                <a
                  href='#'
                  class='no-underline hover:underline text-gray-500 hover:text-pink-500'
                >
                  Facebook
                </a>
              </li>
              <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                <a
                  href='#'
                  class='no-underline hover:underline text-gray-500 hover:text-pink-500'
                >
                  Linkedin
                </a>
              </li>
              <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                <a
                  href='#'
                  class='no-underline hover:underline text-gray-500 hover:text-pink-500'
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div class='flex-1'>
            <p class='uppercase text-gray-500 md:mb-6'>Company</p>
            <ul class='list-reset mb-6'>
              <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                <a
                  href='#'
                  class='no-underline hover:underline text-gray-500 hover:text-pink-500'
                >
                  Official Blog
                </a>
              </li>
              <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                <a
                  href='#'
                  class='no-underline hover:underline text-gray-500 hover:text-pink-500'
                >
                  About Us
                </a>
              </li>
              <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                <a
                  href='#'
                  class='no-underline hover:underline text-gray-500 hover:text-pink-500'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default App;

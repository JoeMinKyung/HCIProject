import React from "react";
import "../index.css";
import LandingPageBackground from "../img/LandingPageBackground.png";
import StyleMagazine1 from "../img/StyleMagazine1.png";
import StyleMagazine2 from "../img/StyleMagazine2.png";
import StyleMagazine3 from "../img/StyleMagazine3.png";
import RecommendedProduct1 from "../img/RecommendedProduct1.png";
import RecommendedProduct2 from "../img/RecommendedProduct2.png";
import RecommendedProduct3 from "../img/RecommendedProduct3.png";

function LandingPage() {
  return (
    <div class="bg-white">
      <header class="absolute inset-x-0 top-0 z-50">
        <div className="text-center py-4 bg-black">
          <p className="text-sm font-semibold text-white">Sign up and GET your own style. Sign up now</p>
        </div>
        <nav class="flex items-end justify-between p-6 lg:px-8" aria-label="Global">
          <div class="flex lg:flex-1 items-center">
            <a href="#" class="-m-0 p-4 text-3xl">
              <div className="mx-auto">
                <div>
                  CHIC<span className="font-bold">MATE</span>
                </div>
              </div>
            </a>
          </div>
          <div class="flex lg:hidden">
            <button type="button" class="-m-1.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span class="sr-only">Open main menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-12">
            <a href="#" class="text-xl leading-6 text-gray-900">
              Color Analysis
            </a>
            <a href="#" class="text-xl leading-6 text-gray-900">
              Style type
            </a>
            <a href="#" class="text-xl leading-6 text-gray-900">
              Figure and Fit
            </a>
            <a href="#" class="text-xl leading-6 text-gray-900">
              Blog
            </a>
          </div>
        </nav>

        {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
        <div class="lg:hidden" role="dialog" aria-modal="true">
          {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
          <div class="fixed inset-0 z-50"></div>
          <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
              </a>
              <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Close menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Color Analysis
                  </a>
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Style type
                  </a>
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Figure and Fit
                  </a>
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Blog
                  </a>
                </div>
                <div class="py-6">
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 hover:bg-gray-50"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="relative isolate pt-6">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"></div>
        <div class="mx-auto pt-32 sm:pt-48 lg:pt-56">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div class="relative px-3 pt-1 pb-8 text-5xl leading-6 text-gray-600">Level up your style with your AI assistant </div>
          </div>
          <img src={LandingPageBackground} alt="Landing Image" class="mx-auto mt-8 w-full"></img>
          <div class="absolute inset-0 flex flex-col justify-center items-center text-center">
            <p class="text-4xl mx-40 tracking-tight text-white" style={{ lineHeight: "4rem" }}>
              Wondering which clothes complement your appearance? Struggling to pair your items into trendy outfits? Unsure about buying a specific item? Need
              wardrobe updates or personalized clothing suggestions? Just ask your CHICMATE AI Stylist!
            </p>
            <a
              href="#"
              class="rounded-full bg-white mt-28 my-20 px-20 py-7 text-xl font-semibold text-black shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Test your taste today →
            </a>
          </div>
        </div>
        <div>
          <nav class="flex items-end justify-between p-28 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1 items-center">
              <p class="-m-0 p-4 text-4xl">
                <div className="mx-10">
                  <div className="font-bold">Style Magazine</div>
                </div>
              </p>
            </div>
            <div class="hidden mr-10 lg:flex lg:gap-x-12">
              <a href="#" class="text-3xl leading-6 text-gray-900">
                See More →
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div class="mt-10 mx-20">
        <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div class="relative flex flex-col bg-white text-gray-700 shadow-md border border-blue-gray-100">
            <img src={StyleMagazine1} alt="Landing Image"></img>
          </div>
          <div class="relative flex flex-col bg-white text-gray-700 shadow-md border border-blue-gray-100">
            <img src={StyleMagazine2} alt="Landing Image"></img>
          </div>
          <div class="relative flex flex-col bg-white text-gray-700 shadow-md border border-blue-gray-100">
            <img src={StyleMagazine3} alt="Landing Image"></img>
          </div>
        </div>
        <nav class="flex items-center justify-center py-20 lg:px-8" aria-label="Global">
          <div class="hidden lg:flex lg:gap-x-80">
            {/* <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a> */}
            <a href="#" class="rounded-2xl bg-black px-14 py-6 text-3xl leading-6 text-white">
              OUTER
            </a>
            <a href="#" class="rounded-2xl bg-black px-14 py-6 text-3xl leading-6 text-white">
              VEST
            </a>
            <a href="#" class="rounded-2xl bg-black px-14 py-6 text-3xl leading-6 text-white">
              DRESS
            </a>
            <a href="#" class="rounded-2xl bg-black px-14 py-6 text-3xl leading-6 text-white">
              TOP
            </a>
          </div>
        </nav>
        <div class="text-4xl font-bold" style={{ lineHeight: "3rem" }}>
          <p>CHICMATE’S PICK!</p>
          <p>Recommended Products</p>
        </div>

        <div class="flex items-center border-2 rounded drop-shadow-md py-20 my-10 lg:px-8" aria-label="Global">
          <img src={RecommendedProduct1} class="px-10"></img>
          <div class="text-6xl mx-10 font-semibold">2</div>
          <div class="mx-auto text-center text-2xl" style={{ lineHeight: "3rem" }}>
            <p class="font-bold">Atelier Nain</p>
            <p class="text-gray-400">KNIT CROCHET CARDIGAN</p>
            <p class="text-gray-400">69.000</p>
          </div>
        </div>
        <div class="flex items-center border-2 rounded drop-shadow-md py-20 my-10 lg:px-8" aria-label="Global">
          <img src={RecommendedProduct2} class="px-10"></img>
          <div class="text-6xl mx-10 font-semibold">3</div>
          <div class="mx-auto text-center text-2xl" style={{ lineHeight: "3rem" }}>
            <p class="font-bold">Joorti</p>
            <p class="text-gray-400">VOLUME TIE BLOUSE</p>
            <p class="text-gray-400">89.000</p>
          </div>
        </div>
        <div class="flex items-center border-2 rounded drop-shadow-md py-20 my-10 lg:px-8" aria-label="Global">
          <img src={RecommendedProduct3} class="px-10"></img>
          <div class="text-6xl mx-10 font-semibold">1</div>
          <div class="mx-auto text-center text-2xl" style={{ lineHeight: "3rem" }}>
            <p class="font-bold">Matin Kim</p>
            <p class="text-gray-400">CARDIGAN IN PINK</p>
            <p class="text-gray-400">158.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

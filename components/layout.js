import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, title = "myprofile site" }) {
  return (
    <div className="">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-1xl px-2 sm:px-6 lg:px-2">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center"></div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link href="/">
                      <a
                        className="bg-gray-900 text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700"
                        aria-current="page"
                      >
                        Welcome to Profile Page
                      </a>
                    </Link>

                    <Link href="contact">
                      <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-3 rounded-md text-lg font-medium">
                        Contact
                      </a>
                    </Link>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      <a
                        href="https://github.com/daideguchi"
                        target="blank"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-3 rounded-md text-lg font-medium"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          <div className="sm:hidden" id="mobile-menu">
            <div className="">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <Link href="/">
                <a
                  className="text-white block px-3 py-2 rounded-md text-4xl font-medium hover:bg-gray-700 w-screen"
                  aria-current="page"
                >
                  Welcome My Profile
                </a>
              </Link>

              <Link href="contact">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 pt-6 rounded-md text-base font-medium">
                  Contact
                </a>
              </Link>
              <a
                href="https://github.com/daideguchi"
                target="blank"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-6 pb-6 rounded-md text-base font-medium"
              >
                Github
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div>
          <p>Copyright © 2022 - All right reserved by DaiDeguchi</p>
        </div>
      </footer>
    </div>
  );
}

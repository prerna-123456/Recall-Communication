import { useState } from "react";
import { IoMdArrowRoundForward, IoMdCall } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { Footer } from ".";
import { IoIosArrowBack } from "react-icons/io";

export const shopProducts = [
  {
    name: "Audio Devices",
    badge: "NEW",
    image: "/assets/product.webp",
    description:
      "Premium audio devices with clear sound, deep bass and an immersive listening experience.",
  },
  {
    name: "Smart Watches",
    badge: "BESTSELLER",
    image: "/assets/product1.webp",
    description:
      "Smart and stylish watches with fitness tracking, notifications and everyday health features.",
  },
  {
    name: "Power Solutions",
    badge: "SALE",
    image: "/assets/product2.jpg",
    description:
      "Reliable power banks and charging solutions designed to keep your devices powered throughout the day.",
  },
  {
    name: "Smartphones",
    badge: "BESTSELLER",
    image: "/assets/product3.jpg",
    description:
      "Powerful smartphones with modern displays, fast performance, great cameras and long-lasting battery life.",
  },
  {
    name: "Headphones",
    badge: "NEW",
    image: "/assets/product4.jpg",
    description:
      "Comfortable headphones delivering rich audio, powerful bass and an immersive listening experience.",
  },
  {
    name: "Bluetooth Speakers",
    badge: "SALE",
    image: "/assets/product5.jpg",
    description:
      "Portable Bluetooth speakers with powerful sound, wireless connectivity and a stylish compact design.",
  },
  {
    name: "Chargers & Cables",
    badge: "NEW",
    image: "/assets/product6.webp",
    description:
      "Fast and reliable chargers and durable cables for convenient everyday device charging.",
  },
  {
    name: "Gaming Accessories",
    badge: "BESTSELLER",
    image: "/assets/product7.jpg",
    description:
      "High-performance gaming accessories built for better control, comfort and an enhanced gaming experience.",
  },
];

export const productSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const navigateToProductPage = (
  event: React.MouseEvent<HTMLAnchorElement>,
  productName: string
) => {
  event.preventDefault();

  window.history.pushState(
    {},
    "",
    `/products/${productSlug(productName)}`
  );

  window.dispatchEvent(new Event("app-route-change"));
};


/* =========================================================
   SHOP NAVBAR
========================================================= */

function ShopNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white text-[#0f172a] shadow-sm">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-5 lg:h-[82px] lg:px-8 lg:py-0">

        <a href="/" className="flex items-center gap-3">
          <img
            src="/assets/logo.png"
            alt="Alok Enterprises"
            className="h-11 w-auto object-contain sm:h-12 lg:h-14"
          />
        </a>

        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-3 py-2.5 text-[13px] font-bold text-white transition hover:bg-[#3B82F6] sm:px-5 sm:py-3 sm:text-[14px]"
        >
          Home
        </a>
      </div>
    </header>
  );
}


/* =========================================================
   REPAIR / SUPPORT CTA
========================================================= */

export function RepairSupportCTA() {
  return (
    <section className="bg-white py-14 lg:pt-10 lg:pb-20">

      <div className="mx-auto max-w-7xl px-6 sm:px-5 lg:px-8">

        <div
          className="relative min-h-[320px] overflow-hidden rounded-xl bg-[#041124] bg-cover bg-center shadow-xl"
          style={{
            backgroundImage: "url('/assets/contact-bg.webp')",
          }}
        >

          {/* DARK OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#041124]/95
              via-[#041124]/60
              to-[#041124]/35
            "
          />

          {/* CONTENT */}
          <div
            className="
              relative
              z-10
              flex
              min-h-[320px]
              items-center
              px-5
              py-12
              sm:px-10
              lg:px-14
            "
          >

            <div className="max-w-2xl">

              {/* SMALL TITLE */}
              <p className="text-[13px] font-bold uppercase tracking-[3px] text-[#3b82f6]">
                Repair & Support
              </p>

              {/* HEADING */}
              <h2 className="mt-4 font-display text-[34px] font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Need Help With Your Phone?
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-4 max-w-xl text-[16px] leading-7 text-white/75 md:text-[17px]">
                From setup and troubleshooting to repairs and upgrades,
                our team is ready to help you get the most out of your device.
              </p>

              {/* BUTTONS */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

                {/* GET SUPPORT */}
                <a
                  href="/#contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    bg-[#2563eb]
                    px-6
                    py-3
                    text-[14px]
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#1d4ed8]
                    hover:shadow-lg
                  "
                >
                  Get Support

                  <IoMdArrowRoundForward size={18} />
                </a>

                {/* CALL US */}
                <a
                  href="tel:+918364266074"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    border
                    border-white/40
                    bg-white/5
                    px-6
                    py-3
                    text-[14px]
                    font-bold
                    text-white
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:border-white
                    hover:bg-white
                    hover:text-[#0f172a]
                  "
                >
                  <IoMdCall size={18} />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* =========================================================
   PRODUCTS PAGE
========================================================= */

export default function Products() {

  const [activeIndex, setActiveIndex] = useState(0);

  const productRows = Array.from(
    {
      length: Math.ceil(shopProducts.length / 4),
    },
    (_, index) =>
      shopProducts.slice(index * 4, index * 4 + 4)
  );

  return (
    <div className="min-h-screen bg-white">

      {/* NAVBAR */}
      <ShopNavbar />


      {/* =====================================================
          SHOP HERO
      ===================================================== */}

      <section
        className="relative min-h-[330px] overflow-hidden bg-[#020817] bg-cover bg-center text-white sm:min-h-[360px] lg:min-h-[400px]"
        style={{
          backgroundImage: "url('/assets/shop-front.jpg')",
        }}
      >

        <div className="absolute inset-0 bg-[#020817]/70" />

        <div className="relative z-10 mx-auto flex min-h-[330px] max-w-7xl flex-col justify-center px-6 py-12 sm:min-h-[360px] sm:px-5 sm:py-16 lg:px-8">

          <a
            href="/"
            className="lg:hidden flex items-center gap-2 text-[16px] font-semibold text-black transition mb-4"
          >
            <IoIosArrowBack />
            Home
          </a>

          <p className="text-[13px] font-bold uppercase tracking-[3px] text-[#60a5fa]">
            Recall Communication Store
          </p>

          <h1 className="mt-4 max-w-3xl text-[36px] font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Shop Smart Gadgets and Accessories
          </h1>

          <p className="mt-5 max-w-xl text-[16px] leading-7 text-white/75">
            Explore mobiles, audio devices, smart watches, chargers,
            speakers and everyday tech essentials.
          </p>

        </div>
      </section>

      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section className="bg-white py-14 lg:py-20">

        <div className="mx-auto max-w-7xl px-6 sm:px-5 lg:px-8">

          {/* HEADING */}
          <div className="mb-10">

            <p className="text-[14px] font-bold uppercase tracking-[3px] text-[#0f172a]">
              All Products
            </p>

            <h2 className="mt-4 font-display text-[34px] font-bold leading-tight text-[#0f172a] sm:text-4xl md:text-5xl">
              Pick your next upgrade
            </h2>

          </div>


          {/* =================================================
              DESKTOP PRODUCTS
          ================================================= */}

          <div className="hidden space-y-6 lg:block">

            {productRows.map((row, rowIndex) => (

              <div
                key={row.map((product) => product.name).join("-")}
                className="flex h-[350px] w-full gap-6 overflow-hidden"
                onMouseLeave={() =>
                  setActiveIndex(rowIndex * 4)
                }
              >

                {row.map((product, index) => {

                  const itemIndex = rowIndex * 4 + index;

                  const isActive =
                    activeIndex === itemIndex;

                  return (
                    <div
                      key={product.name}
                      onMouseEnter={() =>
                        setActiveIndex(itemIndex)
                      }
                      className={`
                        group
                        relative
                        h-full
                        cursor-pointer
                        overflow-hidden
                        rounded-2xl
                        bg-[#e7e6f8]
                        shadow-sm
                        transition-all
                        duration-500
                        ease-in-out
                        ${isActive
                          ? "flex-[3.2]"
                          : "flex-[1]"
                        }
                      `}
                    >

                      {/* IMAGE */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-[1.03]
                        "
                      />


                      {/* OVERLAY */}
                      <div
                        className={`
                          absolute
                          inset-0
                          transition-all
                          duration-500
                          ${isActive
                            ? "bg-gradient-to-t from-[#020617]/90 via-[#020617]/30 to-transparent"
                            : "bg-black/0"
                          }
                        `}
                      />


                      {/* BADGE */}
                      <div
                        className={`
                          absolute
                          left-5
                          top-5
                          z-20
                          transition-all
                          duration-300
                          ${isActive
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-3 opacity-0"
                          }
                        `}
                      >

                      </div>


                      {/* ACTIVE CONTENT */}
                      <div
                        className={`
                          absolute
                          bottom-0
                          left-0
                          right-0
                          z-10
                          p-7
                          text-white
                          transition-all
                          duration-500
                          ${isActive
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                          }
                        `}
                      >

                        <h3 className="font-display text-3xl font-bold leading-tight">
                          {product.name}
                        </h3>

                        <p className="mt-3 max-w-xl text-[14px] leading-6 text-white/75">
                          {product.description}
                        </p>

                      </div>

                    </div>
                  );
                })}

              </div>

            ))}

          </div>


          {/* =================================================
              MOBILE PRODUCTS
          ================================================= */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">

            {shopProducts.map((product) => (

              <div
                key={product.name}
                className="
                  group
                  relative
                  h-[310px]
                  overflow-hidden
                  rounded-2xl
                  bg-[#e7e6f8]
                  sm:h-[360px]
                "
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/30 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">

                  <h3 className="font-display text-2xl font-bold">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/75">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          REPAIR / SUPPORT CTA
          YE AB PRODUCTS KE NICHE VISIBLE HOGA
      ===================================================== */}

      <RepairSupportCTA />


      {/* FOOTER */}
      <Footer />

    </div>
  );
}


/* =========================================================
   PRODUCT DETAIL
========================================================= */

export function ProductDetail({
  slug,
}: {
  slug: string;
}) {

  const product =
    shopProducts.find(
      (item) => productSlug(item.name) === slug
    ) ?? shopProducts[0];

  return (
    <div className="min-h-screen bg-white">

      <ShopNavbar />

      <section className="bg-[#f8fafc] py-12 lg:py-16">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10 lg:px-8">

          {/* IMAGE */}
          <div className="rounded-xl border border-[#e5e7eb] bg-white p-5 shadow-sm sm:p-8">

            <img
              src={product.image}
              alt={product.name}
              className="h-[250px] w-full object-contain sm:h-[320px] lg:h-[360px]"
            />

          </div>


          {/* CONTENT */}
          <div>

            <span className="inline-flex rounded-md bg-[#dbeafe] px-3 py-1 text-[12px] font-bold text-[#0f172a]">
              {product.badge}
            </span>

            <h1 className="mt-5 text-[36px] font-extrabold leading-tight text-[#0f172a] sm:text-4xl md:text-5xl">
              {product.name}
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#64748b]">
              {product.description}
            </p>


            {/* INFO BOXES */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-lg border border-[#e5e7eb] bg-white p-5">

                <p className="text-[13px] font-bold uppercase tracking-[2px] text-[#0f172a]">
                  Warranty
                </p>

                <p className="mt-2 text-sm leading-6 text-[#64748b]">
                  Reliable warranty support for your purchase.
                </p>

              </div>


              <div className="rounded-lg border border-[#e5e7eb] bg-white p-5">

                <p className="text-[13px] font-bold uppercase tracking-[2px] text-[#0f172a]">
                  Assistance
                </p>

                <p className="mt-2 text-sm leading-6 text-[#64748b]">
                  Friendly support for all your tech needs.
                </p>

              </div>

            </div>


            {/* BUTTONS */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              <a
                href="/products"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-md
                  bg-[#0f172a]
                  px-6
                  py-3
                  text-[14px]
                  font-bold
                  text-white
                  transition
                  hover:bg-[#1d4ed8]
                "
              >
                Back to Shop

                <IoMdArrowRoundForward size={18} />
              </a>

              <a
                href="tel:+918364266074"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-md
                  border
                  border-[#0f172a]
                  px-6
                  py-3
                  text-[14px]
                  font-bold
                  text-[#0f172a]
                  transition
                  hover:bg-[#0f172a]
                  hover:text-white
                "
              >
                Call for Details
              </a>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}
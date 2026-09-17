import { useEffect, useState, useRef } from "react";
import { shop } from "../data/shopData";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { FiArrowDown, FiPlus, FiMinus } from "react-icons/fi";
import { PiTimerFill } from "react-icons/pi";
import {
  IoMdArrowRoundBack,
} from "react-icons/io";
import {
  FiArrowRight,
} from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import {
  IoMdArrowRoundForward,
  IoMdCall,
  IoMdMail,
  IoMdPin,
} from "react-icons/io";

import {
  FaMobileAlt,
  FaHeadphones,
  FaVolumeUp,
  FaTools,
  FaPlug,
  FaShieldAlt,
} from "react-icons/fa";

const navItems = ["Home", "Shop", "Brands", "Service", "Contact"];

/* PRODUCTS DATA */

const serviceProducts = [
  // ============================================================
  // ALL PRODUCTS - SET 1
  // ============================================================
  {
    name: "Audio Devices",
    category: "All Products",
    image: "/assets/product.webp",
    bg: "bg-[#e7e6f8]",
    description:
      "Premium audio devices with clear sound, deep bass and an immersive listening experience.",
  },
  {
    name: "Smartwatches",
    category: "All Products",
    image: "/assets/product1.webp",
    bg: "bg-[#e7e6f8]",
    description:
      "Smart and stylish watches with fitness tracking, notifications and everyday health features.",
  },

  // ============================================================
  // PHONES - SET 2
  // ============================================================
  {
    name: "iPhone",
    category: "Phones",
    image: "/assets/phone1.png",
    bg: "bg-[#e7e6f8]",
    description:
      "Powerful smartphones with premium design, advanced cameras, smooth performance and long-lasting battery life.",
  },
  {
    name: "Samsung Galaxy",
    category: "Phones",
    image: "/assets/phone2.png",
    bg: "bg-[#e7e6f8]",
    description:
      "Modern Galaxy smartphones with vivid displays, powerful processors, excellent cameras and smart features.",
  },

  // ============================================================
  // AUDIO - SET 3
  // ============================================================
  {
    name: "Wireless Earbuds",
    category: "Audio",
    image: "/assets/audio1.png",
    bg: "bg-[#e7e6f8]",
    description:
      "Compact wireless earbuds with clear vocals, deep bass and a comfortable fit for everyday listening.",
  },
  {
    name: "Headphones",
    category: "Audio",
    image: "/assets/audio2.png",
    bg: "bg-[#e7e6f8]",
    description:
      "Comfortable headphones delivering rich audio, powerful bass and an immersive listening experience.",
  },

  // ============================================================
  // ACCESSORIES - SET 4
  // ============================================================
  {
    name: "Smartwatches",
    category: "Watches",
    image: "/assets/watch1.png",
    bg: "bg-[#e7e6f8]",
    description:
      "Smart and stylish watches with fitness tracking, notifications and everyday health features.",
  },
  {
    name: "Chargers & Cables",
    category: "Watches",
    image: "/assets/watch2.png",
    bg: "bg-[#e7e6f8]",
    description:
      "Fast and reliable chargers and durable cables for convenient everyday device charging.",
  },
];

const quickTiles = [
  "Screen guards",
  "Back covers",
  "Bluetooth speakers",
  "Memory cards",
  "Power banks",
  "Fast chargers",
];

const benefitHighlights = [
  {
    icon: "headphones",
    title: "Product Advice",
    detail: "Choose the right tech with ease",
  },
  {
    icon: "shield",
    title: "Reliable Service",
    detail: "Quick and helpful support",
  },
  {
    icon: "award",
    title: "Secure Payments",
    detail: "Safe and trusted transactions",
  },
  {
    icon: "phone",
    title: "After-Sales Care",
    detail: "Support beyond your purchase",
  },
];

const testimonials = [
  {
    name: "Rohit Patil",
    role: "Smartphone Customer",
    quote:
      "The team helped me choose the right phone and made the whole experience smooth, easy, and hassle-free.",
  },

  {
    name: "Sneha Kulkarni",
    role: "Accessory Buyer",
    quote:
      "Good collection of chargers, covers and audio accessories. The product suggestion was clear and useful.",
  },

  {
    name: "Amit Desai",
    role: "Repair Support",
    quote:
      "My phone issue was checked properly and explained in simple words. The support felt honest and fast.",
  },

  {
    name: "Priya Sharma",
    role: "Laptop Customer",
    quote:
      "The team helped me find the right laptop within my budget. The experience was simple and smooth.",
  },

  {
    name: "Karan Mehta",
    role: "Gadget Buyer",
    quote:
      "The product quality was excellent and the staff was very helpful. I got the right gadget at a good price.",
  },

  {
    name: "Neha Joshi",
    role: "Smart Device Customer",
    quote:
      "A great place to find the latest gadgets and accessories. The team was friendly, knowledgeable, and easy to talk to.",
  },
];

const navigateToShopPage = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  window.history.pushState({}, "", "/products");
  window.dispatchEvent(new Event("app-route-change"));
};

const productSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const navigateToProductPage = (
  event: React.MouseEvent<HTMLAnchorElement>,
  productName: string
) => {
  event.preventDefault();
  window.history.pushState({}, "", `/products/${productSlug(productName)}`);
  window.dispatchEvent(new Event("app-route-change"));
};

function BenefitIcon({ icon }: { icon: string }) {
  const iconClass = "h-9 w-9 text-[#2563eb]";

  if (icon === "truck") {
    return (
      <svg className={iconClass} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M5 13h24v22H5V13Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M29 21h8l6 7v7H29V21Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M12 39a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM36 39a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="3" />
        <path d="M16 35h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "shield") {
    return (
      <svg className={iconClass} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 5 39 11v11c0 9.5-5.9 17.8-15 21-9.1-3.2-15-11.5-15-21V11L24 5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="m17 24 5 5 10-11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "award") {
    return (
      <svg className={iconClass} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 30a11 11 0 1 0 0-22 11 11 0 0 0 0 22Z" stroke="currentColor" strokeWidth="3" />
        <path d="m18 29-4 13 10-5 10 5-4-13" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="m19 19 3 3 7-7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "phone") {
    return (
      <svg className={iconClass} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="15" r="7" stroke="currentColor" strokeWidth="3" />
        <path d="M11 40c1.5-8 6-12 13-12s11.5 4 13 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M35 25h3a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5h-3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className={iconClass} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="3" />
      <path d="M24 14v10l7 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-300 ${isScrolled
        ? "bg-white/95 text-[#0f172a] shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl"
        : "bg-transparent text-black backdrop-blur-sm"
        }`}
    >
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#" className="shrink-0">
          <img src="/assets/logo.png" alt="GizmoHub" className="h-11 w-auto object-contain lg:h-12" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          <a href="#" className="relative py-2 text-[13px] font-bold">Home<span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#2563eb]" /></a>
          <a href="#repair" className="text-[13px] font-semibold opacity-80 transition hover:text-[#2563eb] hover:opacity-100">Repair</a>
          <a href="/products" onClick={navigateToShopPage} className="text-[13px] font-semibold opacity-80 transition hover:text-[#2563eb] hover:opacity-100">Products</a>
          <a href="#about" className="text-[13px] font-semibold opacity-80 transition hover:text-[#2563eb] hover:opacity-100">About Us</a>
          <a href="#brands" className="text-[13px] font-semibold opacity-80 transition hover:text-[#2563eb] hover:opacity-100">Brands</a>
          <a href="#contact" className="text-[13px] font-semibold opacity-80 transition hover:text-[#2563eb] hover:opacity-100">Contact</a>
        </nav>

        <a href="tel:+918364266074" className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-4 py-2.5 text-[12px] font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-[#1d4ed8] sm:px-5 sm:text-[13px]">
          <FaPhone size={13} /> Call Now
        </a>
      </div>
    </header>
  );
}

export function Hero() {
  const desktopHeroImages = [
    "/hero1.png",
    "/hero2.png",
    "/hero3.png",
  ];

  const mobileHeroImages = [
    "/hero-mobile1.png",
    "/hero-mobile2.png",
    "/hero-mobile3.png",
  ];

  const heroSlides = [
    {
      title: "Smart Tech",
      highlight: "Better Everyday",
      description:
        "Discover innovative gadgets and accessories built for performance and style",
    },
    {
      title: "Powerful Motion",
      highlight: "Moves With You",
      description:
        "Experience powerful devices designed to keep you connected wherever life takes you",
    },
    {
      title: "Technology",
      highlight: "Made Simple",
      description:
        "Premium gadgets and accessories that bring smarter experiences into your everyday life",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] =
    useState<"next" | "prev">("next");

  const heroRef = useRef<HTMLElement | null>(null);
  const wheelLocked = useRef(false);

  // =========================================================
  // CHANGE SLIDE
  // =========================================================

  const changeSlide = (
    nextIndex: number,
    dir: "next" | "prev"
  ) => {
    if (isAnimating) return;

    if (
      nextIndex < 0 ||
      nextIndex >= heroSlides.length
    ) {
      return;
    }

    setDirection(dir);
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentSlide(nextIndex);

      setTimeout(() => {
        setIsAnimating(false);
      }, 100);
    }, 900);
  };

  // =========================================================
  // DESKTOP WHEEL SCROLL
  // =========================================================

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Desktop only
      if (window.innerWidth < 1024) {
        return;
      }

      const hero = heroRef.current;

      if (!hero) return;

      const rect = hero.getBoundingClientRect();

      const heroIsVisible =
        rect.top <= 0 &&
        rect.bottom >= window.innerHeight * 0.5;

      if (!heroIsVisible) return;

      if (
        wheelLocked.current ||
        isAnimating
      ) {
        e.preventDefault();
        return;
      }

      const goingDown = e.deltaY > 0;
      const goingUp = e.deltaY < 0;

      // DOWN
      if (
        goingDown &&
        currentSlide < heroSlides.length - 1
      ) {
        e.preventDefault();

        wheelLocked.current = true;

        changeSlide(
          currentSlide + 1,
          "next"
        );

        setTimeout(() => {
          wheelLocked.current = false;
        }, 1150);

        return;
      }

      // UP
      if (
        goingUp &&
        currentSlide > 0
      ) {
        e.preventDefault();

        wheelLocked.current = true;

        changeSlide(
          currentSlide - 1,
          "prev"
        );

        setTimeout(() => {
          wheelLocked.current = false;
        }, 1150);
      }
    };

    window.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: false,
      }
    );

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel
      );
    };
  }, [currentSlide, isAnimating]);

  // =========================================================
  // MOBILE AUTO SLIDE
  // =========================================================

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (window.innerWidth >= 1024) {
        return;
      }

      if (isAnimating) {
        return;
      }

      const nextIndex =
        (currentSlide + 1) %
        heroSlides.length;

      setDirection("next");
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentSlide(nextIndex);

        setTimeout(() => {
          setIsAnimating(false);
        }, 100);
      }, 900);
    }, 4500);

    return () => {
      window.clearInterval(interval);
    };
  }, [currentSlide, isAnimating]);

  const activeSlide =
    heroSlides[currentSlide];

  return (
    <section
      ref={heroRef}
      className="
        relative
        mt-0
        min-h-[620px]
        overflow-hidden
        bg-[#020817]
        text-white

        sm:min-h-[500px]

        lg:mt-0
        lg:mb-0
        lg:min-h-[670px]
      "
    >
      {/* =====================================================
          DESKTOP HERO SLIDER
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          hidden
          overflow-hidden
          lg:block
        "
      >
        <div
          className="
            flex
            h-full
            w-full
            will-change-transform
          "
          style={{
            transform: `translate3d(-${currentSlide * 100
              }%, 0, 0)`,

            transition:
              "transform 1100ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {desktopHeroImages.map(
            (image) => (
              <div
                key={image}
                className="
                  relative
                  h-full
                  min-w-full
                  flex-shrink-0
                "
              >
                <img
                  src={image}
                  alt=""
                  draggable="false"
                  className="
                    h-full
                    w-full
                    select-none
                    object-cover
                    object-center
                    will-change-transform
                  "
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* =====================================================
          MOBILE HERO SLIDER
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          overflow-hidden
          lg:hidden
        "
      >
        {mobileHeroImages.map(
          (image, index) => (
            <div
              key={image}
              className="
                absolute
                inset-0
                h-full
                w-full
                will-change-transform
              "
              style={{
                transform: `translate3d(
                  0,
                  ${index <= currentSlide
                    ? 0
                    : 100
                  }%,
                  0
                )`,

                transition:
                  "transform 1100ms cubic-bezier(0.22, 1, 0.36, 1)",

                zIndex: index,
              }}
            >
              <img
                src={image}
                alt=""
                draggable="false"
                className="
                  h-full
                  w-full
                  select-none
                  object-cover
                  object-center
                "
              />
            </div>
          )
        )}
      </div>

      {/* =====================================================
          MOBILE DARK OVERLAY
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[5]
          bg-black/45
          lg:hidden
        "
      />

      {/* =====================================================
          BLUE GLOW - DESKTOP ONLY
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-20
          top-1/3
          z-[4]
          hidden
          h-80
          w-80
          rounded-full
          bg-[#2563eb]/10
          blur-[110px]
          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-1/4
          z-[4]
          hidden
          h-96
          w-96
          rounded-full
          bg-[#60a5fa]/10
          blur-[120px]
          lg:block
        "
      />

      {/* =====================================================
          CONTENT AREA
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          min-h-[550px]
          max-w-7xl
          px-5

          sm:min-h-[500px]
          sm:px-6

          lg:flex
          lg:min-h-[670px]
          lg:items-center
          lg:justify-end
          lg:px-8
          lg:pt-0
        "
      >
        {/* =================================================
            CONTENT
        ================================================= */}

        <div
          className="
            relative
            min-h-[550px]
            w-full

            sm:min-h-[500px]

            lg:ml-auto
            lg:flex
            lg:min-h-0
            lg:w-[40%]
            lg:max-w-[620px]
            lg:shrink-0
            lg:flex-col
            lg:items-end
            lg:justify-center
            lg:text-right
          "
        >
          {/* =================================================
              ANIMATED CONTENT
          ================================================= */}

          <div
            key={currentSlide}
            className={`
              relative
              min-h-[550px]
              w-full
              text-left

              ${direction === "next"
                ? "hero-text-enter-bottom"
                : "hero-text-enter-top"
              }

              sm:min-h-[500px]

              lg:flex
              lg:min-h-0
              lg:flex-col
              lg:items-end
              lg:justify-center
              lg:text-right
            `}
          >
            {/* =================================================
                MOBILE HEADING
            ================================================= */}

            <h1
              className="
                absolute
                left-1/2
                top-[120px]
                z-20
                w-full
                -translate-x-1/2

                font-sans
                text-[33px]
                font-extrabold
                uppercase
                leading-[0.95]
                tracking-[1px]
                text-white

                drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]

                sm:top-[95px]
                sm:text-[48px]

                lg:static
                lg:translate-x-0
                lg:text-[56px]
                lg:tracking-[1px]
                lg:text-black
                lg:drop-shadow-[0_5px_20px_rgba(0,0,0,0.20)]

                xl:text-[62px]
              "
            >
              {activeSlide.title}

              <br />

              <span>
                {activeSlide.highlight}
              </span>
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                absolute
                left-1/2
                top-[205px]
                z-20
                w-full
                max-w-[340px]
                -translate-x-1/2

                text-left
                text-[13px]
                font-normal
                leading-[1.6]
                tracking-[0.1px]
                text-white

                drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]

                sm:top-[205px]
                sm:max-w-[420px]
                sm:text-[14px]

                lg:static
                lg:mt-6
                lg:translate-x-0
                lg:max-w-[480px]
                lg:text-right
                lg:text-[15px]
                lg:leading-[1.6]
                lg:text-black
                lg:drop-shadow-[0_2px_8px_rgba(0,0,0,0.30)]
              "
            >
              {activeSlide.description}
            </p>

            {/* =================================================
                MOBILE BUTTONS
                Phones/image stays in center behind these
            ================================================= */}

            <div
              className="
                absolute
                -bottom-[40px]
                left-1/2
                z-20
                flex
                w-full
                -translate-x-1/2
                items-left
                justify-left
                gap-4

                sm:bottom-[35px]

                lg:static
                lg:mt-8
                lg:w-auto
                lg:translate-x-0
                lg:justify-end
                lg:gap-4
              "
            >
              {/* =================================================
                  EXPLORE NOW
              ================================================= */}

              <a
                href="/products"
                onClick={
                  navigateToShopPage
                }
                className="
                  group
                  inline-flex
                  shrink-0
                  items-center
                  gap-2
                  whitespace-nowrap
                  rounded-full
                  border
                  border-white/60
                  bg-white/10
                  px-4
                  py-3
                  text-[11px]
                  font-medium
                  tracking-[0.3px]
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-500
                  ease-out

                  hover:border-transparent
                  hover:bg-white
                  hover:text-[#020817]

                  sm:px-5
                  sm:text-[12px]

                  lg:gap-3
                  lg:px-7
                  lg:py-3.5
                  lg:text-[13px]
                  lg:tracking-[0.5px]
                  lg:border-black/30
                  lg:bg-white/5
                  lg:text-black
                "
              >
                Explore Now

                <span
                  className="
                    flex
                    h-5
                    w-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white/20
                    transition-all
                    duration-500
                    ease-out

                    group-hover:translate-x-1

                    lg:h-7
                    lg:w-7
                    lg:bg-black/10
                  "
                >
                  <FiArrowRight
                    size={14}
                  />
                </span>
              </a>

              {/* =================================================
                  EXPLORE COLLECTION
              ================================================= */}

              <a
                href="#shop"
                className="
                  inline-flex
                  shrink-0
                  items-center
                  whitespace-nowrap
                  rounded-full
                  border
                  border-white/60
                  bg-white/10
                  px-4
                  py-3
                  text-[11px]
                  font-medium
                  tracking-[0.3px]
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-500
                  ease-out

                  hover:bg-white/20

                  sm:px-5
                  sm:text-[12px]

                  lg:px-7
                  lg:py-3.5
                  lg:text-[13px]
                  lg:tracking-[0.5px]
                  lg:border-black/30
                  lg:bg-white/5
                  lg:text-black
                  lg:hover:bg-white/15
                "
              >
                Explore Collection
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          DESKTOP SLIDE INDICATORS
      ====================================================== */}

      <div
        className="
          absolute
          bottom-6
          left-1/2
          z-30
          hidden
          -translate-x-1/2
          items-center
          gap-2

          lg:flex
          lg:bottom-10
          lg:gap-3
        "
      >
        {heroSlides.map(
          (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                if (
                  index === currentSlide ||
                  isAnimating
                ) {
                  return;
                }

                changeSlide(
                  index,
                  index > currentSlide
                    ? "next"
                    : "prev"
                );
              }}
              className={`
                h-[6px]
                rounded-full
                transition-all
                duration-700
                ease-out

                ${currentSlide === index
                  ? "w-16 bg-white"
                  : "w-10 bg-white/40"
                }
              `}
              aria-label={`Go to slide ${index + 1
                }`}
            />
          )
        )}
      </div>

      {/* =====================================================
          BOTTOM FADE - DESKTOP ONLY
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          z-20
          hidden
          h-50
          bg-gradient-to-t
          from-[#0f172a]
          to-transparent
          lg:block
        "
      />

      {/* =====================================================
          ANIMATION CSS
      ====================================================== */}

      <style>{`
        /* ==================================================
           TEXT ENTER — DOWN
        ================================================== */

        @keyframes heroTextEnterBottom {
          0% {
            opacity: 0;
            transform:
              translate3d(0, 55px, 0)
              scale(0.985);
            filter: blur(2px);
          }

          45% {
            opacity: 0.7;
            filter: blur(0.5px);
          }

          100% {
            opacity: 1;
            transform:
              translate3d(0, 0, 0)
              scale(1);
            filter: blur(0);
          }
        }

        /* ==================================================
           TEXT ENTER — UP
        ================================================== */

        @keyframes heroTextEnterTop {
          0% {
            opacity: 0;
            transform:
              translate3d(0, -55px, 0)
              scale(0.985);
            filter: blur(2px);
          }

          45% {
            opacity: 0.7;
            filter: blur(0.5px);
          }

          100% {
            opacity: 1;
            transform:
              translate3d(0, 0, 0)
              scale(1);
            filter: blur(0);
          }
        }

        /* ==================================================
           TEXT ANIMATION
        ================================================== */

        .hero-text-enter-bottom {
          animation:
            heroTextEnterBottom
            850ms
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            )
            both;

          will-change:
            transform,
            opacity,
            filter;
        }

        .hero-text-enter-top {
          animation:
            heroTextEnterTop
            850ms
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            )
            both;

          will-change:
            transform,
            opacity,
            filter;
        }

        /* ==================================================
           IMAGE PERFORMANCE
        ================================================== */

        img {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        /* ==================================================
           REDUCE MOTION
        ================================================== */

        @media (prefers-reduced-motion: reduce) {
          .hero-text-enter-bottom,
          .hero-text-enter-top {
            animation-duration: 1ms !important;
          }
        }

        /* ==================================================
           LARGE SCREEN EXTRA SPACING
        ================================================== */

        @media (min-width: 1536px) {
          .hero-text-enter-bottom,
          .hero-text-enter-top {
            will-change:
              transform,
              opacity;
          }
        }
      `}</style>
    </section>
  );
}


export function BrandMarquee() {
  const brands = [
    "/assets/brand1.png",
    "/assets/brand2.png",
    "/assets/brand3.png",
    "/assets/brand4.png",
    "/assets/brand5.png",
    "/assets/brand6.png",
    "/assets/brand7.jpg",
    "/assets/brand8.png",
    "/assets/brand10.png",
    "/assets/brand11.png",
    "/assets/brand12.webp",
  ];

  return (
    <section
      id="brands"
      className="
        relative
        overflow-hidden
        border-b
        bg-[#f8fafc]
        pb-7
        lg:pt-16
        scroll-mt-[80px]
      "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}

        <div
          className="
            mb-10
            flex
            items-center
            justify-between
            gap-4
            sm:mb-16
          "
        >
          <p
            className="
              mt-4
              text-[36px]
              font-sans
              font-extrabold
              leading-[1.08]
              tracking-tight
              text-[#0f172a]
              sm:text-5xl
              lg:text-[48px]
            "
          >
            Trusted{" "}
            <span className="text-[#2563eb]">
              Brand
            </span>{" "}
            Partners
          </p>

          <div className="hidden h-px flex-1 sm:block" />
        </div>
      </div>

      {/* ================= LOGOS ================= */}

      <div className="overflow-hidden">

        {/* =====================================================
            MOBILE LAYOUT
            2 LOGOS PER ROW
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-2
            gap-3
            px-5
            sm:hidden
          "
        >
          {brands.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="
                group
                flex
                h-[78px]
                w-full
                items-center
                justify-center
                rounded-2xl
                border
                border-[#e7ebf0]
                px-5
                py-4
                shadow-[0_2px_10px_rgba(15,23,42,0.03)]
              "
            >
              <img
                src={brand}
                alt="Our Brand Partners"
                className="
                  block
                  h-full
                  w-full
                  object-contain
                  grayscale
                  opacity-70
                  transition-all
                  duration-300
                  ease-out
                  group-hover:scale-110
                  group-hover:grayscale-0
                  group-hover:opacity-100
                "
              />
            </div>
          ))}
        </div>

        {/* =====================================================
            TABLET + DESKTOP
            EXISTING LAYOUT — UNCHANGED
        ====================================================== */}

        <div
          className="
            hidden
            sm:block
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-5
              px-6
              lg:gap-10
              lg:px-8
              flex-wrap
            "
          >
            {brands.map((brand, i) => (
              <div
                key={`${brand}-${i}`}
                className="
                  group
                  flex
                  h-20
                  w-40
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  px-6
                  py-3
                  lg:h-20
                  lg:w-44
                  lg:px-7
                "
              >
                <img
                  src={brand}
                  alt="Our Brand Partners"
                  className="
                    block
                    h-full
                    w-full
                    object-contain
                    grayscale
                    opacity-70
                    transition-all
                    duration-300
                    ease-out
                    group-hover:scale-125
                    group-hover:grayscale-0
                    group-hover:opacity-100
                  "
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export function WhatWeDo() {
  const services = [
    {
      title: "Buy & Sell Devices",
      image: "/do1.png",
      description:
        "Find the right device or sell your old one with ease.",
      features: ["BUY", "SELL"],
    },
    {
      title: "Mobile Repair",
      image: "/do2.png",
      description:
        "Quick, reliable and expert repairs for all your devices.",
      features: ["REPAIR", "SUPPORT"],
    },
    {
      title: "Audio Device Repair",
      image: "/do3.png",
      description:
        "Get your audio devices back to perfect sound.",
      features: ["AUDIO", "REPAIR"],
    },
    {
      title: "Accessories",
      image: "/do4.png",
      description:
        "Premium accessories for a better everyday experience.",
      features: ["MOBILE", "AUDIO"],
    },
    {
      title: "Device Setup",
      image: "/do5.png",
      description:
        "Get your device ready for everything that's next.",
      features: ["SETUP", "GUIDANCE"],
    },
    {
      title: "Troubleshooting",
      image: "/do7.png",
      description:
        "We'll find the issue and fix it fast.",
      features: ["DIAGNOSIS", "SUPPORT"],
    },
    {
      title: "Mobile Covers",
      image: "/do6.webp",
      description:
        "Stylish protection designed for your device.",
      features: ["STYLE", "PROTECTION"],
    },
    {
      title: "Device Care",
      image: "/do8.webp",
      description:
        "Keep your device clean, safe and looking new.",
      features: ["CARE", "PROTECTION"],
    },
  ];

  /*
   * ============================================================
   * INFINITE CAROUSEL
   * ============================================================
   */

  const carouselServices = [
    ...services,
    ...services,
    ...services,
  ];

  const [currentIndex, setCurrentIndex] = useState(
    services.length
  );

  const [isTransitioning, setIsTransitioning] =
    useState(true);

  const resetTimeoutRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  /*
   * ============================================================
   * AUTO SLIDE
   * ============================================================
   */

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setCurrentIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /*
   * ============================================================
   * INVISIBLE INFINITE LOOP RESET
   * BOTH PREVIOUS + NEXT
   * ============================================================
   */

  useEffect(() => {
    if (currentIndex >= services.length * 2) {
      resetTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);

        setCurrentIndex(services.length);
      }, 850);
    }

    if (currentIndex < services.length) {
      resetTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);

        setCurrentIndex(
          services.length * 2 - 1
        );
      }, 850);
    }

    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, [currentIndex, services.length]);

  /*
   * ============================================================
   * RE-ENABLE TRANSITION
   * ============================================================
   */

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  /*
   * ============================================================
   * PREVIOUS / NEXT
   * ============================================================
   */

  const handlePrevious = () => {
    setIsTransitioning(true);

    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);

    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <section
      id="what-we-do"
      className="
        scroll-mt-[80px]
        overflow-x-clip
        bg-[#f8fafc]
        py-20
        pb-[50px]
        lg:pt-28
        lg:pb-[100px]
      "
    >
      {/* ========================================================
          HEADER
          ======================================================== */}

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">

          {/* SMALL LABEL */}

          <p
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[3px]
              text-[#2563eb]
            "
          >
            What We Do
          </p>

          {/* MAIN HEADING */}

          <h2
            className="
            hidden 
            lg:block
              mt-4
              text-[36px]
              font-sans
              font-extrabold
              leading-[1.08]
              tracking-tight
              text-[#0f172a]
              sm:text-[48px]
            "
          >
            Everything you need,
            <br />

            <span className="text-[#2563eb]"> all in one place.</span>
          </h2>

          <h2
            className="
            lg:hidden
              mt-4
              text-[36px]
              font-sans
              font-extrabold
              leading-[1.08]
              tracking-tight
              text-[#0f172a]
              sm:text-[48px]
            "
          >
            Everything you need,


            <span className="text-[#2563eb]"> all in one place.</span>
          </h2>

        </div>
      </div>

      {/* ========================================================
          DESKTOP CAROUSEL
          ======================================================== */}

      <div
        className="
          mt-12
          hidden
          w-full
          overflow-visible
          lg:block
        "
      >
        <div
          className={`
            flex
            items-start
            gap-[20px]

            ${isTransitioning
              ? "transition-transform duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              : ""
            }
          `}
          style={{
            transform: `
              translateX(
                calc(
                  -${currentIndex} * (22vw + 20px)
                  + 11vw
                  - 10px
                )
              )
            `,
          }}
        >
          {carouselServices.map((service, index) => {
            const originalIndex =
              index % services.length;

            const isLowerCard =
              originalIndex % 2 === 0;

            return (
              <article
                key={`${service.title}-${index}`}
                className={`
                  group
                  relative
                  shrink-0
                  w-[calc(22vw-10px)]

                  transition-transform
                  duration-700
                  ease-out

                  ${isLowerCard
                    ? "translate-y-[30px]"
                    : "translate-y-0"
                  }
                `}
              >
                {/* IMAGE CARD */}

                <div
                  className="
                    relative
                    aspect-[0.78]
                    overflow-hidden
                    rounded-[30px]
                    bg-[#e5e7eb]
                  "
                >
                  {/* IMAGE */}

                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* DARK IMAGE OVERLAY */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/35
                      via-transparent
                      to-black/10
                    "
                  />

                  {/* FEATURES */}

                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      flex
                      gap-2
                    "
                  >
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="
                          rounded-full
                          border
                          border-white/30
                          bg-black/30
                          px-3
                          py-1.5
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[1px]
                          text-white
                          backdrop-blur-md
                        "
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* TITLE + DESCRIPTION */}

                <div className="px-1 pt-4">

                  <h3
                    className="
                      text-[17px]
                      font-sans
                      font-extrabold
                      leading-tight
                      tracking-tight
                      text-[#0f172a]
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-[95%]
                      text-[12px]
                      font-sans
                      leading-5
                      text-[#64748b]
                    "
                  >
                    {service.description}
                  </p>

                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          MOBILE CAROUSEL
          ======================================================== */}

      <div
        className="
          mt-10
          overflow-x-clip
          overflow-y-visible
          lg:hidden
        "
      >
        <div
          className={`
            flex
            items-start
            gap-4

            ${isTransitioning
              ? "transition-transform duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              : ""
            }
          `}
          style={{
            transform: `
              translateX(
                calc(
                  -${currentIndex} * (78vw + 16px)
                  + 11vw
                )
              )
            `,
          }}
        >
          {carouselServices.map((service, index) => {
            const originalIndex =
              index % services.length;

            const isLowerCard =
              originalIndex % 2 === 0;

            return (
              <article
                key={`mobile-${service.title}-${index}`}
                className={`
                  group
                  relative
                  shrink-0
                  w-[78vw]

                  transition-transform
                  duration-700
                  ease-out

                  ${isLowerCard
                    ? "translate-y-[30px]"
                    : "translate-y-0"
                  }
                `}
              >
                {/* MOBILE IMAGE CARD */}

                <div
                  className="
                    relative
                    aspect-[0.78]
                    overflow-hidden
                    rounded-[22px]
                    bg-[#e5e7eb]
                  "
                >
                  {/* IMAGE */}

                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* OVERLAY */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/35
                      via-transparent
                      to-black/10
                    "
                  />

                  {/* FEATURES */}

                  <div
                    className="
                      absolute
                      left-3
                      top-3
                      flex
                      gap-1.5
                    "
                  >
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="
                          rounded-full
                          border
                          border-white/30
                          bg-black/30
                          px-2.5
                          py-1
                          text-[7px]
                          font-bold
                          uppercase
                          tracking-[0.8px]
                          text-white
                          backdrop-blur-md
                        "
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* MOBILE TITLE + DESCRIPTION */}

                <div className="px-1 pt-3">

                  <h3
                    className="
                      text-[15px]
                      font-sans
                      font-extrabold
                      leading-tight
                      tracking-tight
                      text-[#0f172a]
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-1.5
                      text-[11px]
                      font-sans
                      leading-5
                      text-[#64748b]
                    "
                  >
                    {service.description}
                  </p>

                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          PREVIOUS / NEXT ARROWS
          ======================================================== */}

      <div
        className="
          mt-14
          flex
          items-center
          justify-center
          gap-3
          lg:mt-16
        "
      >
        {/* PREVIOUS BUTTON */}

        <button
          type="button"
          onClick={handlePrevious}
          aria-label="Previous service"
          className="
            group
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-[#dbe3ee]
            bg-white
            text-[#0f172a]
            shadow-sm

            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:border-[#2563eb]
            hover:bg-[#2563eb]
            hover:text-white
            hover:shadow-md

            active:scale-95
          "
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="
              transition-transform
              duration-300
              group-hover:-translate-x-0.5
            "
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* NEXT BUTTON */}

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next service"
          className="
            group
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-[#dbe3ee]
            bg-white
            text-[#0f172a]
            shadow-sm

            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:border-[#2563eb]
            hover:bg-[#2563eb]
            hover:text-white
            hover:shadow-md

            active:scale-95
          "
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="
              transition-transform
              duration-300
              group-hover:translate-x-0.5
            "
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* ========================================================
          STYLING
          ======================================================== */}

      <style>{`
        #what-we-do {
          overflow-x: clip;
        }

        #what-we-do * {
          box-sizing: border-box;
        }
      `}</style>
    </section>
  );
}

export function AboutUs() {
  const highlights = [
    {
      title: "Expert Repairs",
      text: "Reliable repair solutions to get your devices back in working condition.",
    },
    {
      title: "Quality Service",
      text: "We focus on careful repairs and quality solutions for your devices.",
    },
    {
      title: "Trusted Support",
      text: "Helpful guidance and dependable support throughout the repair process.",
    },
  ];

  return (
    <section
      id="repair"
      className="
        relative
        overflow-hidden
        bg-[#f8fafc]
        scroll-mt-[100px]
        lg:min-h-[calc(100vh-80px)]
        lg:flex
        lg:items-center
      "
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#2563eb]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#2563eb]/5 blur-3xl" />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
          px-5
          py-8
          sm:px-6
          lg:px-8
          lg:py-10
        "
      >
        {/* ================= TOP HEADING ================= */}
        <div className="mb-7 flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#2563eb]">
              Repair
            </p>

            <h2
              className="
    mt-3
    text-[36px]
    font-sans
    font-extrabold
    leading-[1.08]
    tracking-tight
    text-[#0f172a]
    sm:text-4xl
    lg:text-[42px]
  "
            >
              Reliable repairs
              <br />

              <span
                className="
      mt-2
      inline-block
      whitespace-nowrap
      text-[#2563eb]
    "
              >
                Better performance.
              </span>
            </h2>
          </div>

          <div className="hidden h-px flex-1 bg-[#dbe3ee] lg:block" />
        </div>

        {/* ================= MAIN LAYOUT ================= */}
        <div
          className="
            grid
            overflow-hidden
            rounded-[28px]
            border
            border-[#e2e8f0]
            bg-white
            lg:grid-cols-[0.9fr_1.05fr_1fr]
          "
        >
          {/* ================= LEFT CONTENT ================= */}
          <div
            className="
              flex
              flex-col
              justify-center
              border-b
              border-[#e2e8f0]
              p-6
              sm:p-8
              lg:border-b-0
              lg:p-8
              xl:p-10
            "
          >
            {/* Small Heading */}
            <div className="mb-5">

              <h3
                className="
                  mt-2
                  text-[22px]
                  font-extrabold
                  leading-tight
                  text-[#0f172a]
                  lg:text-[24px]
                "
              >
                Care you can count on
              </h3>
            </div>

            {/* First Paragraph */}
            <p
              className="
                max-w-md
                text-[14px]
                leading-6
                text-[#64748b]
                lg:text-[13px]
              "
            >
              We provide dependable repair solutions for a wide range of
              devices. From common issues to technical problems, our goal is
              to restore your device and get it working smoothly again.
            </p>

            {/* Second Paragraph */}
            <p
              className="
                mt-4
                max-w-md
                text-[14px]
                leading-6
                text-[#64748b]
                lg:text-[13px]
              "
            >
              With careful attention to every repair, we focus on quality
              workmanship, honest guidance and reliable support you can trust.
            </p>
          </div>

          {/* ================= CENTER VIDEO ================= */}
          <div
            className="
              flex
              items-center
              justify-center
              bg-white
              px-4
              py-5
              sm:px-6
              sm:py-6
              lg:px-4
              lg:py-5
            "
          >
            <div
              className="
                relative
                w-full
                overflow-hidden
                rounded-[24px]
                min-h-[270px]
                sm:min-h-[330px]
                lg:min-h-[290px]
                xl:min-h-[310px]
              "
            >
              <video
                src="/repair.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
              />

              {/* Video overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#020817]/30
                  via-transparent
                  to-transparent
                "
              />
            </div>
          </div>

          {/* ================= RIGHT HIGHLIGHTS ================= */}
          <div className="flex flex-col justify-between bg-white">
            <div>
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="
                    group
                    relative
                    flex
                    min-h-[100px]
                    items-center
                    justify-between
                    border-b
                    border-[#e8edf3]
                    px-6
                    py-4
                    transition-all
                    duration-300
                    hover:bg-[#f8fafc]
                    sm:px-7
                    lg:px-8
                  "
                >
                  <div className="flex items-center gap-4">
                    {/* Number */}
                    <span
                      className="
                        text-[10px]
                        font-bold
                        tracking-[1px]
                        text-[#94a3b8]
                        transition-colors
                        duration-300
                        group-hover:text-[#2563eb]
                      "
                    >
                      0{index + 1}
                    </span>

                    <div>
                      {/* Title */}
                      <h3
                        className="
                          text-[14px]
                          font-extrabold
                          text-[#0f172a]
                          lg:text-[13px]
                        "
                      >
                        {item.title}
                      </h3>

                      {/* Text appears on hover */}
                      <p
                        className="
                          mt-1
                          max-h-0
                          max-w-[260px]
                          overflow-hidden
                          text-[11px]
                          leading-5
                          text-[#64748b]
                          opacity-0
                          transition-all
                          duration-300
                          group-hover:max-h-16
                          group-hover:opacity-100
                        "
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const categories = [
    "All Products",
    "Phones",
    "Audio",
    "Watches",
  ];

  const [activeCategory, setActiveCategory] =
    useState<string>("All Products");

  // ============================================================
  // GET PRODUCTS FOR SELECTED CATEGORY
  // ============================================================

  const getProductsForCategory = (category: string) => {
    if (category === "All Products") {
      return serviceProducts;
    }

    const filtered = serviceProducts.filter(
      (product) => product.category === category
    );

    return filtered.length > 0
      ? filtered
      : serviceProducts;
  };

  // ============================================================
  // ACTIVE CATEGORY INDEX
  // ============================================================

  const activeCategoryIndex =
    categories.indexOf(activeCategory);

  // ============================================================
  // CATEGORY CHANGE
  // ============================================================

  const changeCategory = (category: string) => {
    if (category === activeCategory) return;

    setActiveCategory(category);
  };

  // ============================================================
  // AUTO CATEGORY CHANGE
  // ============================================================

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex =
        categories.indexOf(activeCategory);

      const nextIndex =
        currentIndex === categories.length - 1
          ? 0
          : currentIndex + 1;

      setActiveCategory(categories[nextIndex]);
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  // ============================================================
  // CATEGORY HEADING
  // ============================================================

  const getCategoryHeading = (category: string) => {
    return category === "All Products"
      ? "Smart choices for everyday life."
      : category === "Phones"
        ? "Power in every pocket."
        : category === "Audio"
          ? "Sound that moves with you."
          : "Everyday tech, made easier.";
  };

  // ============================================================
  // CATEGORY SLIDES
  // ============================================================

  const categorySlides = categories.map((category) => {
    const products =
      getProductsForCategory(category);

    const product1 = products[0];

    const product2 =
      products[1] || products[0];

    const product3 =
      products[2] || products[0];

    const product4 =
      products[3] || products[0];

    return {
      category,
      heading: getCategoryHeading(category),
      products,
      product1,
      product2,
      product3,
      product4,
    };
  });

  return (
    <section
      id="shop"
      className="
        relative
        overflow-hidden
        bg-[#f7f9fc]
        pt-4
        pb-6
        scroll-mt-[80px]
        lg:pt-10
        lg:pb-20
      "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ======================================================
            HEADER / CATEGORY NAVIGATION
            DESKTOP ONLY
        ====================================================== */}

        <div className="mb-8">

          <div
            className="
              mt-8
              flex
              w-full
              items-center
            "
          >

            {/* ==================================================
                LEFT SIDE — FEATURED PRODUCTS
                DESKTOP ONLY
            ================================================== */}

            <div
              className="
                hidden
                lg:flex
                w-[calc(33.333333%-8px)]
                items-center
                gap-4
                pr-4
              "
            >
              <p
                className="
                  whitespace-nowrap
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[2.5px]
                  text-[#2563eb]
                "
              >
                Featured Products
              </p>

              <div
                className="
                  h-px
                  flex-1
                  bg-[#dfe5ec]
                "
              />
            </div>

            {/* ==================================================
                RIGHT SIDE — DESKTOP CATEGORY NAVIGATION
            ================================================== */}

            <div
              className="
    ml-auto
    relative
    hidden
    lg:flex
    items-center
    overflow-hidden
    rounded-full

    h-[50px]

    bg-white
    backdrop-blur-md
    border
    border-[#cbd5e1]/70
    shadow-[0_4px_18px_rgba(15,23,42,0.06)]
  "
            >
              {/* DESKTOP MOVING ACTIVE PILL */}
              <span
                className="
    pointer-events-none
    absolute
    left-[4px]
    top-[4px]
    z-0
    h-[calc(100%-8px)]
    w-[104px]
    rounded-full
    bg-[#0f172a]
    shadow-[0_6px_18px_rgba(15,23,42,0.18)]
    transition-transform
    duration-[700ms]
    ease-[cubic-bezier(0.22,1,0.36,1)]
  "
                style={{
                  transform: `translate3d(${activeCategoryIndex * 112}px, 0, 0)`,
                }}
              />

              {categories.map((category) => {
                const active = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => changeCategory(category)}
                    className="
          relative
          z-10
          flex
          h-[42px]
          w-[112px]
          shrink-0
          items-center
          justify-center
          px-3
          text-[13px]
          font-semibold
          font-sans
          transition-colors
          duration-500
        "
                  >
                    <span
                      className={`
            relative
            whitespace-nowrap
            transition-colors
            duration-500
            ${active
                          ? "text-white"
                          : "text-[#94a3b8] hover:text-[#0f172a]"
                        }
          `}
                    >
                      {category}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ======================================================
            DESKTOP
            SMOOTH HORIZONTAL CATEGORY TRACK
        ====================================================== */}

        <div
          className="
            hidden
            overflow-hidden
            lg:block
          "
        >

          <div
            className="
              flex
              w-full
              items-start
              transition-transform
              duration-[900ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              will-change-transform
            "
            style={{
              transform: `translate3d(-${activeCategoryIndex * 100}%, 0, 0)`,
            }}
          >

            {categorySlides.map((slide) => (
              <div
                key={slide.category}
                className="
                  w-full
                  shrink-0
                "
              >

                {/* ==================================================
                    DESKTOP GRID
                ================================================== */}

                <div
                  className="
                    grid
                    grid-cols-12
                    gap-4
                  "
                >

                  {/* ==================================================
                      LEFT COLUMN
                  ================================================== */}

                  <div
                    className="
                      col-span-4
                    "
                  >

                    {/* TEXT CARD */}

                    <div
                      className="
                        flex
                        min-h-[420px]
                        flex-col
                        justify-center
                        rounded-[28px]
                        border
                        border-[#e3e8ef]
                        bg-white
                        p-9
                        xl:p-11
                      "
                    >

                      <p
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[2.5px]
                          text-[#2563eb]
                        "
                      >
                        {slide.category}
                      </p>

                      <h3
                        className="
                          mt-5
                          max-w-[330px]
                          text-[36px]
                          font-sans
                          font-extrabold
                          leading-[1.04]
                          tracking-[-1.5px]
                          text-[#0f172a]
                          xl:text-[44px]
                        "
                      >
                        {slide.heading}
                      </h3>

                      <p
                        className="
                          mt-6
                          max-w-[330px]
                          text-[13px]
                          leading-7
                          text-[#64748b]
                        "
                      >
                        {slide.product1?.description}
                      </p>

                      <a
                        href="/products"
                        onClick={navigateToShopPage}
                        className="
                          group
                          mt-8
                          inline-flex
                          w-fit
                          items-center
                          gap-3
                          rounded-full
                          bg-[#0f172a]
                          px-5
                          py-3
                          text-[12px]
                          font-bold
                          text-white
                          transition-all
                          duration-500
                          hover:-translate-y-1
                          hover:bg-[#2563eb]
                        "
                      >
                        Explore Collection

                        <span
                          className="
                            flex
                            h-6
                            w-6
                            items-center
                            justify-center
                            rounded-full
                            bg-white/10
                            transition-transform
                            duration-500
                            group-hover:translate-x-1
                          "
                        >
                          <FiArrowRight size={13} />
                        </span>

                      </a>

                    </div>

                  </div>

                  {/* ==================================================
                      PRODUCT 1
                  ================================================== */}

                  <a
                    href={`/products/${productSlug(
                      slide.product1.name
                    )}`}
                    onClick={(e) =>
                      navigateToProductPage(
                        e,
                        slide.product1.name
                      )
                    }
                    className="
                      group
                      col-span-4
                      rounded-[28px]
                    "
                  >

                    <div
                      className="
                        flex
                        h-full
                        min-h-[420px]
                        flex-col
                      "
                    >

                      <div
                        className="
                          relative
                          flex-1
                          overflow-hidden
                          rounded-[22px]
                          bg-[#e7e6f8]
                        "
                      >

                        <img
                          src={slide.product1.image}
                          alt={slide.product1.name}
                          className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-1000
                            ease-out
                            group-hover:scale-105
                          "
                        />

                      </div>

                    </div>

                  </a>

                  {/* ==================================================
                      PRODUCT 2
                  ================================================== */}

                  <a
                    href={`/products/${productSlug(
                      slide.product2.name
                    )}`}
                    onClick={(e) =>
                      navigateToProductPage(
                        e,
                        slide.product2.name
                      )
                    }
                    className="
                      group
                      col-span-4
                      rounded-[28px]
                    "
                  >

                    <div
                      className="
                        flex
                        h-full
                        min-h-[420px]
                        flex-col
                      "
                    >

                      <div
                        className="
                          relative
                          flex-1
                          overflow-hidden
                          rounded-[22px]
                          bg-[#e7e6f8]
                        "
                      >

                        <img
                          src={slide.product2.image}
                          alt={slide.product2.name}
                          className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-1000
                            ease-out
                            group-hover:scale-105
                          "
                        />

                      </div>

                    </div>

                  </a>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* ======================================================
            MOBILE
        ====================================================== */}

        <div
          className="
            lg:hidden
          "
        >

          {/* ====================================================
              MOBILE CATEGORY NAVIGATION
              ONLY ONE NAVIGATION
          ==================================================== */}

          <div
            className="
              mb-5
              flex
              w-full
              justify-center
            "
          >

            <div
              className="
    relative
    grid
    w-full
    max-w-[360px]
    grid-cols-4
    items-center
    overflow-hidden
    rounded-full

    h-[56px]

    bg-white
    backdrop-blur-md
    border
    border-[#cbd5e1]/70
    shadow-[0_4px_18px_rgba(15,23,42,0.06)]

    p-[4px]
  "
            >
              {/* MOBILE ACTIVE PILL */}
              <span
                className="
      pointer-events-none
      absolute
      left-[4px]
      top-[4px]
      z-0

      h-[calc(100%-8px)]
      w-[calc(25%-2px)]

      rounded-full
      bg-[#0f172a]

      shadow-[0_6px_18px_rgba(15,23,42,0.18)]

      transition-transform
      duration-[700ms]
      ease-[cubic-bezier(0.22,1,0.36,1)]
    "
                style={{
                  transform: `translate3d(${activeCategoryIndex * 100}%, 0, 0)`,
                }}
              />

              {categories.map((category) => {
                const active =
                  activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      changeCategory(category)
                    }
                    className="
                      relative
                      z-10
                      flex
                      h-[40px]
                      w-full
                      min-w-0
                      items-center
                      justify-center
                      px-1
                      text-[11px]
                      font-semibold
                      font-sans
                    "
                  >

                    <span
                      className={`
                        whitespace-nowrap
                        transition-colors
                        duration-500
                        ${active
                          ? "text-white"
                          : "text-[#94a3b8]"
                        }
                      `}
                    >
                      {category}
                    </span>

                  </button>
                );
              })}

            </div>

          </div>

          {/* ====================================================
              MOBILE CATEGORY CONTENT TRACK
          ==================================================== */}

          <div
            className="
              overflow-hidden
            "
          >

            <div
              className="
                flex
                w-full
                transition-transform
                duration-[850ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                will-change-transform
              "
              style={{
                transform: `translate3d(-${activeCategoryIndex * 100}%, 0, 0)`,
              }}
            >

              {categorySlides.map((slide) => (
                <div
                  key={`mobile-${slide.category}`}
                  className="
                    w-full
                    shrink-0
                  "
                >

                  {/* ==================================================
                      FEATURED PRODUCTS
                  ================================================== */}

                  <div
                    className="
                      mb-4
                      flex
                      items-center
                      gap-4
                    "
                  >

                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[2px]
                        text-[#2563eb]
                      "
                    >
                      Featured Products
                    </p>

                    <div
                      className="
                        h-px
                        flex-1
                        bg-[#e3e8ef]
                      "
                    />

                  </div>

                  {/* ==================================================
                      TEXT CARD
                  ================================================== */}

                  <div
                    className="
                      rounded-[26px]
                      border
                      border-[#e3e8ef]
                      bg-white
                      p-6
                    "
                  >

                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[2.5px]
                        text-[#2563eb]
                      "
                    >
                      {slide.category}
                    </p>

                    <h3
                      className="
                        mt-4
                        text-[30px]
                        font-extrabold
                        leading-[1.05]
                        tracking-[-0.8px]
                        text-[#0f172a]
                      "
                    >
                      {slide.heading}
                    </h3>

                    <p
                      className="
                        mt-5
                        text-[13px]
                        leading-7
                        text-[#64748b]
                      "
                    >
                      {slide.product1?.description}
                    </p>

                    <a
                      href="/products"
                      onClick={navigateToShopPage}
                      className="
                        mt-7
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-[#0f172a]
                        px-5
                        py-3
                        text-[12px]
                        font-bold
                        text-white
                        transition-all
                        duration-500
                        hover:bg-[#2563eb]
                      "
                    >
                      Explore Collection

                      <FiArrowRight size={14} />

                    </a>

                  </div>

                  {/* ==================================================
                      PRODUCT 1
                  ================================================== */}

                  <a
                    href={`/products/${productSlug(
                      slide.product1.name
                    )}`}
                    onClick={(e) =>
                      navigateToProductPage(
                        e,
                        slide.product1.name
                      )
                    }
                    className="
                      group
                      mt-4
                      block
                      rounded-[24px]
                      border
                      border-[#e3e8ef]
                      bg-white
                      p-3
                    "
                  >

                    <div
                      className="
                        relative
                        h-[300px]
                        overflow-hidden
                        rounded-[20px]
                      "
                    >

                      <img
                        src={slide.product1.image}
                        alt={slide.product1.name}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-1000
                          ease-out
                          group-hover:scale-105
                        "
                      />

                    </div>

                  </a>

                  {/* ==================================================
                      PRODUCT 2
                  ================================================== */}

                  <a
                    href={`/products/${productSlug(
                      slide.product2.name
                    )}`}
                    onClick={(e) =>
                      navigateToProductPage(
                        e,
                        slide.product2.name
                      )
                    }
                    className="
                      group
                      mt-4
                      block
                      rounded-[24px]
                      border
                      border-[#e3e8ef]
                      bg-white
                      p-3
                    "
                  >

                    <div
                      className="
                        relative
                        h-[300px]
                        overflow-hidden
                        rounded-[20px]
                      "
                    >

                      <img
                        src={slide.product2.image}
                        alt={slide.product2.name}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-1000
                          ease-out
                          group-hover:scale-105
                        "
                      />

                    </div>

                  </a>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* ========================================================
          STYLES
      ======================================================== */}

      <style>{`

        /* ========================================================
           HIDE SCROLLBAR
        ======================================================== */

        .scrollbar-hide {
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* ========================================================
           GPU SMOOTHING
        ======================================================== */

        #shop img {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translateZ(0);
        }

        /* ========================================================
           SMOOTH TRANSITIONS
        ======================================================== */

        #shop a,
        #shop button,
        #shop img {
          -webkit-tap-highlight-color: transparent;
        }

      `}</style>

    </section>
  );
}

export function ClientTestimonials() {
  return (
    <section
      id="about"
      className="
        bg-[#f8fafc]
        px-5
        py-20
        sm:px-6
        lg:px-8
        lg:pt-16
        lg:pb-32
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* ========================================================
            SECTION HEADER
        ======================================================== */}
        <div className="mb-12 text-center lg:mb-14">
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[3px]
              text-[#2563eb]
            "
          >
            About Us
          </p>

          <h2
            className="
              mx-auto
              mt-4
              max-w-3xl
              text-[36px]
              font-extrabold
              font-sans
              leading-[1.08]
              tracking-tight
              text-[#0f172a]
              sm:text-[46px]
              lg:text-[52px]
            "
          >
            Making Technology Simple,
            <span className="text-[#2563eb]"> Reliable & Accessible</span>
          </h2>
        </div>

        {/* ========================================================
            MAIN CONTENT
        ======================================================== */}
        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-12
          "
        >

          {/* ======================================================
              LEFT VIDEO
          ====================================================== */}
          <div
            className="
              relative
              h-[280px]
              overflow-hidden
              rounded-[22px]
              bg-gray-200
              sm:h-[350px]
              lg:h-[360px]
            "
          >
            <video
              src="/about-bg.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="
                h-full
                w-full
                object-cover
              "
            />

            {/* Subtle overlay */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/15
                via-transparent
                to-transparent
              "
            />
          </div>

          {/* ======================================================
              RIGHT CONTENT
          ====================================================== */}
          <div className="flex flex-col">

            {/* ====================================================
                RATING + TOP DESCRIPTION
            ==================================================== */}
            <div
              className="
                flex
                items-center
                gap-5
                pb-6
              "
            >
              {/* Rating */}
              <div className="flex shrink-0 items-center gap-3">
                <span
                  className="
                    text-[38px]
                    font-bold
                    leading-none
                    tracking-[-2px]
                    text-[#0f172a]
                    sm:text-[42px]
                  "
                >
                  4.80
                </span>

                <div className="flex flex-col gap-1">
                  <div className="flex gap-[2px] text-[13px] text-[#d6a84f]">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>

                  <span
                    className="
                      text-[9px]
                      font-medium
                      text-[#94a3b8]
                    "
                  >
                    2,688 reviews
                  </span>
                </div>
              </div>

              {/* Small top description */}
              <p
                className="
                  max-w-[220px]
                  border-l
                  border-[#e2e8f0]
                  pl-5
                  text-[10px]
                  font-medium
                  leading-[1.45]
                  text-[#475569]
                  sm:text-[11px]
                "
              >
                From quality devices to reliable repairs, we make
                technology simple, dependable, and easy for everyone.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-[#e2e8f0]" />

            {/* ====================================================
                ABOUT CONTENT
            ==================================================== */}
            <div className="pt-6">
              <blockquote
                className="
                  max-w-2xl
                  text-[18px]
                  font-medium
                  font-sans
                  leading-[1.55]
                  tracking-[-0.25px]
                  text-[#1e293b]
                  sm:text-[20px]
                  lg:text-[17px]
                  lg:leading-[1.55]
                "
              >
                At Recall Communications, we are dedicated to making
                technology simple, reliable, and accessible for everyone.
                From quality devices and essential accessories to professional
                repair and troubleshooting services, we provide complete
                solutions under one roof. Our team takes the time to
                understand every customer’s needs and delivers dependable
                service with care and attention to detail. With a strong focus
                on quality, transparency, and customer satisfaction, we aim to
                build lasting relationships and become a trusted technology
                partner for every customer.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BenefitsStrip() {
  return (
    <section className="relative z-20 -mt-7 px-5 sm:px-6 lg:px-8">
    </section>
  );
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % testimonials.length
    );
  };

  const goPrevious = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + testimonials.length) %
        testimonials.length
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      goNext();
    }, 3000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="testimonials"
      className="
        relative
        min-h-[550px]
        overflow-hidden
        scroll-mt-[80px] 
      "
    >
      {/* BACKGROUND IMAGE */}
      <img
        src="/testimonial-bg.png"
        alt=""
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/45
        "
      />

      {/* EXTRA GRADIENT */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/40
          via-black/55
          to-black/75
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[550px]
          max-w-6xl
          items-center
          justify-center
          px-5
          py-20
          sm:px-8
        "
      >
        <div className="w-full text-center">

          {/* SMALL TITLE */}
          <p
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[3px]
              text-[#60a5fa]
            "
          >
            Customer Stories
          </p>

          {/* MAIN HEADING */}
          <h2
            className="
              mx-auto
              mt-4
              max-w-3xl
              text-[36px]
              font-sans
              font-extrabold
              leading-tight
              tracking-tight
              text-white
              sm:text-[48px]
              lg:text-[54px]
            "
          >
            What people say
            <br className="sm:hidden" />{" "}
            <span className="text-[#60a5fa]">
              about us
            </span>
          </h2>

          {/* DIVIDER */}
          <div className="mx-auto mt-6 h-px w-12 bg-[#60a5fa]" />

          {/* TESTIMONIAL */}
          <div
            key={currentIndex}
            className="
              mx-auto
              mt-10
              max-w-4xl
              animate-[testimonialFade_0.7s_ease]
            "
          >

            {/* QUOTE */}
            <p
              className="
                mx-auto
                max-w-3xl
                text-[18px]
                font-sans
                italic
                leading-8
                text-white/90
                sm:text-[21px]
                sm:leading-9
                lg:text-[23px]
                lg:leading-10
              "
            >
              "{testimonials[currentIndex].quote}"
            </p>

            {/* CUSTOMER NAME */}
            <div className="mt-8">
              <p
                className="
                  text-[15px]
                  font-bold
                  text-white
                  sm:text-[16px]
                "
              >
                {testimonials[currentIndex].name}
              </p>

              <p
                className="
                  mt-1
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[2px]
                  text-white/50
                "
              >
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>



          {/* DOTS */}
          <div className="mt-7 flex justify-center gap-2">
            {[0, 1, 2].map((dot) => (
              <button
                key={dot}
                type="button"
                onClick={() => setCurrentIndex(dot)}
                aria-label={`Go to testimonial ${dot + 1}`}
                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-300
                  ${currentIndex % 3 === dot
                    ? "w-7 bg-[#60a5fa]"
                    : "w-2 bg-white/40 hover:bg-white/70"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes testimonialFade {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    {
      question: "Do you provide device setup support?",
      answer:
        "Yes. Our team can help with device setup, basic configuration and guidance so you can get started quickly and confidently.",
    },
    {
      question: "Which brands do you support?",
      answer:
        "We work with a wide range of trusted technology brands and can help you choose the right solution for your requirements.",
    },
    {
      question: "Do you provide after-sales assistance?",
      answer:
        "Yes. We provide ongoing assistance after your purchase and help with common setup, usage and support-related requirements.",
    },
    {
      question: "Where is your store located?",
      answer:
        "Our store is located in Hubballi, Karnataka. You can visit us during business hours or use the location details provided in the Contact Us section.",
    },
    {
      question: "How can I contact your team?",
      answer:
        "You can contact our team through the phone number, contact form or other contact details available on our website.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        bg-[#f8fafc]
        py-20
        scroll-mt-[80px]
        lg:pt-32
        lg:pb-20
      "
    >
      {/* Background decoration */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-96
          w-96
          rounded-full
          bg-[#2563eb]/5
          blur-3xl
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid
            items-start
            gap-12
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-20
          "
        >
          {/* LEFT CONTENT */}
          <div className="lg:sticky lg:top-28">
            <p
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[3px]
                text-[#2563eb]
              "
            >
              Frequently Asked Questions
            </p>

            <h2
              className="
                mt-4
                text-[36px]
                font-extrabold
                font-sans
                leading-[1.05]
                tracking-tight
                text-[#0f172a]
                sm:text-5xl
                lg:text-[52px]
              "
            >
              Everything you
              <br />
              need to{" "}
              <span className="text-[#2563eb]">
                know.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-md
                text-[13px]
                leading-6
                text-[#64748b]
                sm:text-[14px]
              "
            >
              Find answers to some of the most common
              questions about our products, services and
              customer support.
            </p>

            {/* Small info box */}
            <div
              className="
                mt-10
                hidden
                rounded-2xl
                border
                border-[#e2e8f0]
                bg-white
                p-5
                lg:block
              "
            >
              <p
                className="
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[1.5px]
                  text-[#0f172a]
                "
              >
                Still have questions?
              </p>

              <p
                className="
                  mt-2
                  text-[12px]
                  leading-5
                  text-[#64748b]
                "
              >
                Our team is always happy to help you
                with any additional queries.
              </p>
            </div>
          </div>

          {/* RIGHT FAQ */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`
                    overflow-hidden
                    rounded-2xl
                    border
                    transition-all
                    duration-300

                    ${isOpen
                      ? "border-[#2563eb]/30 bg-white shadow-[0_12px_35px_rgba(37,99,235,0.08)]"
                      : "border-[#e2e8f0] bg-white hover:border-[#cbd5e1]"
                    }
                  `}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="
                      flex
                      w-full
                      items-center
                      gap-4
                      px-5
                      py-5
                      text-left
                      sm:px-6
                      sm:py-6
                    "
                  >
                    {/* Number */}
                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        text-[11px]
                        font-bold
                        transition-all
                        duration-300

                        ${isOpen
                          ? "bg-[#2563eb] text-white"
                          : "bg-[#eff6ff] text-[#2563eb]"
                        }
                      `}
                    >
                      0{index + 1}
                    </span>

                    {/* Question */}
                    <span
                      className={`
                        flex-1
                        text-[14px]
                        font-bold
                        leading-6
                        transition-colors
                        duration-300
                        sm:text-[15px]

                        ${isOpen
                          ? "text-[#2563eb]"
                          : "text-[#0f172a]"
                        }
                      `}
                    >
                      {faq.question}
                    </span>

                    {/* Icon */}
                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        transition-all
                        duration-300

                        ${isOpen
                          ? "bg-[#2563eb] text-white rotate-180"
                          : "border border-[#dbe3ee] bg-white text-[#64748b]"
                        }
                      `}
                    >
                      {isOpen ? (
                        <FiMinus size={15} />
                      ) : (
                        <FiPlus size={15} />
                      )}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`
                      grid
                      transition-all
                      duration-500
                      ease-in-out

                      ${isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="
                          border-t
                          border-[#f1f5f9]
                          px-5
                          pb-6
                          pt-4
                          sm:px-6
                          sm:pb-6
                        "
                      >
                        <p
                          className="
                            pl-[52px]
                            text-[12px]
                            leading-6
                            text-[#64748b]
                            sm:text-[13px]
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const contactDetails = [
    {
      icon: IoMdCall,
      title: "Phone",
      value: "+91 836 426 6074",
      href: "tel:+918364266074",
    },
    {
      icon: IoMdMail,
      title: "Email",
      value: "hello@yourstore.com",
      href: "mailto:hello@yourstore.com",
    },
    {
      icon: IoMdPin,
      title: "Address",
      value:
        "Gf# 64, Laxmi Balkrishna Square, Harsha Complex, 1 Stage, Station Road, Hubballi, Karnataka 580020",
      href:
        "https://www.google.com/maps/search/?api=1&query=Gf%2364%2C%20Laxmi%20Balkrishna%20Square%2C%20Harsha%20Complex%2C%201%20Stage%2C%20Station%20Road%2C%20Hubballi%2C%20Karnataka%20580020",
    },
  ];

  return (
    <section
      id="contact"
      className="
        bg-[#f8fafc]
        py-20
        scroll-mt-[100px]
        lg:py-28
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* MAIN CONTACT LAYOUT */}
        <div
          className="
            grid
            overflow-hidden
            rounded-[32px]
            border
            border-[#e5eaf1]
            bg-white
            shadow-[0_20px_60px_rgba(15,23,42,0.06)]
            lg:grid-cols-[0.85fr_1.15fr]
          "
        >
          {/* ================= LEFT SIDE ================= */}
          <div
            className="
              relative
              overflow-hidden
              p-7
              text-white
              sm:p-10
              lg:p-12
            "
          >
            {/* BACKGROUND IMAGE */}
            <div
              className="
                absolute
                inset-0
                bg-cover
                bg-center
                bg-no-repeat
              "
              style={{
                backgroundImage: "url('/contact-bg4.png')",
              }}
            />

            {/* DARK OVERLAY */}
            <div
              className="
                absolute
                inset-0
                bg-[#06162d]/60
              "
            />

            {/* Decorative circle */}
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-64
                w-64
                rounded-full
                border
                border-white/10
              "
            />

            {/* Decorative bottom glow */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-32
                -left-24
                h-72
                w-72
                rounded-full
                bg-[#2563eb]/20
                blur-3xl
              "
            />

            {/* LEFT CONTENT */}
            <div className="relative z-10">
              {/* LABEL */}
              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[3px]
                  text-[#60a5fa]
                "
              >
                Get In Touch
              </p>

              {/* HEADING */}
              <h2
                className="
                  mt-4
                  text-[36px]
                  font-sans
                  font-extrabold
                  tracking-tight
                  sm:text-[48px]
                "
              >
                Contact Us
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-5
                  max-w-md
                  text-[14px]
                  leading-7
                  text-white/85
                "
              >
                Have a question or need help choosing the
                right product? Our team is always here to
                help you.
              </p>

              {/* CONTACT DETAILS */}
              <div className="mt-10 space-y-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        flex
                        items-start
                        gap-4
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/10
                        p-4
                        backdrop-blur-sm
                        transition-all
                        duration-300
                        hover:border-white/20
                        hover:bg-white/15
                      "
                    >
                      {/* ICON */}
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#2563eb]
                          text-white
                          transition-transform
                          duration-300
                          group-hover:scale-105
                        "
                      >
                        <Icon size={20} />
                      </div>

                      {/* TEXT */}
                      <div className="min-w-0">
                        <p
                          className="
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[2px]
                            text-white/45
                          "
                        >
                          {item.title}
                        </p>

                        <p
                          className="
                            mt-1
                            text-[13px]
                            font-semibold
                            leading-6
                            text-white/90
                          "
                        >
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* LOCATION BUTTON */}
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-5
                  py-3
                  text-[12px]
                  font-bold
                  text-[#0f172a]
                  transition-all
                  duration-300
                  hover:bg-[#dbeafe]
                  hover:shadow-lg
                "
              >
                <IoMdPin size={16} />
                View Location
              </a>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div
            className="
              grid
              gap-4
              bg-[#f8fafc]
              p-5
              sm:p-7
              lg:grid-cols-2
              lg:p-8
            "
          >
            {/* ================= STORE ================= */}
            <div
              className="
                group
                rounded-[24px]
                border
                border-[#e5eaf1]
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#bfdbfe]
                hover:shadow-[0_15px_35px_rgba(37,99,235,0.08)]
                sm:p-7
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#eff6ff]
                  text-[#2563eb]
                  transition-all
                  duration-300
                  group-hover:bg-[#2563eb]
                  group-hover:text-white
                "
              >
                <IoMdPin size={24} />
              </div>

              <p
                className="
                  mt-7
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-[#94a3b8]
                "
              >
                Visit Us
              </p>

              <h3
                className="
                  mt-2
                  text-xl
                  font-sans
                  font-extrabold
                  text-[#0f172a]
                "
              >
                Our Store
              </h3>

              <a
                href={contactDetails[2].href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p
                  className="
                    mt-3
                    text-[13px]
                    leading-6
                    text-[#64748b]
                    transition-colors
                    hover:text-[#2563eb]
                  "
                >
                  {contactDetails[2].value}
                </p>
              </a>
            </div>

            {/* ================= EMAIL ================= */}
            <div
              className="
                group
                rounded-[24px]
                border
                border-[#e5eaf1]
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#bfdbfe]
                hover:shadow-[0_15px_35px_rgba(37,99,235,0.08)]
                sm:p-7
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#eff6ff]
                  text-[#2563eb]
                  transition-all
                  duration-300
                  group-hover:bg-[#2563eb]
                  group-hover:text-white
                "
              >
                <IoMdMail size={24} />
              </div>

              <p
                className="
                  mt-7
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-[#94a3b8]
                "
              >
                Email Us
              </p>

              <h3
                className="
                  mt-2
                  text-xl
                  font-sans
                  font-extrabold
                  text-[#0f172a]
                "
              >
                Send a Message
              </h3>

              <a
                href="mailto:hello@yourstore.com"
                className="
                  mt-3
                  block
                  text-[13px]
                  leading-6
                  text-[#64748b]
                  transition-colors
                  hover:text-[#2563eb]
                "
              >
                hello@yourstore.com
                <br />
                support@yourstore.com
              </a>
            </div>

            {/* ================= PHONE ================= */}
            <div
              className="
                group
                rounded-[24px]
                border
                border-[#e5eaf1]
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#bfdbfe]
                hover:shadow-[0_15px_35px_rgba(37,99,235,0.08)]
                sm:p-7
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#eff6ff]
                  text-[#2563eb]
                  transition-all
                  duration-300
                  group-hover:bg-[#2563eb]
                  group-hover:text-white
                "
              >
                <IoMdCall size={24} />
              </div>

              <p
                className="
                  mt-7
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-[#94a3b8]
                "
              >
                Call Us
              </p>

              <h3
                className="
                  mt-2
                  text-xl
                  font-sans
                  font-extrabold
                  text-[#0f172a]
                "
              >
                Need Help?
              </h3>

              <a
                href="tel:+918364266074"
                className="
                  mt-3
                  block
                  text-[13px]
                  text-[#64748b]
                  transition-colors
                  hover:text-[#2563eb]
                "
              >
                +91 836 426 6074
              </a>
            </div>

            {/* ================= OPENING HOURS ================= */}
            <div
              className="
                group
                rounded-[24px]
                border
                border-[#e5eaf1]
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#bfdbfe]
                hover:shadow-[0_15px_35px_rgba(37,99,235,0.08)]
                sm:p-7
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#eff6ff]
                  text-[#2563eb]
                  transition-all
                  duration-300
                  group-hover:bg-[#2563eb]
                  group-hover:text-white
                "
              >
                <PiTimerFill size={24} />
              </div>

              <p
                className="
                  mt-7
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-[#94a3b8]
                "
              >
                Opening Hours
              </p>

              <h3
                className="
                  mt-2
                  text-xl
                  font-sans
                  font-extrabold
                  text-[#0f172a]
                "
              >
                Store Hours
              </h3>

              <p
                className="
                  mt-3
                  text-[13px]
                  leading-6
                  text-[#64748b]
                "
              >
                Monday - Saturday
                <br />
                10:30 AM - 9:00 PM
                <br />
                Sunday - Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RepairSupportCTA() {
  return (
    <section className="bg-white pt-8 pb-16 sm:py-24 lg:pt-12 lg:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">

          {/* ================= TOP CONTENT ================= */}
          <div className="max-w-3xl">
            <p
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[3px]
                text-[#2563eb]
              "
            >
              Repair & Support
            </p>

            <h2
              className="
                mt-4
                font-sans
                text-[36px]
                font-extrabold
                leading-[1.08]
                tracking-tight
                text-[#0f172a]
                sm:text-5xl
                lg:text-[52px]
              "
            >
              Need Help With
              Your Phone?
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-[14px]
                leading-7
                text-[#64748b]
                sm:text-[16px]
              "
            >
              From setup and troubleshooting to repairs and upgrades,
              our team is ready to help you get the most out of your device.
            </p>
          </div>

          {/* ================= CENTER IMAGE ================= */}
          <div className="mt-6 flex w-full items-center justify-center">
            <img
              src="/cta-bg2.png"
              alt="Repair and support"
              className="
      block
      h-auto
      w-[110%]
      max-w-[1250px]
      object-contain

      sm:w-[115%]
      lg:w-[120%]
    "
            />
          </div>

          {/* ================= BOTTOM BUTTONS ================= */}
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {/* Get Support */}
            <a
              href="#contact"
              className="
      inline-flex
      items-center
      gap-2
      rounded-full
      bg-[#2563eb]
      px-6
      py-3.5
      text-[13px]
      font-bold
      text-white
      shadow-[0_10px_25px_rgba(37,99,235,0.18)]
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:bg-[#3b82f6]
    "
            >
              Get Support
              <IoMdArrowRoundForward size={17} />
            </a>

            {/* Call Us */}
            <a
              href="tel:+918364266074"
              className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-[#1e3a8a]
      bg-transparent
      px-6
      py-3.5
      text-[13px]
      font-bold
      text-[#0f172a]
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:bg-[#0f172a]
      hover:text-white
    "
            >
              <IoMdCall size={17} />
              Call Us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}


export function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  return (
    <footer className="bg-[#020817] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div><img src="/assets/logo.png" alt={shop.name} className="h-14 lg:h-18 w-auto object-contain" /><p className="mt-5 max-w-xs text-[13px] leading-6 text-white/45">Your one-stop destination for <br />premium tech gadgets and <br />accessories.</p></div>
          <div className="lg:ml-12">
            <h3 className="text-[13px] font-bold">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              {["Home", "Products", "Repair", "About Us", "Brands", "Contact"].map((x, i) => (
                <li key={x}>
                  <a
                    href={["/", "/products", "/#repair", "/#about", "/#brands", "/#contact"][i]}
                    className="text-[12px] text-white/50 transition hover:text-white"
                  >
                    {x}
                  </a>
                </li>
              ))}

              {/* Privacy Policy */}
              <li>
                <button
                  onClick={() => setIsPrivacyOpen(true)}
                  className="text-[12px] text-white/50 transition hover:text-white"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
          <div><h3 className="text-[13px] font-bold">Our Collection</h3><ul className="mt-5 space-y-3">{["Latest Gadgets", "Mobile Accessories", "Smart Devices", "Featured Products"].map(x => <li key={x} className="text-[12px] text-white/50">{x}</li>)}</ul></div>
          <div>
            <h3 className="text-[13px] font-bold">Store Info</h3>

            <p className="mt-5 text-[12px] leading-6 text-white/50">
              <a
                href="tel:+918364266074"
                className="transition-colors hover:text-white"
              >
                +91 836 426 6074
              </a>
              <br />
              Monday to Saturday
              <br />
              10:30 AM - 9:00 PM
              <br />
              Sunday - Closed
            </p>
          </div>

          <div>
            <h3 className="text-[13px] font-bold">Store Location</h3>
            <div className="mt-5 overflow-hidden rounded-xl border-8 border-white">
              <iframe
                src="https://www.google.com/maps?q=Gf%2364%2C%20Laxmi%20Balkrishna%20Square%2C%20Harsha%20Complex%2C%201%20Stage%2C%20Station%20Road%2C%20Hubballi%2C%20Karnataka%20580020&output=embed"
                width="100%"
                height="180"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Location"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row"><p className="text-[11px] text-white/35 text-center sm:text-left">© 2026 {shop.name}. All rights reserved. Powered by <a href="https://www.spitel.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#60a5fa]">Spitel Pvt Ltd</a> </p><button onClick={() => setIsPrivacyOpen(true)} className="text-[11px] font-semibold text-white/45 hover:text-white hover:underline">Privacy Policy</button></div>
      </div>

      {/* ================= PRIVACY POLICY MODAL ================= */}
      {isPrivacyOpen && (
        <div
          className="
      fixed
      inset-0
      z-[999]
      flex
      items-center
      justify-center
      bg-black/60
      backdrop-blur-sm
      px-4
      py-6
    "
        >
          <div
            className="
        relative
        w-full
        max-w-[750px]
        max-h-[85vh]
        overflow-y-auto
        rounded-[18px]
        bg-white
        p-6
        sm:p-8
        shadow-2xl
      "
          >
            {/* Close Button */}
            <button
              onClick={() => setIsPrivacyOpen(false)}
              className="
          absolute
          right-4
          top-4
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-[#0f172a]
          text-xl
          text-white
          transition
          hover:scale-110
          hover:bg-[#1D2C60]
        "
              aria-label="Close Privacy Policy"
            >
              ×
            </button>

            {/* Heading */}
            <h2 className="pr-10 font-poppins text-[28px] font-bold text-[#0f172a] sm:text-[32px]">
              Privacy Policy
            </h2>

            <p className="mt-2 text-[13px] text-gray-500">
              Last Updated: 2026
            </p>

            {/* Content */}
            <div className="mt-6 space-y-7 font-poppins text-[14px] leading-7 text-gray-600">

              {/* 1 */}
              <div>
                <h3 className="mb-2 text-[18px] font-semibold text-[#1D2C60]">
                  1. Introduction
                </h3>

                <p>
                  Recall Communications ("we", "our", or "us") respects your privacy and
                  is committed to protecting the personal information of visitors and
                  customers who use our website and services. This Privacy Policy
                  explains what information we collect, why we collect it, how we use
                  it, and how we protect it.
                </p>
              </div>


              {/* 2 */}
              <div>
                <h3 className="mb-2 text-[18px] font-semibold text-[#1D2C60]">
                  2. Information We Collect
                </h3>

                <p className="mb-3">
                  We may collect information that you voluntarily provide when you
                  interact with our website, contact us, or enquire about our products
                  and services.
                </p>

                <ul className="list-disc space-y-1 pl-6">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Phone or mobile number</li>
                  <li>Information submitted through contact forms</li>
                  <li>Product or service enquiry details</li>
                  <li>Other information that you voluntarily provide</li>
                </ul>
              </div>


              {/* 3 */}
              <div>
                <h3 className="mb-2 text-[18px] font-semibold text-[#1D2C60]">
                  3. Information Collected Automatically
                </h3>

                <p>
                  When you visit our website, certain technical information may
                  automatically be collected, such as browser type, device information,
                  general location information, pages visited, time spent on the
                  website, and basic website usage information. This information helps
                  us understand website performance and improve the user experience.
                </p>
              </div>


              {/* 4 */}
              <div>
                <h3 className="mb-2 text-[18px] font-semibold text-[#1D2C60]">
                  4. How We Use Your Information
                </h3>

                <p className="mb-3">
                  Information collected from you may be used for the following purposes:
                </p>

                <ul className="list-disc space-y-1 pl-6">
                  <li>To respond to your enquiries and requests</li>
                  <li>To provide information about our products and services</li>
                  <li>To communicate with you regarding your enquiry</li>
                  <li>To provide customer support</li>
                  <li>To improve our website and services</li>
                  <li>To maintain website security and functionality</li>
                  <li>To comply with applicable legal requirements</li>
                </ul>
              </div>


              {/* 5 */}
              <div>
                <h3 className="mb-2 text-[18px] font-semibold text-[#1D2C60]">
                  5. Communication
                </h3>

                <p>
                  If you contact us through our website, phone, email, or other
                  communication channels, we may use the information you provide to
                  respond to your request. We will use your contact information only
                  for legitimate business and communication purposes.
                </p>
              </div>


              {/* 6 */}
              <div>
                <h3 className="mb-2 text-[18px] font-semibold text-[#1D2C60]">
                  6. Cookies and Similar Technologies
                </h3>

                <p>
                  Our website may use cookies or similar technologies to improve
                  functionality, understand website usage, and provide a better browsing
                  experience. You can manage or disable cookies through your browser
                  settings. Disabling certain cookies may affect some website features.
                </p>
              </div>


              {/* 7 */}
              <div>
                <h3 className="mb-2 text-[18px] font-semibold text-[#1D2C60]">
                  7. Data Security
                </h3>

                <p>
                  We take reasonable technical and organizational measures to protect
                  personal information against unauthorized access, alteration,
                  disclosure, misuse, or destruction. However, no method of transmission
                  or electronic storage can be guaranteed to be completely secure.
                </p>
              </div>


              {/* 8 */}
              <div>
                <h3 className="mb-2 text-[18px] font-semibold text-[#1D2C60]">
                  8. Sharing of Information
                </h3>

                <p>
                  We do not intentionally sell or rent your personal information.
                  Information may be shared with trusted service providers when
                  reasonably necessary to operate our website, respond to enquiries,
                  provide services, maintain technical infrastructure, or comply with
                  applicable laws and legal obligations.
                </p>
              </div>

              {/* 9 */}
              <div>
                <h3 className="mb-2 text-[18px] font-semibold text-[#1D2C60]">
                  9. Meta and Social Media Data
                </h3>

                <p>
                  Our website may use Meta technologies, such as Meta Pixel or other Meta
                  services, to understand website activity, measure advertising performance,
                  and improve our services and user experience. Depending on your settings
                  and applicable requirements, these technologies may collect information
                  such as pages visited, actions taken on the website, device and browser
                  information, and other usage-related data.
                </p>

                <p className="mt-3">
                  Information collected through Meta technologies may be processed by Meta
                  in accordance with Meta's applicable privacy policies and terms. We do not
                  intentionally collect sensitive personal information through these
                  technologies.
                </p>
              </div>


              {/* 10 */}
              <div>
                <h3 className="mb-2 text-[18px] font-semibold text-[#1D2C60]">
                  9. Third-Party Websites
                </h3>

                <p>
                  Our website may contain links to third-party websites, platforms, or
                  services. These third parties may have their own privacy policies and
                  terms. We are not responsible for the privacy practices, security, or
                  content of websites that are not operated by Recall Communications.
                </p>
              </div>


              {/* 11 */}
              <div>
                <h3 className="mb-2 text-[18px] font-semibold text-[#1D2C60]">
                  10. Data Retention
                </h3>

                <p>
                  We retain personal information only for as long as reasonably
                  necessary for the purposes for which it was collected, to provide
                  services, maintain business records, resolve disputes, or meet
                  applicable legal and regulatory requirements.
                </p>
              </div>


              {/* 12 */}
              <div>
                <h3 className="mb-2 text-[18px] font-semibold text-[#1D2C60]">
                  11. Your Privacy Rights
                </h3>

                <p>
                  Depending on applicable law, you may have rights regarding your
                  personal information, including requesting access to, correction of,
                  or deletion of certain information. You may also contact us if you
                  have concerns regarding how your information is handled.
                </p>
              </div>


              {/* 13 */}
              <div>
                <h3 className="mb-2 text-[18px] font-semibold text-[#1D2C60]">
                  12. Children's Privacy
                </h3>

                <p>
                  Our website is not specifically intended for children. We do not
                  knowingly collect personal information from children without
                  appropriate consent where such consent is required by applicable law.
                </p>
              </div>


              {/* 14 */}
              <div>
                <h3 className="mb-2 text-[18px] font-semibold text-[#1D2C60]">
                  13. Changes to This Privacy Policy
                </h3>

                <p>
                  We may update this Privacy Policy from time to time to reflect changes
                  in our services, website functionality, legal requirements, or
                  business practices. Any updated version will be made available on this
                  page with the revised "Last Updated" date.
                </p>
              </div>


              {/* 15 */}
              <div>
                <h3 className="mb-2 text-[18px] font-semibold text-[#1D2C60]">
                  14. Contact Us
                </h3>

                <p>
                  If you have any questions, concerns, or requests regarding this
                  Privacy Policy or the way your personal information is handled, please
                  contact Recall Communications through the contact details provided on
                  our website.
                </p>
              </div>
            </div>

            {/* Bottom Close Button */}
            <div className="mt-8 border-t border-gray-200 pt-5">
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="
            rounded-[8px]
            bg-[#1D2C60]
            px-6
            py-3
            text-[14px]
            font-medium
            text-white
            transition
            hover:bg-[#0f172a]
          "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

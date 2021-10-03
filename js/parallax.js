gsap.utils.toArray("aside").forEach((aside, i) => {
  aside.bg = aside.querySelector(".bg");

  // Give the backgrounds some random images
  aside.bg.style.backgroundImage = `url(
    https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2150&q=80
    )`;

  // Do the parallax effect on each aside
  if (i) {
    aside.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;

    gsap.to(aside.bg, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: aside,
        scrub: true,
      },
    });
  }

  // the first image should be positioned against the top. Use px on the animating part to work with GSAP.
  else {
    aside.bg.style.backgroundPosition = "50% 0px";

    gsap.to(aside.bg, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: aside,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }
});

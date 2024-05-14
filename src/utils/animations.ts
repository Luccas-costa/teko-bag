import gsap from "gsap"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1")
  const bannerTwo = document.getElementById("banner-2")
  const bannerThree = document.getElementById("banner-3")
  const bannerFour = document.getElementById("banner-4")

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline()

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
    }).to(bannerOne, {
      yPercent: 100,
      duration: 0.5, // Ajuste a duração da animação conforme necessário
    }).to(bannerTwo, {
      yPercent: 100,
      duration: 0.75, // Ajuste a duração da animação conforme necessário
    }, "<").to(bannerThree, {
      yPercent: 100,
      duration: 1, // Ajuste a duração da animação conforme necessário
    }, "<").to(bannerFour, {
      yPercent: 100,
      duration: 1.25, // Ajuste a duração da animação conforme necessário
    }, "<");
  }
}



export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const bannerOne = document.getElementById("banner-1")
  const bannerTwo = document.getElementById("banner-2")
  const bannerThree = document.getElementById("banner-3")
  const bannerFour = document.getElementById("banner-4")

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline()

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: -100,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
      stagger: 0.2,
      onComplete: () => {
        router.push(href)
      },
    })
  }
}

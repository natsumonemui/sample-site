// Client-side toggler for mobile sidebar menu
const btn = document.querySelector('[data-mobile-toggle]') as HTMLButtonElement | null
const menu = document.getElementById('mobile-nav')
const backdrop = document.querySelector('[data-mobile-backdrop]') as HTMLDivElement | null
const footerNav = document.querySelector('.mobile-footer-nav') as HTMLElement | null

const mobileMedia = window.matchMedia('(width < 40rem)')
const SCROLL_THRESHOLD = 16

let footerHidden = false
let lastScrollY = Math.max(window.scrollY, 0)
let scrollDeltaAccumulator = 0
let isScrollTicking = false

const setFooterHidden = (hidden: boolean) => {
  if (!footerNav || footerHidden === hidden) return

  footerHidden = hidden
  if (hidden) {
    footerNav.setAttribute('data-hidden', 'true')
  } else {
    footerNav.removeAttribute('data-hidden')
  }
}

const isAnyModalOpen = () => {
  if (btn?.getAttribute('aria-expanded') === 'true') return true
  if (menu?.getAttribute('data-open') === 'true') return true
  if (document.querySelector('dialog[open]')) return true
  if (document.querySelector('[aria-modal="true"]:not([aria-hidden="true"])')) return true
  return false
}

const onScrollFrame = () => {
  isScrollTicking = false

  const currentY = Math.max(window.scrollY, 0)
  if (!mobileMedia.matches || !footerNav) {
    setFooterHidden(false)
    lastScrollY = currentY
    scrollDeltaAccumulator = 0
    return
  }

  if (isAnyModalOpen()) {
    setFooterHidden(false)
    lastScrollY = currentY
    scrollDeltaAccumulator = 0
    return
  }

  const delta = currentY - lastScrollY
  lastScrollY = currentY

  // Always show when close to top.
  if (currentY <= 4) {
    setFooterHidden(false)
    scrollDeltaAccumulator = 0
    return
  }

  if (Math.abs(delta) < 1) return

  if ((scrollDeltaAccumulator > 0 && delta < 0) || (scrollDeltaAccumulator < 0 && delta > 0)) {
    scrollDeltaAccumulator = 0
  }
  scrollDeltaAccumulator += delta

  if (scrollDeltaAccumulator >= SCROLL_THRESHOLD) {
    setFooterHidden(true)
    scrollDeltaAccumulator = 0
  } else if (scrollDeltaAccumulator <= -SCROLL_THRESHOLD) {
    setFooterHidden(false)
    scrollDeltaAccumulator = 0
  }
}

const queueScrollUpdate = () => {
  if (isScrollTicking) return
  isScrollTicking = true
  window.requestAnimationFrame(onScrollFrame)
}

document.addEventListener('scroll', queueScrollUpdate, { passive: true })
window.addEventListener('resize', queueScrollUpdate)
mobileMedia.addEventListener('change', queueScrollUpdate)
queueScrollUpdate()

if (btn && menu) {
  const parent = btn.parentElement
  let suppressClickUntil = 0

  const consumeEvent = (e: Event) => {
    if (e.cancelable) e.preventDefault()
    e.stopPropagation()
  }

  const setOpen = (open: boolean) => {
    btn.setAttribute('aria-expanded', String(open))
    menu.setAttribute('aria-hidden', String(!open))
    backdrop?.setAttribute('aria-hidden', String(!open))
    if (open) setFooterHidden(false)

    if (open) {
      menu.setAttribute('data-open', 'true')
      parent?.setAttribute('data-open', 'true')
    } else {
      menu.removeAttribute('data-open')
      parent?.removeAttribute('data-open')
    }
  }

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true'
    setOpen(!expanded)
  })

  const closeFromOutside = (e: Event) => {
    consumeEvent(e)
    suppressClickUntil = performance.now() + 450
    setOpen(false)
  }

  // Prefer explicit backdrop interaction so the first tap only closes the menu.
  backdrop?.addEventListener('touchstart', closeFromOutside, { passive: false })
  backdrop?.addEventListener('click', closeFromOutside)

  // Suppress the synthetic/ghost click right after outside-close on touch devices.
  document.addEventListener('click', (e) => {
    if (performance.now() < suppressClickUntil) {
      consumeEvent(e)
      return
    }

    const isOpen = btn.getAttribute('aria-expanded') === 'true'
    if (!isOpen) return

    const target = e.target as Node | null
    if (!target) return
    if (menu.contains(target) || btn.contains(target) || backdrop?.contains(target)) return

    closeFromOutside(e)
  }, true)

  document.addEventListener('touchstart', (e) => {
    if (performance.now() < suppressClickUntil) {
      consumeEvent(e)
      return
    }

    const isOpen = btn.getAttribute('aria-expanded') === 'true'
    if (!isOpen) return

    const target = e.target as Node | null
    if (!target) return
    if (menu.contains(target) || btn.contains(target) || backdrop?.contains(target)) return

    closeFromOutside(e)
  }, { capture: true, passive: false })

  // Close menu when a link is clicked
  menu.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (target.closest && target.closest('a')) {
      setOpen(false)
    }
  })

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false)
  })
}

export {}

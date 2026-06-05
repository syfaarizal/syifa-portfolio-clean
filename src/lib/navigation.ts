export function navigateTo(url: string) {
  if (window.location.pathname + window.location.hash === url) {
    return
  }

  window.history.pushState({}, '', url)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

let navigationDelayId: number | undefined

export function navigateWithTransition(url: string) {
  if (window.location.pathname + window.location.hash === url) {
    return
  }

  const root = document.documentElement
  root.dataset.navTransition = 'out'

  if (navigationDelayId !== undefined) {
    window.clearTimeout(navigationDelayId)
  }

  navigationDelayId = window.setTimeout(() => {
    delete root.dataset.navTransition
    window.scrollTo({ top: 0, behavior: 'auto' })
    navigateTo(url)
  }, 180)
}

function getStickyHeaderOffset() {
  const header = document.querySelector('nav.sticky')
  const headerHeight = header instanceof HTMLElement ? header.getBoundingClientRect().height : 0

  return headerHeight + 12
}

function scrollElementIntoView(element: HTMLElement) {
  const top = window.scrollY + element.getBoundingClientRect().top - getStickyHeaderOffset()
  window.scrollTo({ top, behavior: 'smooth' })
}

export function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId)
  if (!section) {
    return false
  }

  const label = section.querySelector('.section-label')
  const target = label instanceof HTMLElement ? label : section

  scrollElementIntoView(target)
  return true
}

export function scrollToHash(hash: string) {
  const targetId = hash.replace(/^#/, '')
  if (!targetId) {
    return false
  }

  return scrollToSection(targetId)
}

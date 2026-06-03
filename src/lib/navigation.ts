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
    navigateTo(url)
  }, 180)
}

export function scrollToHash(hash: string) {
  const targetId = hash.replace(/^#/, '')
  if (!targetId) {
    return false
  }

  const element = document.getElementById(targetId)
  if (!element) {
    return false
  }

  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  return true
}

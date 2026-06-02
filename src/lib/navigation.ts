export function navigateTo(url: string) {
  if (window.location.pathname + window.location.hash === url) {
    return
  }

  window.history.pushState({}, '', url)
  window.dispatchEvent(new PopStateEvent('popstate'))
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

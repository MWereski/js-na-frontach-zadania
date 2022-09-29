export function createElement(tagName: string = 'div', className: string = '') {
  const element = document.createElement(tagName)
  if (className) {
    element.className = className
  }
  return element
}
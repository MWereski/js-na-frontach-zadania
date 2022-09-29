import { createElement } from '../framework/dom-creators'

export function hero(title: string, subTitle: string) {
  const $heroSection = createElement('section', 'hero is-link')
  const $heroBody = createElement('div', 'hero-body')
  const $title = createElement('p', 'title')

  $title.innerText = title

  const $subTitle = createElement('p', 'subtitle')

  $subTitle.innerText = subTitle

  $heroBody.append($title, $subTitle)
  $heroSection.append($heroBody)

  return $heroSection
}

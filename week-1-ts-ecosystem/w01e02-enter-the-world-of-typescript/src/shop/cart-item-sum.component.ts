import { createElement } from '../framework/dom-creators'

export function cartItemSum(value: number, currency:string = 'PLN' ) {
  const $panelBlock = createElement( 'div', 'panel-block is-justify-content-end')
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`
  return $panelBlock
}

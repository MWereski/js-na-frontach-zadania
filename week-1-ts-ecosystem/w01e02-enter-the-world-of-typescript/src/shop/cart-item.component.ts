import { createElement } from '../framework/dom-creators'
import { Item } from "../classes/item";

export function cartItem(item: Item) {

  const $panelBlock = createElement( 'div', 'panel-block')
  const $name = createElement( 'div', '')

  $name.textContent = item.name

  const $amount = createElement( 'div', 'ml-auto')

  $amount.textContent = item.amount.toString()

  const $unit = createElement( 'div', 'tag')

  $unit.textContent = item.unit

  const $price = createElement( 'div', 'ml-4')

  $price.textContent = `${item.price.value} ${item.price.currency}`
  $panelBlock.append($name)

  return $panelBlock
}

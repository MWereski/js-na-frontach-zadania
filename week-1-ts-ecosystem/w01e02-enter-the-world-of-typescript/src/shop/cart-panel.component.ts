import { createElement } from '../framework/dom-creators'
import { cartItemSum } from './cart-item-sum.component'
import { cartItem } from './cart-item.component'
import { Item } from "../classes/item";

export function cartPanel(items: Item[], heading:string = 'Cart Items') {
  const $article = createElement( 'article', 'panel is-primary my-6 w-75 mx-auto')
  const $heading = createElement( 'p', 'panel-heading')
  $heading.textContent = heading
  $article.append($heading)
  let value = 0
  items.forEach((item: Item) => {
    value += item.price.value
    $article.appendChild(cartItem(item))
  })
  $article.append(cartItemSum( value,'PLN' ))
  return $article
}

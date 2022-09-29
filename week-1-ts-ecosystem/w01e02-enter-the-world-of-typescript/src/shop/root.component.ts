import { createElement } from '../framework/dom-creators'
import { cartPanel } from './cart-panel.component'
import { hero } from './hero.component'

import { Item } from "../classes/item";
import { Price } from "../classes/price";

const items: Item[] = [
    new Item('Tomatoes', 2, 'kg', new Price(20, 'PLN')),
    new Item('Banana', 5, 'kg', new Price(36, 'PLN')),
]

export function root() {
  const $hero = hero('Shopping App', 'buy and sell')
  const $container = createElement('div', 'container')

  $container.append($hero, cartPanel(items))
  return $container

}

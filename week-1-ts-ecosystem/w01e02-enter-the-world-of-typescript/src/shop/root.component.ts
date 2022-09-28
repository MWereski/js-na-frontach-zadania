import { div } from '../framework/dom-creators.js'
import { cartPanel } from './cart-panel.component.js'
import { hero } from './hero.component.js'

import { Item } from "../classes/item";
import { Price } from "../classes/price";

const items: Item[] = [
    new Item('Tomatoes', 2, 'kg', new Price(20, 'PLN')),
    new Item('Banana', 5, 'kg', new Price(36, 'PLN')),
]

export function root() {
  const $hero = hero('Shopping App', 'buy and sell')
  const $container = div('container')
  $container.append($hero, cartPanel({ items }))
  return $container
}

import { testCart }  from "./cartTest";
import { ProductType } from "../enums/productType";

/**
 * To tutaj mamy "START" programu.
 *
 * Przygotuj tutaj kawałek kodu potwierdzający poprawność działania koszyka.
 *
 * Np. Utwórz 3 różne koszyki — dodaj do nich różne produkty.
 * Potem wyświetl te produkty.
 * Wykaż, że koszyki mają różne produkty — inną ich ilość etc.
 * Przygotuj koszyki dla każdego rodzaju produktów.
 * - po prostu: wykaż, że przygotowana logika i modele danych — działają :)
 * */
testCart(4, ProductType.BuyNow, 10, 5)
testCart(3, ProductType.Auction, 10, 5)
testCart(5, ProductType.ForFree, 10, 5)
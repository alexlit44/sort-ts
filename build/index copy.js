"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const numbersCollection_1 = require("./numbersCollection");
const charactersCollection_1 = require("./charactersCollection");
const numbersCollection = new numbersCollection_1.NumbersCollection([-8, 10, 0, 5]);
const sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
const charactersCollection = new charactersCollection_1.CharactersCollection('ZaAby');
const sorter1 = new Sorter_1.Sorter(charactersCollection);
sorter1.sort();
console.log(numbersCollection);
console.log(charactersCollection);

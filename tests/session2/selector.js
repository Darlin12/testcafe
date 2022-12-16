import { Selector } from "testcafe";

fixture('Primer test')
    .page('https://www.google.com/')

test('My first test', async t => {
        const searchBar = Selector('.gLFyf'); //Searchbar en google
        const firstLink = Selector('.sVXRqc'); //Primer link de amazon
        const searchBarAmazon = Selector('#twotabsearchtextbox'); //Searchbar en amazon

        await t
        .click(searchBar)
        .typeText(searchBar, 'Amazon')
        .wait(3000)
        .pressKey('enter')
        .wait(7000)
        .click(firstLink)
        .wait(5000)
        .typeText(searchBarAmazon, 'Echo Dot')
        .wait(10000)
        .pressKey('enter')
        .wait(10000)
});



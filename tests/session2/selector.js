import { Selector } from "testcafe";

fixture('Primer test')
    .page('https://www.google.com/')

test('My first test', async t => {
        const searchBar = Selector('.gLFyf');
        const firstLink = Selector('.sVXRqc');

        await t
        .click(searchBar)
        .typeText(searchBar, 'Amazon')
        .wait(3000)
        .pressKey('enter')
        .wait(7000)
        .click(firstLink)
        .wait(8000)
});



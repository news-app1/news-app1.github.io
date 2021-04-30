import { html } from '//unpkg.com/lit-html?module';
import { getAllRecentRecords, getOldestRecordsFirst, recordsByTitleAscending, recordsByTitleDecending } from '../api/data.js';
import { itemTemplate } from './common/item.js';


export async function catalogPage(ctx) {
    const newestFirst = await getAllRecentRecords();;
    const oldestFirst = await getOldestRecordsFirst();
    const byTitleAscenidng = await recordsByTitleAscending();
    const byTitleDecending = await recordsByTitleDecending();




    function renderResult(data) {

        ctx.render(catalogTemplate(data, orderAscending, orderDecending, orderByRecent, orderByOldest));
        randomize()
    }

    function orderAscending() {

        renderResult(byTitleAscenidng);

    }

    function orderDecending() {

        renderResult(byTitleDecending);
    }

    function orderByRecent() {

        renderResult(newestFirst);
    }

    function orderByOldest() {

        renderResult(oldestFirst);
    }

    renderResult(newestFirst)

}

const catalogTemplate = (newestFirst, orderAscending, orderDecending, orderByRecent, orderByOldest) => html `
<section id="catalog-page" class="content catalogue">
    <h1><a class="home" @click=${orderByRecent}> Recent Articles</a>
        <a class="home" @click=${orderByOldest}> Old Articles</a>
        <a class="home" @click=${orderAscending}> A-Z </a>
        <a class="home" @click=${orderDecending}> Z-A </a>
    </h1>
    ${newestFirst.length == 0 ? html` <h3 class="no-articles">No articles yet</h3>` :
       Object.values(newestFirst).map(itemTemplate)}
</section>
`;
const options = {
    width: {
        min: 20,
        max: 40,
        unit: '%'
    },
    height: {
        min: 40,
        max: 60,
        unit: '%'
    },
    margin: {
        min: 1.5,
        max: 5,
        unit: 'px'
    }

}


function getRandomInt(min, max, unit) {
    return Math.floor(Math.random() * (max - min + 1)) + min + unit;
}
function randomize() {
    let posts = document.getElementsByClassName("article-preview");
    for (let p = 0; p < posts.length; p++) {
        posts[p].style.margin = getRandomInt(options.margin.min, options.margin.max, options.margin.unit) + " " + getRandomInt(options.margin.min, options.margin.max, options.margin.unit);
        posts[p].style.width = getRandomInt(options.width.min, options.width.max, options.width.unit);
        posts[p].style.height = getRandomInt(options.height.min, options.height.max, options.height.unit);
    }
}
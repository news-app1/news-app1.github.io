import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllRecords } from '../api/data.js';
import { itemTemplate } from './common/item.js';


export async function catalogPage(ctx) {
    const data = await getAllRecords();


    ctx.render(catalogTemplate(data));
}

const catalogTemplate = (data) => html `
<section id="catalog-page" class="content catalogue">
    <h1>All Articles</h1>
    ${data.length == 0 ? html` <h3 class="no-articles">No articles yet</h3>` :
       Object.values(data).map(itemTemplate)}
</section>
`;
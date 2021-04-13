import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteRecord, getRecordById } from '../api/data.js';

const detailsTemplate = (item, onDelete, userId) => html `
<section id="details-page" class="content details">
    <h1>${item.title}</h1>

    <div class="details-content">
        <strong>Published in category ${item.description}</strong>
        <p>${item.text}</p>

        <div class="buttons">
        ${userId === item.owner.objectId ? 
        html`
            <a @click=${onDelete} href="javascript:void(0)" class="btn delete">Delete</a>
            <a href="/edit/${item.objectId}" class="btn edit">Edit</a>
        ` : '' }
            <a href="/catalog" class="btn edit">Back</a>
        </div>
    </div>
</section>
`;


export async function detailsPage(ctx) {

    const item = await getRecordById(ctx.params.id);
   
    
    const userId = sessionStorage.getItem('userId');
   
    ctx.render(detailsTemplate(item, onDelete, userId));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this item?');
        if (confirmed) {
            await deleteRecord(item.objectId);
            //alert('Item deleted!');
            ctx.page.redirect('/catalog');

        }

        // return;
    }

}
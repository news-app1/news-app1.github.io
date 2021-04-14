import { html } from '//unpkg.com/lit-html?module';
import { editRecord, getRecordById } from '../api/data.js';


const editTemplate = (item, onSubmit) => html `
<section id="edit-page" class="content">
    <h1>Edit Article</h1>

    <form @submit=${onSubmit} id="edit" action="#" method="">
        <fieldset>
            <p class="field title">
                <label for="title">Title:</label>
                <input type="text" name="title" id="title" placeholder="Enter article title" .value=${item.title}>
            </p>

            <p class="field category">
                <label for="category">Description:</label>
                <input type="text" name="description" id="description" placeholder="Enter article category" .value=${item.description}>
            </p>
            <p class="field">
                <label for="content">Content:</label>
                <textarea name="content" id="content" .value=${item.text}></textarea>
            </p>

            <p class="field submit">
                <input class="btn submit" type="submit" value="Save Changes">
            </p>

        </fieldset>
    </form>
</section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;

    const item = await getRecordById(id);

    ctx.render(editTemplate(item, onSubmit));

    async function onSubmit(event) {

        event.preventDefault();
        const formData = new FormData(event.target);

        const title = formData.get('title').trim();
        const description = formData.get('description').trim();
        const text = formData.get('content').trim();


        if (title == '' || description == '' || text == '') return alert('All fields are rquired!');


        const data = {
            title,
            description,
            text,
        }

        await editRecord(item.objectId, data);

        ctx.page.redirect('/catalogue');
    }
}
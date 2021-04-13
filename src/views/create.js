import { html } from '../../node_modules/lit-html/lit-html.js';
import { createRecord } from '../api/data.js';


const createTemplate = (onSubmit) => html `
<section id="create-page" class="content">
    <h1>Post on News Feed</h1>

    <form @submit=${onSubmit} id="create" action="#" method="">
        <fieldset>
            <p class="field title">
                <label for="create-title">Title:</label>
                <input type="text" id="create-title" name="title" placeholder="Enter article title">
            </p>

            <p class="field category">
                <label for="create-description">Description:</label>
                <input type="text" id="create-description" name="description" placeholder="Enter article description">
            </p>
            <p class="field">
                <label for="create-content">Content:</label>
                <textarea name="content" id="create-content"></textarea>
            </p>

            <p class="field submit">
                <input class="btn submit" type="submit" value="Create">
            </p>

        </fieldset>
    </form>
</section>
`;


export async function createPage(ctx) {


    ctx.render(createTemplate(onSubmit));

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

        await createRecord(data);

        ctx.page.redirect('/catalog');
    }
}
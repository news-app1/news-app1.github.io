import { html } from '//unpkg.com/lit-html?module';

export const itemTemplate = (item) => html `
<a class="article-preview" href="/details/${item.objectId}">
    <article>
        <h3>Topic: <span>${item.title}</span></h3>
        <p>Description: <span>${item.description}</span></p>
    </article>
</a>
`;
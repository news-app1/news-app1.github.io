import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllRecentRecords } from '../api/data.js';


export async function homePage(ctx) {

    const data = await getAllRecentRecords();



    ctx.render(homeTemplate(data));
}


const homeTemplate = (data) => html `
<section id="home-page" class="content">
    <h1>Recent Articles</h1>
    <section class="recent js">
        <h2>JavaScript</h2>
        ${data[0] == undefined ? html`<h3 class="no-articles">No articles yet</h3>` :
        html`<article>
            <h3>${data[0].title}</h3>
            <p>${data[0].text}</p>
            <a href="/details/${jsArr[0]._id}" class="btn details-btn">Details</a>
        </article>`}
    </section>
    <section class="recent csharp">
        <h2>C#</h2>
        ${data[1] == undefined ? html`<h3 class="no-articles">No articles yet</h3>` :
        html`<article>
            <h3>${data[1].title}</h3>
            <p>${data[1].text}</p>
            <a href="/details/${cArr[0]._id}" class="btn details-btn">Details</a>
        </article>`}
    </section>
    <section class="recent java">
        <h2>Java</h2>
        ${data[2] == undefined ? html`<h3 class="no-articles">No articles yet</h3>` :
        html`<article>
            <h3>${data[2].title}</h3>
            <p>${data[2].content}</p>
            <a href="/details/${javaArr[0]._id}" class="btn details-btn">Details</a>
        </article>`}
    </section>
    <section class="recent python">
        <h2>Python</h2>
        ${data[3] == undefined ? html`<h3 class="no-articles">No articles yet</h3>` :
        html`<article>
            <h3>${data[3].title}</h3>
            <p>${data[3].content}</p>
            <a href="/details/${pythonArr[0]._id}" class="btn details-btn">Details</a>
        </article>`}
    </section>
</section>
`;
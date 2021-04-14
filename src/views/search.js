import { html } from '//unpkg.com/lit-html?module';
import { searchRecords } from '../api/data.js';
import { itemTemplate } from './common/item.js';


const searchTemplate = (data, onSearch) => html `
<section id="search-page" class="content">
    <h1>Search By Title</h1>
    <form @submit=${onSearch} id="search-form">
        <p class="field search">
            <input type="text" placeholder="Search by article title" name="search" >
        </p>
        <p class="field submit">
            <input class="btn submit" type="submit" value="Search">
        </p>
    </form>
    <div class="search-container">
        ${data.length == 0 ? html`<h3 class="no-articles">No matching articles</h3>` :
        Object.values(data).map(itemTemplate)}


    </div>
</section>
`;

export async function searchPage(ctx) {

    const searched = ctx.querystring.split('=')[1];
    
    const data = searched == ''? [] : await searchRecords(searched);
   
    ctx.render(searchTemplate(data, onSearch, searched));
    
    async function onSearch(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const query = formData.get('search');
        if(typeof query != 'string') {
            return alert('You can only search by Title! Value must be a string')
        }
        ctx.page.redirect(`/search?query=` + query);
        
        
    }

    
}
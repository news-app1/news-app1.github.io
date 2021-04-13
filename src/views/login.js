import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';



export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const pass = formData.get('password').trim();

        if (email == '' || pass == '') return alert('All fields are requred')

        await login(email, pass);
        ctx.setUserNav();
        //redirect after LOG IN
        ctx.page.redirect('/catalog');
    }
}

const loginTemplate = (onSubmit) => html `
<section id="login-page" class="content auth">
    <h1>Login</h1>

    <form @submit=${onSubmit} id="login" action="#" method="">
        <fieldset>
            <p class="field email">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email">
            </p>
            <p class="field password">
                <label for="login-pass">Password:</label>
                <input type="password" id="login-pass" name="password">
            </p>
            <p class="field submit">
                <input class="btn submit" type="submit" value="Log in">
            </p>
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </fieldset>
    </form>
</section>
`;
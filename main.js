import { Header, Footer, ExploreMenu1, ExploreMenu, ListComponent, HeroSection, Flavour, Contact } from './views/views';

(async function () {
    const app = document.getElementById('app');

    if (!app) {
        console.error('No element with id "app" found.');
        return;
    }

    try {
        const headerHTML = await Header();
        const heroSection = await HeroSection();
        const flavourHTML = await Flavour();
        const exploreMenu1HTML = await ExploreMenu1();
        const exploreMenuHTML = await ExploreMenu();
        const listComponentHTML = await ListComponent();
        const contactHTML = await Contact();
        const footerHTML = await Footer();

        app.innerHTML += headerHTML;
        app.innerHTML += heroSection;
        app.innerHTML += exploreMenu1HTML;
        app.innerHTML += exploreMenuHTML;
        app.innerHTML += flavourHTML;
        app.innerHTML += listComponentHTML;

        app.innerHTML += contactHTML;
        app.innerHTML += footerHTML;

        const event = new CustomEvent('contentLoaded');
        document.dispatchEvent(event);
    } catch (error) {
        console.error('Error loading components:', error);
    }
})();

export async function Header() {
    const response = await fetch('/components/Navbar.html');
    const data = await response.text();
    return data;
}


export async function ExploreMenu1() {
    const response = await fetch('/components/ExploreMenu1.html');
    const data = await response.text();
    return data;
}


export async function ExploreMenu() {
    const response = await fetch('/components/ExploreMenu.html');
    const data = await response.text();
    return data;
}

export async function ListComponent() {
    const response = await fetch('/components/ListComponent.html');
    const data = await response.text();
    return data;
}

export async function HeroSection() {
    const response = await fetch('/components/HeroSection.html');
    const data = await response.text();
    return data;
}

export async function Flavour() {
    const response = await fetch('/components/Flavour.html');
    const data = await response.text();
    return data;
}


export async function Contact() {
    const response = await fetch('/components/Contact.html');
    const data = await response.text();
    return data;
}

export async function Footer() {
    const response = await fetch('/components/Footer.html');
    const data = await response.text();
    return data;
}
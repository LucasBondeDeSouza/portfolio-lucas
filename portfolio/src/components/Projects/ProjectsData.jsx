const projects = [
    {
        id: 1,
        name: "LitShare",
        description: {
            pt: "Trata-se de uma Rede Social que permite aos usuários compartilhar suas experiências literárias. A aplicação conta com funcionalidades completas de autenticação (login e registro), onde os usuários podem adicionar, editar e deletar suas próprias resenhas de livros, além de seguir outros leitores, curtir as publicações e visualizar o que outras pessoas estão lendo.",
            en: "This is a social network that allows users to share their literary experiences. The application has full authentication features (login and registration), where users can add, edit and delete their own book reviews, as well as follow other readers, like publications and see what other people are reading."
        } ,
        languages: [
            { id: 1, name: "devicon-react-original colored fs-5" },
            { id: 2, name: "devicon-html5-plain colored fs-5" },
            { id: 3, name: "devicon-css3-plain colored fs-5" },
            { id: 4, name: "devicon-bootstrap-plain colored fs-5" },
            { id: 5, name: "devicon-javascript-plain colored fs-5" },
            { id: 6, name: "devicon-nodejs-plain-wordmark colored" },
            { id: 7, name: "devicon-postgresql-plain colored fs-5" },
        ],
        linkProject: "https://litshare-app.vercel.app/",
        linkInAction: "https://www.linkedin.com/feed/update/urn:li:activity:7306435326233763840/"
    },
    {
        id: 2,
        name: "Brasileirão Simulator",
        description: {
            pt: "O Brasileirão Simulator é uma aplicação interativa que permite aos usuários simular e visualizar os resultados das partidas do Campeonato Brasileiro 2024. Com uma interface amigável e responsiva, os usuários podem alterar os placares das partidas e acompanhar as atualizações em tempo real na tabela de classificação das equipes.",
            en: "The Brasileirão Simulator is an interactive application that allows users to simulate and visualize the results of the Brasileirão 2024 matches. With a user-friendly and responsive interface, users can change match scores and follow real-time updates on team standings."
        } ,
        languages: [
            { id: 1, name: "devicon-react-original colored fs-5" },
            { id: 2, name: "devicon-html5-plain colored fs-5" },
            { id: 3, name: "devicon-css3-plain colored fs-5" },
            { id: 4, name: "devicon-bootstrap-plain colored fs-5" },
            { id: 5, name: "devicon-javascript-plain colored fs-5" },
            { id: 6, name: "devicon-nodejs-plain-wordmark colored fs-5" }, 
            { id: 7, name: "devicon-postgresql-plain colored fs-5" },
        ],
        linkProject: "https://simulador-brasileirao.vercel.app/",
        linkInAction: "https://www.linkedin.com/feed/update/urn:li:activity:7254572857303715840/"
    },
    {
        id: 3,
        name: "Top Tracker",
        description: {
            pt: "O Top Tracker permite que você explore os principais artistas, músicas e playlists do momento, com base em gêneros musicais e países. Além disso, você pode pesquisar por artistas e ver suas músicas e álbuns mais recentes.",
            en: "Top Tracker lets you explore the hottest artists, songs, and playlists of the moment, based on music genres and countries. You can also search for artists and see their latest songs and albums."
        } ,
        languages: [
            { id: 1, name: "devicon-react-original colored fs-5" },
            { id: 2, name: "devicon-html5-plain colored fs-5" },
            { id: 3, name: "devicon-css3-plain colored fs-5" },
            { id: 4, name: "devicon-tailwindcss-plain colored fs-5" },
            { id: 5, name: "devicon-javascript-plain colored fs-5" },
        ],
        linkProject: "https://top-tracker.vercel.app/",
        linkInAction: "https://www.linkedin.com/feed/update/urn:li:activity:7312914643973279744/"
    },
    {
        id: 4,
        name: "SmartSpeak",
        description: {
            pt: "O SmartSpeak é uma aplicação inovadora de chatbot com inteligência artificial, desenvolvida para oferecer interações rápidas, precisas e intuitivas. Utilizando IA avançada, a plataforma permite que os usuários façam perguntas e obtenham respostas contextuais e detalhadas, com suporte a múltiplos idiomas. Ideal para aprendizado, suporte ao cliente e diversas outras aplicações.",
            en: "SmartSpeak is an innovative AI-powered chatbot application designed to provide fast, accurate, and intuitive interactions. Utilizing advanced AI, the platform allows users to ask questions and receive contextual and detailed answers, with support for multiple languages. Ideal for learning, customer support, and various other applications."
        },
        languages: [
            { id: 1, name: "devicon-react-original colored fs-5" },
            { id: 2, name: "devicon-html5-plain colored fs-5" },
            { id: 3, name: "devicon-css3-plain colored fs-5" },
            { id: 4, name: "devicon-javascript-plain colored fs-5" },
        ],
        linkProject: "https://smart-speak.vercel.app/",
        linkInAction: "https://www.linkedin.com/feed/update/urn:li:activity:7267219205085687809/"
    },
    {
        id: 5,
        name: "Visit USA",
        description: {
            pt: "O Visit USA é uma aplicação que explora as belezas das cidades dos Estados Unidos. Com uma interface atraente e funcional, o site apresenta informações detalhadas e imagens das principais cidades americanas, destacando pontos turísticos, cultura local e dicas para visitantes.",
            en: "Visit USA is an application that explores the beauties of cities in the United States. With an attractive and functional interface, the website features detailed information and images of the main American cities, highlighting tourist attractions, local culture, and tips for visitors."
        },
        languages: [
            { id: 1, name: "devicon-react-original colored fs-5" },
            { id: 2, name: "devicon-html5-plain colored fs-5" },
            { id: 3, name: "devicon-css3-plain colored fs-5" },
            { id: 4, name: "devicon-javascript-plain colored fs-5" }
        ],
        linkProject: "https://visit-usa-two.vercel.app/",
        linkInAction: "https://www.linkedin.com/feed/update/urn:li:activity:7271236686133559296/"
    },
    {
        id: 6,
        name: "NewsNow",
        description: {
            pt: "Desenvolvi o newsNow, uma aplicação que permite aos usuários buscar notícias sobre qualquer tema de forma rápida e intuitiva. A plataforma utiliza a API gnews.io para fornecer resultados em tempo real, garantindo uma busca ágil e eficiente. A interface simples e direta foi projetada para facilitar a navegação, proporcionando uma experiência fluida ao acessar as notícias mais recentes da web.",
            en: "I developed newsNow, an application that allows users to search for news on any topic quickly and intuitively. The platform uses the gnews.io API to provide real-time results, ensuring a fast and efficient search. The simple and straightforward interface was designed to facilitate navigation, providing a fluid experience when accessing the latest news from the web."
        },
        languages: [
            { id: 1, name: "devicon-react-original colored fs-5" },
            { id: 2, name: "devicon-html5-plain colored fs-5" },
            { id: 3, name: "devicon-bootstrap-plain colored fs-5" },
            { id: 4, name: "devicon-javascript-plain colored fs-5" },
            { id: 5, name: "devicon-nodejs-plain-wordmark colored fs-5" },
        ],
        linkProject: "https://newsnow-snowy.vercel.app/",
        linkInAction: "https://www.linkedin.com/feed/update/urn:li:activity:7258178870208569347/"
    },
    {
        id: 7,
        name: "Clone Twitter",
        description: {
            pt: "Finalizei um projeto no qual recriei a interface e as principais funcionalidades do Twitter. Utilizei React para desenvolver componentes dinâmicos e Tailwind CSS para criar um design moderno e responsivo. O projeto foca em oferecer uma experiência de uso fluida e interativa, com recursos como postagens, interações entre usuários e atualizações em tempo real.",
            en: "I completed a project in which I recreated Twitter's interface and main features. I used React to develop dynamic components and Tailwind CSS to create a modern and responsive design. The project focuses on offering a fluid and interactive user experience, with features such as posts, user interactions and real-time updates."
        },
        languages: [
            { id: 1, name: "devicon-react-original colored fs-5" },
            { id: 2, name: "devicon-html5-plain colored fs-5" },
            { id: 3, name: "devicon-tailwindcss-original colored fs-5" },
            { id: 4, name: "devicon-javascript-plain colored fs-5" },
        ],
        linkProject: "https://clone-twitter-three-blond.vercel.app/",
        linkInAction: "https://www.linkedin.com/feed/update/urn:li:activity:7242564054475563008/"
    },
    {
        id: 8,
        name: "World Clock",
        description: {
            pt: "Este projeto é uma aplicação web interativa que exibe o horário atual e o clima de diversas cidades ao redor do mundo. Utilizando a API do OpenWeatherMap para obter dados meteorológicos em tempo real, a interface permite que o usuário selecione entre várias cidades em diferentes fusos horários e visualize tanto o horário local quanto a condição climática atual.",
            en: "This project is an interactive web application that displays the current time and weather for several cities around the world. Using the OpenWeatherMap API to retrieve real-time weather data, the interface allows the user to select from multiple cities in different time zones and view both the local time and the current weather conditions."
        },
        languages: [
            { id: 1, name: "devicon-html5-plain colored fs-5" },
            { id: 2, name: "devicon-css3-plain colored fs-5" },
            { id: 3, name: "devicon-javascript-plain colored fs-5" },
        ],
        linkProject: "https://lucasbondedesouza.github.io/projeto_relogio/html/relogio.html",
        linkInAction: "https://www.linkedin.com/feed/update/urn:li:activity:7188974997695062018/?originTrackingId=vj5VDiceQo6oTXerhRcoGQ%3D%3D"
    },
    {
        id: 9,
        name: "Dev Burguer",
        description: {
            pt: "Desenvolvi o Dev Burguer, uma aplicação web que explora um cardápio de hambúrgueres e bebidas. Com uma interface intuitiva, a plataforma apresenta descrições e imagens dos produtos. O carrinho de compras atualiza o total em tempo real, permitindo adicionar ou remover itens. A aplicação também verifica o horário de funcionamento e valida o endereço de entrega, garantindo eficiência.",
            en: "I developed Dev Burguer, a web application that explores a menu of burgers and drinks. With an intuitive interface, the platform presents descriptions and images of the products. The shopping cart updates the total in real time, allowing you to add or remove items. The application also checks the opening hours and validates the delivery address, ensuring efficiency."
        },
        languages: [
            { id: 1, name: "devicon-html5-plain colored fs-5" },
            { id: 2, name: "devicon-css3-plain colored fs-5" },
            { id: 3, name: "devicon-tailwindcss-original colored fs-5" },
            { id: 4, name: "devicon-javascript-plain colored fs-5" },
        ],
        linkProject: "https://cardapio-online-lac.vercel.app/",
        linkInAction: "https://www.linkedin.com/feed/update/urn:li:activity:7245836255882604544/"
    },
]

export default projects

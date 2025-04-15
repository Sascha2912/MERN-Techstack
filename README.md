Projekt initialisieren:

    1. Backend:
        1.1 Die .env.example kopieren und in .env umbenennen.
        1.2 Im backend Verzeichnis npm install ausführen.

    2. Frontend:
        2.1 Die .env.example kopieren und in .env umbenennen.
        2.2 Im frontend Verzeichnis npm install ausführen.
        2.3 Im frontend Verzeichnis npm run dev ausführen.

    3. Root:
        3.1 docker-compose up -d --build ausführen.

    4. Backend:
        4.1 Im backend Verzeichnis npm run start ausführen.
        4.2 Im Browser unter http://localhost:3000/test die Verbindung zum Server und der Datenbank testen.
        4.3 Test Code aus der server.js entfernen.

Befehle:

    root-verzeichnis:
    docker-compose up -d --build
    docker-compose down

    backend-verzeichnis:
    npm run start
    npm run dev
    npm run test

    frontend-verzeichnis:
    npm run dev
    npm run build
    npm run lint
    npm run preview


Key Structural Components:

/  
├── frontend/  
│   ├── public/  
│   ├── src/  
│   │   ├── assets/  
│   │   ├── components/  
│   │   ├── layouts/  
│   │   ├── pages/  
│   │   ├── styles/  
│   │   ├── App.jsx  
│   │   └── main.jsx  
│   ├── .env.example  
│   ├── index.html  
│   ├── package.json  
│   ├── tailwind.config.js  
│   └── vite.config.js  
│  
├── backend/  
│   ├── src/  
│   │   ├── config/  
│   │   ├── controllers/  
│   │   ├── models/  
│   │   ├── routes/  
│   │   └── app.js  
│   ├── .env.example  
│   ├── package.json  
│   ├── server.js  
│   └── Dockerfile  
│  
├── docker-compose.yml  
├── .gitignore  
└── README.md  
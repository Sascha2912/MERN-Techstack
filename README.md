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
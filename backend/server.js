'use strict';

// Module importieren
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

// Server implementieren
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware einbinden
app.use(cors());
app.use(express.json());

// MongoDB-Verbinden
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Mit MongoDB verbunden'))
.catch(err => console.error('Fehler bei MongoDB-Verbindung: ', err));

// Routen
app.get('/', (req, res) => res.send('Backend läuft.'));

// Beispiel-Route (nach der MongoDB-Verbindung)
app.get('/test', async (req, res) => {
    console.log('Route /test wurde aufgerufen'); // 👈 Debug-Log
    try {
      const users = await mongoose.connection.db.collection('users').find().toArray();
      console.log('Datenbankabfrage erfolgreich:', users); // 👈 Debug-Log
      res.json(users);
    } catch (err) {
      console.error('Fehler bei der Datenbankabfrage:', err); // 👈 Debug-Log
      res.status(500).json({ error: err.message });
    }
  });

// Server starten
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
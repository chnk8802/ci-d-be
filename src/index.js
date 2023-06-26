import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './db/db';
import { Crypto } from './model/crypto';

connectDB();
const PORT = process.env.PORT;
const app = express();
app.use(cors());

const getData = () => {
    fetch('https://api.wazirx.com/api/v2/tickers')
    .then(response => response.json())
    .then(async result => {
        var i = 0;
        for (const key in result) {
            i++;
            if (Object.hasOwnProperty.call(result, key)) {
                const element = result[key];
                const crypto = new Crypto(element);
                await crypto.save()
                if (i==10)
                {
                    break;
                }
            }
        }
    })
}
const emptyDB = async (callback) => {
    if (await Crypto.find({})) {
        Crypto.collection.drop();
        callback();
    } else {
        callback();
    }
}

emptyDB(getData);
// automatically updates data every 30sec
setInterval(() => emptyDB(getData), 2000);

// Define a simple route
app.get('/cryptoinfo/api/v1/tickers', async (req, res) => {
    res.json(await Crypto.find({}));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server-Connected@:${PORT}`);
});

// exports.api = functions.https.onRequest(app);

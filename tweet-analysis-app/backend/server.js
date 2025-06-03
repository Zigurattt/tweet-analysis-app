const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const auth = new google.auth.GoogleAuth({
  keyFile: './credentials.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

app.post('/analyze', async (req, res) => {
  const tweetUrl = req.body.url;

  // Sahte analiz verileri
  const fakeTweet = {
    username: "@mertyilmaz",
    content: "Bu proje yapay zeka destekli tweet analiz uygulamasıdır.",
    sentiment: "Olumlu",
    summary: "Yapay zekalı analiz uygulaması",
    datetime: new Date().toLocaleString()
  };

  try {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });

    const spreadsheetId = process.env.SPREADSHEET_ID;

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:E',
      valueInputOption: 'RAW',
      requestBody: {
        values: [
          [
            fakeTweet.username,
            fakeTweet.content,
            fakeTweet.sentiment,
            fakeTweet.summary,
            fakeTweet.datetime
          ]
        ]
      }
    });

    res.json({ success: true, data: fakeTweet });
  } catch (err) {
    console.error(err);
    res.status(500).send('Hata oluştu');
  }
});

app.listen(5000, () => {
  console.log('Backend server: http://localhost:5000');
});

# I Tweet Analiz Otomatı 

Umarim kisa sürede istenilen sekilde bi mini uygulama kodylayabilmisimdir herhangibi sorununuz olursa bana hamza.yilmaz@metu.edu.tr adresinden ulasabilirsiniz.
Bu mini React uygulaması, kullanıcılardan bir Tweet bağlantısı alır ve duygu analizinin, özetlerin ve kullanıcı bilgilerinin Google Sheets'e yazılmasını sağlar.

## Özellikler
- Tweet URL girişi
- İçerik özeti (1-2 cümle)
- Duygu analizi (positive / negative / neutral)
- Kullanıcı adı & tarih/saat (fake data)
- Otomatik kayıt Google Sheets'e

## Kurulum

### 1. Google Sheets API Ayarları

- [Google Cloud Console](https://console.cloud.google.com/) → Yeni bir proje oluştur.
- Sheets API ile Drive API'yi aktifleştir.
- Servis hesabı oluştur → Servis hesabı kimlik bilgilerini indir, `credentials.json` olarak.
- Bir Sheet oluştur ve adına `Sheet1` ver.
- Servis hesabının e-posta adresini bu Sheet üzerinde edit izniyle paylaş.

### 2. Backend Kurulumu

```bash
cd backend
npm install
node server.js
```

### 3. Frontend Kurulumu

```bash
cd frontend
npm install
npm start
```

### Örnek Google Sheet

[ Readonly example tab here](https://docs.google.com/spreadsheets/u/0/)

## Proje Yapısı

```
tweet-analysis-app/
├── backend/
│   ├── server.js
│   ├── .env
│   └── credentials.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
├── README.md
└── .gitignore
```

## ✉️ İletişim

Project: Technical Task of Swipeline AI Studio  
Prepared by: Mert Hamza Yılmaz
Mail: hamza.yilmaz@metu.edu.tr

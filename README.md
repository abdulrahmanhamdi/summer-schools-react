# 🎓 Yaz Okulu Platformu

📍 **Türkiye'deki üniversitelerin yaz okulu duyurularını tek bir platformda toplayan kullanıcı dostu uygulama.**  
Kolay erişim. Güvenli yönetim. Mobil uyumlu tasarım.

---

## 📌 Proje Özeti

**Yaz Okulu Platformu**, Türkiye genelindeki üniversitelerin yaz okulu programlarını tek çatı altında toplayarak öğrencilerin güncel ve doğru bilgilere hızlıca ulaşmasını hedefleyen modern bir web uygulamasıdır.  
Kullanıcı odaklı tasarımı, mobil cihazlara uyumlu arayüzü ve güvenli admin paneliyle öğrenci ve yöneticilere kusursuz bir deneyim sunar.

---

## 🎯 Temel Hedefler

- 🏫 Yaz okulu duyurularını merkezi olarak sunmak  
- 🚀 Bilgiye hızlı, kolay ve filtrelenebilir erişim sağlamak  
- 🔐 Güvenli ve esnek bir yönetim paneli sunmak  
- 📱 Tüm cihazlarda optimize edilmiş kullanıcı deneyimi sağlamak

---

## 🌟 Öne Çıkan Özellikler

| Özellik                    | Açıklama |
|----------------------------|----------|
| 📚 **Yaz Okulu Veritabanı** | Üniversitelere ait şehir, tür, ders koşulları gibi detaylı bilgiler içerir. |
| 🧑‍💼 **Admin Paneli**         | Verileri ekleme, güncelleme ve silme imkanı. Şifreli giriş ile korunur. |
| 🌙 **Karanlık / Aydınlık Mod** | Kullanıcı tercihlerine göre mod geçişi yapılabilir. |
| 💬 **İletişim Formu**        | EmailJS ile doğrudan e-posta üzerinden geri bildirim alma imkanı. |
| 🔍 **Arama ve Filtreleme**   | Metin bazlı arama ve vurgulama özelliği. |
| 📅 **Güncel Bilgiler**        | Veriler düzenli olarak güncellenir, son güncelleme tarihi görünür. |
| 📱 **Mobil Uyum**            | Telefon, tablet ve masaüstü için tamamen responsive yapı. |

---

## 🛠️ Kullanılan Teknolojiler

| Katman     | Teknolojiler |
|------------|---------------|
| 🎨 Frontend | React + Vite + Bootstrap Icons |
| 🧠 Backend  | Node.js (Express.js) |
| 🗂️ Veritabanı | JSON Tabanlı Geçici API |
| ✉️ E-posta  | EmailJS |
| 🌐 Dağıtım  | Vercel (Frontend) + Render (Backend) |

---

## ⚙️ Kurulum Adımları

### 1️⃣ Gereksinimler

- Node.js v16+
- npm veya yarn
- İnternet bağlantısı (EmailJS ve bağımlılıklar için)

### 2️⃣ Frontend Kurulumu

```bash
cd summer-schools-react
npm install
npm run dev
```

📍 Uygulama: [http://localhost:5173](http://localhost:5173)

### 3️⃣ Backend Kurulumu

```bash
cd backend
npm install
npm run dev
```

📍 API: [http://localhost:3000](http://localhost:3000)  
📁 Veriler `backend/data` klasöründe saklanır.

---

## 🔐 Ortam Değişkenleri

**Frontend (`src/config.js`):**
```js
export const EMAILJS_SERVICE_ID = "your_service_id";
export const EMAILJS_TEMPLATE_ID = "your_template_id";
export const EMAILJS_PUBLIC_KEY = "your_public_key";
```

**Backend (`.env`):**
```env
PORT=3000
API_TOKEN=your_api_token
```

---

## 🖥️ Kullanım Rehberi

- **Ana Sayfa:** Genel bilgilere hızlı erişim.
- **Üniversite Listesi:** Filtreleme ve detay sayfaları.
- **Admin Paneli:** /dashboard üzerinden giriş yaparak üniversite yönetimi.
- **İletişim:** /contact sayfası üzerinden EmailJS ile mesaj gönderimi.

---

## 🤝 Katkıda Bulunmak

Bu projeye katkıda bulunmak ister misiniz? Aşağıdaki adımları takip ederek kolayca katkı sağlayabilirsiniz:

```bash
# 1. Forklayın
# 2. Klonlayın
git clone https://github.com/your-username/summer-schools-react.git

# 3. Yeni bir dal oluşturun
git checkout -b feature/your-feature-name

# 4. Geliştirin, commit edin
git add .
git commit -m "feat: your feature description"

# 5. Push & Pull Request
git push origin feature/your-feature-name
```

### ✅ Katkı Kuralları
- Temiz ve okunabilir kod
- Açıklayıcı commit mesajları
- Mümkünse test eklemeleri

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

---

## 📬 İletişim

- 📧 E-posta: [abdulrahman@example.com](mailto:abdulrahman@example.com)  
- 🌐 Web Sitesi: [Yaz Okulu Platformu](https://yazokulu.example.com)  
- 💬 GitHub Issues: [Sorun Bildir](https://github.com/username/summer-schools-react/issues)

---

## 🙌 Teşekkürler

Bu projeye katkı sağlayan herkese sonsuz teşekkürler!  
📚 Öğrencilerin yaz okulu programlarına daha kolay ulaşması için birlikte daha iyisini inşa edelim!

🎓 Yaz Okulu Platformu
Türkiye'deki üniversitelerin yaz okulu duyurularını tek bir yerde toplayan kullanıcı dostu bir platform.

  
  
  
  



📋 Proje Hakkında
Yaz Okulu Platformu, Türkiye'deki üniversitelerin yaz okulu duyurularını bir araya getirerek öğrencilerin bilgiye hızlı ve kolay bir şekilde ulaşmasını sağlayan modern bir web uygulamasıdır. Platform, kullanıcı dostu arayüzü ve mobil uyumlu tasarımı ile dikkat çekerken, admin paneli sayesinde veri yönetimi süreçlerini kolaylaştırır. Öğrenciler, yaz okulu programlarını inceleyebilir, iletişim formu aracılığıyla geri bildirimde bulunabilir ve platformun sunduğu karanlık/aydınlık mod seçenekleriyle kişiselleştirilmiş bir deneyim yaşayabilir.
✨ Temel Amaçlar

🏫 Üniversite yaz okulu duyurularını merkezi bir yerde toplamak.
📖 Öğrencilerin bilgiye hızlı ve kolay erişimini sağlamak.
🛠️ Adminler için pratik bir veri yönetim sistemi sunmak.
📱 Tüm cihazlarda kusursuz bir kullanıcı deneyimi sağlamak.


🚀 Özellikler

📚 Yaz Okulu VeritabanıTürkiye’deki üniversitelerin yaz okulu programlarını içeren kapsamlı bir veritabanı. Her üniversite için detaylı bilgiler, şehir, tür ve ders koşulları gibi veriler sunar.

🧠 Admin PaneliAdminler, üniversite verilerini kolayca ekleyebilir, düzenleyebilir ve silebilir. Şifreli giriş sistemi ile güvenli bir yönetim sağlar.

🌙 Karanlık/Aydınlık ModKullanıcılar, tercihlerine göre karanlık veya aydınlık mod arasında geçiş yapabilir, böylece göz yorgunluğunu azaltır.

💌 İletişim FormuEmailJS entegrasyonu ile kullanıcılar doğrudan platform üzerinden geri bildirim, öneri veya hata bildirimi gönderebilir.

📱 Mobil Uyumlu TasarımTüm cihazlarda (telefon, tablet, masaüstü) sorunsuz çalışan responsive bir tasarım.

🔐 Şifreli Giriş SistemiAdminler için güvenli bir giriş sistemi ile yetkisiz erişim engellenir.

🔍 Arama ve FiltrelemeÜniversite detaylarında metin arama ve vurgulama özelliği ile kullanıcılar aradıkları bilgiye hızlıca ulaşabilir.

📅 Güncel BilgilerÜniversite bilgileri düzenli olarak güncellenir ve son güncelleme tarihi kullanıcılara gösterilir.



🛠️ Kullanılan Teknolojiler



Katman
Teknoloji



Frontend
⚛️ React + Vite + Bootstrap Icons


Backend
🟢 Express.js (Node.js)


Veritabanı
📄 JSON Tabanlı Geçici API


E-posta
📧 EmailJS


Dağıtım
🌐 Vercel (Frontend) + Render (Backend)


📦 Bağımlılıklar

Frontend:
React Router: Sayfalar arası gezinme için.
Bootstrap Icons: Modern ve hafif ikonlar için.
Vite: Hızlı geliştirme ve build aracı.


Backend:
Express.js: API ve sunucu yönetimi için.
JSON: Hafif ve geçici veri saklama.


Entegrasyonlar:
EmailJS: İletişim formu için e-posta gönderimi.




📥 Kurulum ve Çalıştırma
Aşağıdaki adımları takip ederek projeyi yerel ortamınızda çalıştırabilirsiniz.
📋 Ön Koşullar

🟢 Node.js (v16 veya üstü) yüklü olmalı.
📦 npm veya yarn paket yöneticisi.
🌐 İnternet bağlantısı (EmailJS ve bağımlılıklar için).

1️⃣ Frontend Kurulumu
Frontend uygulamasını çalıştırmak için aşağıdaki adımları izleyin:
# Frontend klasörüne geçiş yapın
cd summer-schools-react

# Bağımlılıkları yükleyin
npm install

# Geliştirme modunda çalıştırın
npm run dev


Uygulama varsayılan olarak http://localhost:5173 adresinde çalışacaktır.

2️⃣ Backend Kurulumu
Backend API’sini çalıştırmak için aşağıdaki adımları izleyin:
# Backend klasörüne geçiş yapın
cd backend

# Bağımlılıkları yükleyin
npm install

# Sunucuyu geliştirme modunda çalıştırın
npm run dev


Backend varsayılan olarak http://localhost:3000 adresinde çalışacaktır.
Not: Backend API’si, JSON tabanlı bir veritabanı kullanır. Veriler backend/data dizininde saklanır.

3️⃣ Ortam Değişkenleri

Frontend: EmailJS entegrasyonu için src/config.js dosyasında aşağıdaki değişkenleri ayarlayın:export const EMAILJS_SERVICE_ID = "your_service_id";
export const EMAILJS_TEMPLATE_ID = "your_template_id";
export const EMAILJS_PUBLIC_KEY = "your_public_key";


Backend: API için ortam değişkenlerini .env dosyasında tanımlayın:PORT=3000
API_TOKEN=your_api_token




🖥️ Kullanım Kılavuzu
1️⃣ Ana Sayfa

Türkiye’deki yaz okulları hakkında genel bilgi alın.
“Tüm Üniversiteleri Gör” butonuna tıklayarak üniversite listesine erişin.

2️⃣ Üniversite Listesi

Üniversiteleri şehir, tür ve detaylarına göre filtreleyin.
Detay sayfasına giderek yaz okulu programları hakkında daha fazla bilgi edinin.

3️⃣ Admin Paneli

/dashboard yoluna giderek admin paneline erişin.
Şifreli giriş yaparak üniversite ekleyebilir, düzenleyebilir veya silebilirsiniz.

4️⃣ İletişim

/contact sayfasından iletişim formunu kullanarak geri bildirimde bulunun.
Gönderilen mesajlar EmailJS aracılığıyla doğrudan adminin e-posta adresine iletilir.


🌟 Katkıda Bulunma
Bu proje açık kaynaklı bir projedir ve katkılarınızı bekliyoruz! Aşağıdaki adımları takip ederek katkıda bulunabilirsiniz.

Fork YapınDepoyu kendi hesabınıza fork edin.

Klonlayın  
git clone https://github.com/your-username/summer-schools-react.git


Yeni Bir Dal Oluşturun  
git checkout -b feature/your-feature-name


Değişikliklerinizi YapınKodunuzu düzenleyin ve gerekli değişiklikleri yapın.

Değişiklikleri Commit Edin  
git add .
git commit -m "feat: add your feature description"


Push Yapın  
git push origin feature/your-feature-name


Pull Request AçınAna depoya bir pull request gönderin. Değişiklikleriniz incelenecek ve uygun görülürse birleştirilecektir.


📜 Katkı Kuralları

Kodunuzu temiz ve okunabilir tutun.
Her commit mesajı açıklayıcı olmalı.
Yeni özellikler için testler eklemeye çalışın.


📄 Lisans
Bu proje MIT Lisansı altında lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına göz atabilirsiniz.

📬 İletişim
Sorularınız veya önerileriniz için bizimle iletişime geçebilirsiniz:

📧 E-posta: abdulrahman@example.com  
🌐 Web Sitesi: Yaz Okulu Platformu  
💬 GitHub Issues: Sorun Bildir


🙌 Teşekkürler
Bu projeyi geliştirirken destek veren herkese teşekkür ederiz! 🚀Projemizi kullanarak yaz okulu süreçlerini kolaylaştırmanız dileğiyle. 🎓

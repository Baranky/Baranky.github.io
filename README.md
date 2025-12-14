# Baran Kaya - Portfolio Website

Modern ve responsive bir kişisel portföy websitesi. React kullanılarak geliştirilmiştir.

🔗 **Canlı Demo:** [https://baranky.github.io/](https://baranky.github.io/)

## ✨ Özellikler

- 🎨 Modern ve şık tasarım
- 📱 Tam responsive (mobil, tablet, desktop uyumlu)
- 🔄 Smooth scroll navigasyon
- 📄 Pagination ile projeler ve yazılar bölümü (sayfa başına 4 öğe)
- 🎭 Glassmorphism efektleri
- ⚡ Hızlı ve optimize edilmiş performans
- 🌐 İngilizce arayüz
- 🎯 Sidebar menü (yukarıdan açılan slider menü)
- ✍️ Typewriter efekti ile dinamik rol gösterimi
- 🎨 Mor/mavi gradient renk paleti

## 🛠️ Kullanılan Teknolojiler

- **React.js** (v17+) - Kullanıcı arayüzü için
- **React Icons** - İkon seti için
- **React Scroll** - Sayfa içi yumuşak geçişler için
- **CSS Modules** - Bileşen bazlı styling
- **GitHub Pages** - Hosting ve yayına alma işlemi için
- **HTML5 & CSS3**

## 🚀 Kurulum ve Yerel Çalıştırma

Projeyi bilgisayarınıza indirip geliştirmek için aşağıdaki adımları izleyebilirsiniz:

1. **Projeyi klonlayın:**
   ```bash
   git clone https://github.com/Baranky/Baranky.github.io.git
   cd Baranky.github.io
   ```

2. **Gerekli paketleri yükleyin:**
   ```bash
   npm install
   ```

3. **Projeyi başlatın:**
   ```bash
   npm start
   ```
   Tarayıcınızda `http://localhost:3000` adresinde proje açılacaktır.

## 📁 Proje Yapısı

```
src/
├── assets/
│   ├── data/          # Veri dosyaları
│   │   ├── articles.js
│   │   ├── experiences.js
│   │   ├── education.js
│   │   ├── projects.js
│   │   └── techstack.js
│   ├── images/        # Görseller
│   └── resume.pdf     # CV dosyası
├── components/        # React bileşenleri
│   ├── ArticleComponent/
│   ├── ProjectComponent/
│   ├── ResumeInfo/
│   ├── SidebarMenu/
│   ├── WelcomeText/
│   └── ...
└── App.js            # Ana uygulama dosyası
```

## 🎯 Bölümler

### 🏠 Landing Page
- Kişisel tanıtım metni
- Dinamik rol gösterimi (typewriter efekti): Software Engineer, Java Developer, Backend Developer, Full Stack Developer
- Sosyal medya linkleri (GitHub, Medium, LinkedIn)
- Scroll animasyonları
- Arka plan görseli

### 👤 About
- Email ve telefon bilgileri
- Adres bilgisi
- Doğum tarihi
- Dil becerileri
- Referanslar

### 💼 Experience
- İş deneyimleri
- Pozisyon ve şirket bilgileri
- Tarih aralıkları
- İş açıklamaları

### 🎓 Education
- Eğitim geçmişi
- Üniversite ve bölüm bilgileri
- Mezuniyet durumu
- Tarih bilgileri

### 🛠️ Tech Stack
- Kullanılan teknolojiler ve araçlar
- İnteraktif teknoloji kartları
- Hover efektleri
- Logo ve görseller

### 🚀 Projects
- Proje portföyü (6 proje)
- Detaylı proje açıklamaları
- GitHub linkleri
- Proje görselleri
- Pagination (sayfa başına 4 proje)

### 📝 Articles
- Teknik yazılar (8 yazı)
- Medium linkleri
- Yazı açıklamaları
- Tarih bilgileri
- Pagination (sayfa başına 4 yazı)

## 🎨 Özelleştirme

### Kişisel Bilgileri Güncelleme

1. **ResumeInfo** (`src/components/ResumeInfo/ResumInfo.jsx`):
   - İletişim bilgileri (email, telefon, adres)
   - Referanslar
   - Dil becerileri

2. **Data Dosyaları**:
   - `src/assets/data/experiences.js` - İş deneyimleri
   - `src/assets/data/education.js` - Eğitim bilgileri
   - `src/assets/data/projects.js` - Projeler
   - `src/assets/data/articles.js` - Yazılar
   - `src/assets/data/techstack.js` - Teknoloji yığını

3. **WelcomeText** (`src/components/WelcomeText/WelcomeText.jsx`):
   - İsim bilgisi
   - Roller (roles array)

4. **Meta Bilgiler** (`public/index.html`):
   - Sayfa başlığı
   - Meta açıklaması

5. **Sosyal Medya Linkleri** (`src/components/AccountList/AccountList.jsx`):
   - GitHub, Medium, LinkedIn linkleri

### Renkler

Renk paleti `#667eea` (mor/mavi) ve `#764ba2` (mor) tonlarında kullanılmaktadır. Renkleri değiştirmek için CSS dosyalarında bu renk kodlarını arayın.

### Görseller

- Profil fotoğrafı: `src/assets/images/me.png`
- Landing page arka plan: `src/assets/images/software-engineering.jpg`
- CV dosyası: `src/assets/resume.pdf`

## 📱 Responsive Tasarım

- **Desktop**: Tam özellikli görünüm, yan yana layout
- **Tablet**: Optimize edilmiş layout, esnek düzen
- **Mobile**: Mobil uyumlu menü, dikey düzen, küçültülmüş fontlar

## 🚀 Build ve Deploy

### Production Build

Production build oluşturmak için:

```bash
npm run build
```

Build klasörü `build/` dizininde oluşturulacaktır.

### GitHub Pages Deployment

Bu projede `gh-pages` paketi kullanılmaktadır. Kodlarda güncelleme yaptıktan sonra siteyi yenilemek için:

```bash
npm run deploy
```

Bu işlem otomatik olarak `build` alacak ve `gh-pages` dalına yükleyerek siteyi güncelleyecektir.

### Diğer Hosting Seçenekleri

Build klasörünü aşağıdaki servislere deploy edebilirsiniz:

- **Netlify**: Drag & drop veya Git entegrasyonu
- **Vercel**: Git entegrasyonu ile otomatik deploy
- **Firebase Hosting**: Firebase CLI kullanarak

## 📝 Önemli Notlar

- Proje React 17 kullanmaktadır
- Node.js 18.x gereklidir
- CSS Modules ile stil yönetimi yapılmaktadır
- Tüm bileşenler functional component olarak yazılmıştır

## 🔧 Geliştirme

### Yeni Bileşen Ekleme

1. `src/components/` altında yeni klasör oluşturun
2. Component ve CSS dosyalarını ekleyin
3. `App.js` veya ilgili parent component'e import edin

### Yeni Veri Ekleme

Data dosyaları (`src/assets/data/`) altındaki ilgili `.js` dosyasına yeni objeler ekleyin. Array yapısını koruyun.

## 📄 Lisans

Bu proje kişisel kullanım içindir.

## 📧 İletişim

**Baran Kaya**

- Email: baranky2104@gmail.com
- Phone: +90 533 198 2104
- GitHub: [@Baranky](https://github.com/Baranky)
- Medium: [@baranky2104](https://medium.com/@baranky2104)

## 🙏 Teşekkürler

Bu proje, modern web teknolojileri kullanılarak geliştirilmiştir. İlham veren açık kaynak topluluğuna teşekkürler!

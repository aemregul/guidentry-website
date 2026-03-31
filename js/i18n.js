/* ============================================================
   GUIDENTRY — Internationalization (i18n) System
   ============================================================ */

const translations = {
  // ─── NAVBAR (shared across all pages) ───
  nav: {
    home: { tr: 'Anasayfa', en: 'Home' },
    about: { tr: 'Hakkımızda', en: 'About Us' },
    contact: { tr: 'İletişim', en: 'Contact' },
    login: { tr: 'Oturum Aç', en: 'Sign In' },
    cta: { tr: 'Rehber Olarak Üye Ol', en: 'Become a Guide' },
  },

  // ─── FOOTER (shared) ───
  footer: {
    brandDesc: {
      tr: 'Turist rehberleri için donanımsız, mobil tabanlı sesli rehberlik platformu. Marmara Teknokent GO IDEA Programı kapsamında geliştirildi.',
      en: 'Equipment-free, mobile-based audio guiding platform for tourist guides. Developed under Marmara Technopark GO IDEA Program.',
    },
    brandDescShort: {
      tr: 'Turist rehberleri için donanımsız, mobil tabanlı sesli rehberlik platformu.',
      en: 'Equipment-free, mobile-based audio guiding platform for tourist guides.',
    },
    platform: { tr: 'Platform', en: 'Platform' },
    features: { tr: 'Özellikler', en: 'Features' },
    howItWorks: { tr: 'Nasıl Çalışır?', en: 'How It Works?' },
    mobileApp: { tr: 'Mobil Uygulama', en: 'Mobile App' },
    stats: { tr: 'İstatistikler', en: 'Statistics' },
    company: { tr: 'Şirket', en: 'Company' },
    aboutUs: { tr: 'Hakkımızda', en: 'About Us' },
    contactUs: { tr: 'İletişim', en: 'Contact' },
    vision: { tr: 'Vizyonumuz', en: 'Our Vision' },
    legal: { tr: 'Yasal', en: 'Legal' },
    terms: { tr: 'Kullanım Koşulları', en: 'Terms of Use' },
    privacy: { tr: 'Gizlilik Politikası', en: 'Privacy Policy' },
    kvkk: { tr: 'KVKK Aydınlatma', en: 'GDPR Notice' },
    copyright: { tr: '© 2026 Guidentry. Tüm hakları saklıdır.', en: '© 2026 Guidentry. All rights reserved.' },
  },

  // ─── INDEX PAGE ───
  index: {
    heroEyebrow: { tr: '📡 Mobil Tabanlı Rehberlik Platformu', en: '📡 Mobile-Based Guiding Platform' },
    heroTitle: {
      tr: 'Rehberliğin <br><span class="gradient-text">Geleceğine</span> <br>Hoş Geldiniz',
      en: 'Welcome to the <span class="gradient-text">Future</span> of Guiding',
    },
    heroSubtitle: {
      tr: 'Geleneksel telsiz cihazlarına elveda deyin. Kendi telefonunuzla sesli tur oluşturun, turistler QR ile anında bağlansın.',
      en: 'Say goodbye to traditional radio devices. Create audio tours with your phone, tourists connect instantly via QR.',
    },
    heroCta1: { tr: '🚀 Rehber Ol', en: '🚀 Become a Guide' },
    heroCta2: { tr: 'Nasıl Çalışır?', en: 'How It Works?' },
    heroScroll: { tr: 'Kaydır', en: 'Scroll' },

    // Floating badges
    float1Title: { tr: '12 Dinleyici', en: '12 Listeners' },
    float1Sub: { tr: 'Bağlantı Aktif', en: 'Connection Active' },
    float2Title: { tr: 'Çoklu Dil', en: 'Multi-lang' },
    float3Title: { tr: 'Doğrulandı', en: 'Verified' },
    float3Sub: { tr: 'TÜRSAB Onaylı', en: 'TURSAB Approved' },

    // Phone mockup
    phoneLive: { tr: '● CANLI YAYIN', en: '● LIVE STREAM' },
    phoneTitle: { tr: 'Efes Antik Kent Turu', en: 'Ephesus Ancient City Tour' },
    phoneBtn: { tr: '🎧 Dinlemeye Başla', en: '🎧 Start Listening' },
    phoneListeners: { tr: '👥 12 dinleyici bağlı', en: '👥 12 listeners connected' },

    // Stats
    statGuides: { tr: 'Kullanan Rehber', en: 'Active Guides' },
    statHours: { tr: 'Saat Tur', en: 'Tour Hours' },
    statTourists: { tr: 'Turist', en: 'Tourists' },

    // How it works
    stepsLabel: { tr: 'Adım Adım', en: 'Step by Step' },
    stepsTitle: {
      tr: 'Dijital Rehberliğe <span class="gradient-text">4 Adımda</span> Geçin',
      en: 'Go Digital in <span class="gradient-text">4 Steps</span>',
    },
    stepsSubtitle: {
      tr: 'Karmaşık kurulumlar, ek donanımlar yok. Rehber olarak başlamak çok kolay.',
      en: 'No complex setups, no extra hardware. Getting started as a guide is easy.',
    },
    step1Title: { tr: 'Kayıt Ol', en: 'Sign Up' },
    step1Text: { tr: 'Kişisel bilgilerinizle hızlıca hesabınızı oluşturun.', en: 'Quickly create your account with your personal info.' },
    step1Btn: { tr: 'Rehber Olarak Kayıt Ol', en: 'Register as Guide' },
    step2Title: { tr: 'Kimliğini Doğrula', en: 'Verify Identity' },
    step2Text: { tr: 'TÜRSAB veya TUREB belgenizi yükleyerek kimliğinizi doğrulayın.', en: 'Verify your identity by uploading your TURSAB or TUREB document.' },
    step2Btn: { tr: 'Rehberlik Kimliğini Yükle', en: 'Upload Guide ID' },
    step3Title: { tr: 'Tur Paketi Seç', en: 'Choose Tour Package' },
    step3Text: { tr: 'Size uygun olan tur paketini seçin ve avantajlardan yararlanın.', en: 'Choose the tour package that suits you and enjoy the benefits.' },
    step3Btn: { tr: 'Paketleri İncele', en: 'View Packages' },
    step4Title: { tr: 'Oda Oluştur', en: 'Create Room' },
    step4Text: { tr: 'Turlarınız için odalar oluşturun, dinleyiciler QR ile bağlansın.', en: 'Create rooms for your tours, listeners connect via QR.' },
    step4Btn: { tr: 'Tur İçin Oda Oluştur', en: 'Create Tour Room' },

    // Platform
    platformLabel: { tr: 'Neden Guidentry?', en: 'Why Guidentry?' },
    platformTitle: {
      tr: 'Rehberler İçin <br><span class="gradient-text">Donanımsız</span> Ses Teknolojisi',
      en: 'Equipment-Free <br><span class="gradient-text">Audio Technology</span> for Guides',
    },
    platformSubtitle: {
      tr: 'Rehberlik deneyimini yeniden tasarlayan Guidentry; rehberlerin ek bir donanıma ihtiyaç duymadan, yalnızca kendi mobil cihazlarıyla sesli anlatım yapabilmesini sağlar.',
      en: 'Guidentry redesigns the guiding experience; enabling guides to deliver audio narration using only their mobile devices, without any additional equipment.',
    },
    feat1Title: { tr: 'Mobil Odaklı', en: 'Mobile-First' },
    feat1Text: { tr: 'Ek donanım gerektirmez, telefonunuz yeter.', en: 'No extra hardware needed, your phone is enough.' },
    feat2Title: { tr: 'Anında Bağlantı', en: 'Instant Connection' },
    feat2Text: { tr: 'Turistler QR kod ile saniyeler içinde bağlanır.', en: 'Tourists connect in seconds via QR code.' },
    feat3Title: { tr: 'Güvenli Altyapı', en: 'Secure Infrastructure' },
    feat3Text: { tr: 'Uçtan uca şifreli, güvenli iletişim kanalı.', en: 'End-to-end encrypted, secure communication channel.' },

    // Features
    featuresLabel: { tr: 'Özellikler', en: 'Features' },
    featuresTitle: {
      tr: 'Rehberliği Dönüştüren <span class="gradient-text">Güçlü Özellikler</span>',
      en: 'Powerful Features That <span class="gradient-text">Transform Guiding</span>',
    },
    featuresSubtitle: {
      tr: 'Guidentry, modern turizm rehberliğinin ihtiyaç duyduğu tüm araçları sunar.',
      en: 'Guidentry offers all the tools modern tourism guiding needs.',
    },
    card1Title: { tr: 'Dijital ve Yazılım Tabanlı Çözüm', en: 'Digital & Software-Based Solution' },
    card1Text: {
      tr: 'Rehberlik hizmetlerinde kullanılan geleneksel telsiz sistemlerine alternatif olarak dijital ve yazılım tabanlı yöntemler geliştirmeyi hedefliyoruz.',
      en: 'We aim to develop digital and software-based methods as an alternative to traditional radio systems used in guiding services.',
    },
    card2Title: { tr: 'Modüler Yapı ve Çoklu Dil Desteği', en: 'Modular Structure & Multi-Language Support' },
    card2Text: {
      tr: 'Çoklu dil desteği ve içerik paylaşımına olanak tanıyan modüler bir platform geliştiriyoruz. Kullanıcıların ihtiyaçlarına göre özelleştirilebilen bir deneyim.',
      en: 'We are developing a modular platform that supports multiple languages and content sharing. An experience customizable to user needs.',
    },
    card3Title: { tr: 'Yeşil Dönüşüm ve Sürdürülebilirlik', en: 'Green Transformation & Sustainability' },
    card3Text: {
      tr: 'Mevcut internet altyapısını kullanarak ek donanım ihtiyacını ortadan kaldırmakta ve çevresel sürdürülebilirliğe katkı sağlamaktadır.',
      en: 'By using existing internet infrastructure, it eliminates the need for additional hardware and contributes to environmental sustainability.',
    },
    card4Title: { tr: 'Tur Programı Entegrasyonu', en: 'Tour Program Integration' },
    card4Text: {
      tr: 'Tur programlarının entegrasyonu, rehberlerin ve katılımcıların etkinliği artırarak daha iyi bir deneyim yaşamasını sağlar.',
      en: 'Tour program integration enhances the effectiveness of guides and participants for a better experience.',
    },

    // Vision
    visionTitle: { tr: '<span class="gradient-text">Vizyonumuz</span>', en: '<span class="gradient-text">Our Vision</span>' },
    visionText: {
      tr: 'Rehberliğin sınırlarını kaldırmak. Rehberlerin bilgi, anlatım ve yaratıcılığını teknolojiyle güçlendirerek; donanıma, mekâna ve kalabalıklara bağlı olmayan özgür bir rehberlik dünyası kurmak istiyoruz. Her rehberin sesinin daha fazla insana ulaşabildiği, her anlatımın dijitalde değer ürettiği ve rehberliğin bir meslekten öte küresel bir deneyime dönüştüğü bir geleceği hedefliyoruz.',
      en: 'Removing the boundaries of guiding. By empowering guides\' knowledge, narration, and creativity with technology; we want to build a free guiding world independent of hardware, location, and crowds. We envision a future where every guide\'s voice reaches more people, every narration creates digital value, and guiding transforms from a profession into a global experience.',
    },

    // App Showcase
    showcaseLabel: { tr: 'Mobil Uygulama', en: 'Mobile App' },
    showcaseTitle: {
      tr: '<span class="gradient-text">Mobil Uygulamamızı</span> Keşfedin',
      en: 'Discover Our <span class="gradient-text">Mobile App</span>',
    },
    showcaseSubtitle: {
      tr: 'Rehber ve dinleyici deneyimini uygulama ekranlarından keşfedin.',
      en: 'Explore the guide and listener experience through app screens.',
    },

    // Showcase — Phone 1: Tour Approval
    mockup1Label: { tr: 'Tur Onayı', en: 'Tour Approval' },
    mockup1Live: { tr: '● CANLI YAYIN', en: '● LIVE STREAM' },
    mockup1Title: { tr: 'Efes Antik Kent Turu', en: 'Ephesus Ancient City Tour' },
    mockup1Guide: { tr: '👤 Mehmet Yılmaz', en: '👤 Mehmet Yılmaz' },
    mockup1Meta: { tr: '⏱ ~2 saat • 📍 Efes, İzmir • 👥 12', en: '⏱ ~2 hrs • 📍 Ephesus, İzmir • 👥 12' },
    mockup1Btn: { tr: '🎧 Dinlemeye Başla', en: '🎧 Start Listening' },

    // Showcase — Phone 2: Listening
    mockup2Label: { tr: 'Dinleniyor', en: 'Listening' },
    mockup2Title: { tr: 'Efes Antik Kent Turu', en: 'Ephesus Ancient City Tour' },
    mockup2Guide: { tr: 'Rehber: Mehmet Yılmaz', en: 'Guide: Mehmet Yılmaz' },
    mockup2Status: { tr: '✓ Bağlantı Aktif', en: '✓ Connection Active' },
    mockup2Listeners: { tr: '👥 12 dinleyici', en: '👥 12 listeners' },
    mockup2Btn: { tr: 'Turdan Ayrıl', en: 'Leave Tour' },

    // Showcase — Phone 3: My Tours
    mockup3Label: { tr: 'Turlarım', en: 'My Tours' },
    mockup3Welcome: { tr: 'Hoş geldin, Mehmet!', en: 'Welcome, Mehmet!' },
    mockup3Sub: { tr: 'Turlarını yönet veya yeni tur oluştur', en: 'Manage your tours or create a new one' },
    mockup3Tour: { tr: 'Efes Antik Kent Turu', en: 'Ephesus Ancient City Tour' },
    mockup3Live: { tr: 'CANLI', en: 'LIVE' },
    mockup3NewTour: { tr: '+ Yeni Tur Oluştur', en: '+ Create New Tour' },
    mockup3Date: { tr: '4 Şubat 2026 • ~2 saat', en: 'Feb 4, 2026 • ~2 hrs' },

    // Showcase — Phone 4: Create Tour
    mockup4Label: { tr: 'Yeni Tur Oluştur', en: 'Create New Tour' },
    mockup4NameLabel: { tr: 'Tur Adı', en: 'Tour Name' },
    mockup4NamePlaceholder: { tr: 'Örn: Efes Antik Kent Turu', en: 'E.g: Ephesus Ancient City Tour' },
    mockup4DescLabel: { tr: 'Açıklama', en: 'Description' },
    mockup4DescPlaceholder: { tr: 'Tur hakkında kısa bilgi...', en: 'Brief info about the tour...' },
    mockup4LocLabel: { tr: 'Konum', en: 'Location' },
    mockup4LocPlaceholder: { tr: '📍 Selçuk, İzmir', en: '📍 Selçuk, İzmir' },
    mockup4Btn: { tr: '✓ Turu Oluştur', en: '✓ Create Tour' },

    // CTA
    ctaTitle: {
      tr: 'Dijital Rehberliğe <span class="gradient-text">Hemen Başlayın</span>',
      en: 'Start Digital Guiding <span class="gradient-text">Today</span>',
    },
    ctaText: {
      tr: 'Turist rehberleri için tasarlanmış, donanımsız, mobil tabanlı sesli anlatım platformuna bugün üye olun ve geleceğin rehberlik deneyimini sunmaya başlayın.',
      en: 'Join the equipment-free, mobile-based audio narration platform designed for tourist guides and start delivering the guiding experience of the future.',
    },
    ctaCta1: { tr: '🚀 Ücretsiz Başla', en: '🚀 Start Free' },
    ctaCta2: { tr: 'Bize Ulaşın', en: 'Contact Us' },
  },

  // ─── ABOUT PAGE ───
  about: {
    headerLabel: { tr: 'Biz Kimiz?', en: 'Who Are We?' },
    headerTitle: { tr: '<span class="gradient-text">Hakkımızda</span>', en: '<span class="gradient-text">About Us</span>' },
    headerSubtitle: {
      tr: 'Platform, rehberler için dijital içerik üretimi ve gelir çeşitlendirme imkânı sağlarken; turizm acentaları ve kamu kurumları için veri temelli karar destek altyapısı oluşturmaktadır.',
      en: 'The platform enables digital content creation and revenue diversification for guides; while establishing a data-driven decision support infrastructure for tourism agencies and public institutions.',
    },
    storyTitle: { tr: '<span class="gradient-text">Hikayemiz</span>', en: '<span class="gradient-text">Our Story</span>' },
    storyP1: {
      tr: 'Marmara Teknokent GO IDEA Girişimcilik Programı kapsamında geliştirilen bir Ar-Ge ve inovasyon projesi olarak ortaya çıkmış olan Guidentry, turizm sektöründe grup rehberliği faaliyetlerinin dijital dönüşümüne yönelik yazılım tabanlı çözümler geliştiren bir teknoloji girişimidir.',
      en: 'Emerging as an R&D and innovation project developed under the Marmara Technopark GO IDEA Entrepreneurship Program, Guidentry is a technology startup developing software-based solutions for the digital transformation of group guiding activities in the tourism sector.',
    },
    storyP2: {
      tr: 'Platform, Marmara Teknokent GOİdea Girişimcilik Programı kapsamında geliştirilen bir Ar-Ge ve inovasyon projesi olarak ortaya çıkmış olup; mobil cihazlar aracılığıyla çalışan ve ek donanım gerektirmeyen yapısıyla, internet tabanlı, çok katılımcılı ve eş zamanlı sesli iletişim altyapısı sunmaktadır.',
      en: 'The platform, developed as an R&D and innovation project under the Marmara Technopark GO IDEA Program; offers an internet-based, multi-participant, simultaneous audio communication infrastructure that works through mobile devices without requiring additional equipment.',
    },
    storyP3: {
      tr: 'Bu yaklaşım, geleneksel donanım temelli rehberlik sistemlerinin operasyonel ve mali sınırlamalarını ortadan kaldırmayı hedeflemektedir. Rehberlerin sınırlarını kaldırarak, her rehberin sesinin daha fazla insana ulaşabildiği bir geleceği inşa ediyoruz.',
      en: 'This approach aims to eliminate the operational and financial limitations of traditional hardware-based guiding systems. By removing the boundaries of guiding, we are building a future where every guide\'s voice can reach more people.',
    },
    valuesLabel: { tr: 'Değerlerimiz', en: 'Our Values' },
    valuesTitle: {
      tr: 'Bizi <span class="gradient-text">Farklı Kılan</span> Değerler',
      en: 'Values That <span class="gradient-text">Set Us Apart</span>',
    },
    val1Title: { tr: 'İnovasyon', en: 'Innovation' },
    val1Text: { tr: 'Geleneksel yöntemleri sorgulayarak, turizm sektörü için sürekli yenilikçi dijital çözümler geliştiriyoruz.', en: 'By questioning traditional methods, we continuously develop innovative digital solutions for the tourism sector.' },
    val2Title: { tr: 'Erişilebilirlik', en: 'Accessibility' },
    val2Text: { tr: 'Teknolojimizi herkesin kolayca kullanabileceği şekilde tasarlıyoruz. Karmaşıklığı basitliğe dönüştürüyoruz.', en: 'We design our technology so everyone can use it easily. We transform complexity into simplicity.' },
    val3Title: { tr: 'Sürdürülebilirlik', en: 'Sustainability' },
    val3Text: { tr: 'Donanım ihtiyacını ortadan kaldırarak çevresel ayak izini azaltıyor ve yeşil dönüşüme katkı sağlıyoruz.', en: 'By eliminating hardware needs, we reduce the environmental footprint and contribute to green transformation.' },
    val4Title: { tr: 'Güvenilirlik', en: 'Reliability' },
    val4Text: { tr: 'TÜRSAB ve TUREB onaylı rehberlerle çalışarak, kullanıcılarımıza güvenli ve kaliteli bir deneyim sunuyoruz.', en: 'Working with TURSAB and TUREB approved guides, we offer our users a safe and quality experience.' },
    ctaTitle: {
      tr: 'Hikayemizin Bir Parçası <span class="gradient-text">Olun</span>',
      en: 'Become Part of <span class="gradient-text">Our Story</span>',
    },
    ctaText: { tr: 'Dijital rehberlik devriminde yerinizi alın. Hemen rehber olarak kayıt olun.', en: 'Take your place in the digital guiding revolution. Register as a guide now.' },
    ctaCta1: { tr: 'Rehber Olarak Başla', en: 'Start as Guide' },
    ctaCta2: { tr: 'Bize Ulaşın', en: 'Contact Us' },
  },

  // ─── CONTACT PAGE ───
  contact: {
    headerLabel: { tr: 'İletişim', en: 'Contact' },
    headerTitle: {
      tr: 'Bizimle <span class="gradient-text">İletişime Geçin</span>',
      en: 'Get <span class="gradient-text">In Touch</span> With Us',
    },
    headerSubtitle: {
      tr: 'Guidentry, turistler ve profesyonel rehberler arasındaki sesli anlatım deneyimini dijitalleştiren yenilikçi bir platformdur.',
      en: 'Guidentry is an innovative platform that digitizes the audio narration experience between tourists and professional guides.',
    },
    phone: { tr: 'Telefon', en: 'Phone' },
    email: { tr: 'E-Posta', en: 'E-Mail' },
    address: { tr: 'Adres', en: 'Address' },
    formTitle: { tr: 'Mesaj Gönderin', en: 'Send a Message' },
    formSubtitle: { tr: 'Sorularınız ve önerileriniz için bize yazın.', en: 'Write to us for your questions and suggestions.' },
    labelName: { tr: 'Ad Soyad', en: 'Full Name' },
    placeholderName: { tr: 'Adınız ve soyadınız', en: 'Your full name' },
    labelEmail: { tr: 'E-posta', en: 'E-mail' },
    labelSubject: { tr: 'Konu', en: 'Subject' },
    placeholderSubject: { tr: 'Mesajınızın konusu', en: 'Subject of your message' },
    labelMessage: { tr: 'Mesaj', en: 'Message' },
    placeholderMessage: { tr: 'Mesajınızı buraya yazın...', en: 'Write your message here...' },
    submitBtn: { tr: 'Mesaj Gönder', en: 'Send Message' },
  },

  // ─── LOGIN PAGE ───
  login: {
    title: { tr: 'Admin Girişi', en: 'Admin Login' },
    subtitle: { tr: 'E-posta ve şifrenizle giriş yapın', en: 'Sign in with your email and password' },
    labelEmail: { tr: 'E-posta', en: 'E-mail' },
    labelPassword: { tr: 'Şifre', en: 'Password' },
    submitBtn: { tr: 'Giriş Yap', en: 'Sign In' },
    backHome: { tr: '← Anasayfaya Dön', en: '← Back to Home' },
  },

  // ─── REGISTER PAGE ───
  register: {
    title: { tr: 'Rehber Olarak Kayıt Ol', en: 'Register as Guide' },
    subtitle: { tr: 'Rehberlik bilgilerinizi girin ve dijital yolculuğunuza başlayın', en: 'Enter your guiding details and start your digital journey' },
    labelName: { tr: 'Ad Soyad', en: 'Full Name' },
    placeholderName: { tr: 'Adınız ve soyadınız', en: 'Your full name' },
    labelEmail: { tr: 'E-posta', en: 'E-mail' },
    labelPassword: { tr: 'Şifre', en: 'Password' },
    labelDocFront: { tr: 'TÜRSAB / TUREB Belgesi — Ön Yüz', en: 'TURSAB / TUREB Document — Front' },
    labelDocBack: { tr: 'TÜRSAB / TUREB Belgesi — Arka Yüz', en: 'TURSAB / TUREB Document — Back' },
    fileUpload: { tr: 'Belge Yükle', en: 'Upload Document' },
    submitBtn: { tr: 'Kayıt Ol', en: 'Sign Up' },
    hasAccount: { tr: 'Zaten hesabınız var mı?', en: 'Already have an account?' },
    loginLink: { tr: 'Giriş Yap', en: 'Sign In' },
  },
};

/* ─── Detect current page ─── */
function getCurrentPage() {
  const path = window.location.pathname;
  if (path.includes('about')) return 'about';
  if (path.includes('contact')) return 'contact';
  if (path.includes('login')) return 'login';
  if (path.includes('register')) return 'register';
  return 'index';
}

/* ─── Apply translations with data-i18n attributes ─── */
function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    if (value?.[lang]) {
      const attr = el.getAttribute('data-i18n-attr');
      if (attr === 'placeholder') {
        el.placeholder = value[lang];
      } else {
        el.innerHTML = value[lang];
      }
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang;
}

/* ─── Build the toggle button ─── */
function createLangToggle() {
  // Replace all .nav__lang divs with the new toggle
  document.querySelectorAll('.nav__lang').forEach((oldBtn) => {
    const toggle = document.createElement('div');
    toggle.className = 'lang-toggle';
    toggle.id = 'langToggle';
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('tabindex', '0');
    toggle.setAttribute('aria-label', 'Switch language');

    const savedLang = localStorage.getItem('guidentry-lang') || 'tr';
    const isEN = savedLang === 'en';

    toggle.innerHTML = `
      <div class="lang-toggle__track ${isEN ? 'lang-toggle__track--en' : ''}">
        <div class="lang-toggle__slider">
          <span class="lang-toggle__globe">🌐</span>
        </div>
        <span class="lang-toggle__label lang-toggle__label--tr ${!isEN ? 'lang-toggle__label--active' : ''}">TR</span>
        <span class="lang-toggle__label lang-toggle__label--en ${isEN ? 'lang-toggle__label--active' : ''}">EN</span>
      </div>
    `;

    oldBtn.replaceWith(toggle);
  });
}

/* ─── Handle toggle click ─── */
function handleToggle() {
  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('.lang-toggle');
    if (!toggle) return;

    const track = toggle.querySelector('.lang-toggle__track');
    const isCurrentlyEN = track.classList.contains('lang-toggle__track--en');
    const newLang = isCurrentlyEN ? 'tr' : 'en';

    // Toggle visual state
    track.classList.toggle('lang-toggle__track--en');

    // Toggle label active states
    const trLabel = toggle.querySelector('.lang-toggle__label--tr');
    const enLabel = toggle.querySelector('.lang-toggle__label--en');
    trLabel.classList.toggle('lang-toggle__label--active');
    enLabel.classList.toggle('lang-toggle__label--active');

    // Add animation class
    const slider = toggle.querySelector('.lang-toggle__slider');
    slider.classList.add('lang-toggle__slider--animating');
    setTimeout(() => slider.classList.remove('lang-toggle__slider--animating'), 400);

    // Save and apply
    localStorage.setItem('guidentry-lang', newLang);
    applyTranslations(newLang);

    // Page title
    updatePageTitle(newLang);
  });

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.closest('.lang-toggle')) {
      e.target.closest('.lang-toggle').click();
    }
  });
}

/* ─── Update page title ─── */
function updatePageTitle(lang) {
  const page = getCurrentPage();
  const titles = {
    index: {
      tr: 'Guidentry — Rehberler İçin Sesli Turizm Rehberliği Platformu',
      en: 'Guidentry — Audio Tourism Guiding Platform for Guides',
    },
    about: { tr: 'Hakkımızda — Guidentry', en: 'About Us — Guidentry' },
    contact: { tr: 'İletişim — Guidentry', en: 'Contact — Guidentry' },
    login: { tr: 'Oturum Aç — Guidentry', en: 'Sign In — Guidentry' },
    register: { tr: 'Rehber Olarak Kayıt Ol — Guidentry', en: 'Register as Guide — Guidentry' },
  };
  document.title = titles[page]?.[lang] || document.title;
}

/* ─── Init ─── */
export function initI18n() {
  createLangToggle();
  handleToggle();

  // Apply saved language
  const savedLang = localStorage.getItem('guidentry-lang') || 'tr';
  if (savedLang !== 'tr') {
    applyTranslations(savedLang);
    updatePageTitle(savedLang);
  }
}

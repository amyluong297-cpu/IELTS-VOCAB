# 🎯 IELTS Vocabulary App - Progressive Web App (PWA)

Ứng dụng học từ vựng IELTS toàn diện với 775 cụm từ, có thể cài đặt trên điện thoại như ứng dụng thường.

---

## 📦 Các file trong thư mục

```
SPEAKING/
├── ielts-vocab-app.html          ← Ứng dụng chính (755+ từ vựng)
├── manifest.json                 ← Thông tin app (PWA)
├── sw.js                        ← Service Worker (offline, cache)
├── PWA_INSTALLATION_GUIDE.md    ← Hướng dẫn cài đặt
└── README_PWA.md               ← File này
```

---

## 🚀 Quick Start

### **1. Chạy trực tiếp (File)**
```bash
# Mở file HTML trực tiếp trên trình duyệt
file:///C:/Users/ADMIN/Desktop/IELTS/MR KHOA/SPEAKING/ielts-vocab-app.html
```

### **2. Chạy trên Localhost (Recommend)**
```bash
# Terminal/CMD
cd "C:\Users\ADMIN\Desktop\IELTS\MR KHOA\SPEAKING"
python -m http.server 8000

# Mở: http://localhost:8000
```

### **3. Cài đặt như App**
**Sau khi mở trên trình duyệt:**
- **iPhone**: Share → Add to Home Screen
- **Android**: Menu ⋮ → Add to Home Screen
- **Windows/Mac**: Menu ⋮ → Install app

**Chi tiết xem**: `PWA_INSTALLATION_GUIDE.md`

---

## ✨ Tính năng

### 📚 **Kho từ vựng**
- ✅ 775 cụm từ IELTS (từ 23/06/2026)
- ✅ Phân loại 27 chủ đề
- ✅ Tìm kiếm toàn bộ
- ✅ Định nghĩa Anh-Việt
- ✅ Ví dụ câu
- ✅ Từ đồng nghĩa & trái nghĩa
- ✅ CEFR level (A1-C1)
- ✅ Emoji cho dễ nhớ

### 🎤 **Luyện Speaking**
- ✅ Speaking Part 1/2/3
- ✅ Gợi ý topic
- ✅ Tiếp tục ghi âm

### 📝 **Bài kiểm tra**
- ✅ Multiple choice
- ✅ Matching
- ✅ Fill in the blanks
- ✅ Điểm số tức thì

### 🎧 **Luyện Dictation**
- ✅ Text-to-speech
- ✅ Chép lại câu
- ✅ Feedback

### 📊 **Theo dõi tiến độ**
- ✅ Thống kê học tập
- ✅ Lưu trữ cục bộ
- ✅ Biểu đồ

### 📱 **PWA Features**
- ✅ **Offline**: Hoạt động mà không cần internet
- ✅ **Cài đặt**: Như app thường trên home screen
- ✅ **Tự động cập nhật**: Kiểm tra bản mới mỗi phút
- ✅ **Giao diện toàn màn hình**: Trên điện thoại
- ✅ **Cache thông minh**: Tải nhanh lần sau
- ✅ **Không cần App Store**: Chỉ cần trình duyệt

---

## 📋 Chủ đề (Topics)

```
Academic, Appearance, Beauty, Business, COVID-19, Crime, Daily Routines,
Economy, Education, Environment, Ethics, Family, Food, Friendship,
Globalisation, Health, Hobbies, Languages, Leisure, Media, Poverty,
Relationships, Society, Speaking, Technology, Work
```

---

## 💾 Dữ liệu & Lưu trữ

- **Dung lượng**: ~500KB
- **Lưu trữ**: Trình duyệt (localStorage)
- **Dữ liệu cá nhân**: Chỉ lưu trên thiết bị
- **Sao lưu**: Tự động

---

## 🔧 Technical Stack

| Công nghệ | Mục đích |
|-----------|---------|
| HTML5 | Cấu trúc |
| CSS3 | Giao diện (responsive) |
| JavaScript | Chức năng |
| Service Worker | Offline & cache |
| Web App Manifest | Cài đặt PWA |
| localStorage API | Lưu dữ liệu |
| Web Speech API | Text-to-speech |

---

## 📱 Yêu cầu hệ thống

| Platform | Yêu cầu |
|----------|---------|
| **iOS** | iOS 15+, Safari |
| **Android** | Android 5+, Chrome/Firefox |
| **Windows** | Windows 7+, Chrome/Edge |
| **macOS** | macOS 10.12+, Chrome/Safari |

---

## 🌐 Deploy lên Web Server

### **GitHub Pages (Free, Recommended)**

1. Tạo repository `ielts-vocab`
2. Upload 3 file:
   ```
   ielts-vocab-app.html
   manifest.json
   sw.js
   ```
3. Vào **Settings** → **Pages** → **Deploy from branch**
4. Truy cập: `https://username.github.io/ielts-vocab/`

### **Netlify (Free)**

1. Kéo folder vào https://app.netlify.com
2. Nhận link: `https://xxx.netlify.app`
3. Cài đặt PWA từ link

### **Vercel (Free)**

```bash
npm i -g vercel
cd "path/to/SPEAKING"
vercel
```

---

## 🎨 Tùy chỉnh

### **Thay đổi màu sắc**
Mở `ielts-vocab-app.html`, tìm:
```css
:root{
  --primary:#7C6FE0;
  --secondary:#F9A8D4;
  --accent:#FDE68A;
  ...
}
```

### **Thay đổi tiêu đề**
```html
<title>Your App Name</title>
```

### **Thêm từ vựng mới**
Tìm `const VOCAB=[` trong HTML, thêm:
```javascript
{id:776, phrase:"...", pos:"...", def:"...", def_vi:"...", ...}
```

---

## 🐛 Troubleshooting

| Vấn đề | Giải pháp |
|-------|---------|
| Nút cài đặt không hiện | Chạy trên localhost hoặc HTTPS |
| Hoạt động chậm | Xóa cache (F12 → Application → Clear) |
| Offline không work | Service Worker phải đăng ký (F12 → Console) |
| Data không lưu | Kiểm tra localStorage (F12 → Storage) |

---

## 📞 Hỗ trợ

Nếu có vấn đề, kiểm tra:
1. **Console** (F12 → Console) - có error không?
2. **Application tab** (F12 → Application) - Service Worker hoạt động?
3. **Network tab** (F12 → Network) - có request fail?

---

## 📄 License

Tự do sử dụng và chỉnh sửa cho mục đích cá nhân.

---

## ✍️ Created

- **App**: IELTS Vocabulary Learning
- **Vocabulary**: 775+ items (23/06/2026)
- **PWA Setup**: Complete
- **Mobile Ready**: ✅ Yes

**Happy Learning! 🚀**

# 📱 IELTS Vocabulary PWA - Hướng dẫn cài đặt

## ✨ Tính năng PWA

✅ **Cài đặt như ứng dụng thường**  
✅ **Hoạt động offline** (sau khi tải lần đầu)  
✅ **Giao diện toàn màn hình** trên điện thoại  
✅ **Cập nhật tự động** khi có phiên bản mới  
✅ **Không cần App Store** - chỉ cần trình duyệt

---

## 📲 Cách cài đặt

### **1️⃣ Trên iPhone/iPad (iOS 15+)**

```
1. Mở Safari
2. Vào: file:///C:/Users/ADMIN/Desktop/IELTS/MR KHOA/SPEAKING/ielts-vocab-app.html
   hoặc truy cập link trên web server
3. Nhấn nút "Chia sẻ" (Share icon)
4. Chọn "Add to Home Screen"
5. Đặt tên: "IELTS Vocab"
6. Nhấn "Add"
✅ Xong! App sẽ xuất hiện trên home screen
```

### **2️⃣ Trên Android (Chrome/Firefox)**

#### **Chrome (cách 1 - Dễ nhất)**
```
1. Mở Chrome
2. Vào link: file:///C:/Users/ADMIN/Desktop/IELTS/MR KHOA/SPEAKING/ielts-vocab-app.html
3. Nhấn menu ⋮ (ba dấu chấm)
4. Chọn "Add to Home screen" hoặc "Install app"
5. Xác nhận
✅ Xong!
```

#### **Chrome (cách 2 - Nếu không thấy nút)**
```
1. Vào address bar
2. Bạn sẽ thấy nút "+ Add to Home" phía bên phải
3. Nhấn nó
✅ Xong!
```

#### **Firefox**
```
1. Mở Firefox
2. Vào link
3. Nhấn menu (ba đường ngang)
4. Chọn "Add to Home screen"
✅ Xong!
```

### **3️⃣ Trên Windows/Mac (Dùng Chrome)**

```
1. Mở Chrome
2. Vào link
3. Nhấn menu ⋮
4. Chọn "Install IELTS Vocab"
5. Xác nhận
✅ App sẽ cài đặt như ứng dụng thường
```

---

## 🚀 Sau khi cài đặt

- **Mở ứng dụng**: Nhấn icon trên home screen
- **Hoạt động offline**: Có thể dùng khi không có internet (sau lần đầu)
- **Cập nhật**: Ứng dụng tự động kiểm tra cập nhật mỗi phút
- **Khi có phiên bản mới**: Sẽ hiển thị thông báo "Phiên bản mới có sẵn"

---

## 📋 Yêu cầu

| Yêu cầu | Chi tiết |
|---------|---------|
| **iOS** | Safari trên iOS 15+ |
| **Android** | Chrome/Firefox version mới |
| **Windows** | Chrome hoặc Edge |
| **macOS** | Chrome hoặc Edge |

---

## 🔧 Để chạy trên Web Server (Recommend)

Nếu bạn muốn truy cập từ bất kỳ đâu:

### **Option 1: GitHub Pages (Free)**
```bash
1. Tạo repository trên GitHub
2. Upload 3 file vào:
   - ielts-vocab-app.html
   - manifest.json
   - sw.js
3. Bật GitHub Pages trong Settings
4. Truy cập: https://username.github.io/repo-name/ielts-vocab-app.html
```

### **Option 2: Netlify (Free)**
```bash
1. Kéo 3 file vào netlify.com
2. Sẽ nhận được link công khai
3. Cài đặt PWA từ link đó
```

### **Option 3: Localhost với Python**
```bash
# Mở terminal/cmd trong folder:
cd "C:\Users\ADMIN\Desktop\IELTS\MR KHOA\SPEAKING"

# Python 3
python -m http.server 8000

# Hoặc Python 2
python -m SimpleHTTPServer 8000

# Vào: http://localhost:8000/ielts-vocab-app.html
```

---

## 📝 Các file cần thiết

✅ Bạn đã có:
- `ielts-vocab-app.html` - Ứng dụng chính
- `manifest.json` - Thông tin app
- `sw.js` - Service Worker (offline mode)

Đặt chúng cùng thư mục.

---

## 🐛 Troubleshooting

### **❌ Nút "Add to Home Screen" không xuất hiện**
- Thử với trình duyệt khác
- Chắc chắn HTTPS hoặc localhost (không file:// trên một số trình duyệt)
- Chờ tải hết trang

### **❌ App hoạt động chậm**
- Xóa cache: Settings → Apps → IELTS Vocab → Clear Cache
- Gỡ cài đặt và cài lại

### **❌ Không hoạt động offline**
- Kiểm tra Console: F12 → Console
- Service Worker phải đã được đăng ký
- Tải trang một lần khi có internet

---

## 💡 Mẹo

🔹 **Lưu dữ liệu học tập**: Ứng dụng lưu trữ cục bộ  
🔹 **Tắt notifications**: Nếu cập nhật quá thường  
🔹 **Dung lượng**: Chỉ ~500KB  
🔹 **Dữ liệu**: Chỉ sử dụng dữ liệu khi cập nhật

---

**Vui lòng ghi nhớ**: Để hoạt động tối ưu, hãy cài đặt trên web server thực, không phải file://.

Hỏi nếu có vấn đề! 🚀

// =========================================================================
// HOẠT ĐỘNG 1: "Hello JS Console" - Đối thoại với trình duyệt
// =========================================================================
function hoatDong1() {
    console.clear();
    console.log("=== HOẠT ĐỘNG 1: HELLO JS CONSOLE ===");
    
    // 1. Khai báo tên và tuổi
    let ten = prompt("Hoạt động 1 - Nhập tên của bạn:");
    let tuoiInput = prompt("Hoạt động 1 - Nhập tuổi của bạn:");
    let tuoi = parseInt(tuoiInput);
    
    console.log(`Xin chào ${ten}! Bạn năm nay ${tuoi} tuổi.`);
    
    // 2. Thử nghiệm các phép toán cơ bản
    let a = 15, b = 4;
    console.log(`Phép tính với a = ${a}, b = ${b}:`);
    console.log(`- Tổng (a + b) = ${a + b}`);
    console.log(`- Hiệu (a - b) = ${a - b}`);
    console.log(`- Tích (a * b) = ${a * b}`);
    console.log(`- Thương (a / b) = ${a / b}`);
    
    // 3. Vibe Coding Explainer: Giải thích tại sao '10' + 20 ra '1020'
    console.log("\n--- VIBE CODING EXPLAINER ---");
    let testKetQua = '10' + 20;
    console.log("Biểu thức: '10' + 20 =", testKetQua);
    console.log("Giải thích: Trong JavaScript, dấu cộng (+) vừa dùng để cộng số, vừa dùng để nối chuỗi.");
    console.log("Khi một toán hạng là chuỗi ('10'), JS sẽ tự động ép kiểu số 20 thành chuỗi '20' rồi ghép lại thành '1020'.");
    
    alert(`Hoạt động 1 hoàn tất! Xem kết quả chi tiết trong cửa sổ Console (F12).`);
}

// =========================================================================
// HOẠT ĐỘNG 2: "Logic Builder" - Phân loại học lực (Prompt & If-Else nâng cao)
// =========================================================================
function hoatDong2() {
    console.clear();
    console.log("=== HOẠT ĐỘNG 2: LOGIC BUILDER (XẾP LOẠI HỌC LỰC) ===");
    
    let diemInput = prompt("Hoạt động 2 - Nhập điểm số của bạn (từ 0 đến 10):");
    let diem = parseFloat(diemInput);
    
    if (isNaN(diem) || diem < 0 || diem > 10) {
        console.log("Điểm số không hợp lệ! Vui lòng nhập số từ 0 đến 10.");
        alert("Điểm số không hợp lệ! Vui lòng nhập từ 0 đến 10.");
        return;
    }
    
    let xepLoai = "";
    if (diem > 8) {
        xepLoai = "Giỏi 🌟";
    } else if (diem > 6.5) {
        xepLoai = "Khá 👍";
    } else if (diem >= 5) {
        xepLoai = "Trung bình 📘";
    } else {
        xepLoai = "Yếu (Cần cố gắng hơn) ⚠️";
    }
    
    let thongBao = `Điểm số của bạn: ${diem} -> Xếp loại: ${xepLoai}`;
    console.log(thongBao);
    alert(thongBao);
}

// =========================================================================
// HOẠT ĐỘNG 3: "AI Logic Explainer" - Mô phỏng và dịch luồng chạy chương trình
// =========================================================================
function hoatDong3() {
    console.clear();
    console.log("=== HOẠT ĐỘNG 3: AI LOGIC EXPLAINER ===");
    console.log("Đang phân tích đoạn mã kiểm tra tính hợp lệ của mật khẩu và vòng lặp...\n");

    // Đoạn mã mẫu giả định cho sinh viên phân tích luồng chạy
    let matKhauDung = "LaoHong2026";
    let nhapSai = true;
    let soLanThu = 0;
    
    console.log(`[Mô phỏng luồng chạy chương trình]:`);
    console.log(`- Mật khẩu hệ thống được thiết lập sẵn.`);
    
    // Giả lập quá trình chạy logic qua console để sinh viên dễ "dịch" sang ngôn ngữ tự nhiên
    while (soLanThu < 3 && nhapSai) {
        soLanThu++;
        console.log(`\n> Lần thử thứ ${soLanThu}:`);
        // Mô phỏng người dùng nhập
        let nhapVao = (soLanThu === 3) ? "LaoHong2026" : "SaiMatKhau" + soLanThu;
        console.log(`  - Người dùng nhập vào: "${nhapVao}"`);
        
        if (nhapVao === matKhauDung) {
            console.log(`  - Kết quả kiểm tra (if): Khớp nhau! Đăng nhập thành công.`);
            nhapSai = false;
        } else {
            console.log(`  - Kết quả kiểm tra (if): Sai mật khẩu. Vui lòng thử lại.`);
        }
    }

    console.log("\n--- TÓM TẮT DIỄN GIẢI (LUỒNG CHẠY) ---");
    console.log("1. Chương trình khởi tạo số lần thử bắt đầu từ 0.");
    console.log("2. Sử dụng vòng lặp để giới hạn số lần nhập sai tối đa 3 lần.");
    console.log("3. Mỗi lần lặp, hệ thống so sánh giá trị nhập vào với mật khẩu chuẩn.");
    console.log("4. Nếu đúng, dừng vòng lặp và thông báo thành công; nếu sai, tiếp tục cho đến hết lượt.");
    
    alert("Đã chạy xong Hoạt động 3! Hãy kiểm tra cửa sổ Console (F12) để xem chi tiết luồng diễn giải mã nguồn.");
}
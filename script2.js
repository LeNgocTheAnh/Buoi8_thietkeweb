// ==========================================
// BÀI 1: Chuyển đổi tiền tệ đơn giản
// ==========================================
function bai1() {
    console.log("--- BÀI 1: CHUYỂN ĐỔI TIỀN TỆ ---");
    let usdInput = prompt("Bài 1: Nhập số lượng USD:");
    let usd = parseFloat(usdInput);
    
    if (isNaN(usd) || usd < 0) {
        console.log("Vui lòng nhập số tiền USD hợp lệ!");
        return;
    }
    
    const RATE = 25000;
    let vnd = usd * RATE;
    
    console.log(`${usd} USD = ${vnd.toLocaleString('vi-VN')} VND`);
    alert(`${usd} USD = ${vnd.toLocaleString('vi-VN')} VND`);
}

// ==========================================
// BÀI 2: Kiểm tra số chẵn/lẻ
// ==========================================
function bai2() {
    console.log("--- BÀI 2: KIỂM TRA SỐ CHẴN / LẺ ---");
    let input = prompt("Bài 2: Nhập một số bất kỳ:");
    let num = parseInt(input);
    
    if (isNaN(num)) {
        console.log("Vui lòng nhập vào một số nguyên!");
        return;
    }
    
    if (num % 2 === 0) {
        console.log(`${num} là số CHẴN`);
        alert(`${num} là số CHẴN`);
    } else {
        console.log(`${num} là số LẺ`);
        alert(`${num} là số LẺ`);
    }
}

// ==========================================
// BÀI 3: Tính chỉ số BMI cơ bản
// ==========================================
function bai3() {
    console.log("--- BÀI 3: TÍNH CHỈ SỐ BMI ---");
    let height = parseFloat(prompt("Bài 3: Nhập chiều cao (mét) - Ví dụ: 1.75"));
    let weight = parseFloat(prompt("Bài 3: Nhập cân nặng (kg) - Ví dụ: 68"));
    
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        console.log("Chiều cao và cân nặng phải là số dương hợp lệ!");
        return;
    }
    
    let bmi = weight / (height * height);
    
    console.log(`Chiều cao: ${height}m | Cân nặng: ${weight}kg`);
    console.log(`Chỉ số BMI = ${bmi.toFixed(2)}`);
    alert(`Chỉ số BMI của bạn là: ${bmi.toFixed(2)}`);
}

// ==========================================
// BÀI 4: Logic Đăng nhập (Mô phỏng)
// ==========================================
function bai4() {
    console.log("--- BÀI 4: LOGIC ĐĂNG NHẬP ---");
    // Tạo 2 biến username và password cố định
    const USERNAME_FIXED = "admin";
    const PASSWORD_FIXED = "123456";
    
    let username = prompt("Bài 4: Nhập Username:");
    let password = prompt("Bài 4: Nhập Password:");
    
    if (username === USERNAME_FIXED && password === PASSWORD_FIXED) {
        console.log("Đăng nhập thành công");
        alert("Đăng nhập thành công");
    } else {
        console.log("Thông tin không chính xác");
        alert("Thông tin không chính xác");
    }
}

// ==========================================
// BÀI 5: Máy tính giảm giá (Discount Calculator)
// ==========================================
function bai5() {
    console.log("--- BÀI 5: MÁY TÍNH GIẢM GIÁ ---");
    let amount = parseFloat(prompt("Bài 5: Nhập số tiền hóa đơn (VNĐ):"));
    
    if (isNaN(amount) || amount < 0) {
        console.log("Số tiền hóa đơn không hợp lệ!");
        return;
    }
    
    let finalAmount = amount;
    if (amount > 500000) {
        finalAmount = amount * 0.9; // Giảm 10%
        console.log(`Hóa đơn: ${amount.toLocaleString('vi-VN')}đ (> 500.000đ) -> Đạt điều kiện giảm 10%`);
    } else {
        console.log(`Hóa đơn: ${amount.toLocaleString('vi-VN')}đ (<= 500.000đ) -> Không giảm giá`);
    }
    
    console.log(`Số tiền cuối cùng phải trả: ${finalAmount.toLocaleString('vi-VN')} VNĐ`);
    alert(`Số tiền cuối cùng phải trả: ${finalAmount.toLocaleString('vi-VN')} VNĐ`);
}

// ==========================================
// BÀI 6: Phân loại tam giác
// ==========================================
function bai6() {
    console.log("--- BÀI 6: PHÂN LOẠI TAM GIÁC ---");
    let a = parseFloat(prompt("Bài 6: Nhập cạnh a:"));
    let b = parseFloat(prompt("Bài 6: Nhập cạnh b:"));
    let c = parseFloat(prompt("Bài 6: Nhập cạnh c:"));
    
    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        console.log("Cạnh tam giác phải là số dương hợp lệ!");
        return;
    }
    
    // Kiểm tra điều kiện tạo thành 1 tam giác
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            console.log(`Độ dài (${a}, ${b}, ${c}) là TAM GIÁC ĐỀU.`);
            alert(`Độ dài 3 cạnh (${a}, ${b}, ${c}) là TAM GIÁC ĐỀU.`);
        } else {
            console.log(`Độ dài (${a}, ${b}, ${c}) là tam giác thường (KHÔNG PHẢI tam giác đều).`);
            alert(`Độ dài 3 cạnh (${a}, ${b}, ${c}) KHÔNG PHẢI tam giác đều.`);
        }
    } else {
        console.log(`3 cạnh (${a}, ${b}, ${c}) KHÔNG THỂ tạo thành tam giác!`);
        alert(`3 cạnh (${a}, ${b}, ${c}) KHÔNG THỂ tạo thành tam giác!`);
    }
}
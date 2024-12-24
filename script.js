// ฟังก์ชันที่แสดงข้อมูลสมาชิกทีม
function showTeamMemberInfo(name, position) {
  // แสดงข้อมูลใน alert
  alert(`Name: ${name}\nPosition: ${position}`);
}

// ฟังก์ชันที่นำทางไปยังหน้าอื่น
function redirectToTeamMemberPage(url) {
  window.location.href = url;
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // ป้องกันการส่งฟอร์มจริง
  document.getElementById('responseMessage').style.display = 'block';
});
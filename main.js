// === 100 SOAL MUDAH ===
const quizData = [
  {q:"2 + 3 = ?", o:["4","5","6","7"], a:1},
  {q:"Ibu kota Indonesia?", o:["Jakarta","Surabaya","Bandung","Medan"], a:0},
  {q:"5 × 4 = ?", o:["18","20","22","24"], a:1},
  {q:"Warna darah?", o:["Merah","Biru","Hijau","Kuning"], a:0},
  {q:"Planet Bumi bentuknya?", o:["Datar","Bulat","Segitiga","Kotak"], a:1},
  {q:"Gas yang dihirup?", o:["Oksigen","Karbon","Hidrogen","Nitrogen"], a:0},
  {q:"10 - 4 = ?", o:["5","6","7","8"], a:1},
  {q:"Ibu kota Jawa Barat?", o:["Bandung","Jakarta","Semarang","Surabaya"], a:0},
  {q:"3 × 7 = ?", o:["20","21","22","23"], a:1},
  {q:"Hewan berkaki 4?", o:["Ayam","Bebek","Kucing","Burung"], a:2},
  {q:"8 + 9 = ?", o:["16","17","18","19"], a:1},
  {q:"Buah berwarna merah?", o:["Pisang","Apel","Pepaya","Nanas"], a:1},
  {q:"12 ÷ 3 = ?", o:["2","3","4","5"], a:2},
  {q:"Matahari terbit dari?", o:["Timur","Barat","Utara","Selatan"], a:0},
  {q:"4 × 6 = ?", o:["22","24","26","28"], a:1},
  {q:"Minuman sehat?", o:["Soda","Teh manis","Air putih","Kopi"], a:2},
  {q:"15 - 7 = ?", o:["7","8","9","10"], a:1},
  {q:"Ibu kota Jawa Tengah?", o:["Yogyakarta","Semarang","Surabaya","Malang"], a:1},
  {q:"2 × 9 = ?", o:["16","18","20","22"], a:1},
  {q:"Sayuran hijau?", o:["Wortel","Bayam","Tomat","Kentang"], a:1},
  {q:"7 + 6 = ?", o:["12","13","14","15"], a:1},
  {q:"Alat dengar?", o:["Mata","Telinga","Hidung","Mulut"], a:1},
  {q:"18 ÷ 2 = ?", o:["8","9","10","11"], a:1},
  {q:"Benda langit siang?", o:["Bulan","Matahari","Bintang","Awan"], a:1},
  {q:"5 × 5 = ?", o:["20","25","30","35"], a:1},
  {q:"Transportasi darat?", o:["Pesawat","Perahu","Mobil","Kapal"], a:2},
  {q:"11 + 4 = ?", o:["14","15","16","17"], a:1},
  {q:"Buah berwarna kuning?", o:["Semangka","Jeruk","Pisang","Anggur"], a:2},
  {q:"14 ÷ 2 = ?", o:["6","7","8","9"], a:1},
  {q:"Alat lihat?", o:["Telinga","Mata","Hidung","Kaki"], a:1},
  {q:"6 × 3 = ?", o:["16","18","20","22"], a:1},
  {q:"Hewan peliharaan?", o:["Singa","Harimau","Kucing","Serigala"], a:2},
  {q:"9 + 8 = ?", o:["16","17","18","19"], a:1},
  {q:"Ibu kota Sumatera Utara?", o:["Medan","Palembang","Padang","Pekanbaru"], a:0},
  {q:"20 ÷ 4 = ?", o:["4","5","6","7"], a:1},
  {q:"Benda langit malam?", o:["Matahari","Awan","Bulan","Pelangi"], a:2},
  {q:"7 × 2 = ?", o:["12","14","16","18"], a:1},
  {q:"Minuman dari susu?", o:["Jus","Teh","Susu","Kopi"], a:2},
  {q:"13 - 5 = ?", o:["7","8","9","10"], a:1},
  {q:"Alat jalan?", o:["Tangan","Kaki","Mata","Mulut"], a:1},
  {q:"4 × 8 = ?", o:["30","32","34","36"], a:1},
  {q:"Buah berwarna oranye?", o:["Apel","Pisang","Jeruk","Anggur"], a:2},
  {q:"16 ÷ 4 = ?", o:["3","4","5","6"], a:1},
  {q:"Ibu kota DKI Jakarta?", o:["Jakarta","Bandung","Surabaya","Medan"], a:0},
  {q:"9 × 2 = ?", o:["16","18","20","22"], a:1},
  {q:"Sayuran akar?", o:["Bayam","Wortel","Kangkung","Sawi"], a:1},
  {q:"10 + 10 = ?", o:["18","19","20","21"], a:2},
  {q:"Alat bicara?", o:["Mata","Telinga","Mulut","Hidung"], a:2},
  {q:"15 ÷ 3 = ?", o:["4","5","6","7"], a:1},
  {q:"Hewan bersayap?", o:["Kucing","Anjing","Ayam","Ikan"], a:2},
  {q:"3 × 9 = ?", o:["25","27","29","31"], a:1},
  {q:"Minuman hangat?", o:["Es teh","Kopi","Air es","Jus"], a:1},
  {q:"12 + 5 = ?", o:["16","17","18","19"], a:1},
  {q:"Ibu kota Bali?", o:["Denpasar","Makassar","Manado","Pontianak"], a:0},
  {q:"18 ÷ 3 = ?", o:["5","6","7","8"], a:1},
  {q:"Benda terbang?", o:["Mobil","Sepeda","Pesawat","Kapal"], a:2},
  {q:"6 × 4 = ?", o:["22","24","26","28"], a:1},
  {q:"Buah berwarna hijau?", o:["Stroberi","Pisang","Semangka","Apel"], a:2},
  {q:"14 - 6 = ?", o:["7","8","9","10"], a:1},
  {q:"Alat cium?", o:["Mata","Telinga","Hidung","Mulut"], a:2},
  {q:"5 × 6 = ?", o:["28","30","32","34"], a:1},
  {q:"Transportasi air?", o:["Mobil","Motor","Perahu","Sepeda"], a:2},
  {q:"11 + 6 = ?", o:["16","17","18","19"], a:1},
  {q:"Ibu kota Jawa Timur?", o:["Surabaya","Malang","Semarang","Yogyakarta"], a:0},
  {q:"20 ÷ 5 = ?", o:["3","4","5","6"], a:1},
  {q:"Hewan melompat?", o:["Kucing","Anjing","Katak","Ikan"], a:2},
  {q:"7 × 3 = ?", o:["20","21","22","23"], a:1},
  {q:"Minuman dingin?", o:["Kopi","Teh panas","Es jeruk","Susu hangat"], a:2},
  {q:"13 + 4 = ?", o:["16","17","18","19"], a:1},
  {q:"Alat raba?", o:["Mata","Kulit","Telinga","Hidung"], a:1},
  {q:"4 × 7 = ?", o:["26","28","30","32"], a:1},
  {q:"Buah berbiji banyak?", o:["Pisang","Apel","Semangka","Jeruk"], a:2},
  {q:"16 ÷ 2 = ?", o:["7","8","9","10"], a:1},
  {q:"Ibu kota Kalimantan?", o:["Pontianak","Banjarmasin","Samarinda","Palangkaraya"], a:3},
  {q:"8 × 2 = ?", o:["14","16","18","20"], a:1},
  {q:"Sayuran daun?", o:["Wortel","Kentang","Bayam","Bawang"], a:2},
  {q:"15 + 3 = ?", o:["17","18","19","20"], a:1},
  {q:"Alat gigit?", o:["Mata","Telinga","Gigi","Hidung"], a:2},
  {q:"9 × 3 = ?", o:["25","27","29","31"], a:1},
  {q:"Minuman tradisional?", o:["Soda","Teh botol","Jamur","Wedang jahe"], a:3},
  {q:"12 - 3 = ?", o:["8","9","10","11"], a:1},
  {q:"Ibu kota Sulawesi?", o:["Makassar","Manado","Palu","Kendari"], a:2},
  {q:"18 ÷ 6 = ?", o:["2","3","4","5"], a:1},
  {q:"Hewan berenang?", o:["Kucing","Anjing","Ikan","Burung"], a:2},
  {q:"5 × 7 = ?", o:["33","35","37","39"], a:1},
  {q:"Buah tropis?", o:["Apel","Anggur","Mangga","Stroberi"], a:2},
  {q:"14 + 3 = ?", o:["16","17","18","19"], a:1},
  {q:"Alat dengar musik?", o:["Mata","Telinga","Hidung","Mulut"], a:1},
  {q:"6 × 5 = ?", o:["28","30","32","34"], a:1},
  {q:"Minuman sehat alami?", o:["Soda","Teh manis","Air kelapa","Kopi"], a:2},
  {q:"17 - 8 = ?", o:["8","9","10","11"], a:1},
  {q:"Ibu kota Papua?", o:["Jayapura","Manokwari","Merauke","Timika"], a:0},
  {q:"20 ÷ 2 = ?", o:["8","9","10","11"], a:2},
  {q:"Hewan nokturnal?", o:["Ayam","Kucing","Burung","Sapi"], a:1},
  {q:"4 × 9 = ?", o:["34","36","38","40"], a:1},
  {q:"Buah berair?", o:["Pisang","Apel","Semangka","Roti"], a:2},
  {q:"11 + 8 = ?", o:["18","19","20","21"], a:1},
  {q:"Alat lihat jauh?", o:["Kaca mata","Telinga","Hidung","Mulut"], a:0},
  {q:"7 × 4 = ?", o:["26","28","30","32"], a:1},
  {q:"Minuman pagi?", o:["Soda","Kopi","Air es","Jus malam"], a:1},
  {q:"13 + 6 = ?", o:["18","19","20","21"], a:1},
  {q:"Ibu kota NTT?", o:["Kupang","Ende","Maumere","Labuan Bajo"], a:0},
  {q:"16 ÷ 8 = ?", o:["1","2","3","4"], a:1},
  {q:"Hewan berkaki 2?", o:["Kucing","Anjing","Ayam","Ikan"], a:2},
  {q:"3 × 8 = ?", o:["22","24","26","28"], a:1},
  {q:"Buah musiman?", o:["Pisang","Mangga","Apel","Jeruk"], a:1},
  {q:"15 - 6 = ?", o:["8","9","10","11"], a:1},
  {q:"Alat tulis?", o:["Pensil","Sepatu","Topi","Sendok"], a:0},
  {q:"9 × 4 = ?", o:["34","36","38","40"], a:1},
  {q:"Minuman anak-anak?", o:["Kopi","Teh pahit","Susu","Soda"], a:2},
  {q:"12 + 7 = ?", o:["18","19","20","21"], a:1},
  {q:"Ibu kota Maluku?", o:["Ambon","Ternate","Namlea","Masohi"], a:0},
  {q:"18 ÷ 9 = ?", o:["1","2","3","4"], a:1},
  {q:"Hewan darat?", o:["Ikan","Lumba-lumba","Kuda","Paus"], a:2},
  {q:"6 × 6 = ?", o:["34","36","38","40"], a:1},
  {q:"Buah lokal Indonesia?", o:["Apel","Anggur","Rambutan","Stroberi"], a:2}
];

// === STORAGE KEYS ===
const USER_KEY = 'kuisjajan_user';
const POINTS_KEY = 'kuisjajan_points';
const STREAK_KEY = 'kuisjajan_streak';
const LAST_LOGIN_KEY = 'kuisjajan_last_login';
const LAST_QUIZ_KEY = 'kuisjajan_last_quiz';

[USER_KEY, POINTS_KEY].forEach(k => {
  if (!localStorage.getItem(k)) localStorage.setItem(k, '0');
});
if (!localStorage.getItem(STREAK_KEY)) localStorage.setItem(STREAK_KEY, '0');
if (!localStorage.getItem(LAST_LOGIN_KEY)) localStorage.setItem(LAST_LOGIN_KEY, '0');
if (!localStorage.getItem(LAST_QUIZ_KEY)) localStorage.setItem(LAST_QUIZ_KEY, '0');

// === CEK STREAK ===
function checkStreak() {
  const today = new Date().toDateString();
  const lastLogin = localStorage.getItem(LAST_LOGIN_KEY);
  if (lastLogin !== today) {
    const lastDate = new Date(lastLogin);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (lastLogin === '0' || lastDate.toDateString() === yesterday.toDateString()) {
      let streak = parseInt(localStorage.getItem(STREAK_KEY)) || 0;
      streak++;
      localStorage.setItem(STREAK_KEY, streak.toString());
      if ([40,50,60,100].includes(streak)) {
        let points = parseInt(localStorage.getItem(POINTS_KEY)) || 0;
        points += 10;
        localStorage.setItem(POINTS_KEY, points.toString());
        alert(`🎉 Selamat! Streak ${streak} hari!\n+10 poin bonus!`);
      }
    } else {
      localStorage.setItem(STREAK_KEY, '1');
    }
    localStorage.setItem(LAST_LOGIN_KEY, today);
  }
}

// === LOGIN ===
document.getElementById('login-btn').addEventListener('click', () => {
  const name = document.getElementById('username').value.trim();
  if (name) {
    localStorage.setItem(USER_KEY, name);
    initDashboard(name);
  } else alert('Masukkan nama dulu ya!');
});

window.addEventListener('load', () => {
  const savedUser = localStorage.getItem(USER_KEY);
  if (savedUser && savedUser !== '0') {
    initDashboard(savedUser);
    checkStreak();
  }
});

function initDashboard(name) {
  document.getElementById('user-display').textContent = name;
  document.getElementById('login-page').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
  updateProfile();
}

// === PROFIL ===
function showProfile() {
  hideAllPages();
  updateProfile();
  document.getElementById('profile-page').style.display = 'block';
}

function updateProfile() {
  const name = localStorage.getItem(USER_KEY) || '-';
  const points = localStorage.getItem(POINTS_KEY) || '0';
  const streak = localStorage.getItem(STREAK_KEY) || '0';
  const lastQuiz = localStorage.getItem(LAST_QUIZ_KEY);
  
  document.getElementById('prof-name').textContent = name;
  document.getElementById('prof-points').textContent = points;
  document.getElementById('prof-streak').textContent = streak;
  
  if (lastQuiz === '0') {
    document.getElementById('prof-last-quiz').textContent = 'Belum pernah';
  } else {
    document.getElementById('prof-last-quiz').textContent = new Date(parseInt(lastQuiz)).toLocaleString('id-ID');
  }
  
  const reward = (parseInt(streak) >= 30) ? 'Rp2.000 per 100 poin' : 'Rp1.000 per 100 poin';
  document.getElementById('prof-reward').textContent = reward;

  // Nonaktifkan tombol jika <500 poin
  const claimBtn = document.getElementById('claim-btn');
  const pts = parseInt(points) || 0;
  if (claimBtn) {
    claimBtn.disabled = pts < 500;
  }
}

// === NAVIGASI ===
function showRules() { hideAllPages(); document.getElementById('rules-page').style.display = 'block'; }
function showAbout() { hideAllPages(); document.getElementById('about-page').style.display = 'block'; }
function hideAllPages() {
  clearInterval(window.quizTimer);
  ['rules-page','about-page','profile-page','quiz-page'].forEach(id => 
    document.getElementById(id).style.display = 'none'
  );
}

// === QUIZ ===
function showQuiz() {
  const lastQuiz = parseInt(localStorage.getItem(LAST_QUIZ_KEY)) || 0;
  const now = Date.now();
  const twoDays = 48 * 60 * 60 * 1000;
  if (now - lastQuiz < twoDays) {
    const nextTime = new Date(lastQuiz + twoDays);
    alert(`⏳ Kamu harus menunggu sampai:\n${nextTime.toLocaleString('id-ID')}\n\nMain lagi nanti ya!`);
    return;
  }
  hideAllPages();
  document.getElementById('quiz-page').style.display = 'block';
  const shuffled = [...quizData].sort(() => 0.5 - Math.random());
  window.currentQuiz = shuffled.slice(0, 5);
  window.currentScore = 0;
  window.questionIndex = 0;
  loadQuestion();
}

function loadQuestion() {
  clearInterval(window.quizTimer);
  if (window.questionIndex >= window.currentQuiz.length) {
    endQuiz();
    return;
  }
  const q = window.currentQuiz[window.questionIndex];
  document.getElementById('question').textContent = q.q;
  const opts = document.getElementById('options');
  opts.innerHTML = '';
  let timeLeft = 10;
  document.getElementById('timer').textContent = `Waktu: ${timeLeft} detik`;
  q.o.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.onclick = () => handleAnswer(idx === q.a);
    opts.appendChild(btn);
  });
  window.quizTimer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = `Waktu: ${timeLeft} detik`;
    if (timeLeft <= 0) {
      clearInterval(window.quizTimer);
      handleAnswer(false);
    }
  }, 1000);
}

function handleAnswer(isCorrect) {
  clearInterval(window.quizTimer);
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => btn.disabled = true);
  if (isCorrect) {
    window.currentScore += 20;
    setTimeout(() => alert("✅ Benar! +20 poin!"), 300);
  } else {
    setTimeout(() => alert("❌ Salah! Tetap semangat!"), 300);
  }
  window.questionIndex++;
  setTimeout(loadQuestion, 1800);
}

function endQuiz() {
  let totalPoints = parseInt(localStorage.getItem(POINTS_KEY)) || 0;
  totalPoints += window.currentScore;
  localStorage.setItem(POINTS_KEY, totalPoints.toString());
  localStorage.setItem(LAST_QUIZ_KEY, Date.now().toString());
  const streak = parseInt(localStorage.getItem(STREAK_KEY)) || 0;
  const rate = streak >= 30 ? 2000 : 1000;
  const reward = Math.floor(window.currentScore / 100) * rate;
  alert(`🎯 Kuis selesai!\nSkor sesi ini: ${window.currentScore} poin\n\nEstimasi hadiah: Rp${reward.toLocaleString('id-ID')}\n\nKlik 'Profil' → 'Ajukan Penarikan' untuk klaim!`);
  updateProfile();
  hideAllPages();
}

// === PENARIKAN ===
function sendWithdrawalRequest() {
  const pointsBefore = parseInt(localStorage.getItem(POINTS_KEY)) || 0;
  if (pointsBefore < 500) {
    alert("⚠️ Minimal penarikan: 500 poin (Rp10.000).");
    return;
  }

  const pointsToRedeem = 500;
  const pointsAfter = pointsBefore - pointsToRedeem;
  localStorage.setItem(POINTS_KEY, pointsAfter.toString());
  updateProfile();

  const name = localStorage.getItem(USER_KEY) || 'Pemain';
  const streak = localStorage.getItem(STREAK_KEY) || '0';
  const lastQuiz = localStorage.getItem(LAST_QUIZ_KEY);
  const lastQuizStr = lastQuiz === '0' ? 'Belum pernah' : new Date(parseInt(lastQuiz)).toLocaleString('id-ID');

  let message = `Halo CEO! Saya mengajukan pencairan uang jajan.\n\n`;
  message += `• Nama: ${name}\n`;
  message += `• Poin Sebelum Reset: ${pointsBefore}\n`;
  message += `• Poin Dicairkan: ${pointsToRedeem} (Rp10.000)\n`;
  message += `• Sisa Poin: ${pointsAfter}\n`;
  message += `• Streak Login: ${streak} hari\n`;
  message += `• Terakhir Main: ${lastQuizStr}\n\n`;
  message += `Saya sudah reset poin sesuai aturan.\nMohon proses transfernya. Terima kasih! 🙏`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/6285339289828?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}

// Task Execution Functions

function checkPassword() {
    const input = document.getElementById('passwordInput');
    const errorMsg = document.getElementById('errorMsg');
    
    if (!input) return;
    
    const val = input.value.trim().toLowerCase();
    if (val === 'shembdi') {
        window.location.href = 'page2.html';
    } else {
        if (errorMsg) errorMsg.style.display = 'block';
    }
}

// Page 2 Task: Tap late night bulb to unlock next page
function taskLateNight() {
    alert("🌙  Next chapter unlocked!");
    window.location.href = 'page3.html';
}

// Page 3 Task: Direct transition (Biryani ordering removed)
function taskNextFromTerrace() {
    window.location.href = 'page4.html';
}

// Page 4 Task: Press Bleh button 3 times
let blehClicks = 0;
function taskBleh() {
    blehClicks++;
    const countSpan = document.getElementById('blehCount');
    if (countSpan) countSpan.innerText = blehClicks;
    
    if (blehClicks >= 3) {
        alert("😜 Maximum Bleh Reached! Unlocking next memory...");
        window.location.href = 'page5.html';
    }
}

// Page 5 Task: Agree to Safe Zone
function taskSafeZone() {
    alert("🧸 Protection Shield Enabled! No teddy bears allowed!");
    window.location.href = 'page6.html';
}

// Page 6 Task: Send Virtual Tulip
function taskSendTulip() {
    alert("🌷 Virtual Tulip Sent! Unlocking Chapter 06...");
    window.location.href = 'page7.html';
}

// Page 7 Task: Rate Friendship (10/10 Stars)
function taskRate() {
    alert("⭐ 10/10 Friendship Level Confirmed!");
    window.location.href = 'page8.html';
}

// Page 8 Celebration
function celebrate() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 160,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#c084fc', '#f472b6', '#38bdf8', '#fbbf24']
        });
    } else {
        alert("🎉 Happy Friendship Day! 🎉");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('passwordInput');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
    }
});
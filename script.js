// 计算2026年元旦已过时间（北京时间）
function countdown() {
    // 创建当前时间（北京时间）
    const now = new Date();
    const beijingTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
    
    // 2026年元旦时间（北京时间）
    const newYear = new Date('2026-01-01T00:00:00+08:00');
    
    // 计算已过时间（毫秒）
    const diff = beijingTime - newYear;
    
    // 计算天、时、分、秒
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // 更新DOM
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// 初始化倒计时
countdown();
setInterval(countdown, 1000);

// 烟花效果增强
function createFirework() {
    const firework = document.createElement('div');
    firework.className = 'firework';
    
    // 随机位置
    firework.style.left = Math.random() * 100 + '%';
    firework.style.top = Math.random() * 50 + '%';
    
    // 随机颜色
    const colors = ['#ff4d4d', '#4d79ff', '#ff66cc', '#4dff4d', '#ffcc00'];
    firework.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    // 随机大小
    const size = Math.random() * 15 + 5;
    firework.style.width = size + 'px';
    firework.style.height = size + 'px';
    
    // 随机动画延迟和持续时间
    firework.style.animationDelay = Math.random() * 2 + 's';
    firework.style.animationDuration = Math.random() * 2 + 2 + 's';
    
    document.querySelector('.decorations').appendChild(firework);
    
    // 动画结束后移除
    setTimeout(() => {
        firework.remove();
    }, 4000);
}

// 定时创建烟花
setInterval(createFirework, 1000);

// 雪花效果
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = '❄';
    
    // 随机位置
    snowflake.style.left = Math.random() * 100 + '%';
    
    // 随机大小
    const size = Math.random() * 20 + 10;
    snowflake.style.fontSize = size + 'px';
    
    // 随机动画延迟和持续时间
    snowflake.style.animationDelay = Math.random() * 5 + 's';
    snowflake.style.animationDuration = Math.random() * 10 + 10 + 's';
    
    // 随机不透明度
    snowflake.style.opacity = Math.random() * 0.8 + 0.2;
    
    document.getElementById('snowflakes').appendChild(snowflake);
    
    // 动画结束后移除
    setTimeout(() => {
        snowflake.remove();
    }, 20000);
}

// 创建多个雪花
for (let i = 0; i < 50; i++) {
    setTimeout(createSnowflake, i * 200);
}

// 持续创建雪花
setInterval(createSnowflake, 300);

// 愿望卡片交互
const wishCards = document.querySelectorAll('.wish-card');
wishCards.forEach(card => {
    card.addEventListener('click', () => {
        // 添加点击效果
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.style.transform = 'translateY(-10px)';
        }, 100);
        
        // 随机更换背景色
        const colors = ['#ff4d4d', '#4d79ff', '#ff66cc', '#4dff4d', '#ffcc00'];
        card.style.background = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.9)`;
    });
});

// 页面加载动画
window.addEventListener('load', () => {
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'opacity 1s ease, transform 1s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});
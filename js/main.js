// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 检查Chart.js是否正确加载
    if (typeof Chart === 'undefined') {
        alert('图表库加载失败，请刷新页面或检查网络连接');
        return;
    }
    
    // 检查数据是否存在
    if (typeof heroData === 'undefined' || !Array.isArray(heroData) || heroData.length === 0) {
        return;
    }
    
    if (typeof playerData === 'undefined' || !Array.isArray(playerData) || playerData.length === 0) {
        console.error('玩家数据不存在或为空');
    }
    
    if (typeof teamData === 'undefined' || !Array.isArray(teamData) || teamData.length === 0) {
        console.error('战队数据不存在或为空');
    }
    
    // 初始化英雄排行榜
    initHeroRank();
    
    // 初始化玩家排行榜
    initPlayerRank();
    
    // 初始化战队排行榜
    initTeamRank();
    
    // 添加英雄筛选功能
    initHeroFilter();
    
    // 添加玩家服务器筛选功能
    initPlayerFilter();
    
    // 初始化数据报表
    initDashboards();
});

// 初始化数据报表
function initDashboards() {
    renderWinRateChart();
    renderPickRateChart();
    renderRoleDistributionChart();
    renderPopularityChart();
}

// 渲染英雄胜率分布图表
function renderWinRateChart() {
    const chartContainer = document.getElementById('win-rate-chart');
    if (!chartContainer) {
        return;
    }
    
    try {
        const ctx = chartContainer.getContext('2d');
        if (!ctx) {
            return;
        }
        
        // 按胜率范围统计英雄数量
        const winRateRanges = {
            '45% 以下': 0,
            '45-48%': 0,
            '48-50%': 0,
            '50-52%': 0,
            '52% 以上': 0
        };
        
        heroData.forEach(hero => {
            if (hero.winRate < 45) {
                winRateRanges['45% 以下']++;
            } else if (hero.winRate < 48) {
                winRateRanges['45-48%']++;
            } else if (hero.winRate < 50) {
                winRateRanges['48-50%']++;
            } else if (hero.winRate < 52) {
                winRateRanges['50-52%']++;
            } else {
                winRateRanges['52% 以上']++;
            }
        });
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(winRateRanges),
                datasets: [{
                    label: '英雄数量',
                    data: Object.values(winRateRanges),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(255, 205, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(54, 162, 235, 0.7)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: '英雄胜率分布'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            precision: 0
                        }
                    }
                }
            }
        });
    } catch (error) {
        // 错误处理
    }
}

// 渲染出场率分析图表
function renderPickRateChart() {
    const chartContainer = document.getElementById('pick-rate-chart');
    if (!chartContainer) {
        return;
    }
    
    try {
        const ctx = chartContainer.getContext('2d');
        if (!ctx) {
            return;
        }
        
        // 获取出场率前8的英雄
        const topPickRateHeroes = [...heroData]
            .sort((a, b) => b.pickRate - a.pickRate)
            .slice(0, 8);
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: topPickRateHeroes.map(hero => hero.name),
                datasets: [{
                    label: '出场率 (%)',
                    data: topPickRateHeroes.map(hero => hero.pickRate),
                    backgroundColor: 'rgba(54, 162, 235, 0.7)',
                    borderColor: 'rgb(54, 162, 235)',
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: '出场率最高的英雄'
                    }
                }
            }
        });
    } catch (error) {
        // 错误处理
    }
}

// 渲染英雄职业分布图表
function renderRoleDistributionChart() {
    const chartContainer = document.getElementById('role-distribution-chart');
    if (!chartContainer) {
        return;
    }
    
    try {
        const ctx = chartContainer.getContext('2d');
        if (!ctx) {
            return;
        }
        
        // 统计各职业英雄数量
        const roleDistribution = {
            '战士': 0,
            '法师': 0,
            '刺客': 0,
            '射手': 0,
            '坦克': 0,
            '辅助': 0
        };
        
        heroData.forEach(hero => {
            roleDistribution[hero.roleName]++;
        });
        
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: Object.keys(roleDistribution),
                datasets: [{
                    data: Object.values(roleDistribution),
                    backgroundColor: [
                        'rgba(231, 76, 60, 0.7)',
                        'rgba(46, 204, 113, 0.7)',
                        'rgba(155, 89, 182, 0.7)',
                        'rgba(243, 156, 18, 0.7)',
                        'rgba(52, 152, 219, 0.7)',
                        'rgba(26, 188, 156, 0.7)'
                    ],
                    borderColor: [
                        'rgb(231, 76, 60)',
                        'rgb(46, 204, 113)',
                        'rgb(155, 89, 182)',
                        'rgb(243, 156, 18)',
                        'rgb(52, 152, 219)',
                        'rgb(26, 188, 156)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: '英雄职业分布'
                    }
                }
            }
        });
    } catch (error) {
        // 错误处理
    }
}

// 渲染热度趋势图表
function renderPopularityChart() {
    const chartContainer = document.getElementById('popularity-chart');
    if (!chartContainer) {
        return;
    }
    
    try {
        const ctx = chartContainer.getContext('2d');
        if (!ctx) {
            return;
        }
        
        // 获取热度前8的英雄
        const topPopularityHeroes = [...heroData]
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 8);
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['第1周', '第2周', '第3周', '第4周'],
                datasets: topPopularityHeroes.map((hero, index) => {
                    // 模拟过去4周的热度数据，基于当前热度值生成模拟历史数据
                    const basePopularity = hero.popularity;
                    const colors = [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(153, 102, 255)',
                        'rgb(255, 159, 64)',
                        'rgb(46, 204, 113)',
                        'rgb(155, 89, 182)'
                    ];
                    
                    // 生成近4周的随机热度数据，确保最后一周的数据为当前热度
                    const weeklyData = [
                        basePopularity - 5 + Math.floor(Math.random() * 10),
                        basePopularity - 3 + Math.floor(Math.random() * 6),
                        basePopularity - 2 + Math.floor(Math.random() * 4),
                        basePopularity
                    ];
                    
                    return {
                        label: hero.name,
                        data: weeklyData,
                        borderColor: colors[index % colors.length],
                        backgroundColor: 'transparent',
                        tension: 0.3
                    };
                })
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: '热度趋势变化'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    } catch (error) {
        // 错误处理
    }
}

// 初始化英雄排行榜
function initHeroRank() {
    const heroList = document.getElementById('hero-list');
    
    // 按热度排序
    const sortedHeroes = [...heroData].sort((a, b) => b.popularity - a.popularity);
    
    // 清空列表
    heroList.innerHTML = '';
    
    // 添加英雄数据
    sortedHeroes.forEach((hero, index) => {
        const row = document.createElement('tr');
        row.setAttribute('data-role', hero.role);
        
        // 设置角色标签样式类
        const roleTagClass = `role-${hero.role}`;
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>
                <div class="hero-name">
                    <img src="${hero.avatar}" alt="${hero.name}" class="hero-avatar">
                    ${hero.name}
                </div>
            </td>
            <td><span class="role-tag ${roleTagClass}">${hero.roleName}</span></td>
            <td>${hero.winRate}%</td>
            <td>${hero.pickRate}%</td>
            <td>${hero.banRate}%</td>
            <td>${hero.popularity}</td>
        `;
        
        heroList.appendChild(row);
    });
}

// 初始化玩家排行榜
function initPlayerRank() {
    const playerList = document.getElementById('player-list');
    
    // 按战力排序
    const sortedPlayers = [...playerData].sort((a, b) => b.power - a.power);
    
    // 清空列表
    playerList.innerHTML = '';
    
    // 添加玩家数据
    sortedPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        row.setAttribute('data-server', player.server);
        
        // 格式化常用英雄
        const favoriteHeroes = player.favoriteHeroes.join(', ');
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>
                <div class="player-name">
                    <img src="${player.avatar}" alt="${player.name}" class="player-avatar">
                    ${player.name}
                </div>
            </td>
            <td>${player.rank}</td>
            <td>${player.power}</td>
            <td>${player.winRate}%</td>
            <td>${favoriteHeroes}</td>
        `;
        
        playerList.appendChild(row);
    });
}

// 初始化战队排行榜
function initTeamRank() {
    const teamList = document.getElementById('team-list');
    
    // 按平均战力排序
    const sortedTeams = [...teamData].sort((a, b) => b.avgPower - a.avgPower);
    
    // 清空列表
    teamList.innerHTML = '';
    
    // 添加战队数据
    sortedTeams.forEach((team, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>
                <div class="team-name">
                    <img src="${team.logo}" alt="${team.name}" class="team-logo">
                    ${team.name}
                </div>
            </td>
            <td>${team.members}</td>
            <td>${team.avgPower}</td>
            <td>${team.honors}</td>
        `;
        
        teamList.appendChild(row);
    });
}

// 初始化英雄筛选功能
function initHeroFilter() {
    const filterButtons = document.querySelectorAll('#hero-rank .btn-group .btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // 添加当前按钮的active类
            this.classList.add('active');
            
            // 获取角色类型
            const role = this.getAttribute('data-role');
            
            // 获取所有英雄行
            const heroRows = document.querySelectorAll('#hero-list tr');
            
            // 筛选英雄
            heroRows.forEach(row => {
                if (role === 'all' || row.getAttribute('data-role') === role) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });
}

// 初始化玩家服务器筛选功能
function initPlayerFilter() {
    const filterButtons = document.querySelectorAll('#player-rank .btn-group .btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // 添加当前按钮的active类
            this.classList.add('active');
            
            // 获取服务器类型
            const server = this.getAttribute('data-server');
            
            // 获取所有玩家行
            const playerRows = document.querySelectorAll('#player-list tr');
            
            // 筛选玩家
            playerRows.forEach(row => {
                if (server === 'all' || row.getAttribute('data-server') === server) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });
}
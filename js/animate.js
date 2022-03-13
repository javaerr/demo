//缓慢动画
// 1. 让盒子每次的移动距离慢慢变小 速度就会慢慢落下来
// 2. 核心算法：(目标值 - 现在的位置) / 10 做为每次移动的距离
// 3. 停止条件 让当前盒子等于目标位置就停止定时器
// let div = document.querySelector('div');
// 简单动画封装函数
// let btn500 = document.querySelector('.btn500');
// let btn800 = document.querySelector('.btn800');
// let span = document.querySelector('span');
function animate(obj, target, callback) {  // obj 目标对象   target 目标位置
    // 给不同元素指定不同的定时器 let obj = {}; obj.timer;
    clearInterval(obj.timer);  // 清除以前的定时器 只保留当前一个定时器执行
    obj.timer = setInterval(function () {
        // 步长值写在定时器里面
        let step = (target - obj.offsetLeft) / 10; // 步长值
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写在定时器结束里面
            if (callback) {
                callback();
            }
        }
        // 每次加1 改成 一个慢慢变小的值
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}
// animate(div, 500);
// btn500.addEventListener('click', function () {
//     animate(span, 500);
// })
// btn800.addEventListener('click', function () {
//     animate(span, 800);
// })
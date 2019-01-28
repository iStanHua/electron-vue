/**
 * Duff装置
 * @param {Array}    values   数组
 * @param {Function} process  回调函数
 */
export function duffPrompt(values, process) {
    let _len = values.length
    let iterations = Math.floor(_len / 8)
    let leftover = _len % 8
    let i = 0
    if (leftover > 0) {
        do {
            if (typeof process === 'function') {
                process(values[i++], i)
            }
        } while (--leftover > 0)
    }
    do {
        if (typeof process === 'function') {
            process(values[i++], i)
            process(values[i++], i)
            process(values[i++], i)
            process(values[i++], i)
            process(values[i++], i)
            process(values[i++], i)
            process(values[i++], i)
            process(values[i++], i)
        }
    } while (--iterations > 0)
}
/**
 * 函数去抖
 * @param {Function}  fn  实际要执行的函数
 * @param {Number} delay  延迟时间，也就是阈值，单位是毫秒（ms）
 * @return {Function}
 */
export function debounce(fn, delay) {
    // 定时器，用来 setTimeout
    let timer

    // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 fn 函数
    return function () {
        // 保存函数调用时的上下文和参数，传递给 fn
        let context = this
        let args = arguments

        // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
        clearTimeout(timer)

        // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
        // 再过 delay 毫秒就执行 fn
        timer = setTimeout(function () {
            fn.apply(context, args)
        }, delay)
    }
}

/**
 * 节流函数
 * @param fn {Function}   实际要执行的函数
 * @param delay {Number}  执行间隔，单位是毫秒（ms）
 * @return {Function}
 */

export function throttle(fn, threshhold) {
    // 记录上次执行的时间
    let last

    // 定时器
    let timer

    // 默认间隔为 250ms
    threshhold || (threshhold = 250)

    // 返回的函数，每过 threshhold 毫秒就执行一次 fn 函数
    return function () {
        // 保存函数调用时的上下文和参数，传递给 fn
        let context = this
        let args = arguments

        let now = +new Date()

        // 如果距离上次执行 fn 函数的时间小于 threshhold，那么就放弃
        // 执行 fn，并重新计时
        if (last && now < last + threshhold) {
            clearTimeout(timer)

            // 保证在当前时间区间结束后，再执行一次 fn
            timer = setTimeout(function () {
                last = now
                fn.apply(context, args)
            }, threshhold)

            // 在时间区间的最开始和到达指定间隔的时候执行一次 fn
        } else {
            last = now
            fn.apply(context, args)
        }
    }
}
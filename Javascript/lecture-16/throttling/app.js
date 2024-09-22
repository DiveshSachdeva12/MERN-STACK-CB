const input=document.querySelector('input')
const throttledFun = throttle(fun, 2000)
input.addEventListener('input',throttledFun)
function fun() {
    console.log('This is a function')
}

function throttle(func, delay) {
    let timeout=null
    return (...args) => {
        if(!timeout) {
            func(...args)
            timeout=setTimeout(() => {
                timeout=null
            }, delay)
        }
    }
}
throttledFun()
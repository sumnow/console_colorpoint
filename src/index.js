class Person  {
    constructor (x) {
        this._x = !x;
        return new Proxy(this, {
            get(target, key, receiver) {
                target[`${key}`] = (...ag) => {
                    return target._x ? _log(`${key}`)(...ag) : noDo
                }
                return Reflect.get(target, key, receiver);
            },
            set: function (target, key, value, receiver) {
                console.log(`${key}`)
                return Reflect.set(target, key, value, receiver);
            }
        })
    }
}

function noDo (...args) {
    return undefined;
}

function getType(obj) {
    var type = Object.prototype.toString.call(obj).match(/^\[object (.*)\]$/)[1].toLowerCase();
    if(type === 'string' && typeof obj === 'object') return 'object'; // Let "new String('')" return 'object'
    if (obj === null) return 'null'; // PhantomJS has type "DOMWindow" for null
    if (obj === undefined) return 'undefined'; // PhantomJS has type "DOMWindow" for undefined
    return type;
}

function _log(color) {
    return (...args) => {
        const fontSize = 16
        console.group(color)
        args.forEach((e,i) => {
            const type = getType(e)
            if(['array', 'set'].includes(type)) {
                console.log(`%c${type}:`, `font-size:${fontSize}px;color:${color};padding:0 ${fontSize}px;border-right:${fontSize}px solid ${color};border-left:${fontSize}px solid ${color}`)
                console.table(Array.from(e))
            } else {
                console.log(`%c${type}:`, `font-size:${fontSize}px;color:${color};padding:0 ${fontSize}px;border-right:${fontSize}px solid ${color};border-left:${fontSize}px solid ${color}`)
                console.log(e)
            }
            if(i < args.length - 1) {
                console.log(`%c<=|=|=|=|=|=| Next Param |=|=|=|=|=|=>`, `font-size:${fontSize}px;color:${color};`)
            }
        })
        console.groupEnd()
    }
}



// bind
// const _bind = function (content) {
//     var _this = this;
//     return function () {
//         _this.apply(content, arguments)
//     }
// }

// Function.prototype._bind = _bind

export default Person
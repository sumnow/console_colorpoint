class Person  {
    constructor (x) {
        this._x = !x;
    }
    green(...ag) {
        if (this._x) {
            return log('green')(...ag)
        } else {
            return noDo
        }
    }
    purple(...ag) {
        if (this._x) {
            return log('purple')(...ag)
        } else {
            return noDo
        }
    }
    red(...ag) {
        if (this._x) {
            return log('red')(...ag)
        } else {
            return noDo
        }
    }
    yellow(...ag) {
        if (this._x) {
            return log('yellow')(...ag)
        } else {
            return noDo
        }
    }
    blue(...ag) {
        if (this._x) {
            return log('blue')(...ag)
        } else {
            return noDo
        }
    }
    orange(...ag) {
        if (this._x) {
            return log('orange')(...ag)
        } else {
            return noDo
        }
    }
    grey(...ag) {
        if (this._x) {
            return log('grey')(...ag)
        } else {
            return noDo
        }
    }
    rd(...ag) {
        if(this._x) {
            return log('rd')(...ag)
        } else  {
            return noDo
        }
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

function log(color) {
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
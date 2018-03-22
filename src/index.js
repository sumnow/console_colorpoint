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
    
}

function noDo (...args) {
    return undefined;
}

function log(color) {
    return (...args) => {
        const fontSize = 16
        console.group()
        args.forEach((e,i) => {
            if(e instanceof Object) {
                if(e instanceof Array) {
                    console.log(`%cArray:`, `font-size:${fontSize}px;color:${color};padding:0 ${fontSize}px;border-right:${fontSize}px solid ${color};border-left:${fontSize}px solid ${color}`)
                    console.table(e)
                } else {
                    console.log(`%cObject:`, `font-size:${fontSize}px;color:${color};padding:0 ${fontSize}px;border-right:${fontSize}px solid ${color};border-left:${fontSize}px solid ${color}`)
                    console.log(e)
                }
            } else {
                console.log(`%c${typeof e}:`, `font-size:${fontSize}px;color:${color};padding:0 ${fontSize}px;border-right:${fontSize}px solid ${color};border-left:${fontSize}px solid ${color}`)
                
                console.log(e)
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
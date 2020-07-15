const opt = {
    fontSize: 16,
    able: true,
    //red
    s: 'salmon',
    e: 'crimson',
    r: 'red',
    // pink
    p: 'pink',
    h: 'hotPink',
    // orange
    j: 'coral',
    t: 'tomato',
    o: 'orange',
    // yellow
    g: 'gold',
    y: 'yellow',
    k: 'khaki',
    // purple
    q: 'lavender',
    v: 'violet',
    f: 'fuchsia',
    p: 'purple',
    i: 'indigo',
    // green
    l: 'lime',
    s: 'springGreen',
    g: 'green',
    u: 'olive',
    t: 'teal',
    // blue
    c: 'cyan',
    a: 'aquamarine',
    b: 'blue',
    n: 'navy',
    // Brown
    m: 'maroon',
    x: 'chocolate',
    // Gray
    z: 'gray',
    // black
    d: 'dark',
    // white
    w: 'white'
}

class ColorLog {
    constructor(x) {
        // this._x = x;
        const _opt = { ...opt, ...x }
        const _arr = Object.keys(_opt)
        _arr.forEach(e => {
            this[e] =
                !_opt.able ? noDo :
                    (...ag) => _log(_opt[e])(...ag)
        })

        // new Proxy(this, {
        //     get(target, key, receiver) {
        //         if (Reflect.ownKeys(_opt).includes(key)) {
        //             target[`${key}`] = (...ag) => {
        //                 return x ? _log(_opt[key])(...ag) : noDo
        //             }
        //         }
        //         return Reflect.get(target, key, receiver);
        //     },
        //     set: function (target, key, value, receiver) {
        //         return Reflect.set(target, key, value, receiver);
        //     }
        // })
    }
}

// const map = new Map([])

function noDo(...args) {
    return undefined;
}

function getType(obj) {
    var type = Object.prototype.toString.call(obj).match(/^\[object (.*)\]$/)[1].toLowerCase();
    if (type === 'string' && typeof obj === 'object') return 'object'; // Let "new String('')" return 'object'
    if (obj === null) return 'null'; // PhantomJS has type "DOMWindow" for null
    if (obj === undefined) return 'undefined'; // PhantomJS has type "DOMWindow" for undefined
    return type;
}

function _log(color) {
    return (...args) => {
        const fontSize = 12
        const fontSize_big = fontSize + 2
        const fontSize_small = fontSize - 2
        const _len = args.length
        if (_len > 1) {
            console.group(color)
        } else {

            console.log(`%c▼▼▼▼▼▼ ${color} ▼▼▼▼▼▼`, `color: ${color}`)
        }
        args.forEach((e, i) => {
            const type = getType(e)
            if (_len > 1) {
                console.log(`%c第${i}个参数:`, `font-size:${fontSize_small}px;color:darkMagenta;`)
            }
            // console.log(`%c${e}%c<${type}>`, `font-size:${fontSize}px;color:${color};`, `font-size:${fontSize_small}px;color:${color};`)
            switch (type) {
                // base
                case 'number':
                case 'string':
                case 'boolean':
                case 'undefined':
                case 'null':
                // special
                case 'regexp':
                case 'date':
                    console.log(`${_len > 1 ? '  ' : ''} %c${e} %c${type}`, `line-height: 30px;font-size:${fontSize}px;color:${color};`, `font-size:${fontSize_small}px;color:#fff;background: #000;padding: 2px 4px;border-radius: 2px;`)
                    break;
                // 
                case 'object':
                case 'function':
                case 'array':
                case 'map':
                case 'set':
                    console.log(`${_len > 1 ? '  ' : ''}`, e)
                    // console.log(`%c${type}`, `font-size:${fontSize_small}px;color:#fff;background: #000;padding: 2px 4px;border-radius: 2px;`)
                    break;
            }
            // if (['array', 'set'].includes(type)) {
            //     console.log(`%c${type}:`, `font-size:${fontSize}px;color:${color};`)
            //     console.table(Array.from(e))
            //     console.log(`%c${type}:`, `font-size:${fontSize}px;color:${color};`)
            // } else {
            // console.log(`%c${type}:${e}`, `font-size:${fontSize}px;color:${color};`)
            // }
            // if (i < args.length - 1) {
            //     console.log(`%c第${i}个参数`, `font-size:${fontSize_small}px;background:${color};color:#fff`)
            // }
        })

        if (_len > 1) {
            console.groupEnd(color)
        } else {

            console.log(`%c▲▲▲▲▲▲ ${color} ▲▲▲▲▲▲`, `color: ${color}`)
        }
    }
}



export default ColorLog
module.exports = function make(a){ 

    let arr = [a];
    let currentInt = 0; 
    
    function inside(...args) {
        for (let i = 0, len = args.length; i < len; i++) { 
            if(typeof args[i] === 'number') { 
                arr.push(args[i]);
            }

            if(typeof args[i] === 'function') {
                currentInt = arr.reduce(args[i]);
            }
        } 
        return inside;
    } 

    inside.valueOf = function() {
        return currentInt;
    }

    return inside;
};
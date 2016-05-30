function Util() {};
Util.prototype.inherit = function(o) {
    function F() {};
    F.prototype = o;
    return new F();
};

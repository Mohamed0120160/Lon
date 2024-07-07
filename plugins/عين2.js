const _0x332464 = (function () {
        let _0x11869e = !![];
        return function (_0xbf2e, _0x50ee6f) {
            const _0x2ea8f8 = _0x11869e ? function () {
                if (_0x50ee6f) {
                    const _0x997ce3 = _0x50ee6f['apply'](_0xbf2e, arguments);
                    return _0x50ee6f = null, _0x997ce3;
                }
            } : function () {};
            return _0x11869e = ![], _0x2ea8f8;
        };
    }()),
    _0x3a4108 = _0x332464(this, function () {
        return _0x3a4108['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x3a4108)['search']('(((.+)+)+)+$');
    });
_0x3a4108();
const _0x40492a = (function () {
        let _0x3fcbda = !![];
        return function (_0x2433e9, _0x4a62e6) {
            const _0x31b26e = _0x3fcbda ? function () {
                if (_0x4a62e6) {
                    const _0x36c706 = _0x4a62e6['apply'](_0x2433e9, arguments);
                    return _0x4a62e6 = null, _0x36c706;
                }
            } : function () {};
            return _0x3fcbda = ![], _0x31b26e;
        };
    }()),
    _0x519665 = _0x40492a(this, function () {
        const _0x2a4106 = function () {
                let _0x414c34;
                try {
                    _0x414c34 = Function('return (function() ' + '{}.constructor(\"return this\")( )' + ');')();
                } catch (_0x8f4377) {
                    _0x414c34 = window;
                }
                return _0x414c34;
            },
            _0xc4622a = _0x2a4106(),
            _0x410385 = _0xc4622a['console'] = _0xc4622a['console'] || {},
            _0x1955dc = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
        for (let _0x53be4c = 0x0; _0x53be4c < _0x1955dc['length']; _0x53be4c++) {
            const _0x120fa6 = _0x40492a['constructor']['prototype']['bind'](_0x40492a),
                _0x5b9be7 = _0x1955dc[_0x53be4c],
                _0x16a595 = _0x410385[_0x5b9be7] || _0x120fa6;
            _0x120fa6['__proto__'] = _0x40492a['bind'](_0x40492a), _0x120fa6['toString'] = _0x16a595['toString']['bind'](_0x16a595), _0x410385[_0x5b9be7] = _0x120fa6;
        }
    });
_0x519665();
import _0x57f5a7 from 'similarity';
const threshold = 0.72;
export async function before(_0x504a57) {
    let _0x289417 = _0x504a57['chat'];
    if (!_0x504a57['quoted'] || !_0x504a57['quoted']['fromMe'] || !_0x504a57['quoted']['isBaileys'] || !_0x504a57['text'] || !/استخدم.*استسلم/i ['test'](_0x504a57['quoted']['text']) || /.*hhint/i ['test'](_0x504a57['text'])) return !0x0;
    this['tebakbendera'] = this['tebakbendera'] ? this['tebakbendera'] : {};
    if (!(_0x289417 in this['tebakbendera'])) return this['reply'](_0x504a57['chat'], 'السؤال خلص يا احول', _0x504a57);
    if (_0x504a57['quoted']['id'] == this['tebakbendera'][_0x289417][0x0]['id']) {
        let _0x1c858e = /^(استسلم|surr?ender)$/i ['test'](_0x504a57['text']);
        if (_0x1c858e) return clearTimeout(this['tebakbendera'][_0x289417][0x3]), delete this['tebakbendera'][_0x289417], this['reply'](_0x504a57['chat'], '*طلع فاشل و استسلم :( !*', _0x504a57);
        let _0x57b558 = JSON['parse'](JSON['stringify'](this['tebakbendera'][_0x289417][0x1]));
        if (_0x504a57['text']['toLowerCase']() == _0x57b558['name']['toLowerCase']()['trim']()) global['db']['data']['users'][_0x504a57['sender']]['exp'] += this['tebakbendera'][_0x289417][0x2], this['reply'](_0x504a57['chat'], '✅ *صح!*\x0a+' + this['tebakbendera'][_0x289417][0x2] + ' XP', _0x504a57), clearTimeout(this['tebakbendera'][_0x289417][0x3]), delete this['tebakbendera'][_0x289417];
        else {
            if (_0x57f5a7(_0x504a57['text']['toLowerCase'](), _0x57b558['name']['toLowerCase']()['trim']()) >= threshold) _0x504a57['reply']('❗ *قربت!*');
            else this['reply'](_0x504a57['chat'], '❌ *خطا!*', _0x504a57);
        }
    }
    return !0x0;
}
export const exp = 0x0;
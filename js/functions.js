/* <![CDATA[ */(function (d, s, a, i, j, r, l, m, t) {
    try {
        l = d.getElementsByTagName('a');
        t = d.createElement('textarea');
        for (i = 0; l.length - i; i++) {
            try {
                a = l[i].href;
                s = a.indexOf('/cdn-cgi/l/email-protection');
                m = a.length;
                if (a && s > -1 && m > 28) {
                    j = 28 + s;
                    s = '';
                    if (j < m) {
                        r = '0x' + a.substr(j, 2) | 0;
                        for (j += 2; j < m && a.charAt(j) != 'X'; j += 2)
                            s += '%' + ('0' + ('0x' + a.substr(j, 2) ^ r).toString(16)).slice(-2);
                        j++;
                        s = decodeURIComponent(s) + a.substr(j, m - j)
                    }
                    t.innerHTML = s.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                    l[i].href = 'mailto:' + t.value
                }
            } catch (e) {
            }
        }
    } catch (e) {
    }
})(document);/* ]]> */
        
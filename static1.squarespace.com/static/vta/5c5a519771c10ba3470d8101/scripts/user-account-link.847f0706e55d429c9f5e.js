"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [9010], {
        18416: function(e, n) {
            n.v6 = "UserAccountApi", n.in = "isUserAuthenticated", n.tV = "openAccountScreen"
        },
        82533: function(e, n, t) {
            t.r(n);
            var o = t(18416);
            n.default = function(e) {
                var n = function(e) {
                        e.preventDefault();
                        var n = window[o.v6][o.tV];
                        "function" == typeof n ? n() : console.warn("UserAccounts API not available")
                    },
                    t = function() {
                        if (window[o.v6] && window[o.v6][o.in]) {
                            var t = (0, window[o.v6][o.in])() ? ".unauth" : ".auth",
                                c = e.querySelector(".user-accounts-text-link"),
                                r = c.querySelector(t);
                            r && c.removeChild(r), e.classList.add("loaded"), e.querySelector(".user-accounts-text-link").addEventListener("click", n)
                        } else console.warn("UserAccounts API not available")
                    };
                "complete" === document.readyState ? t() : window.addEventListener("load", t)
            }
        }
    }
]);
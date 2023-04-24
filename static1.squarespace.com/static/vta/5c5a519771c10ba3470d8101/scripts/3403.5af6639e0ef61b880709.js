"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [3403], {
        23403: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return v
                }
            });
            r(92338);
            var n = r(45301),
                i = r(84549),
                o = r(9453);

            function a(t) {
                return function(t) {
                    if (Array.isArray(t)) return u(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return u(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function c(t) {
                return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, c(t)
            }

            function s(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function l(t, e) {
                return l = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, l(t, e)
            }

            function f(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = p(t);
                    if (e) {
                        var i = p(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return h(this, r)
                }
            }

            function h(t, e) {
                return !e || "object" !== c(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function p(t) {
                return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, p(t)
            }

            function y(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function m(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function d(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function g(t, e, r) {
                return e && d(t.prototype, e), r && d(t, r), t
            }
            var b = function() {
                    function t(e) {
                        var r = e.node,
                            n = e.imgWrapper,
                            i = e.img,
                            a = e.autoFitImage;
                        m(this, t), this.node = r, this.imageWrapper = n, this.lightboxLink = null == n ? void 0 : n.querySelector("a"), this.image = i, this.node.style.position = "absolute", this.autoFitImage = a, a && this.image && (this.imageAspectRatio = (0, o.qH)(this.image))
                    }
                    return g(t, [{
                        key: "applyAspectRatio",
                        value: function(t) {
                            var e = t.aspectRatio,
                                r = (t.x, t.y, t.width),
                                n = t.height;
                            if (e <= 0) return (0, i.t)(this.image, {
                                width: "100%",
                                top: "0%",
                                left: "0%",
                                transform: "none"
                            }), void(this.imageWrapper.style.height = "auto");
                            var o = Math.ceil(r * (1 / e));
                            if (n / o < 1) {
                                var a = o / n,
                                    u = Math.round(r * a);
                                (0, i.t)(this.image, {
                                    width: "".concat(u, "px"),
                                    height: "".concat(o, "px")
                                })
                            }
                            this.imageWrapper.style.height = "".concat(o, "px"), this.imageWrapper.style.overflow = "hidden", this.lightboxLink && (this.lightboxLink.style.height = "100%")
                        }
                    }, {
                        key: "setPosition",
                        value: function(t, e, r) {
                            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
                            if (n = this.imageAspectRatio ? this.imageAspectRatio : n, (0, i.t)(this.node, {
                                    width: "".concat(Math.round(r), "px"),
                                    transform: "translate3d(".concat(Math.round(t), "px, ").concat(Math.round(e), "px, 0)")
                                }), !this.autoFitImage || !this.image) return this.node.clientHeight;
                            var o = Math.round(1 / this.imageAspectRatio * r);
                            return this.image.style.width = "100%", this.image.style.height = "".concat(o, "px"), this.imageWrapper && this.applyAspectRatio({
                                aspectRatio: n,
                                x: t,
                                y: e,
                                width: r,
                                height: o
                            }), this.node.clientHeight
                        }
                    }, {
                        key: "clearPosition",
                        value: function() {
                            this.node.style.width = "", this.node.style.transform = "", this.autoFitImage && this.image && this.imageWrapper && (this.image.style.width = "", this.image.style.height = "", this.imageWrapper.style.top = "", this.imageWrapper.style.left = "", this.imageWrapper.style.transform = "")
                        }
                    }]), t
                }(),
                v = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && l(t, e)
                    }(r, t);
                    var e = f(r);

                    function r(t) {
                        var n;
                        m(this, r);
                        var i = (n = e.call(this, t)).props,
                            o = i.container,
                            a = i.nodes,
                            u = i.gutter,
                            c = i.columns,
                            s = i.isReadyClass,
                            l = i.aspectRatio,
                            f = i.horizontalGutter,
                            h = i.verticalGutter;
                        return n.state = {
                            columns: c,
                            aspectRatio: l,
                            horizontalGutter: isNaN(f) ? u : f,
                            verticalGutter: isNaN(h) ? u : h,
                            shouldApplyGutterToContainerEdge: !1
                        }, n.nodes = n.getNodes(a), n.len = n.nodes.length, n.layout(), setTimeout((function() {
                            o.classList.add(s)
                        }), 0), n
                    }
                    return g(r, [{
                        key: "getNodes",
                        value: function(t) {
                            var e = this.props,
                                r = e.imageWrapperSelector,
                                n = e.imageSelector,
                                i = e.autoFitImage,
                                o = e.aspectRatio;
                            return t.map((function(t) {
                                var e = t.querySelector(r),
                                    a = t.querySelectorAll(n)[0];
                                return new b({
                                    node: t,
                                    imgWrapper: e,
                                    img: a,
                                    autoFitImage: i,
                                    aspectRatio: o
                                })
                            }))
                        }
                    }, {
                        key: "setStyles",
                        value: function() {
                            var t, e, r, n = this.props.container,
                                i = this.state,
                                o = i.columns,
                                u = i.horizontalGutter,
                                c = i.verticalGutter,
                                s = i.aspectRatio,
                                l = i.shouldApplyGutterToContainerEdge,
                                f = (t = o, "function" == typeof(e = 0) ? new Array(t).fill("").map(e) : new Array(t).fill(e)),
                                h = n.clientWidth,
                                p = h / 100,
                                y = u / 20 * p,
                                m = c / 20 * p,
                                d = 0,
                                g = (h + y) / o,
                                b = g - y;
                            l && (d = y, b = (g = (h - y) / o) - y);
                            for (var v = 0; v < this.len; v += 1) {
                                var w = (r = f).indexOf(Math.min.apply(Math, a(r))),
                                    O = d + g * w,
                                    S = this.nodes[v].setPosition(O, f[w], b, s);
                                f[w] += S + m
                            }
                            n.style.height = "".concat(f[function(t) {
                                return t.indexOf(Math.max.apply(Math, a(t)))
                            }(f)] - m, "px")
                        }
                    }, {
                        key: "clearStyles",
                        value: function() {
                            this.props.container.style.height = "";
                            for (var t = 0; t < this.len; t += 1) this.nodes[t].clearPosition()
                        }
                    }, {
                        key: "layout",
                        value: function(t) {
                            t && this.setState(function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var r = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? s(Object(r), !0).forEach((function(e) {
                                        y(t, e, r[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                    }))
                                }
                                return t
                            }({}, t)), this.setStyles()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.clearStyles()
                        }
                    }]), r
                }(n.Z);
            y(v, "defaultProps", {
                container: document.createElement("div"),
                nodes: [],
                autoFitImage: !0,
                imageWrapperSelector: null,
                imageSelector: "img",
                aspectRatio: -1,
                gutter: 0,
                columns: 2,
                isReadyClass: "masonry-ready",
                horizontalGutter: void 0,
                verticalGutter: void 0
            })
        },
        84549: function(t, e, r) {
            r.d(e, {
                k: function() {
                    return o
                },
                t: function() {
                    return i
                }
            });
            r(92338);

            function n(t) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, n(t)
            }
            var i = function(t, e) {
                    return Object.keys(e).forEach((function(r) {
                        t.style[r] = e[r]
                    })), t
                },
                o = function(t) {
                    return "object" === n(t) && null !== t && 1 === t.nodeType
                }
        },
        9453: function(t, e, r) {
            r.d(e, {
                Ad: function() {
                    return s
                },
                g2: function() {
                    return c
                },
                ik: function() {
                    return l
                },
                qH: function() {
                    return a
                },
                vd: function() {
                    return u
                }
            });
            r(92338), r(76746);
            var n = r(1678);

            function i(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var r = [],
                        n = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = t[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
                    } catch (t) {
                        i = !0, o = t
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return r
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return o(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var a = function(t) {
                    if (!t) return 1;
                    if (!t.dataset.imageDimensions) {
                        var e = t.getAttribute("width"),
                            r = t.getAttribute("height");
                        return e && r ? +e / +r : 1
                    }
                    var n = t.dataset.imageDimensions.split("x");
                    return n[0] && n[1] ? +n[0] / +n[1] : void 0
                },
                u = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20;
                    if (t <= e) return t;
                    var r = window.innerWidth;
                    return r <= n.AV.sm ? Math.max(e, Math.round(.25 * t)) : r <= n.AV.md ? Math.max(e, Math.round(.5 * t)) : r <= n.AV.lg ? Math.max(e, Math.round(.75 * t)) : t
                },
                c = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                        e = window.innerWidth,
                        r = Math.max(1, t);
                    return e <= n.AV.sm ? t > 1 ? 2 : 1 : e <= n.AV.md ? Math.ceil(.5 * r) : e <= n.AV.lg ? Math.ceil(.75 * r) : r
                },
                s = function(t) {
                    var e = 0,
                        r = 0,
                        n = {
                            width: e,
                            height: r
                        };
                    if (!t) return n;
                    if (t.dataset.imageDimensions) {
                        var o = i(t.dataset.imageDimensions.split("x"), 2);
                        e = o[0], r = o[1]
                    } else e = t.getAttribute("width"), r = t.getAttribute("height");
                    return e && r ? {
                        width: +e,
                        height: +r
                    } : n
                },
                l = function(t) {
                    var e = {
                        x: .5,
                        y: .5
                    };
                    if (!t) return e;
                    if (!t.dataset.imageFocalPoint) return e;
                    var r = i(t.dataset.imageFocalPoint.split(","), 2),
                        n = r[0],
                        o = r[1];
                    return n && o ? {
                        x: +n,
                        y: +o
                    } : e
                }
        }
    }
]);
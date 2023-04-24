"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [7088], {
        77825: function(t, e, n) {
            n.r(e), n.d(e, {
                GalleryMasonry: function() {
                    return k
                }
            });
            n(92338);
            var r = n(73020),
                o = n(92651),
                i = n(68877),
                a = n(9453),
                u = n(23403),
                c = n(77716),
                s = n(42379),
                l = n(6370),
                f = n(45301),
                p = n(1678),
                y = n(79305);

            function h(t) {
                return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, h(t)
            }

            function d(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function b(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(n), !0).forEach((function(e) {
                        E(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function g(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function m(t, e) {
                return m = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, m(t, e)
            }

            function v(t) {
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
                    var n, r = S(t);
                    if (e) {
                        var o = S(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return w(this, n)
                }
            }

            function w(t, e) {
                return !e || "object" !== h(e) && "function" != typeof e ? O(t) : e
            }

            function O(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function S(t) {
                return S = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, S(t)
            }

            function E(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var k = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && m(t, e)
                }(d, t);
                var e, n, f, h = v(d);

                function d(t) {
                    var e;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, d), E(O(e = h.call(this)), "loadImage", (function(t) {
                        var n = e.props.imageSelector,
                            r = t.querySelector(n);
                        r.onload = function() {
                            t.dataset.loaded = !0
                        }, (0, y.x)("image_component") ? r.onload() : o.Z.loadLazy(r, {
                            load: !0,
                            mode: "cover",
                            useAdvancedPositioning: !0
                        })
                    })), E(O(e), "onLightboxOpen", (function(t) {
                        e.state.isHistoryEnabled && (t.preventDefault(), history.pushState({}, "", t.currentTarget.href))
                    })), E(O(e), "onResize", (function() {
                        var t = e.getColumnData(e.state.numColumns, e.state.gutter),
                            n = "full-bleed" === e.node.dataset.width;
                        e.packer.layout(b(b({}, t), {}, {
                            shouldApplyGutterToContainerEdge: n
                        })), e.loadImages(e.ref.items)
                    })), E(O(e), "onItemShow", (function(t) {
                        var e = t.node;
                        e.dataset.show || (e.dataset.show = !0)
                    })), E(O(e), "removeLightboxElementFromDOM", (function() {
                        if (e.state.lightboxEnabled) {
                            var t = document.querySelector('[data-lightbox-section-id="'.concat(e.sectionId, '"]'));
                            t && t.remove()
                        }
                    })), e.betaFeatureFlags = (0, r.a)(window, "Static.SQUARESPACE_CONTEXT.betaFeatureFlags", []);
                    var n = e.props,
                        a = n.listSelector,
                        l = n.itemSelector,
                        f = n.lightboxLinkSelector,
                        g = (0, r.a)(window, "Static.SQUARESPACE_CONTEXT.collection.fullUrl", null),
                        m = {};
                    return t.dataset.props && (m = JSON.parse(t.dataset.props)), e.history = (0, i.s)(), e.node = t, e.sectionId = e.node.dataset.sectionId, e.state = b({
                        design: "masonry",
                        collectionFullUrl: g,
                        isHistoryEnabled: g && e.history,
                        numColumns: 3,
                        gutter: 10,
                        lightboxEnabled: !1,
                        width: "full"
                    }, m), e.ref = {
                        list: e.node.querySelector(a),
                        items: Array.from(e.node.querySelectorAll(l)),
                        lightboxLinks: Array.from(e.node.querySelectorAll(f))
                    }, e.onResize = (0, s.Z)(e.onResize, p.FY), e.stagger = new c.Z({
                        nodes: e.ref.items,
                        onEnter: e.onItemShow
                    }), e.packer = new u.Z(b({
                        container: e.ref.list,
                        nodes: e.ref.items,
                        imageWrapperSelector: ".gallery-masonry-item-wrapper",
                        isReadyClass: "gallery-masonry-list--ready",
                        shouldApplyGutterToContainerEdge: "full-bleed" === e.node.dataset.width
                    }, e.getColumnData(e.state.numColumns, e.state.gutter))), e.node.dataset.lightbox = e.state.lightboxEnabled, e.bindListeners(), e
                }
                return e = d, (n = [{
                    key: "loadImages",
                    value: function(t) {
                        t.forEach(this.loadImage)
                    }
                }, {
                    key: "bindListeners",
                    value: function() {
                        var t = this;
                        this.ref.lightboxLinks.forEach((function(e) {
                            e.addEventListener("click", t.onLightboxOpen)
                        })), l.Z.on(this.onResize), this.stagger.start(), this.onResize()
                    }
                }, {
                    key: "unbindListeners",
                    value: function() {
                        var t = this;
                        this.ref.lightboxLinks.forEach((function(e) {
                            e.removeEventListener("click", t.onLightboxOpen)
                        })), l.Z.off(this.onResize)
                    }
                }, {
                    key: "getColumnData",
                    value: function(t, e) {
                        var n = (0, a.g2)(t),
                            r = (0, a.vd)(e);
                        return {
                            columns: n,
                            horizontalGutter: r,
                            verticalGutter: r
                        }
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.unbindListeners(), this.removeLightboxElementFromDOM(), this.stagger.destroy(), this.packer.destroy()
                    }
                }]) && g(e.prototype, n), f && g(e, f), d
            }(f.Z);
            E(k, "defaultProps", {
                listSelector: ".gallery-masonry-wrapper",
                itemSelector: ".gallery-masonry-item",
                lightboxLinkSelector: ".gallery-masonry-lightbox-link",
                imageSelector: "img",
                loadedItemClass: "loaded"
            }), e.default = function(t) {
                return new k(t)
            }
        },
        77716: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return d
                }
            });
            n(92338);
            var r = n(20809),
                o = n.n(r),
                i = n(45301),
                a = n(53659);

            function u(t) {
                return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, u(t)
            }

            function c(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function s(t, e) {
                return s = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, s(t, e)
            }

            function l(t) {
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
                    var n, r = y(t);
                    if (e) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }

            function f(t, e) {
                return !e || "object" !== u(e) && "function" != typeof e ? p(t) : e
            }

            function p(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function y(t) {
                return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, y(t)
            }

            function h(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var d = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && s(t, e)
                }(a, t);
                var e, n, r, i = l(a);

                function a(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), h(p(e = i.call(this, t)), "onNodeEnter", (function(t) {
                        var n = t.node,
                            r = e.props,
                            o = r.delay,
                            i = r.stagger;
                        n.__staggerEntered || (n.__staggerEntered = !0, n.__staggerTimeout = setTimeout((function() {
                            e.props.onEnter(t)
                        }), o + e.count * i), e.instant || (e.count += 1, e.count = Math.min(e.props.maxCount, e.count), e.countTimeout()))
                    })), e.state = {
                        isActive: !1
                    }, e.count = 0, e.baseTimeout = null, e.instant = !1, e.viewportWatcher = new(o()), e
                }
                return e = a, (n = [{
                    key: "start",
                    value: function() {
                        this.state.isActive || (this.setState({
                            isActive: !0
                        }), this.viewportWatcher.addNodes({
                            nodes: this.props.nodes,
                            range: [100, 0],
                            callbacks: {
                                onEnter: this.onNodeEnter
                            }
                        }))
                    }
                }, {
                    key: "countTimeout",
                    value: function() {
                        var t = this;
                        clearTimeout(this.baseTimeout), this.baseTimeout = setTimeout((function() {
                            t.count = 0
                        }), 10)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.viewportWatcher.destroy(), clearTimeout(this.baseTimeout), this.props.nodes.forEach((function(t) {
                            clearTimeout(t.__staggerTimeout)
                        }))
                    }
                }]) && c(e.prototype, n), r && c(e, r), a
            }(i.Z);
            h(d, "defaultProps", {
                delay: 50,
                stagger: 50,
                maxCount: 20,
                nodes: [],
                onEnter: a.Z
            })
        },
        68877: function(t, e, n) {
            n.d(e, {
                s: function() {
                    return u
                }
            });
            n(92338);
            var r = Array.prototype.slice,
                o = function() {
                    var t = r.call(arguments);
                    return function() {
                        for (var e = r.call(arguments), n = t.length - 1; n >= 0; n--) e = [t[n].apply(this, e)];
                        return e[0]
                    }
                },
                i = [],
                a = {
                    executeCallbacks: function() {
                        i.forEach((function(t) {
                            return t()
                        }))
                    },
                    trigger: function() {
                        this.executeCallbacks()
                    },
                    registerCallback: function(t) {
                        t && i.push(t)
                    },
                    removeCallback: function(t) {
                        if (t) {
                            var e = i.indexOf(t);
                            e > -1 && i.splice(e, 1)
                        }
                    },
                    on: function(t) {
                        this.registerCallback(t)
                    },
                    off: function(t) {
                        this.removeCallback(t)
                    }
                };
            window.history && window.history.pushState && (history.change = a, history.pushState = o((function() {
                return history.change.trigger()
            }), history.pushState), history.replaceState = o((function() {
                return history.change.trigger()
            }), history.replaceState), window.addEventListener("popstate", (function() {
                history.change.trigger()
            })));
            var u = function() {
                return window.history && window.history.pushState ? history : null
            }
        }
    }
]);
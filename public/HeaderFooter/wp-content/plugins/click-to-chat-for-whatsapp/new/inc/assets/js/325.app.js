! function(h) {
    h(function() {
        var t, e, a, n, o, i = window.location.href,
            c = void 0 !== document.title ? document.title : "",
            r = void 0 !== screen.width && 1024 < screen.width ? "no" : "yes";

        function d(e) {
            try {
                var t = parseInt(e.getAttribute("data-show_effect"));
                h(e).show(t)
            } catch (t) {
                e.style.display = "block"
            }
            try {
                n = (a = e).getAttribute("data-an_type"), setTimeout(function() {
                    a.classList.add("ht_ctc_animation", n)
                }, 120), h(".ht-ctc-chat").hover(function() {
                    h(".ht-ctc-chat .ht-ctc-cta-hover").show(120)
                }, function() {
                    h(".ht-ctc-chat .ht-ctc-cta-hover").hide(100)
                })
            } catch (t) {}
            var a, n
        }

        function s(t) {
            var e = t.getAttribute("data-number"),
                a = "Click to Chat for WhatsApp",
                n = "chat: " + e,
                o = c + ", " + i;
            "yes" == t.getAttribute("data-is_ga_enable") && ("undefined" != typeof gtag ? gtag("event", n, {
                event_category: a,
                event_label: o
            }) : "undefined" != typeof ga && void 0 !== ga.getAll ? ga.getAll()[0].send("event", a, n, o) : "undefined" != typeof __gaTracker && __gaTracker("send", "event", a, n, o)), "undefined" != typeof dataLayer && dataLayer.push({
                event: "Click to Chat",
                event_category: a,
                event_label: o,
                event_action: n
            }), "yes" == t.getAttribute("data-is_fb_pixel") && "undefined" != typeof fbq && fbq("trackCustom", "Click to Chat by HoliThemes", {
                Category: "Click to Chat for WhatsApp",
                return_type: "chat",
                ID: e,
                Title: c,
                URL: i
            })
        }(o = document.querySelector(".ht-ctc-chat")) && (t = o, "yes" == r ? "show" == t.getAttribute("data-display_mobile") && ((n = document.querySelector(".ht_ctc_desktop_chat")) && n.remove(), a = t.getAttribute("data-css"), e = t.getAttribute("data-position_mobile"), t.style.cssText = e + a, d(t)) : "show" == t.getAttribute("data-display_desktop") && ((n = document.querySelector(".ht_ctc_mobile_chat")) && n.remove(), a = t.getAttribute("data-css"), n = t.getAttribute("data-position"), t.style.cssText = n + a, d(t)), o.addEventListener("click", function() {
            ! function(t) {
                var e = t.getAttribute("data-number"),
                    a = t.getAttribute("data-pre_filled");
                a = a.replace(/\[url]/gi, i), a = encodeURIComponent(a);
                var n, o = t.getAttribute("data-webandapi");
                if ("" == e) return t.innerHTML = t.getAttribute("data-no_number");
                "webapi" == o ? (n = "yes" == r ? "https://api.whatsapp.com/send" : "https://web.whatsapp.com/send", window.open(n + "?phone=" + e + "&text=" + a, "_blank", "noopener")) : (n = "https://wa.me/", window.open(n + e + "?text=" + a, "_blank", "noopener"))
            }(o), s(o)
        })), h(document).on("click", ".ht-ctc-sc-chat", function() {
            var t, e = this.getAttribute("data-number"),
                a = (a = this.getAttribute("data-pre_filled")).replace(/\[url]/gi, i);
            a = encodeURIComponent(a), "webapi" == this.getAttribute("data-webandapi") ? (t = "yes" == r ? "https://api.whatsapp.com/send" : "https://web.whatsapp.com/send", window.open(t + "?phone=" + e + "&text=" + a, "_blank", "noopener")) : (t = "https://wa.me/", window.open(t + e + "?text=" + a, "_blank", "noopener")), s(this)
        })
    })
}(jQuery);
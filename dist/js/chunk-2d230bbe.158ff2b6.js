(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2d230bbe"],
  {
    ee19: function(t, a, s) {
      "use strict";
      s.r(a);
      var e = function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s(
            "div",
            { staticClass: "container", attrs: { id: "modal-signup" } },
            [
              s("div", { staticClass: "row justify-content-center" }, [
                s("div", { staticClass: "col-md-8" }, [
                  s("div", { staticClass: "card" }, [
                    s("div", { staticClass: "card-header" }, [
                      t._v("Register"),
                    ]),
                    s("div", { staticClass: "card-body" }, [
                      t.error
                        ? s("div", { staticClass: "alert alert-danger" }, [
                            t._v(t._s(t.error)),
                          ])
                        : t._e(),
                      s(
                        "form",
                        {
                          attrs: { action: "#" },
                          on: {
                            submit: function(a) {
                              return a.preventDefault(), t.submit(a);
                            },
                          },
                        },
                        [
                          s("div", { staticClass: "form-group row" }, [
                            s(
                              "label",
                              {
                                staticClass:
                                  "col-md-4 col-form-label text-md-right",
                                attrs: { for: "name" },
                              },
                              [t._v("Name")]
                            ),
                            s("div", { staticClass: "col-md-6" }, [
                              s("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.form.name,
                                    expression: "form.name",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: "name",
                                  type: "name",
                                  name: "name",
                                  value: "",
                                  required: "",
                                  autofocus: "",
                                },
                                domProps: { value: t.form.name },
                                on: {
                                  input: function(a) {
                                    a.target.composing ||
                                      t.$set(t.form, "name", a.target.value);
                                  },
                                },
                              }),
                            ]),
                          ]),
                          s("div", { staticClass: "form-group row" }, [
                            s(
                              "label",
                              {
                                staticClass:
                                  "col-md-4 col-form-label text-md-right",
                                attrs: { for: "email" },
                              },
                              [t._v("Email")]
                            ),
                            s("div", { staticClass: "col-md-6" }, [
                              s("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.form.email,
                                    expression: "form.email",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: "email",
                                  type: "email",
                                  name: "email",
                                  value: "",
                                  required: "",
                                  autofocus: "",
                                },
                                domProps: { value: t.form.email },
                                on: {
                                  input: function(a) {
                                    a.target.composing ||
                                      t.$set(t.form, "email", a.target.value);
                                  },
                                },
                              }),
                            ]),
                          ]),
                          s("div", { staticClass: "form-group row" }, [
                            s(
                              "label",
                              {
                                staticClass:
                                  "col-md-4 col-form-label text-md-right",
                                attrs: { for: "password" },
                              },
                              [t._v("Password")]
                            ),
                            s("div", { staticClass: "col-md-6" }, [
                              s("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.form.password,
                                    expression: "form.password",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: "password",
                                  type: "password",
                                  name: "password",
                                  required: "",
                                },
                                domProps: { value: t.form.password },
                                on: {
                                  input: function(a) {
                                    a.target.composing ||
                                      t.$set(
                                        t.form,
                                        "password",
                                        a.target.value
                                      );
                                  },
                                },
                              }),
                            ]),
                          ]),
                          t._m(0),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]
          );
        },
        r = [
          function() {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a;
            return s("div", { staticClass: "form-group row mb-0" }, [
              s("div", { staticClass: "col-md-8 offset-md-4" }, [
                s(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                  [t._v("Register")]
                ),
              ]),
            ]);
          },
        ],
        o = s("8aa5"),
        i = s.n(o),
        l = s("032d"),
        m = {
          data: function() {
            return { form: { name: "", email: "", password: "" }, error: null };
          },
          methods: {
            submit: function() {
              var t = this;
              i.a
                .auth()
                .createUserWithEmailAndPassword(
                  this.form.email,
                  this.form.password
                )
                .then(function(a) {
                  return l["a"]
                    .collection("users")
                    .doc(a.user.uid)
                    .set({ username: t.form.name });
                })
                ["catch"](function(a) {
                  t.error = a.message;
                });
            },
          },
        },
        n = m,
        c = s("2877"),
        d = Object(c["a"])(n, e, r, !1, null, null, null);
      a["default"] = d.exports;
    },
  },
]);
//# sourceMappingURL=chunk-2d230bbe.158ff2b6.js.map

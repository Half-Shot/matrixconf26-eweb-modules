"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[2040],{

/***/ "../../node_modules/.pnpm/@element-hq+element-call-component@https+++codeload.github.com+element-hq+element-call+_1332b967a6678d1d4d7ea56611e7f85c/node_modules/@element-hq/element-call-component/dist/app-B6vDgH9o.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a11y: () => (/* binding */ e),
/* harmony export */   action: () => (/* binding */ t),
/* harmony export */   call_ended_view: () => (/* binding */ n),
/* harmony export */   common: () => (/* binding */ r),
/* harmony export */   "default": () => (/* binding */ E),
/* harmony export */   header_label: () => (/* binding */ i),
/* harmony export */   join_existing_call_modal: () => (/* binding */ a),
/* harmony export */   layout_spotlight_label: () => (/* binding */ o),
/* harmony export */   lobby: () => (/* binding */ s),
/* harmony export */   logging_in: () => (/* binding */ c),
/* harmony export */   login_auth_links: () => (/* binding */ l),
/* harmony export */   login_title: () => (/* binding */ u),
/* harmony export */   rageshake_request_modal: () => (/* binding */ d),
/* harmony export */   rageshake_send_logs: () => (/* binding */ f),
/* harmony export */   rageshake_sending: () => (/* binding */ p),
/* harmony export */   rageshake_sending_logs: () => (/* binding */ m),
/* harmony export */   recaptcha_dismissed: () => (/* binding */ h),
/* harmony export */   recaptcha_not_loaded: () => (/* binding */ g),
/* harmony export */   register: () => (/* binding */ _),
/* harmony export */   register_auth_links: () => (/* binding */ v),
/* harmony export */   register_confirm_password_label: () => (/* binding */ y),
/* harmony export */   return_home_button: () => (/* binding */ b),
/* harmony export */   screenshare_button_label: () => (/* binding */ x),
/* harmony export */   settings: () => (/* binding */ S),
/* harmony export */   unauthenticated_view_body: () => (/* binding */ C),
/* harmony export */   unauthenticated_view_login_button: () => (/* binding */ w),
/* harmony export */   version: () => (/* binding */ T)
/* harmony export */ });
//#region locales/fa/app.json
var e = { user_menu: "فهرست کاربر" }, t = {
	close: "بستن",
	go: "رفتن",
	no: "خیر",
	register: "ثبت‌نام",
	remove: "حذف",
	sign_in: "ورود",
	sign_out: "خروج"
}, n = {
	create_account_button: "ساخت حساب کاربری",
	create_account_prompt: "<0>چرا یک رمز عبور برای حساب کاربری خود تنظیم نمی‌کنید؟</0><1>شما می‌توانید نام خود را حفظ کنید و یک آواتار برای تماس‌های آینده بسازید</1>",
	not_now_button: "الان نه، به صفحه اصلی برگردید"
}, r = {
	audio: "صدا",
	avatar: "آواتار",
	display_name: "نام نمایشی",
	home: "خانه",
	loading: "بارگزاری…",
	password: "رمز عبور",
	profile: "پروفایل",
	settings: "تنظیمات",
	username: "نام کاربری",
	video: "ویدیو"
}, i = "خانهٔ تماس المنت", a = {
	join_button: "بله، به تماس بپیوندید",
	text: "این تماس از قبل وجود دارد، می‌خواهید بپیوندید؟",
	title: "پیوست به تماس؟"
}, o = "نور افکن", s = { join_button: "پیوستن به تماس" }, c = "ورود…", l = "<0>ساخت حساب کاربری</0> Or <2>دسترسی به عنوان میهمان</2>", u = "ورود", d = {
	body: "کاربر دیگری در این تماس مشکلی دارد. برای تشخیص بهتر مشکل، بهتر است ما لاگ عیب‌یابی را جمع‌آوری کنیم.",
	title: "درخواست لاگ عیب‌یابی"
}, f = "ارسال لاگ‌های عیب‌یابی", p = "در حال ارسال…", m = "در حال ارسال باگ‌های عیب‌یابی…", h = "ریکپچا رد شد", g = "کپچا بارگیری نشد", _ = {
	passwords_must_match: "رمز عبور باید همخوانی داشته باشد",
	registering: "ثبت‌نام…"
}, v = "<0>از قبل حساب کاربری دارید؟</0><1><0>ورود</0> Or <2>به عنوان یک میهمان وارد شوید</2></1>", y = "تایید رمزعبور", b = "برگشت به صفحه اصلی", x = "اشتراک گذاری صفحه نمایش", S = {
	developer_tab_title: "توسعه دهنده",
	feedback_tab_h4: "بازخورد ارائه دهید",
	feedback_tab_send_logs_label: "شامل لاگ‌های عیب‌یابی"
}, C = "هنوز ثبت‌نام نکرده‌اید؟ <2>ساخت حساب کاربری</2>", w = "به حساب کاربری خود وارد شوید", T = "نسخه: {{نسخه}}", E = {
	a11y: e,
	action: t,
	call_ended_view: n,
	common: r,
	header_label: i,
	join_existing_call_modal: a,
	layout_spotlight_label: o,
	lobby: s,
	logging_in: c,
	login_auth_links: l,
	login_title: u,
	rageshake_request_modal: d,
	rageshake_send_logs: f,
	rageshake_sending: p,
	rageshake_sending_logs: m,
	recaptcha_dismissed: h,
	recaptcha_not_loaded: g,
	register: _,
	register_auth_links: v,
	register_confirm_password_label: y,
	return_home_button: b,
	screenshare_button_label: x,
	settings: S,
	unauthenticated_view_body: C,
	unauthenticated_view_login_button: w,
	version: T
};
//#endregion




/***/ }

}]);
"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[6017],{

/***/ "../../node_modules/.pnpm/@element-hq+element-call-component@https+++codeload.github.com+element-hq+element-call+_1332b967a6678d1d4d7ea56611e7f85c/node_modules/@element-hq/element-call-component/dist/app-Beqv6nLB.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a11y: () => (/* binding */ e),
/* harmony export */   action: () => (/* binding */ t),
/* harmony export */   analytics_notice: () => (/* binding */ n),
/* harmony export */   call_ended_view: () => (/* binding */ r),
/* harmony export */   call_name: () => (/* binding */ i),
/* harmony export */   common: () => (/* binding */ a),
/* harmony export */   "default": () => (/* binding */ K),
/* harmony export */   disconnected_banner: () => (/* binding */ o),
/* harmony export */   hangup_button_label: () => (/* binding */ s),
/* harmony export */   header_label: () => (/* binding */ c),
/* harmony export */   header_participants_label: () => (/* binding */ l),
/* harmony export */   invite_modal: () => (/* binding */ u),
/* harmony export */   join_existing_call_modal: () => (/* binding */ d),
/* harmony export */   layout_grid_label: () => (/* binding */ f),
/* harmony export */   layout_spotlight_label: () => (/* binding */ p),
/* harmony export */   lobby: () => (/* binding */ m),
/* harmony export */   logging_in: () => (/* binding */ h),
/* harmony export */   login_auth_links: () => (/* binding */ g),
/* harmony export */   login_title: () => (/* binding */ _),
/* harmony export */   microphone_off: () => (/* binding */ v),
/* harmony export */   microphone_on: () => (/* binding */ y),
/* harmony export */   mute_microphone_button_label: () => (/* binding */ b),
/* harmony export */   rageshake_button_error_caption: () => (/* binding */ x),
/* harmony export */   rageshake_request_modal: () => (/* binding */ S),
/* harmony export */   rageshake_send_logs: () => (/* binding */ C),
/* harmony export */   rageshake_sending: () => (/* binding */ w),
/* harmony export */   rageshake_sending_logs: () => (/* binding */ T),
/* harmony export */   rageshake_sent: () => (/* binding */ E),
/* harmony export */   recaptcha_dismissed: () => (/* binding */ D),
/* harmony export */   recaptcha_not_loaded: () => (/* binding */ O),
/* harmony export */   register: () => (/* binding */ k),
/* harmony export */   register_auth_links: () => (/* binding */ A),
/* harmony export */   register_confirm_password_label: () => (/* binding */ j),
/* harmony export */   return_home_button: () => (/* binding */ M),
/* harmony export */   screenshare_button_label: () => (/* binding */ N),
/* harmony export */   settings: () => (/* binding */ P),
/* harmony export */   star_rating_input_label_one: () => (/* binding */ F),
/* harmony export */   star_rating_input_label_other: () => (/* binding */ I),
/* harmony export */   start_new_call: () => (/* binding */ L),
/* harmony export */   start_video_button_label: () => (/* binding */ R),
/* harmony export */   stop_screenshare_button_label: () => (/* binding */ z),
/* harmony export */   stop_video_button_label: () => (/* binding */ B),
/* harmony export */   submitting: () => (/* binding */ V),
/* harmony export */   unauthenticated_view_body: () => (/* binding */ H),
/* harmony export */   unauthenticated_view_login_button: () => (/* binding */ U),
/* harmony export */   unmute_microphone_button_label: () => (/* binding */ W),
/* harmony export */   version: () => (/* binding */ G)
/* harmony export */ });
//#region locales/zh-Hant/app.json
var e = { user_menu: "使用者選單" }, t = {
	close: "關閉",
	copy_link: "複製連結",
	go: "前往",
	invite: "邀請",
	no: "否",
	register: "註冊",
	remove: "移除",
	sign_in: "登入",
	sign_out: "登出",
	submit: "遞交"
}, n = "參與此測試版即表示您同意蒐集匿名資料，我們使用這些資料來改進產品。您可以在我們的<2>隱私政策</2>與我們的 <5>Cookie 政策</5> 中找到關於我們追蹤哪些資料的更多資訊。", r = {
	create_account_button: "建立帳號",
	create_account_prompt: "<0>何不設定密碼以保留此帳號？</0><1>您可以保留暱稱並設定頭像，以便未來通話時使用</1>",
	feedback_done: "<0>感謝您的回饋！</0>",
	feedback_prompt: "<0>我們想要聽到您的回饋，如此我們才能改善您的體驗。</0>",
	headline: "{{displayName}}，您的通話已結束。",
	not_now_button: "現在不行，回到首頁",
	reconnect_button: "重新連線",
	survey_prompt: "進展如何？"
}, i = "通話名稱", a = {
	audio: "語音",
	avatar: "大頭照",
	display_name: "顯示名稱",
	encrypted: "已加密",
	home: "首頁",
	loading: "載入中…",
	password: "密碼",
	profile: "個人檔案",
	settings: "設定",
	unencrypted: "未加密",
	username: "使用者名稱",
	video: "視訊"
}, o = "到伺服器的連線已遺失。", s = "結束通話", c = "Element Call 首頁", l = "參與者", u = {
	link_copied_toast: "連結已複製到剪貼簿",
	title: "邀請到此通話"
}, d = {
	join_button: "是，加入對話",
	text: "通話已經開始，請問您要加入嗎？",
	title: "加入已開始的通話嗎？"
}, f = "網格", p = "聚焦", m = {
	join_button: "加入通話",
	leave_button: "回到最近的通話"
}, h = "登入中…", g = "<0>建立帳號</0> 或<2>以訪客身份登入</2>", _ = "登入", v = "麥克風關閉", y = "麥克風開啟", b = "將麥克風靜音", x = "重試傳送紀錄檔", S = {
	body: "這通對話中的另一位使用者遇到了某些問題。為了診斷問題，我們將會建立除錯紀錄。",
	title: "請求偵錯報告"
}, C = "傳送除錯紀錄", w = "傳送中…", T = "傳送除錯記錄檔中…", E = "感謝！", D = "略過驗證碼", O = "驗證碼未載入", k = {
	passwords_must_match: "密碼必須相符",
	registering: "註冊中…"
}, A = "<0>已經有帳號?</0><1><0>登入</0> 或<2>以訪客身份登入</2></1>", j = "確認密碼", M = "回到首頁", N = "分享畫面", P = {
	developer_tab_title: "開發者",
	feedback_tab_body: "若您遇到問題或只是想提供一些回饋，請在下方傳送簡短說明給我們。",
	feedback_tab_description_label: "您的回饋",
	feedback_tab_h4: "遞交回覆",
	feedback_tab_send_logs_label: "包含除錯紀錄",
	feedback_tab_thank_you: "感謝，我們已經收到您的回饋了！",
	feedback_tab_title: "回饋",
	opt_in_description: "<0></0><1></1>您可以透過取消核取此方塊來撤回同意。若您目前正在通話中，此設定將在通話結束時生效。"
}, F = "{{count}} 個星星", I = "{{count}} 個星星", L = "開始新通話", R = "開始影片", z = "分享畫面", B = "停止影片", V = "正在遞交……", H = "還沒註冊嗎？<2>建立帳號</2>", U = "登入您的帳號", W = "將麥克風取消靜音", G = "版本： {{version}}", K = {
	a11y: e,
	action: t,
	analytics_notice: n,
	call_ended_view: r,
	call_name: i,
	common: a,
	disconnected_banner: o,
	hangup_button_label: s,
	header_label: c,
	header_participants_label: l,
	invite_modal: u,
	join_existing_call_modal: d,
	layout_grid_label: f,
	layout_spotlight_label: p,
	lobby: m,
	logging_in: h,
	login_auth_links: g,
	login_title: _,
	microphone_off: v,
	microphone_on: y,
	mute_microphone_button_label: b,
	rageshake_button_error_caption: x,
	rageshake_request_modal: S,
	rageshake_send_logs: C,
	rageshake_sending: w,
	rageshake_sending_logs: T,
	rageshake_sent: E,
	recaptcha_dismissed: D,
	recaptcha_not_loaded: O,
	register: k,
	register_auth_links: A,
	register_confirm_password_label: j,
	return_home_button: M,
	screenshare_button_label: N,
	settings: P,
	star_rating_input_label_one: F,
	star_rating_input_label_other: I,
	start_new_call: L,
	start_video_button_label: R,
	stop_screenshare_button_label: z,
	stop_video_button_label: B,
	submitting: V,
	unauthenticated_view_body: H,
	unauthenticated_view_login_button: U,
	unmute_microphone_button_label: W,
	version: G
};
//#endregion




/***/ }

}]);
"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[5581],{

/***/ "../../node_modules/.pnpm/@element-hq+element-call-component@https+++codeload.github.com+element-hq+element-call+_1332b967a6678d1d4d7ea56611e7f85c/node_modules/@element-hq/element-call-component/dist/app-C4Ag-jLh.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a11y: () => (/* binding */ e),
/* harmony export */   action: () => (/* binding */ t),
/* harmony export */   analytics_notice: () => (/* binding */ n),
/* harmony export */   call_ended_view: () => (/* binding */ r),
/* harmony export */   call_name: () => (/* binding */ i),
/* harmony export */   common: () => (/* binding */ a),
/* harmony export */   "default": () => (/* binding */ Y),
/* harmony export */   disconnected_banner: () => (/* binding */ o),
/* harmony export */   hangup_button_label: () => (/* binding */ s),
/* harmony export */   header_label: () => (/* binding */ c),
/* harmony export */   header_participants_label: () => (/* binding */ l),
/* harmony export */   invite_modal: () => (/* binding */ u),
/* harmony export */   join_existing_call_modal: () => (/* binding */ d),
/* harmony export */   layout_grid_label: () => (/* binding */ f),
/* harmony export */   layout_spotlight_label: () => (/* binding */ p),
/* harmony export */   lobby: () => (/* binding */ m),
/* harmony export */   log_in: () => (/* binding */ h),
/* harmony export */   logging_in: () => (/* binding */ g),
/* harmony export */   login_auth_links: () => (/* binding */ _),
/* harmony export */   login_auth_links_prompt: () => (/* binding */ v),
/* harmony export */   login_subheading: () => (/* binding */ y),
/* harmony export */   login_title: () => (/* binding */ b),
/* harmony export */   microphone_off: () => (/* binding */ x),
/* harmony export */   microphone_on: () => (/* binding */ S),
/* harmony export */   mute_microphone_button_label: () => (/* binding */ C),
/* harmony export */   rageshake_button_error_caption: () => (/* binding */ w),
/* harmony export */   rageshake_request_modal: () => (/* binding */ T),
/* harmony export */   rageshake_send_logs: () => (/* binding */ E),
/* harmony export */   rageshake_sending: () => (/* binding */ D),
/* harmony export */   rageshake_sending_logs: () => (/* binding */ O),
/* harmony export */   rageshake_sent: () => (/* binding */ k),
/* harmony export */   recaptcha_dismissed: () => (/* binding */ A),
/* harmony export */   recaptcha_not_loaded: () => (/* binding */ j),
/* harmony export */   register: () => (/* binding */ M),
/* harmony export */   register_auth_links: () => (/* binding */ N),
/* harmony export */   register_confirm_password_label: () => (/* binding */ P),
/* harmony export */   register_heading: () => (/* binding */ F),
/* harmony export */   return_home_button: () => (/* binding */ I),
/* harmony export */   screenshare_button_label: () => (/* binding */ L),
/* harmony export */   settings: () => (/* binding */ R),
/* harmony export */   start_new_call: () => (/* binding */ z),
/* harmony export */   start_video_button_label: () => (/* binding */ B),
/* harmony export */   stop_screenshare_button_label: () => (/* binding */ V),
/* harmony export */   stop_video_button_label: () => (/* binding */ H),
/* harmony export */   submitting: () => (/* binding */ U),
/* harmony export */   unauthenticated_view_body: () => (/* binding */ W),
/* harmony export */   unauthenticated_view_login_button: () => (/* binding */ G),
/* harmony export */   unmute_microphone_button_label: () => (/* binding */ K),
/* harmony export */   version: () => (/* binding */ q),
/* harmony export */   video_tile: () => (/* binding */ J)
/* harmony export */ });
//#region locales/ja/app.json
var e = { user_menu: "ユーザーメニュー" }, t = {
	close: "閉じる",
	copy_link: "リンクをコピー",
	go: "続行",
	invite: "招待",
	no: "いいえ",
	register: "登録",
	remove: "削除",
	sign_in: "サインイン",
	sign_out: "サインアウト",
	submit: "送信"
}, n = "ベータ版への参加と同時に、製品の改善のために匿名データを収集することに同意したことになります。追跡するデータの詳細については、<2>プライバシーポリシー</2>と<6>クッキーポリシー</6>をご確認下さい。", r = {
	create_account_button: "アカウントを作成",
	create_account_prompt: "<0>パスワードを設定してアカウント設定を保持してみませんか?</0><1>名前とアバターの設定を次の通話に利用する事ができます。</1>",
	feedback_done: "<0>フィードバックありがとうございます！</0>",
	feedback_prompt: "<0>品質向上のため、皆様のフィードバックをお待ちしております。</0>",
	headline: "{{displayName}} さんの通話は終了しました。",
	not_now_button: "終了せずホーム画面に戻る",
	reconnect_button: "再接続",
	survey_prompt: "通話はどうでしたか？"
}, i = "通話名", a = {
	analytics: "分析",
	audio: "音声",
	avatar: "アバター",
	display_name: "表示名",
	encrypted: "暗号化済み",
	home: "ホーム",
	loading: "読み込んでいます…",
	options: "オプション",
	password: "パスワード",
	profile: "プロフィール",
	settings: "設定",
	unencrypted: "暗号化されていません",
	username: "ユーザー名",
	video: "ビデオ"
}, o = "サーバーへの接続が失われました。", s = "通話終了", c = "Element Call ホーム", l = "参加者", u = {
	link_copied_toast: "リンクがクリップボードにコピーされました",
	title: "この通話に招待する"
}, d = {
	join_button: "はい、通話に参加",
	text: "この通話は既に存在します。参加しますか？",
	title: "既存の通話に参加しますか？"
}, f = "グリッド", p = "スポットライト", m = {
	join_button: "通話に参加",
	leave_button: "最近に戻る"
}, h = "ログイン", g = "ログインしています…", _ = "<0>アカウントを作成</0>または<2>ゲストとしてアクセス</2>", v = "登録はまだですか？", y = "Element を続けるには", b = "ログイン", x = "マイクオフ", S = "マイクオン", C = "ミュート", w = "ログ送信の再試行", T = {
	body: "この通話に参加している別のユーザーに問題が発生しています。この問題のより良い診断のため、デバッグ ログを収集したいと考えています。",
	title: "デバッグログを要求"
}, E = "デバッグログを送信", D = "送信しています…", O = "デバッグログを送信しています…", k = "ありがとうございます！", A = "Recaptcha は却下されました", j = "Recaptcha が読み込まれませんでした", M = {
	passwords_must_match: "パスワードが一致する必要があります",
	registering: "登録しています…"
}, N = "<0>既にアカウントをお持ちですか？</0><1><0>ログイン</0>または<2>ゲストとしてアクセス</2></1>", P = "パスワードを確認", F = "アカウントを作成", I = "ホーム画面に戻る", L = "画面共有", R = {
	developer_tab_title: "開発者",
	feedback_tab_body: "問題が発生している場合、もしくはフィードバックを提供したい場合は、以下に簡単な説明を入力してお送りください。",
	feedback_tab_description_label: "フィードバック",
	feedback_tab_h4: "フィードバックを送信",
	feedback_tab_send_logs_label: "デバッグログを含める",
	feedback_tab_thank_you: "ありがとうございます。フィードバックを受け取りました！",
	feedback_tab_title: "フィードバック",
	opt_in_description: "<0></0><1></1>このボックスのチェックを外すと同意を取り消すことができます。現在通話中の場合、この変更は通話終了後に有効になります。"
}, z = "新しい通話を開始", B = "ビデオを開始", V = "共有画面", H = "ビデオを停止", U = "送信中…", W = "アカウントがありませんか？ <2>アカウントを作成</2>", G = "アカウントにログイン", K = "マイクのミュート解除", q = "バージョン：{{version}}", J = {
	mute_for_me: "ミュートする",
	volume: "ボリューム"
}, Y = {
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
	log_in: h,
	logging_in: g,
	login_auth_links: _,
	login_auth_links_prompt: v,
	login_subheading: y,
	login_title: b,
	microphone_off: x,
	microphone_on: S,
	mute_microphone_button_label: C,
	rageshake_button_error_caption: w,
	rageshake_request_modal: T,
	rageshake_send_logs: E,
	rageshake_sending: D,
	rageshake_sending_logs: O,
	rageshake_sent: k,
	recaptcha_dismissed: A,
	recaptcha_not_loaded: j,
	register: M,
	register_auth_links: N,
	register_confirm_password_label: P,
	register_heading: F,
	return_home_button: I,
	screenshare_button_label: L,
	settings: R,
	start_new_call: z,
	start_video_button_label: B,
	stop_screenshare_button_label: V,
	stop_video_button_label: H,
	submitting: U,
	unauthenticated_view_body: W,
	unauthenticated_view_login_button: G,
	unmute_microphone_button_label: K,
	version: q,
	video_tile: J
};
//#endregion




/***/ }

}]);
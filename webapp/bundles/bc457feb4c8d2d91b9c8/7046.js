"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[7046],{

/***/ "../../node_modules/.pnpm/@element-hq+element-call-component@https+++codeload.github.com+element-hq+element-call+_1332b967a6678d1d4d7ea56611e7f85c/node_modules/@element-hq/element-call-component/dist/app-BRIeV-WE.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a11y: () => (/* binding */ e),
/* harmony export */   action: () => (/* binding */ t),
/* harmony export */   analytics_notice: () => (/* binding */ n),
/* harmony export */   call_ended_view: () => (/* binding */ r),
/* harmony export */   call_name: () => (/* binding */ i),
/* harmony export */   common: () => (/* binding */ a),
/* harmony export */   "default": () => (/* binding */ le),
/* harmony export */   developer_mode: () => (/* binding */ o),
/* harmony export */   disconnected_banner: () => (/* binding */ s),
/* harmony export */   error: () => (/* binding */ c),
/* harmony export */   group_call_loader: () => (/* binding */ l),
/* harmony export */   handset: () => (/* binding */ u),
/* harmony export */   hangup_button_label: () => (/* binding */ d),
/* harmony export */   header_label: () => (/* binding */ f),
/* harmony export */   header_participants_label: () => (/* binding */ p),
/* harmony export */   invite_modal: () => (/* binding */ m),
/* harmony export */   join_existing_call_modal: () => (/* binding */ h),
/* harmony export */   layout_grid_label: () => (/* binding */ g),
/* harmony export */   layout_spotlight_label: () => (/* binding */ _),
/* harmony export */   lobby: () => (/* binding */ v),
/* harmony export */   log_in: () => (/* binding */ y),
/* harmony export */   logging_in: () => (/* binding */ b),
/* harmony export */   login_auth_links: () => (/* binding */ x),
/* harmony export */   login_auth_links_prompt: () => (/* binding */ S),
/* harmony export */   login_subheading: () => (/* binding */ C),
/* harmony export */   login_title: () => (/* binding */ w),
/* harmony export */   microphone_off: () => (/* binding */ T),
/* harmony export */   microphone_on: () => (/* binding */ E),
/* harmony export */   mute_microphone_button_label: () => (/* binding */ D),
/* harmony export */   participant_count_one: () => (/* binding */ O),
/* harmony export */   participant_count_other: () => (/* binding */ k),
/* harmony export */   qr_code: () => (/* binding */ A),
/* harmony export */   rageshake_button_error_caption: () => (/* binding */ j),
/* harmony export */   rageshake_request_modal: () => (/* binding */ M),
/* harmony export */   rageshake_send_logs: () => (/* binding */ N),
/* harmony export */   rageshake_sending: () => (/* binding */ P),
/* harmony export */   rageshake_sending_logs: () => (/* binding */ F),
/* harmony export */   rageshake_sent: () => (/* binding */ I),
/* harmony export */   recaptcha_dismissed: () => (/* binding */ L),
/* harmony export */   recaptcha_not_loaded: () => (/* binding */ R),
/* harmony export */   recaptcha_ssla_caption: () => (/* binding */ z),
/* harmony export */   register: () => (/* binding */ B),
/* harmony export */   register_auth_links: () => (/* binding */ V),
/* harmony export */   register_confirm_password_label: () => (/* binding */ H),
/* harmony export */   register_heading: () => (/* binding */ U),
/* harmony export */   return_home_button: () => (/* binding */ W),
/* harmony export */   room_auth_view_continue_button: () => (/* binding */ G),
/* harmony export */   room_auth_view_ssla_caption: () => (/* binding */ K),
/* harmony export */   screenshare_button_label: () => (/* binding */ q),
/* harmony export */   settings: () => (/* binding */ J),
/* harmony export */   star_rating_input_label_one: () => (/* binding */ Y),
/* harmony export */   star_rating_input_label_other: () => (/* binding */ X),
/* harmony export */   start_new_call: () => (/* binding */ Z),
/* harmony export */   start_video_button_label: () => (/* binding */ Q),
/* harmony export */   stop_screenshare_button_label: () => (/* binding */ $),
/* harmony export */   stop_video_button_label: () => (/* binding */ ee),
/* harmony export */   submitting: () => (/* binding */ te),
/* harmony export */   switch_camera: () => (/* binding */ ne),
/* harmony export */   unauthenticated_view_body: () => (/* binding */ re),
/* harmony export */   unauthenticated_view_login_button: () => (/* binding */ ie),
/* harmony export */   unauthenticated_view_ssla_caption: () => (/* binding */ ae),
/* harmony export */   unmute_microphone_button_label: () => (/* binding */ oe),
/* harmony export */   version: () => (/* binding */ se),
/* harmony export */   video_tile: () => (/* binding */ ce)
/* harmony export */ });
//#region locales/sv/app.json
var e = { user_menu: "Användarmeny" }, t = {
	close: "Stäng",
	copy_link: "Kopiera länk",
	edit: "Redigera",
	go: "Gå",
	invite: "Bjud in",
	lower_hand: "Sänk handen",
	no: "Nej",
	pick_reaction: "Välj reaktion",
	raise_hand: "Räck upp handen",
	register: "Registrera",
	remove: "Ta bort",
	show_less: "Visa mindre",
	show_more: "Visa mer",
	sign_in: "Logga in",
	sign_out: "Logga ut",
	submit: "Skicka",
	upload_file: "Ladda upp fil"
}, n = "Genom att delta i denna beta samtycker du till insamling av anonyma uppgifter, som vi använder för att förbättra produkten. Du kan hitta mer information om vilka data vi spårar i vår <2>integritetspolicy</2> och vår <5>cookiepolicy</5>.", r = {
	create_account_button: "Skapa konto",
	create_account_prompt: "<0>Varför inte avsluta genom att skapa ett lösenord för att behålla ditt konto?</0><1>Du kommer att kunna behålla ditt namn och ställa in en avatar för användning vid framtida samtal</1>",
	feedback_done: "<0>Tack för din feedback! </0>",
	feedback_prompt: "<0>Vi vill gärna höra din feedback så att vi kan förbättra din upplevelse. </0>",
	headline: "{{displayName}}, ditt samtal har avslutats.",
	not_now_button: "Inte nu, återgå till startskärmen",
	reconnect_button: "Återanslut",
	survey_prompt: "Hur gick det?"
}, i = "Namn på samtal", a = {
	analytics: "Analysdata",
	audio: "Ljud",
	avatar: "Avatar",
	back: "Tillbaka",
	display_name: "Visningsnamn",
	encrypted: "Krypterad",
	home: "Hem",
	loading: "Laddar …",
	next: "Nästa",
	options: "Alternativ",
	password: "Lösenord",
	preferences: "Alternativ",
	profile: "Profil",
	reaction: "Reaktion",
	reactions: "Reaktioner",
	reconnecting: "Återansluter …",
	settings: "Inställningar",
	unencrypted: "Inte krypterad",
	username: "Användarnamn",
	video: "Video"
}, o = {
	always_show_iphone_earpiece: "Visa iPhone-hörsnäckealternativ på alla plattformar",
	crypto_version: "Kryptoversion: {{version}}",
	custom_livekit_url: {
		current_url: "För närvarande inställd på: ",
		from_config: "För närvarande är ingen överskrivning inställd. URL från well-known eller konfig används.",
		label: "Anpassad Livekit-url",
		reset: "Återställ överskrivning",
		save: "Spara",
		saving: "Sparar…"
	},
	debug_tile_layout_label: "Felsök panelarrangemang",
	device_id: "Enhets-ID: {{id}}",
	duplicate_tiles_label: "Antal ytterligare panelkopior per deltagare",
	environment_variables: "Miljövariabler",
	hostname: "Värdnamn: {{hostname}}",
	livekit_server_info: "LiveKit-serverinfo",
	livekit_sfu: "LiveKit SFU: {{url}}",
	matrixRTCMode: {
		Comptibility: {
			description: "Kompatibel med hemservrar som inte stöder sticky events (men alla andra EC-klienter är v0.17.0 eller senare)",
			label: "Kompatibilitet: tillståndshändelser och multi-SFU"
		},
		Legacy: {
			description: "Kompatibel med äldre versioner av EC som inte stöder multi SFU",
			label: "Legacy: state events och oldest membership SFU"
		},
		Matrix_2_0: {
			description: "Endast kompatibel med hemservrar som stöder sticky events och alla EC-klienter v0.17.0 eller senare",
			label: "Matrix 2.0: sticky events & multi SFU"
		},
		title: "MatrixRTC-läge"
	},
	matrix_id: "Matrix-ID: {{id}}",
	mute_all_audio: "Tysta allt ljud (deltagare, reaktioner, anslutningsljud)",
	show_connection_stats: "Visa anslutningsstatistik",
	url_params: "URL-parametrar"
}, s = "Anslutningen till servern har brutits.", c = {
	call_is_not_supported: "Call stöds inte",
	call_not_found: "Samtal hittades inte",
	call_not_found_description: "<0>Den länken verkar inte tillhöra något befintligt samtal. Kontrollera att du har rätt länk, eller <2>skapa en ny</2>.</0>",
	connection_lost: "Anslutning förlorad",
	connection_lost_description: "Du kopplades bort från samtalet.",
	e2ee_unsupported: "Inkompatibel webbläsare",
	e2ee_unsupported_description: "Din webbläsare stöder inte krypterade samtal. Webbläsare som stöds inkluderar Chrome, Safari och Firefox 117+.",
	failed_to_start_livekit: "Misslyckades att starta Livekit-anslutning",
	generic: "Något gick fel",
	generic_description: "Att skicka felsökningsloggar hjälper oss att spåra problemet.",
	insufficient_capacity: "Otillräcklig kapacitet",
	insufficient_capacity_description: "Servern har nått sin maximala kapacitet och du kan inte gå med i samtalet just nu. Försök igen senare, eller kontakta serveradministratören om problemet kvarstår.",
	matrix_rtc_transport_missing: "Servern är inte konfigurerad för att fungera med {{brand}}. Vänligen kontakta din serveradministratör (Domän: {{domain}}, Felkod: {{ errorCode }}).",
	membership_manager: "Fel i medlemskapshanteraren",
	membership_manager_description: "Medlemskapshanteraren var tvungen att stängas av. Detta orsakas av många misslyckade nätverksförfrågningar i rad.",
	no_matrix_2_authorization_service: "Auktoriseringstjänsten för din medieserver (SFU) är föråldrad.",
	open_elsewhere: "Öppnades i en annan flik",
	open_elsewhere_description: "{{brand}} har öppnats i en annan flik. Om det inte låter rätt, pröva att ladda om sidan.",
	room_creation_restricted: "Misslyckades att skapa samtal",
	room_creation_restricted_description: "Samtalsskapande kan vara begränsat till endast behöriga användare. Försök igen senare eller kontakta serveradministratören om problemet kvarstår.",
	unexpected_ec_error: "Ett oväntat fel inträffade (<0>Felkod:</0> <1>{{ errorCode }}</1>). Kontakta din serveradministratör."
}, l = {
	banned_body: "Du har bannats från rummet.",
	banned_heading: "Bannad",
	call_ended_body: "Du har har tagits bort från samtalet.",
	call_ended_heading: "Samtal avslutat",
	knock_reject_body: "Rumsmedlemmarna avslog din begäran om att gå med.",
	knock_reject_heading: "Inte tillåten att gå med",
	reason: "Anledning"
}, u = {
	overlay_back_button: "Tillbaka till högtalarläge",
	overlay_description: "Fungerar bara när appen används",
	overlay_title: "Telefonläge"
}, d = "Avsluta samtal", f = "Element Call Hem", p = "Deltagare", m = {
	link_copied_toast: "Länk kopierad till klippbordet",
	title: "Bjud in till det här samtalet"
}, h = {
	join_button: "Ja, gå med i samtal",
	text: "Det här samtalet finns redan, vill du gå med?",
	title: "Gå med i befintligt samtal?"
}, g = "Rutnät", _ = "Spotlight", v = {
	ask_to_join: "Be om att delta i samtalet",
	join_as_guest: "Gå med som gäst",
	join_button: "Anslut till samtal",
	leave_button: "Tillbaka till senaste",
	waiting_for_invite: "Begäran skickad"
}, y = "Logga in", b = "Loggar in …", x = "<0>Skapa ett konto</0> eller <2>Kom åt som gäst</2>", S = "Inte registrerad än?", C = "För att fortsätta till Element", w = "Logga in", T = "Mikrofon av", E = "Mikrofon på", D = "Tysta mikrofonen", O = "{{count, number}}", k = "{{count, number}}", A = "QR-kod", j = "Försök att skicka loggar igen", M = {
	body: "En annan användare i det här samtalet har ett problem. För att bättre kunna diagnostisera dessa problem vill vi samla in en felsökningslogg.",
	title: "Begäran om felsökningslogg"
}, N = "Skicka felsökningsloggar", P = "Skickar …", F = "Skickar felsökningsloggar …", I = "Tack!", L = "Recaptcha avvisad", R = "Recaptcha laddades inte", z = "Denna webbplats skyddas av ReCAPTCHA och Googles <2>sekretesspolicy</2> och <6>användarvillkor</6> gäller.<9></9>Genom att klicka på ”Registrera” godkänner du vårt <12>licensavtal för programvara och tjänster</12>", B = {
	passwords_must_match: "Lösenorden måste överensstämma",
	registering: "Registrerar …"
}, V = "<0>Har du redan ett konto?</0><1><0>Logga in</0> eller <2>kom åt som en gäst</2></1>", H = "Bekräfta lösenord", U = "Skapa ditt konto", W = "Återgå till startskärmen", G = "Fortsätt", K = "Genom att klicka på ”Anslut till samtal nu” godkänner du vårt <2>licensavtal för programvara och tjänster</2>", q = "Dela skärm", J = {
	audio_tab: {
		effect_volume_description: "Justera volymen vid vilken reaktioner och handuppräckningseffekter spelas",
		effect_volume_label: "Ljudeffektsvolym"
	},
	background_blur_header: "Bakgrund",
	background_blur_label: "Gör bakgrunden i videon suddig",
	blur_not_supported_by_browser: "(Bakgrundssuddighet stöds inte av den här enheten.)",
	developer_tab_title: "Utvecklare",
	devices: {
		camera: "Kamera",
		camera_numbered: "Kamera {{n}}",
		change_device_button: "Byt ljudenhet",
		default: "Förval",
		default_named: "Förval <2>({{name}})</2>",
		handset: "Telefonlur",
		loudspeaker: "Högtalare",
		microphone: "Mikrofon",
		microphone_numbered: "Mikrofon {{n}}",
		speaker: "Högtalare",
		speaker_numbered: "Högtalare {{n}}"
	},
	feedback_tab_body: "Om du har problem eller bara vill ge lite återkoppling, skicka oss en kort beskrivning nedan.",
	feedback_tab_description_label: "Din återkoppling",
	feedback_tab_h4: "Skicka återkoppling",
	feedback_tab_send_logs_label: "Inkludera felsökningsloggar",
	feedback_tab_thank_you: "Tack, vi har tagit emot din återkoppling!",
	feedback_tab_title: "Återkoppling",
	opt_in_description: "<0></0><1></1>Du kan återkalla ditt samtycke genom att avmarkera den här rutan. Om du för närvarande är i ett samtal träder den här inställningen i kraft vid slutet av samtalet.",
	preferences_tab: {
		developer_mode_label: "Utvecklarläge",
		developer_mode_label_description: "Aktivera utvecklarläger och visa fliken utvecklarinställningar.",
		introduction: "Här kan du konfigurera extra alternativ för en förbättrad upplevelse.",
		reactions_play_sound_description: "Spela en ljudeffekt när någon skickar in en reaktion i ett samtal.",
		reactions_play_sound_label: "Spela reaktionsljud",
		reactions_show_description: "Visa en animering när någon skickar en reaktion.",
		reactions_show_label: "Visa reaktioner",
		show_hand_raised_timer_description: "Visa en timer när en deltagare räcker upp handen",
		show_hand_raised_timer_label: "Visa varaktighet för handuppräckning"
	}
}, Y = "{{count}} stjärna", X = "{{count}} stjärnor", Z = "Starta ett nytt samtal", Q = "Starta video", $ = "Delar skärm", ee = "Stoppa video", te = "Skickar …", ne = "Byt kamera", re = "Inte registrerad än? <2>Skapa ett konto</2>", ie = "Logga in på ditt konto", ae = "Genom att klicka på ”Kör” godkänner du vårt <2>licensavtal för programvara och tjänster</2>", oe = "Sluta tysta mikrofonen", se = "Version: {{version}}", ce = {
	always_show: "Visa alltid",
	camera_starting: "Video laddar …",
	collapse: "Kollapsa",
	expand: "Expandera",
	mute_for_me: "Tysta för mig",
	muted_for_me: "Tystad för mig",
	volume: "Volym",
	waiting_for_media: "Väntar på media …"
}, le = {
	a11y: e,
	action: t,
	analytics_notice: n,
	call_ended_view: r,
	call_name: i,
	common: a,
	developer_mode: o,
	disconnected_banner: s,
	error: c,
	group_call_loader: l,
	handset: u,
	hangup_button_label: d,
	header_label: f,
	header_participants_label: p,
	invite_modal: m,
	join_existing_call_modal: h,
	layout_grid_label: g,
	layout_spotlight_label: _,
	lobby: v,
	log_in: y,
	logging_in: b,
	login_auth_links: x,
	login_auth_links_prompt: S,
	login_subheading: C,
	login_title: w,
	microphone_off: T,
	microphone_on: E,
	mute_microphone_button_label: D,
	participant_count_one: O,
	participant_count_other: k,
	qr_code: A,
	rageshake_button_error_caption: j,
	rageshake_request_modal: M,
	rageshake_send_logs: N,
	rageshake_sending: P,
	rageshake_sending_logs: F,
	rageshake_sent: I,
	recaptcha_dismissed: L,
	recaptcha_not_loaded: R,
	recaptcha_ssla_caption: z,
	register: B,
	register_auth_links: V,
	register_confirm_password_label: H,
	register_heading: U,
	return_home_button: W,
	room_auth_view_continue_button: G,
	room_auth_view_ssla_caption: K,
	screenshare_button_label: q,
	settings: J,
	star_rating_input_label_one: Y,
	star_rating_input_label_other: X,
	start_new_call: Z,
	start_video_button_label: Q,
	stop_screenshare_button_label: $,
	stop_video_button_label: ee,
	submitting: te,
	switch_camera: ne,
	unauthenticated_view_body: re,
	unauthenticated_view_login_button: ie,
	unauthenticated_view_ssla_caption: ae,
	unmute_microphone_button_label: oe,
	version: se,
	video_tile: ce
};
//#endregion




/***/ }

}]);
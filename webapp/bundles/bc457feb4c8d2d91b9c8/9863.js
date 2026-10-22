"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[9863],{

/***/ "../../node_modules/.pnpm/@element-hq+element-call-component@https+++codeload.github.com+element-hq+element-call+_1332b967a6678d1d4d7ea56611e7f85c/node_modules/@element-hq/element-call-component/dist/app-BNROKcF3.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a11y: () => (/* binding */ e),
/* harmony export */   action: () => (/* binding */ t),
/* harmony export */   analytics_notice: () => (/* binding */ n),
/* harmony export */   call_ended_view: () => (/* binding */ r),
/* harmony export */   call_name: () => (/* binding */ i),
/* harmony export */   common: () => (/* binding */ a),
/* harmony export */   "default": () => (/* binding */ j),
/* harmony export */   developer_mode: () => (/* binding */ o),
/* harmony export */   header_label: () => (/* binding */ s),
/* harmony export */   join_existing_call_modal: () => (/* binding */ c),
/* harmony export */   lobby: () => (/* binding */ l),
/* harmony export */   logging_in: () => (/* binding */ u),
/* harmony export */   login_auth_links: () => (/* binding */ d),
/* harmony export */   login_title: () => (/* binding */ f),
/* harmony export */   rageshake_request_modal: () => (/* binding */ p),
/* harmony export */   rageshake_send_logs: () => (/* binding */ m),
/* harmony export */   rageshake_sending: () => (/* binding */ h),
/* harmony export */   rageshake_sending_logs: () => (/* binding */ g),
/* harmony export */   recaptcha_dismissed: () => (/* binding */ _),
/* harmony export */   recaptcha_not_loaded: () => (/* binding */ v),
/* harmony export */   register: () => (/* binding */ y),
/* harmony export */   register_auth_links: () => (/* binding */ b),
/* harmony export */   register_confirm_password_label: () => (/* binding */ x),
/* harmony export */   return_home_button: () => (/* binding */ S),
/* harmony export */   screenshare_button_label: () => (/* binding */ C),
/* harmony export */   settings: () => (/* binding */ w),
/* harmony export */   star_rating_input_label_one: () => (/* binding */ T),
/* harmony export */   star_rating_input_label_other: () => (/* binding */ E),
/* harmony export */   submitting: () => (/* binding */ D),
/* harmony export */   unauthenticated_view_body: () => (/* binding */ O),
/* harmony export */   unauthenticated_view_login_button: () => (/* binding */ k),
/* harmony export */   version: () => (/* binding */ A)
/* harmony export */ });
//#region locales/el/app.json
var e = { user_menu: "Μενού χρήστη" }, t = {
	close: "Κλείσιμο",
	copy_link: "Αντιγραφή συνδέσμου",
	edit: "Επεξεργασία",
	go: "Μετάβαση",
	invite: "Πρόσκληση",
	lower_hand: "Κατεβάστε το χέρι",
	no: "Όχι",
	pick_reaction: "Επιλέξτε αντίδραση",
	raise_hand: "Σηκώστε το χέρι",
	register: "Εγγραφή",
	remove: "Αφαίρεση",
	show_less: "Εμφάνιση λιγότερων",
	show_more: "Εμφάνιση περισσότερων",
	sign_in: "Σύνδεση",
	sign_out: "Αποσύνδεση",
	submit: "Υποβολή",
	upload_file: "Μεταφόρτωση αρχείου"
}, n = "Συμμετέχοντας σε αυτή τη δοκιμαστική έκδοση, συναινείτε στη συλλογή ανώνυμων δεδομένων, τα οποία χρησιμοποιούμε για τη βελτίωση του προϊόντος. Μπορείτε να βρείτε περισσότερες πληροφορίες σχετικά με το ποια δεδομένα καταγράφουμε στην <2>Πολιτική απορρήτου</2> και στην <6>Πολιτική cookies</6>.", r = {
	create_account_button: "Δημιουργία λογαριασμού",
	create_account_prompt: "<0>Γιατί να μην ολοκληρώσετε με τη δημιουργία ενός κωδικού πρόσβασης για τη διατήρηση του λογαριασμού σας;</0><1>Θα μπορείτε να διατηρήσετε το όνομά σας και να ορίσετε ένα avatar για χρήση σε μελλοντικές κλήσεις.</1>",
	feedback_done: "<0>Ευχαριστώ για τα σχόλιά σας!</0>",
	feedback_prompt: "<0>Θα θέλαμε να ακούσουμε τα σχόλιά σας ώστε να βελτιώσουμε την εμπειρία σας.</0>",
	headline: "{{displayName}}, η κλήση σας τερματίστηκε.",
	not_now_button: "Όχι τώρα, επιστροφή στην αρχική οθόνη",
	reconnect_button: "Επανασύνδεση",
	survey_prompt: "Πώς σας φάνηκε;"
}, i = "Όνομα κλήσης", a = {
	analytics: "Δεδομένα ανάλυσης",
	audio: "Ήχος",
	avatar: "Εικόνα Προφίλ",
	back: "Πίσω",
	display_name: "Εμφανιζόμενο όνομα",
	encrypted: "Κρυπτογραφημένο",
	home: "Αρχική",
	loading: "Φόρτωση…",
	next: "Επόμενο",
	options: "Επιλογές",
	password: "Κωδικός",
	preferences: "Προτιμήσεις",
	profile: "Προφίλ",
	reaction: "Αντίδραση",
	reactions: "Αντιδράσεις",
	settings: "Ρυθμίσεις",
	unencrypted: "Μη κρυπτογραφημένο",
	username: "Όνομα χρήστη",
	video: "Βίντεο"
}, o = {
	crypto_version: "Έκδοση κρυπτογράφησης: {{version}}",
	debug_tile_layout_label: "Διάταξη πλακιδίων εντοπισμού σφαλμάτων",
	device_id: "Αναγνωριστικό συσκευής: {{id}}",
	duplicate_tiles_label: "Αριθμός επιπλέον αντιγράφων πλακιδίων ανά συμμετέχοντα",
	environment_variables: "Μεταβλητές περιβάλλοντος",
	hostname: "Όνομα κεντρικού υπολογιστή: {{hostname}}",
	livekit_server_info: "Πληροφορίες διακομιστή LiveKit",
	livekit_sfu: "LiveKit SFU: {{url}}",
	matrix_id: "Αναγνωριστικό Matrix: {{id}}",
	show_connection_stats: "Εμφάνιση στατιστικών σύνδεσης",
	url_params: "Παράμετροι URL"
}, s = "Element Κεντρική Οθόνη Κλήσεων", c = {
	join_button: "Ναι, συμμετοχή στην κλήση",
	text: "Αυτή η κλήση υπάρχει ήδη, θα θέλατε να συμμετάσχετε;",
	title: "Συμμετοχή στην υπάρχουσα κλήση;"
}, l = { join_button: "Συμμετοχή στην κλήση" }, u = "Σύνδεση…", d = "<0>Δημιουργήστε λογαριασμό</0> Ή <2>Συμμετέχετε ως επισκέπτης</2>", f = "Σύνδεση", p = {
	body: "Ένας άλλος χρήστης σε αυτή την κλήση έχει ένα πρόβλημα. Για την καλύτερη διάγνωση αυτών των προβλημάτων θα θέλαμε να συλλέξουμε ένα αρχείο καταγραφής σφαλμάτων.",
	title: "Αίτημα αρχείου καταγραφής"
}, m = "Αποστολή αρχείων καταγραφής", h = "Αποστολή…", g = "Αποστολή αρχείων καταγραφής…", _ = "Το recaptcha απορρίφθηκε", v = "Το Recaptcha δεν φορτώθηκε", y = {
	passwords_must_match: "Οι κωδικοί πρέπει να ταιριάζουν",
	registering: "Εγγραφή…"
}, b = "<0>Έχετε ήδη λογαριασμό;</0><1><0>Συνδεθείτε</0> Ή <2>Συμμετέχετε ως επισκέπτης</2></1>", x = "Επιβεβαίωση κωδικού", S = "Επιστροφή στην αρχική οθόνη", C = "Κοινή χρήση οθόνης", w = {
	developer_tab_title: "Προγραμματιστής",
	feedback_tab_body: "Εάν αντιμετωπίζετε προβλήματα ή απλά θέλετε να μας δώσετε κάποια σχόλια, παρακαλούμε στείλτε μας μια σύντομη περιγραφή παρακάτω.",
	feedback_tab_description_label: "Τα σχόλιά σας",
	feedback_tab_h4: "Υποβάλετε σχόλια",
	feedback_tab_send_logs_label: "Να συμπεριληφθούν αρχεία καταγραφής",
	feedback_tab_thank_you: "Ευχαριστούμε, λάβαμε τα σχόλιά σας!",
	feedback_tab_title: "Ανατροφοδότηση",
	opt_in_description: "<0></0><1></1>Μπορείτε να ανακαλέσετε τη συγκατάθεσή σας αποεπιλέγοντας αυτό το πλαίσιο. Εάν βρίσκεστε σε κλήση, η ρύθμιση αυτή θα τεθεί σε ισχύ στο τέλος της."
}, T = "{{count}} αστέρι", E = "{{count}} αστέρια", D = "Υποβολή…", O = "Δεν έχετε εγγραφεί ακόμα; <2>Δημιουργήστε λογαριασμό</2>", k = "Συνδεθείτε στον λογαριασμό σας", A = "Έκδοση: {{version}}", j = {
	a11y: e,
	action: t,
	analytics_notice: n,
	call_ended_view: r,
	call_name: i,
	common: a,
	developer_mode: o,
	header_label: s,
	join_existing_call_modal: c,
	lobby: l,
	logging_in: u,
	login_auth_links: d,
	login_title: f,
	rageshake_request_modal: p,
	rageshake_send_logs: m,
	rageshake_sending: h,
	rageshake_sending_logs: g,
	recaptcha_dismissed: _,
	recaptcha_not_loaded: v,
	register: y,
	register_auth_links: b,
	register_confirm_password_label: x,
	return_home_button: S,
	screenshare_button_label: C,
	settings: w,
	star_rating_input_label_one: T,
	star_rating_input_label_other: E,
	submitting: D,
	unauthenticated_view_body: O,
	unauthenticated_view_login_button: k,
	version: A
};
//#endregion




/***/ }

}]);
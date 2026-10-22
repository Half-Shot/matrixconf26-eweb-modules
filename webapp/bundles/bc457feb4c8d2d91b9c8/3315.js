"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[3315],{

/***/ "../../node_modules/.pnpm/@element-hq+element-call-component@https+++codeload.github.com+element-hq+element-call+_1332b967a6678d1d4d7ea56611e7f85c/node_modules/@element-hq/element-call-component/dist/app-DotVMlYg.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a11y: () => (/* binding */ e),
/* harmony export */   action: () => (/* binding */ t),
/* harmony export */   analytics_notice: () => (/* binding */ n),
/* harmony export */   call_ended_view: () => (/* binding */ r),
/* harmony export */   call_name: () => (/* binding */ i),
/* harmony export */   common: () => (/* binding */ a),
/* harmony export */   "default": () => (/* binding */ ie),
/* harmony export */   developer_mode: () => (/* binding */ o),
/* harmony export */   disconnected_banner: () => (/* binding */ s),
/* harmony export */   error: () => (/* binding */ c),
/* harmony export */   group_call_loader: () => (/* binding */ l),
/* harmony export */   hangup_button_label: () => (/* binding */ u),
/* harmony export */   header_label: () => (/* binding */ d),
/* harmony export */   header_participants_label: () => (/* binding */ f),
/* harmony export */   invite_modal: () => (/* binding */ p),
/* harmony export */   join_existing_call_modal: () => (/* binding */ m),
/* harmony export */   layout_grid_label: () => (/* binding */ h),
/* harmony export */   layout_spotlight_label: () => (/* binding */ g),
/* harmony export */   lobby: () => (/* binding */ _),
/* harmony export */   log_in: () => (/* binding */ v),
/* harmony export */   logging_in: () => (/* binding */ y),
/* harmony export */   login_auth_links: () => (/* binding */ b),
/* harmony export */   login_auth_links_prompt: () => (/* binding */ x),
/* harmony export */   login_subheading: () => (/* binding */ S),
/* harmony export */   login_title: () => (/* binding */ C),
/* harmony export */   microphone_off: () => (/* binding */ w),
/* harmony export */   microphone_on: () => (/* binding */ T),
/* harmony export */   mute_microphone_button_label: () => (/* binding */ E),
/* harmony export */   participant_count_one: () => (/* binding */ D),
/* harmony export */   participant_count_other: () => (/* binding */ O),
/* harmony export */   qr_code: () => (/* binding */ k),
/* harmony export */   rageshake_button_error_caption: () => (/* binding */ A),
/* harmony export */   rageshake_request_modal: () => (/* binding */ j),
/* harmony export */   rageshake_send_logs: () => (/* binding */ M),
/* harmony export */   rageshake_sending: () => (/* binding */ N),
/* harmony export */   rageshake_sending_logs: () => (/* binding */ P),
/* harmony export */   rageshake_sent: () => (/* binding */ F),
/* harmony export */   recaptcha_dismissed: () => (/* binding */ I),
/* harmony export */   recaptcha_not_loaded: () => (/* binding */ L),
/* harmony export */   register: () => (/* binding */ R),
/* harmony export */   register_auth_links: () => (/* binding */ z),
/* harmony export */   register_confirm_password_label: () => (/* binding */ B),
/* harmony export */   register_heading: () => (/* binding */ V),
/* harmony export */   return_home_button: () => (/* binding */ H),
/* harmony export */   room_auth_view_continue_button: () => (/* binding */ U),
/* harmony export */   screenshare_button_label: () => (/* binding */ W),
/* harmony export */   settings: () => (/* binding */ G),
/* harmony export */   star_rating_input_label_one: () => (/* binding */ K),
/* harmony export */   star_rating_input_label_other: () => (/* binding */ q),
/* harmony export */   start_new_call: () => (/* binding */ J),
/* harmony export */   start_video_button_label: () => (/* binding */ Y),
/* harmony export */   stop_screenshare_button_label: () => (/* binding */ X),
/* harmony export */   stop_video_button_label: () => (/* binding */ Z),
/* harmony export */   submitting: () => (/* binding */ Q),
/* harmony export */   unauthenticated_view_body: () => (/* binding */ $),
/* harmony export */   unauthenticated_view_login_button: () => (/* binding */ ee),
/* harmony export */   unmute_microphone_button_label: () => (/* binding */ te),
/* harmony export */   version: () => (/* binding */ ne),
/* harmony export */   video_tile: () => (/* binding */ re)
/* harmony export */ });
//#region locales/fr/app.json
var e = { user_menu: "Menu utilisateur" }, t = {
	close: "Fermer",
	copy_link: "Copier le lien",
	edit: "Modifier",
	go: "Commencer",
	invite: "Inviter",
	lower_hand: "Baisser la main",
	no: "Non",
	pick_reaction: "Choisir une réaction",
	raise_hand: "Lever la main",
	register: "S’enregistrer",
	remove: "Supprimer",
	show_less: "Afficher moins",
	show_more: "Afficher plus",
	sign_in: "Connexion",
	sign_out: "Déconnexion",
	submit: "Envoyer",
	upload_file: "Téléverser un fichier"
}, n = "En participant à cette beta, vous consentez à la collecte de données anonymes, qui seront utilisées pour améliorer le produit. Vous trouverez plus d’informations sur les données collectées dans notre <2>Politique de vie privée</2> et notre <5>Politique de cookies</5>.", r = {
	create_account_button: "Créer un compte",
	create_account_prompt: "<0>Pourquoi ne pas créer un mot de passe pour conserver votre compte\xA0?</0><1>Vous pourrez garder votre nom et définir un avatar pour vos futurs appels</1>",
	feedback_done: "<0>Merci pour votre commentaire !</0>",
	feedback_prompt: "<0>Nous aimerions avoir vos commentaires afin que nous puissions améliorer votre expérience.</0>",
	headline: "{{displayName}}, votre appel est terminé.",
	not_now_button: "Pas maintenant, retourner à l’accueil",
	reconnect_button: "Se reconnecter",
	survey_prompt: "Comment cela s’est-il passé ?"
}, i = "Nom de l’appel", a = {
	analytics: "Statistiques d'utilisation",
	audio: "Audio",
	avatar: "Avatar",
	back: "Retour",
	display_name: "Nom d’affichage",
	encrypted: "Chiffré",
	home: "Accueil",
	loading: "Chargement…",
	next: "Suivant",
	options: "Options",
	password: "Mot de passe",
	preferences: "Préférences",
	profile: "Profil",
	reaction: "Réaction",
	reactions: "Réactions",
	reconnecting: "Reconnexion",
	settings: "Paramètres",
	unencrypted: "Non chiffré",
	username: "Nom d’utilisateur",
	video: "Vidéo"
}, o = {
	always_show_iphone_earpiece: "Afficher l'option écouteur iPhone sur toutes les plateformes",
	crypto_version: "Version crypto: {{version}}",
	debug_tile_layout_label: "Disposition des tuiles de débogage",
	device_id: "Id. de l'appareil",
	duplicate_tiles_label: "Nombre de copies de tuiles supplémentaires par participant",
	environment_variables: "Variables d'environnement",
	hostname: "Nom d'hôte: {{hostname}}",
	livekit_server_info: "Info du serveur LiveKit",
	livekit_sfu: "LiveKit SFU: {{url}}",
	matrix_id: "ID Matrix: {{id}}",
	mute_all_audio: "Couper tous les sons (participants, réactions, sons de participation)",
	show_connection_stats: "Afficher les statistiques de connexion",
	url_params: "Paramètres d'URL"
}, s = "La connexion avec le serveur a été perdue.", c = {
	call_is_not_supported: "L'appel n'est pas pris en charge",
	call_not_found: "Appel non trouvé",
	call_not_found_description: "<0>Ce ne correspond à aucun appel existant. Vérifier que vous avez le bon lien, ou <1>créer un nouveau</1>.</0>",
	connection_lost: "Connexion perdue",
	connection_lost_description: "Vous avez été déconnecté de l’appel",
	e2ee_unsupported: "Moteur de recherche incompatible",
	generic: "Un problème est survenu",
	insufficient_capacity: "Capacité insuffisante",
	insufficient_capacity_description: "Le serveur a atteint sa capacité maximale et vous ne pouvez pas rejoindre l'appel pour le moment. Veuillez réessayer plus tard ou contacter l'administrateur du serveur si le problème persiste.",
	unexpected_ec_error: "Une erreur inattendue s'est produite (<0>Code d'erreur :</0> <1>{{ errorCode }}</1>). Veuillez contacter l'administrateur de votre serveur."
}, l = {
	banned_body: "Vous avez été banni du salon.",
	banned_heading: "Banni",
	call_ended_body: "Vous avez été retiré de l’appel.",
	call_ended_heading: "Appel terminé",
	knock_reject_body: "Les membres du salon ont refusé votre demande de participation.",
	knock_reject_heading: "Non autorisé à rejoindre",
	reason: "Motif"
}, u = "Terminer l’appel", d = "Accueil Element Call", f = "Participants", p = {
	link_copied_toast: "Lien copié dans le presse-papier",
	title: "Inviter dans cet appel"
}, m = {
	join_button: "Oui, rejoindre l’appel",
	text: "Cet appel existe déjà, voulez-vous le rejoindre\xA0?",
	title: "Rejoindre un appel existant\xA0?"
}, h = "Grille", g = "Premier plan", _ = {
	ask_to_join: "Demandez à rejoindre l'appel",
	join_as_guest: "Rejoindre en tant qu'invité",
	join_button: "Rejoindre l’appel",
	leave_button: "Revenir à l’historique des appels",
	waiting_for_invite: "Demande envoyée"
}, v = "Se connecter", y = "Connexion…", b = "<0>Créer un compte</0> Or <2>Accès invité</2>", x = "Pas encore inscrit?", S = "Pour continuer vers Element", C = "Connexion", w = "Microphone éteint", T = "Microphone allumé", E = "Couper le microphone", D = "{{count, number}}", O = "{{count, number}}", k = "Code QR", A = "Réessayer d’envoyer les journaux", j = {
	body: "Un autre utilisateur dans cet appel a un problème. Pour nous permettre de résoudre le problème, nous aimerions récupérer un journal de débogage.",
	title: "Demande d’un journal de débogage"
}, M = "Envoyer les journaux de débogage", N = "Envoi…", P = "Envoi des journaux de débogage…", F = "Merci\xA0!", I = "Recaptcha refusé", L = "Recaptcha non chargé", R = {
	passwords_must_match: "Les mots de passe doivent correspondre",
	registering: "Enregistrement…"
}, z = "<0>Vous avez déjà un compte\xA0?</0><1><0>Se connecter</0> Ou <2>Accès invité</2></1>", B = "Confirmer le mot de passe", V = "Créer votre compte", H = "Retour à l’accueil", U = "Continuer", W = "Partage d’écran", G = {
	audio_tab: {
		effect_volume_description: "Régler le volume des effets de réactions et de mains levées.",
		effect_volume_label: "Volume des effets sonores"
	},
	background_blur_label: "Flouter l'arrière-plan de la vidéo",
	blur_not_supported_by_browser: "(Le flou d'arrière-plan n'est pas pris en charge par cet appareil.)",
	developer_tab_title: "Développeur",
	devices: { speaker_numbered: "Haut-parleur {{n}}" },
	feedback_tab_body: "Si vous rencontrez des problèmes, ou vous voulez simplement faire un commentaire, faites-en une courte description ci-dessous.",
	feedback_tab_description_label: "Votre commentaire",
	feedback_tab_h4: "Envoyer un commentaire",
	feedback_tab_send_logs_label: "Inclure les journaux de débogage",
	feedback_tab_thank_you: "Merci, nous avons reçu vos commentaires\xA0!",
	feedback_tab_title: "Commentaires",
	opt_in_description: "<0></0><1></1>Vous pouvez retirer votre consentement en décochant cette case. Si vous êtes actuellement en communication, ce paramètre prendra effet à la fin de l’appel.",
	preferences_tab: {
		reactions_play_sound_label: "Jouer le son des réactions",
		reactions_show_label: "Afficher les réactions",
		show_hand_raised_timer_label: "Afficher la durée de la main levée"
	}
}, K = "{{count}} favori", q = "{{count}} favoris", J = "Démarrer un nouvel appel", Y = "Démarrer la vidéo", X = "L’écran est partagé", Z = "Arrêter la vidéo", Q = "Envoi…", $ = "Pas encore de compte\xA0? <2>En créer un</2>", ee = "Connectez vous à votre compte", te = "Allumer le microphone", ne = "Version\xA0: {{version}}", re = {
	always_show: "Toujours afficher",
	collapse: "Réduire",
	expand: "Développer",
	mute_for_me: "Muet pour moi",
	volume: "Volume"
}, ie = {
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
	hangup_button_label: u,
	header_label: d,
	header_participants_label: f,
	invite_modal: p,
	join_existing_call_modal: m,
	layout_grid_label: h,
	layout_spotlight_label: g,
	lobby: _,
	log_in: v,
	logging_in: y,
	login_auth_links: b,
	login_auth_links_prompt: x,
	login_subheading: S,
	login_title: C,
	microphone_off: w,
	microphone_on: T,
	mute_microphone_button_label: E,
	participant_count_one: D,
	participant_count_other: O,
	qr_code: k,
	rageshake_button_error_caption: A,
	rageshake_request_modal: j,
	rageshake_send_logs: M,
	rageshake_sending: N,
	rageshake_sending_logs: P,
	rageshake_sent: F,
	recaptcha_dismissed: I,
	recaptcha_not_loaded: L,
	register: R,
	register_auth_links: z,
	register_confirm_password_label: B,
	register_heading: V,
	return_home_button: H,
	room_auth_view_continue_button: U,
	screenshare_button_label: W,
	settings: G,
	star_rating_input_label_one: K,
	star_rating_input_label_other: q,
	start_new_call: J,
	start_video_button_label: Y,
	stop_screenshare_button_label: X,
	stop_video_button_label: Z,
	submitting: Q,
	unauthenticated_view_body: $,
	unauthenticated_view_login_button: ee,
	unmute_microphone_button_label: te,
	version: ne,
	video_tile: re
};
//#endregion




/***/ }

}]);
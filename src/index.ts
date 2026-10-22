import type { Api } from "@element-hq/element-web-module-api";

export default class SlashCommandModule {
    static moduleApiVersion = "^*";
    constructor(api: Api) {
        this.api = api;
    }
    async load() {
        this.api.composer.registerSlashCommand({
            command: "shout",
            args: "<message>",
            description: "Sends a message in upper case",
            category: "messages",
            run: (args) => ({ msgtype: "m.text", body: (args ?? "").toUpperCase() }),
        });
    }
}

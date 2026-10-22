import type { Api, Module, ModuleFactory } from "@element-hq/element-web-module-api";

class SlashCommandModule implements Module {
    public static readonly moduleApiVersion = "^2.3.0";

    public constructor(private readonly api: Api) {}

    public async load(): Promise<void> {
        this.api.composer.registerSlashCommand({
            command: "shout",
            args: "<message>",
            description: "Sends a message in upper case",
            category: "messages",
            run: (args) => ({ msgtype: "m.text", body: (args ?? "").toUpperCase() }),
        });
    }
}

export default SlashCommandModule satisfies ModuleFactory;

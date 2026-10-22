/**
 * Types for `api.composer.registerSlashCommand`.
 *
 * The Element Web build in `webapp/` supports this API, but it hasn't made it into a published
 * release of `@element-hq/element-web-module-api` yet. Once it has, delete this file.
 */
import "@element-hq/element-web-module-api";

declare module "@element-hq/element-web-module-api" {
    /** The category a slash command is listed under in `/help`. */
    export type SlashCommandCategory = "messages" | "actions" | "admin" | "advanced" | "effects" | "other";

    /** Where the command was run. */
    export interface SlashCommandContext {
        roomId: string;
        threadId?: string;
    }

    /** Content of a message to send to the room. */
    export interface SlashCommandMessageContent {
        msgtype: string;
        body: string;
        [key: string]: unknown;
    }

    export interface SlashCommand {
        /** The command name, without the leading `/`. */
        command: string;
        aliases?: string[];
        /** Usage hint for the arguments, e.g. `<message>`. */
        args?: string;
        /** Already-translated description shown in autocomplete and `/help`. */
        description: string;
        /** Defaults to `"other"`. */
        category?: SlashCommandCategory;
        hideCompletionAfterSpace?: boolean;
        /** Which composers the command is available in. Defaults to all. */
        views?: Array<"room" | "thread">;
        isEnabled?(roomId: string): boolean;
        /**
         * Runs the command. For the `messages` and `effects` categories, returning message content
         * sends it to the room. Throwing (or rejecting) shows the error to the user.
         */
        run?(
            args: string | undefined,
            context: SlashCommandContext,
        ): MaybePromise<SlashCommandMessageContent | void>;
    }

    interface ComposerApi {
        /**
         * Register a new slash command.
         * @throws If the command is invalid, or its name or any of its aliases is already in use.
         */
        registerSlashCommand(command: SlashCommand): void;
    }
}

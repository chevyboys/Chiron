import { Interaction, Message } from "discord.js";
import { HexColorString, Client, ClientOptions } from "discord.js";
import { IModuleManager } from "./ModuleManager";
import { IChironConfig } from "./Config";

export interface IChironClientOptions extends ClientOptions {
    config: IChironConfig
    color: HexColorString; //the color the bot should default to
    modulePath: string | Array<string>,
    errorHandler?: IErrorHandlerFunction
    parser?: ChironParseFunction
}

export interface IChironClient extends Client {
    config: IChironConfig;
    color: HexColorString;
    modulePath: string | Array<string>;
    errorHandler?: IErrorHandlerFunction
    modules: IModuleManager
    parser: ChironParseFunction
}

export interface IErrorHandlerFunction {
    (error: Error, msg: Message | Interaction | string): unknown
}

export interface ChironParsedContent {
    command: string,
    suffix: string,
}

export interface ChironParseFunction {
    (msg: Message, client: IChironClient): ChironParsedContent | null
}

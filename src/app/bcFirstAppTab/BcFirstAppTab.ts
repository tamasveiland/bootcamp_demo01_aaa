import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/bcFirstAppTab/index.html")
@PreventIframe("/bcFirstAppTab/config.html")
@PreventIframe("/bcFirstAppTab/remove.html")
export class BcFirstAppTab {
}

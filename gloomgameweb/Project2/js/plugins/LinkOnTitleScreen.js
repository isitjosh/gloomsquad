/*:
 * @plugindesc presave plugin
 * @author isitjosh
 *
 * @param URL
 * @text Presave URL
 * @desc The URL for your presave
 * @default https://distrokid.com/hyperfollow/isitjosh/joshville
 */

(() => {
    const parameters = PluginManager.parameters("LinkOnTitleScreen");
    const presaveUrl = String(parameters["URL"]);

    const _Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function () {
        _Scene_Title_createCommandWindow.call(this);
        this._commandWindow.setHandler("presave", this.openPresaveUrl.bind(this));
    };

    Window_TitleCommand.prototype.makeCommandList = function () {
        this.addCommand("New Game", "newGame");
        this.addCommand("Presave", "presave");
    };

    Scene_Title.prototype.openPresaveUrl = function () {
        window.open(presaveUrl, "_self");
        this._commandWindow.activate();
    };
})();
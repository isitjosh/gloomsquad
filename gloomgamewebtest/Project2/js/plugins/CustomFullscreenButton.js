/*:
 * @target MZ
 * @plugindesc Custom Fullscreen Button Plugin
 *
 * @help This plugin provides a custom fullscreen button for iPhone users.
 */

(() => {
    const _Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
    Window_TitleCommand.prototype.makeCommandList = function() {
        _Window_TitleCommand_makeCommandList.call(this);
        this.addCommand("Fullscreen", "fullscreen");
    };

    const _Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function() {
        _Scene_Title_createCommandWindow.call(this);
        this._commandWindow.setHandler("fullscreen", this.commandFullscreen.bind(this));
    };

    Scene_Title.prototype.commandFullscreen = function() {
        const canvas = document.querySelector('canvas');
        const width = window.innerWidth;
        const height = window.innerHeight;
        const isFullscreen = canvas.style.width === `${width}px` && canvas.style.height === `${height}px`;

        if (isFullscreen) {
            // Exit fullscreen
            canvas.style.width = '';
            canvas.style.height = '';
        } else {
            // Enter fullscreen
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
        }
        this._commandWindow.activate();
    };
})();

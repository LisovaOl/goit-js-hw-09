!function(){var t={bodyColor:document.querySelector("body"),startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]")};function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.startButton.addEventListener("click",(function(){e=setInterval((function(e){var n;o(),n=o(),t.bodyColor.style.backgroundColor=n,console.log(n)}),1e3),t.stopButton.removeAttribute("disabled"),t.startButton.setAttribute("disabled",!0),console.log("Start generate")})),t.stopButton.addEventListener("click",(function(){clearInterval(e),t.startButton.removeAttribute("disabled"),t.stopButton.setAttribute("disabled",!0),console.log("Stop generate")}));var e=void 0}();
//# sourceMappingURL=01-color-switcher.41cf2047.js.map

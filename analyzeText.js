'use strict';

window.onload = function() {
    app.initialize();
}

let app = {
    textarea: null,
    content: null,

    initialize: function() {
        this.textarea = document.getElementById("textarea");
        this.textarea.addEventListener("input", this.analyzeTextArea);
    },

    analyzeTextArea: function() {
        this.content = app.textarea.value;

        let numOfChars = this.content.length;
        document.getElementById("numOfChars").innerHTML = numOfChars;

        let numOfWords = this.content.replace(/[\r\n]/g, " ").split(" ").length-1;
        document.getElementById("numOfWords").innerHTML = numOfWords;

        let numOfSentences = this.content.split(".").length-1;
        document.getElementById("numOfSentences").innerHTML = numOfSentences;
    }
}

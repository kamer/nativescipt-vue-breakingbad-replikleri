Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    template: "\n    <NativeRadAutoCompleteTextView\n      ref=\"autocomplete\"\n      v-bind=\"$attrs\"\n      v-on=\"$listeners\">\n      <slot />\n    </NativeRadAutoCompleteTextView>\n  ",
    methods: {
        addToken: function (token) {
            this.$refs.autocomplete.nativeView.addToken(token);
        },
        resetAutocomplete: function () {
            this.$refs.autocomplete.nativeView.resetAutocomplete();
        },
        setLoadSuggestionsAsync: function (func) {
            this.$refs.autocomplete.nativeView.loadSuggestionsAsync = func;
        },
    },
};

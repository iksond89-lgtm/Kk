const WrongBook = {
    key: "wrong_words",

    get() {
        return JSON.parse(localStorage.getItem(this.key) || "[]");
    },

    add(word) {
        let data = this.get();
        data.push(word);
        localStorage.setItem(this.key, JSON.stringify(data));
    },

    clear() {
        localStorage.removeItem(this.key);
    }
};

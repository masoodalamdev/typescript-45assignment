function make_shirt(size, text) {
    if (size === void 0) { size = "L"; }
    if (text === void 0) { text = "Governor's IT Student"; }
    console.log("these size of the T-Shirt is ".concat(size, " and the text will be ").concat(text));
}
make_shirt();
make_shirt("M");
make_shirt("S", "We are Developers");

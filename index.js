const Generator = function (configDirname, filename, isProduction) {
    this.configDirname = configDirname;
    this.filename = filename;
    this.isProduction = isProduction;
};

Object.assign(Generator.prototype, {
    relativePath(p) { return require('path').resolve(this.configDirname, p); },

    babelRules() {
        return [
            {
                test: /\.js$/,
                include: this.relativePath("assets/js"),
                loader: 'babel-loader'
            }
        ]
    }
});

module.exports = function (configDirname, filename, isProduction) {
    return new Generator(configDirname, filename, isProduction);
};
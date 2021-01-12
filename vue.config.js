module.exports = {
    css: {
        loaderOptions: {
            stylus: {
                use: [require('nib')()],
                import: ['~nib/lib/nib/index.styl']
            }
        }
    }
}
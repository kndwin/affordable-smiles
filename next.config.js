const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM({
	useSuspense: false,
	wait: true
})

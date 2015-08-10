function githubPhilos(){
	return {
		restrict: 'E',
		template: require('./github_philos.html')
	};
}

githubPhilos.$inject = [];

module.exports = githubPhilos;

export default {

	promisifyDeffered(deffered) {
		return new Promise(function(resolve, reject){
				deffered.done(function(data){
					resolve(data)
					}).fail(function(jqXHR, textStatus, errorThrown){
						reject(errorThrown);
						});
				})
	}

}

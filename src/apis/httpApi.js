
/**
 * Makes a http GET request to the given URL.
 * 
 * Returns the response as json on success, else an error object is thrown.
 * 
 * @param {String} url
 * @param {Map} headers
 * @param {String} keyToReturn
 */
export async function get(url, keyToReturn, headers = {}) {
    const response = await fetch(url, {
        headers: headers,
    });

    return await _checkForError(response, keyToReturn);
}

/**
 * Makes a http POST request to the given URL.
 * 
 * Returns the response as json on success, else an error object is thrown.
 * 
 * @param {String} url
 * @param {Map} headers
 * @param {any} data
 * @param {String} keyToReturn
 */
export async function post(url, data, keyToReturn, headers = {}) {
    return await _fetchWithData(url, 'POST', data, keyToReturn, headers);
}

/**
 * Makes a http PATCH request to the given URL.
 * 
 * Returns the response as json on success, else an error object is thrown.
 * 
 * @param {String} url
 * @param {Map} headers
 * @param {any} data
 * @param {String} keyToReturn
 */
export async function patch(url, data, keyToReturn, headers = {}) {
    return await _fetchWithData(url, 'PATCH', data, keyToReturn, headers);
}


/**
 * Makes a http PUT request to the given URL.
 * 
 * Returns the response as json on success, else an error object is thrown.
 * 
 * @param {String} url
 * @param {Map} headers
 * @param {any} data
 * @param {String} keyToReturn
 */
export async function put(url, data, keyToReturn, headers = {}) {
    return await _fetchWithData(url, 'PUT', data, keyToReturn, headers);
}

/**
 * @param {String} url
 * @param {String} method
 * @param {Map} headers
 * @param {any} data
 * @param {String} keyToReturn
 */
async function _fetchWithData(url, method, data, keyToReturn, headers = {}) {
    const response = await fetch(url, {
        method: method,
        headers:  {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });
    
    return await _checkForError(response, keyToReturn);
}


/**
 * @param {Response} response
 * @param {String} keyToReturn
 */
async function _checkForError(response, keyToReturn) {
    var text = await response.text();
    console.log('Error checking response:',text);
    console.log('Error checking status:',response.status);
    console.log('Error res:',response);
    if (response.status !== 200) {
        throw Error('An Error occurred: ' + response.status + ' - ' + text);
    } else {
        var json = JSON.parse(text)
        return json[keyToReturn];
    }
}
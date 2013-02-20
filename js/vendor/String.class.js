/**
 * This functions returns the input string padded on the left, the right, or both sides to the specified padding length.
 * If the optional argument padString is not supplied, the input is padded with spaces, otherwise it is padded with 
 * characters from padString up to the limit.
 * @param		{Number}	length			If the value of length is negative, less than, or equal to the length of the input string, no padding takes place. 
 * @param		{String}	padString		The padString may be truncated if the required number of padding characters can't be evenly divided by the padString's length.
 * @param		{String}	type				Optional argument type can be "right", "left", or "both". If type is not specified it is assumed to be "right".
 * @returns	Returns the padded string.
 */
String.prototype.pad = function( length, padString, type ) {
	if ( !padString ) padString = " ";
	length = length - this.length;
	padString = padString.repeat( Math.ceil( length / padString.length ) );
	
	switch ( type ) {
		case "left":
			return padString.truncate( length ).concat( this );
		case "both":
			return padString.truncate( Math.ceil( length / 2 ) ).concat( this, padString.truncate( Math.floor( length / 2 ) ) );
		default:
			return this.concat( padString.truncate( length ) );
	}
}

/**
 * Shortcut to String.prototype.pad with the type parameter set to "left"
 * @see String.prototype.pad
 */
String.prototype.padLeft = function( length, padString ) {
	return this.pad( length, padString, "left" );
}

/**
 * Shortcut to String.prototype.pad with the type parameter set to "right"
 * @see String.prototype.pad
 */
String.prototype.padRight = function( length, padString ) {
	return this.pad( length, padString, "right" );
}

/**
 * Returns string repeated multiplier times
 * @param		{Number}	multiplier	Number of times the input string should be repeated. If set to 0, an empty String will be returned
 * @returns	Returns the repeated string.
 */
String.prototype.repeat = function( multiplier ) {
	var text = "";
	for ( var i = 0; i < multiplier; i++ ) text = text.concat( this );
	return text;
}

/**
 * Truncates a string to a given length.
 * @param		{Number}	length	The length to which the string should be truncated to
 * @param		{String}	type		Optional argument type can be "right", "left", or "both". If type is not specified it is assumed to be "right".
 * @Returns	Returns the truncated string.
 */
String.prototype.truncate = function( length, type ) {
	if ( this.length <= length ) return this;
	switch ( type ) {
		case "left":
			return this.substr( this.length - length );
		case "both":
			length = ( this.length - length ) / 2;
			var start = Math.ceil( length );
			length = this.length - start - Math.floor( length );
			return this.substr( start, length );
		default:
			return this.substr( 0, length );
	}
}
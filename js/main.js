$(function() {
	$('#text-input-std').textField();
	$('#text-input-hover').textField({
		fixed: true,
		text: "this is how it looks on focus / hover",
		disabledColor: 'black'
	});
	$('#text-input-disabled').textField({
		text: "you can't write here."
	});
	
	$('#text-area-std').textField();
	$('#text-area-hover').textField({
		fixed: true,
		text: "this is how it looks on focus / hover",
		disabledColor: 'black'
	});
	$('#text-area-disabled').textField({
		text: "you can't write here."
	});
});

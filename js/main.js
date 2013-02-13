$(function() {
	var r = 242,g = 253, b = 254;
	var base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAFElEQVQImWNggIKysjIpHAwGBgYAWJsEdbVd/aEAAAAASUVORK5CYII=";
	
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
	
	$('#input-pattern,#input-shadow,#input-border').textField({
		text: "type a color: rgb(124, 45, 200), black, #BF1A1A"
	});

	$('#input-pattern').keyup(function() {
		var value = document.getElementById( "input-pattern" ).value;
		var color = new Color( value );
		if(color.rgb === null)
			return false;
		
		var rgb = color.get("rgb");
		base64 = drawCanvas(rgb[0], rgb[1], rgb[2], 100);
	});
	
	$('#input-shadow').keyup(function() {
		$('#canvas-div').css('box-shadow', '0 0 10px -5px ' + $(this).val());
	});
	
	$('#input-border').keyup(function() {
		$('#canvas-div').css('border-color', $(this).val());
	});
	
	
	$('#set-all-inputs').click(function() {
		var selector = 'input[type="text"][disabled!="disabled"][readonly!="readonly"],textarea[disabled!="disabled"][readonly!="readonly"]';
		$(selector).each(function() {
			$(this).css({ "background" : "url(" + base64 + ")" });
		});
		
		var box_shadow = $(selector).css("box-shadow");
		var border_color = $(selector).css("border-color");
		
		$(selector).hover(function() {
			$(this).css({ 
				"box-shadow" : '0 0 10px -5px ' + $('#input-shadow').val(),
				"border-color": $('#input-border').val()
			});
		}, function() {
			$(this).css({
				"box-shadow" : box_shadow,
				"border-color": border_color
			});
		});
	});
	
	
	base64 = drawCanvas(r, g, b, 100);
});

function drawCanvas(r, g, b, a) {
	var c=document.getElementById("canvas-pattern");
	var ctx=c.getContext("2d");

	var w = h = 3;
	var imgData=ctx.createImageData(w,h);

	var pxl = j = 0;
	var total = w*w;
	for (var i=0;i<imgData.data.length;i+=4) {
		if(pxl === w-1 && total-1 != j) { // Pintamos
			imgData.data[i+0]=r;
			imgData.data[i+1]=g;
			imgData.data[i+2]=b;
			imgData.data[i+3]=a;
			pxl = 1;
		}
		else {
			imgData.data[i+0]=255;
			imgData.data[i+1]=255;
			imgData.data[i+2]=255;
			imgData.data[i+3]=200;
			pxl++;
		}
		j++;
	}

	ctx.putImageData(imgData,0,0);
	
	$('#canvas-div').css("background", "url(" + c.toDataURL() + ") repeat");
	
	return c.toDataURL();
}

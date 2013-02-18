$(function() {
	var r = 242,g = 253, b = 254;
	var base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAFElEQVQImWNggIKysjIpHAwGBgYAWJsEdbVd/aEAAAAASUVORK5CYII=";
	var rgb_format_text = "rgb(124, 45, 200), black, #BF1A1A";
	
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
		text: rgb_format_text
	});
	
	$('#example-input-normal,#example-input-hover,#example-input-focus').textField({
		text: 'this is an example input text...'
	});
	
	$('#border-width-normal,#border-width-hover,#border-width-focus').textField({
		text: '1px',
		activeColor: '#666'
	});
	$('#border-style-normal,#border-style-hover,#border-style-focus').textField({
		text: 'solid',
		activeColor: '#666'
	});
	$('#border-color-normal,#border-color-hover,#border-color-focus').textField({
		text: '#AAA',
		activeColor: '#666'
	});
	
	$('#border-radius-normal,#border-radius-hover,#border-radius-focus').textField({
		text: '4px',
		activeColor: '#666'
	});
	
	$('#box-shadow-offset-normal,#box-shadow-offset-hover,#box-shadow-offset-focus').textField({
		text: '0 0',
		activeColor: '#666'
	});
	
	$('#box-shadow-size-normal,#box-shadow-size-hover,#box-shadow-size-focus').textField({
		text: '8px -3px',
		activeColor: '#666'
	});
	
	$('#box-shadow-color-normal,#box-shadow-color-hover,#box-shadow-color-focus').textField({
		text: '#888',
		activeColor: '#666'
	});
	
	$('#input-css-scope').textField({
		text: '.widget-form',
		activeColor: '#666'
	});
	$('#input-css-selector').textField({
		text: '.fancy-input',
		activeColor: '#666'
	});
	

	// Example inputs
	$('.input-gen').keyup(function() {
		if($(this).val() == "")
			$(this).css("color", "#666"); 
		
		$("#" + $(this).parent().attr("data-result")).css($(this).attr('data-type'), $(this).val());
	});
	$('.input-gen-shadow').keyup(function() {
		var $this = $(this).parent();
		var box_shadow = $this.children("[data-type='box-shadow-offset']").val() + " " + $this.children("[data-type='box-shadow-size']").val() + " " + $this.children("[data-type='box-shadow-color']").val();

		$("#" + $this.attr('data-result')).css("box-shadow", box_shadow);
	});
	
	// Show css code
	$('#get-css').click(function() {
		$('#css-wrapper').show();
		var elm = "#css-code pre";
		var sel = $('#input-css-selector').val();
		var scp = $.trim($('#input-css-scope').val());
		if(scp !== "")
			scp += " ";

		sel = sel.split(",");
		
		if(isArray(sel)) {
			var sel_normal = sel_hover = sel_focus = '';
			for(var i = 0; i < sel.length; i++) {
				var tmp = scp + $.trim(sel[i]);
				sel_normal += tmp + ", ";
				sel_hover += tmp + ":hover, ";
				sel_focus += tmp + ":focus, ";
			}
			
			sel_normal = removeChar(sel_normal);
			sel_hover = removeChar(sel_hover);
			sel_focus = removeChar(sel_focus);
		}
		else {
			var sel_normal = sel_hover = sel_focus = scp + sel;
		}

		// Normal state:
		$(elm).html('<span class="css-selector">' + sel_normal + ' {</span>');
		$(elm).append('<br />\t<span class="css-property">background: </span> url(' + base64 + ") repeat scroll 0 0 #fff;");
		$("[data-result='example-input-normal'] .input-gen").each(function() {
			var prop = '<span class="css-property">' + $(this).attr("data-type") + ": </span>";
			$(elm).append("<br />\t" + prop + $(this).val() + ";");
		});
		
		var box_shadow = '<br />\t<span class="css-property">box-shadow: </span>';
		$("[data-result='example-input-normal'] .input-gen-shadow").each(function() {
			box_shadow += " " + $(this).val();
		});
		box_shadow += ";";
		$(elm).append(box_shadow);
		
		$(elm).append('<br /><span class="css-selector">}</span>');
		
		// Hover state:
		$(elm).append('<br /><br /><span class="css-selector">' + sel_hover + ' {</span>');
		$("[data-result='example-input-hover'] .input-gen").each(function() {
			var prop = '<span class="css-property">' + $(this).attr("data-type") + ": </span>";
			$(elm).append("<br />\t" + prop + $(this).val() + ";");
		});
		
		var box_shadow = '<br />\t<span class="css-property">box-shadow: </span>';
		$("[data-result='example-input-hover'] .input-gen-shadow").each(function() {
			box_shadow += " " + $(this).val();
		});
		box_shadow += ";";
		$(elm).append(box_shadow);
		
		$(elm).append('<br /><span class="css-selector">}</span>');
		
		// Focus state:
		$(elm).append('<br /><br /><span class="css-selector">' + sel_focus + ' {</span>');
		$("[data-result='example-input-focus'] .input-gen").each(function() {
			var prop = '<span class="css-property">' + $(this).attr("data-type") + ": </span>";
			$(elm).append("<br />\t" + prop + $(this).val() + ";");
		});
		
		var box_shadow = '<br />\t<span class="css-property">box-shadow: </span>';
		$("[data-result='example-input-focus'] .input-gen-shadow").each(function() {
			box_shadow += " " + $(this).val();
		});
		box_shadow += ";";
		$(elm).append(box_shadow);
		
		$(elm).append('<br /><span class="css-selector">}</span>');
		window.location.hash = "#css-wrapper";
	});
	
	//base64 = drawCanvas(r, g, b, 100);
});

function removeChar(str, i) {
	var i = i || 2;
	return str.substring(str, str.length - i);
}

function isArray(obj) {
   return Object.prototype.toString.call(obj) === '[object Array]';
}

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
	
	$('#canvas-input').css("background", "url(" + c.toDataURL() + ") repeat");
	
	return c.toDataURL();
}
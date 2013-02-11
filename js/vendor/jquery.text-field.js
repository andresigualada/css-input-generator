(function($){  
	$.fn.textField = function(options) {
		var defaults = {
			fixed: false,
			text: 'type text here...',
			activeColor: 'black',
			disabledColor: 'gray'
		};
		options = $.extend({}, defaults, options); 
		
		/*Recorre todos los elementos encapsulados*/  
		return this.each(function(){  
			/*Aquí se cambia el contexto, por lo que 'this' se refiere al elemento DOM por el que se está pasando*/  
			var $this = jQuery(this); //Convertimos a jQuery  
			/*Esto es para la primera vez*/  
			$this.css("color",options.disabledColor).val(options.text); 
			if(options.fixed !== true) {
				/*Cuando recibe el foco, si está el texto por defecto, lo borra y cambia el color*/  
				$this.focus(function(){  
					$this.val() == options.text ? $this.val("").css("color",options.activeColor) : false;
				});  
			
				/*Cuando pierde el foco, si está vacío, pone el texto por defecto y cambia el color*/  
				$this.blur(function(){  
					jQuery.trim($this.val()).length==0 ? $this.css("color",options.disabledColor).val(options.text) : false;
				});  
			}
		});  
	};
})(jQuery);  
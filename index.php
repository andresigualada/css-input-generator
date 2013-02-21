<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="generator no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>CSS Input Generator</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <link rel="stylesheet" href="css/normalize.min.css">
				<link rel="stylesheet" href="css/no-theme/jquery-ui-1.10.1.custom.css">
				<link rel="stylesheet/less" type="text/css" href="css/style.less" />
				<link rel="stylesheet" type="text/css" href="css/colorpicker.css" />

        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
				
				<script src="js/vendor/less-1.3.3.min.js" type="text/javascript"></script>
    </head>
    <body>

        <div class="header-container">
            <header class="wrapper clearfix">
                <a href="index.html"><h1 class="title">CSS-input-generator</h1></a>
                <nav>
                    <ul>
                        <li><a href="#customize">customize</a></li>
												<li><a href="#what-is-this">what's this?</a></li>
                        <li><a href="#how-to">how to use it</a></li>
                    </ul>
                </nav>
            </header>
        </div>

        <div class="main-container">
            <div class="main wrapper clearfix">

								<aside>
									<h3 id="customize">customize your input:</h3>

									<div id="accordion-wrapper">

										<?php for($i = 0; $i<3; $i++): 
											switch($i) {
												case 0:
													$state = "normal";
													break;
												case 1:
													$state = "hover";
													break;
												case 2:
													$state = "focus";
													break;
											}
											
										?>
									
											<div class="accordion-child">
												<span class="head bold"><?php echo $state; ?> state</span>
												<div data-id="example-input-<?php echo $state; ?>">
													<div class="states">
														<span class="head">bck-image</span><span data-type="background-image" class="input-gen-bck input-color"></span>
													</div>
													
													<div class="states">
														<span class="head">bck-color</span><span data-type="background-color" class="input-gen input-color"></span>
													</div>
													
													<div class="states">
														<span class="head">text-color</span><span data-type="color" class="input-gen input-color"></span>
													</div>
													
													<div class="states">
														<span class="head">padding</span><span data-type="padding" class="input-gen input-size"></span>
													</div>
													
													<div class="states">
														<span class="head">border</span><span data-type="border-width" class="input-gen input-size"></span><span data-type="border-style" class="input-gen input-style"></span><span data-type="border-color" class="input-gen input-color"></span>
													</div>
													
													<div class="states">
														<span class="head">border-radius</span><span data-type="border-radius" class="input-gen input-size"></span>
													</div>
													
													<div class="states" data-type="box-shadow">
														<span class="head">box-shadow</span><span data-type="box-shadow-offset" class="input-gen-shadow"></span><span data-type="box-shadow-size" class="input-gen-shadow"></span><span data-type="box-shadow-color" class="input-gen-shadow"></span>
													</div>
													<div class="states">
														<span class="head">result</span><input id="example-input-<?php echo $state; ?>" type="text" class="result-input" readonly="readonly"/>
													</div>
												</div>
											</div>
											<div class="clearfix"></div>
											
										<?php endfor; ?>

									</div>
									
									
									<canvas id="canvas-pattern" width="3" height="3"></canvas>
									<hr />
									<div class="states">
										<span class="head">css scope</span><input id="input-css-scope" type="text" class="input-opts" /><span class="head">css selector</span><input id="input-css-selector" type="text" class="input-opts" />
									</div>
									<button class="submit right" id="get-css">Generate CSS</button>
									<div class="clearfix"></div>
								</aside>						
						
                <article>
										<section id="css-wrapper">
											<h2>CSS Generated</h2>
											<div id="css-code">
												<pre></pre>
											</div>
										</section>
										
										<section>
											<h3 id="what-is-this">what's this?</h3>
											<p>
												A css input generator to create css3 inputs fast and easy. It's still simple, but I will be improving though.
											</p>
											<p>
												Compatibility with major web browsers: Firefox, Chrome, Opera, Safari, IE9+, etc.
											</p>
										</section>
										
										<section>
											<h3 id="how-to">how do I use it?</h3>
											<p>
												Fill the customize form and see the result real-time. You can choose a css scope (<i>.widget</i> by default) to limit the css code to a certain portion of the page, and css selector (<i>.fancy</i> by default). Once finished, press "Generate CSS" to see css code created. After that, just copy and paste to your css file.
											</p>
										</section>
                </article>
            </div> <!-- #main -->
        </div> <!-- #main-container -->

        <div class="footer-container">
            <footer class="wrapper">
                <h3 class="credits"><a href="http://andresigualada.com/">@surmano</a></h3>
            </footer>
        </div>

        <script src="js/vendor/jquery-1.9.1.min.js"></script>
				<script src="js/vendor/jquery-ui-1.10.1.custom.min.js"></script>
				<script src="js/vendor/Color.class.js"></script>
				<script src="js/vendor/String.class.js"></script>
				<script src="js/vendor/jquery.text-field.js"></script>
				<script type="text/javascript" src="js/vendor/colorpicker.js"></script>
				<script type="text/javascript" src="js/vendor/eye.js"></script>
				<script type="text/javascript" src="js/vendor/utils.js"></script>
				
        <script src="js/main.js"></script>

        <script type="text/javascript">			
				/*
					var _gaq = _gaq || [];
					_gaq.push(['_setAccount', 'UA-35866915-3']);
					_gaq.push(['_trackPageview']);

					(function() {
						var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
						ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
						var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
					})();
				*/
				</script>
    </body>
</html>

	html, body {
				height: 100%;
				padding: 0;
				margin: 0;
			}
			body {
				min-height: 300px;
			}
			body * {
				font-family: Arial, Geneva, SunSans-Regular, sans-serif;
				font-size: 14px;
				color: #333;
				line-height: 22px;
			}

			#wrapper {
				width: 100%;
				margin: -100px 0 0 0;
				position: absolute;
				left: 0;
				top: 50%;
			}
			#wrapper h3 {
				font-size: 20px;
				text-align: center;
			}
			
			#wrapper > div {
				background-color: #eee;
				border-top: 1px solid #ccc;
				border-bottom: 1px solid #ccc;
				width: 100%;
				height: 30px;
				padding: 15px 0;
				overflow: hidden;
			}
			#wrapper > div.first {
				border-bottom: none;
			}
			
			#wrapper dl {
				display: block;
				margin: 0;
			}
			#wrapper dt, #wrapper dd {
				display: block;
				float: left;
				margin: 0 10px;
				padding: 5px 10px;
			}
			#wrapper dt {
				background-color: #f66;
				color: #fff;
			}
			#wrapper dd {
				color: #333;
				margin-right: 50px;
			}

			code {
				font-style: italic;
			}
			
			#donate-spacer {
				height: 100%;
			}
			#donate {
				border-top: 1px solid #999;
				width: 750px;
				padding: 50px 75px;
				margin: 0 auto;
				overflow: hidden;
			}
			#donate p, #donate form {
				margin: 0;
				float: left;
			}
			#donate p {
				width: 650px;
			}
			#donate form {
				width: 100px;
			}
@import url(http://fonts.googleapis.com/css?family=Open+Sans:400,800,700,600,300);
 
body {
	background: #FFE4E1;
	margin:0;
	font-family: 'Century Gothic', sans-serif;
    font-size : 1.5em
}
 
hr {
	border:0;
	background:#dedede;
	height:1px;
}		
 
header{
	text-align: center;
	color: #232323;
}
 
header .judul{
	font-size: 35pt;
}
 
header .deskripsi{
	font-size: 11pt;
}
 
.wrap {
	width:650px;
  margin:0 auto;
}
 
nav.menu ul {
	overflow:hidden;
	color:#fff;
	list-style: none;
	float:left;
	padding:0;
	width: 650px;
	margin:0 0 0;
	text-align : center;
	background: #FA8072;
	-webkit-box-shadow: 1px 1px 1px 0px rgba(204,204,204,0.55);
	-moz-box-shadow: 1px 1px 1px 0px rgba(204,204,204,0.55);
	box-shadow: 1px 1px 1px 0px rgba(204,204,204,0.55);
}
 
nav.menu ul li {
	margin:0;
	float:center; 
	display: inline-block;
}
 
nav.menu ul a {
	padding:25px;
	display:block;
	font-weight:600;
	font-size: 16px;
	color:#fff;
	text-transform: uppercase;
	transition: all 0.5s ease;
	text-decoration: none;
}
 
nav.menu ul a:hover {
	text-decoration: underline;
	background:#16a085;
}
 
.sidebar {
	float:right;
	width:275px;
}
 
.sidebar .widget {
	padding:25px;
	margin:0 0 25px;
	background:#fff;
	border-bottom: 2px solid #fff;
	transition: all 0.5s ease;
}
 
.sidebar .widget:hover {
	border-bottom: 2px solid #3498db;
}
 
.sidebar .widget h2 {
	padding:0;
	margin:0 0 15px;
	color:#3498db;
	font-size: 18px;
	font-weight:800;
	text-transform: uppercase;
}
 
.sidebar .widget p {
	font-size: 14px;
}
 
.sidebar .widget p:last-child {
	margin:0;
}
 
.home {
	text-align : center;
}

.jelaskan {
	font-size : 8pt;
	text-align : center;
}

.sekolah {
	font-size : 12px;
}

 
.blog {
	
	float:left;
}

.profile
  {
    background : white;
    font-size : 0.5em;
  }

.profile img{
	float:right;
}
	
  .sansserif {
	background : #FFDAB9;
	font-family: Century Gothic;
	height : 300px;
	width : 400px;
  }

td{padding-left:5px;}

.conteudo {
	width:600px;
	padding:25px;
	margin:25px auto;
	background: #fff;
	border:1px solid #dedede;
	-webkit-box-shadow: 1px 1px 1px 0px rgba(204,204,204,0.35);
	-moz-box-shadow: 1px 1px 1px 0px rgba(204,204,204,0.35);
	box-shadow: 1px 1px 1px 0px rgba(204,204,204,0.35);
}
 
.conteudo img{
	 width: 32%;
}
 
.conteudo h1 {
	padding:0;
	margin:0 0 15px;
	font-weight: normal;
	color: #666;
	font-family: Georgia;
}
 
.conteudo p:last-child {
	margin: 0;
}
 
.conteudo .continue-lendo {
	color:#000;
	transition: all 0.5s ease;
	text-decoration: none;
	font-weight: 700; 
}

table{
	border:0px solid transparent;
} 

.conteudo .continue-lendo:hover {
	margin-left:10px;
}
 
.post-info {
	float: right;
	font-size: 12px;
	margin: -10px 0 15px;
	text-transform: uppercase;
}
 
@media screen and (max-width: 960px) {
 
	.header {
		position:inherit;
	}
 
	.wrap {
		width: 90%;
		margin:25px auto;
	}
	.sidebar {
		width:100%;
		margin:25px 0 0;
		float:right;
	}
 
	.sidebar .widget {
		padding:5%;
	}
 
	nav.menu ul {
		width: 100%;
	}
 
	nav.menu ul {
		float:inherit;
	}
 
	nav.menu ul li {
		float:inherit;
		margin:0;
	}
 
	nav.menu ul a {
		padding:15px;
		font-size: 16px;
		border-top:1px solid #1abf9f;
		border-bottom:1px solid #16a085;
	}
 
	.blog {
		width:90%;
	}
 
	.conteudo {
		float:inherit;
		margin:0 auto 25px;
		width:101%;
		border:1px solid #dedede;
		padding:5%;  
		background: #fff;
	}
 
	.conteudo img {
		max-width: 110%;
		margin:0 0 25px -5%;
		min-width: 110%;
	}
 
	.conteudo .continue-lendo:hover {
		margin-left:0;
	}
	
 
@media screen and (max-width: 460px) {
 
	nav.menu ul a {
		padding:15px;
		font-size: 14px;
	}
 
	.sidebar {
		display:none
	}
	.post-info {
		display:none;
	}
 
	.atur {
		text-align : justify;
		font-size : 12pt;
	}
 
	.conteudo {
		margin:25px auto;
	}
 
	.conteudo img {
		margin:-5% 0 25px -5%;
	}			
}

/* ---------------- CARTOON ---------------- */

.cartoon{

margin:70px 0;

padding:35px;

}

.cartoon-header{

display:flex;

justify-content:space-between;

align-items:center;

margin-bottom:30px;

}

.cartoon-header h2{

font-family:Georgia,serif;

font-size:38px;

}

.cartoon-header span{

background:#111;

color:white;

padding:8px 16px;

border-radius:25px;

font-size:13px;

font-weight:700;

}

.cartoon-image{

height:520px;

border:2px dashed #cfcfcf;

border-radius:20px;

display:flex;

justify-content:center;

align-items:center;

background:#fafafa;

overflow:hidden;

}

.cartoon-placeholder{

text-align:center;

}

.cartoon-placeholder{

font-size:90px;

}

.cartoon-placeholder p{

font-family:Georgia,serif;

font-size:32px;

margin-top:25px;

}

.cartoon-placeholder small{

display:block;

margin-top:15px;

color:#777;

font-size:16px;

}

@media(max-width:900px){

.cartoon-image{

height:320px;

}

.cartoon-header{

flex-direction:column;

align-items:flex-start;

gap:15px;

}

.cartoon-header h2{

font-size:28px;

}

.cartoon-placeholder{

font-size:60px;

}

.cartoon-placeholder p{

font-size:22px;

}

}

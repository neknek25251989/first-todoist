window.onload=function(){var s=document.getElementsByClassName("header")[0].getElementsByTagName("a"),n=document.getElementsByClassName("in-progress"),a=document.getElementsByClassName("task-completed"),l=document.getElementsByClassName("new-note-detail")[0];function t(e){for(var t=0;t<s.length;t++)s[t].className="inactive";document.getElementById(e).className="active"}function i(e){if("inProgress"==e){l.style.display="none";for(var t=0;t<a.length;t++)a[t].style.display="none";for(t=0;t<n.length;t++)n[t].style.display="flex"}else if("completed"==e){l.style.display="none";for(t=0;t<a.length;t++)a[t].style.display="flex";for(t=0;t<n.length;t++)n[t].style.display="none"}else{l.style.display="none";for(t=0;t<a.length;t++)a[t].style.display="flex";for(t=0;t<n.length;t++)n[t].style.display="flex"}}s[0].className="active",s[1].className="inactive",s[2].className="inactive";for(var e=0;e<s.length;e++)s[e].onclick=function(){var e;t(this.id),e=this.id,o.style.display="myTask"==e?"block":"none",i(this.id)};var o=document.getElementsByClassName("add-new-note")[0],c=document.getElementsByClassName("add-task")[0],m=o.getElementsByTagName("input")[0],d=document.getElementsByClassName("cancel")[0];m.onfocus=function(){l.style.display="block"},d.onclick=function(){l.style.display="none"};var r=document.getElementsByClassName("task-list-important")[0],h=document.getElementsByClassName("task-list-completed")[0],y=document.getElementsByClassName("task-list")[0],f=document.getElementsByClassName("task"),p=document.getElementsByClassName("total-task")[0],g=document.getElementsByClassName("time-input")[0];c.onclick=function(){var e=document.getElementById("entry-template").innerHTML,t=Handlebars.compile(e)({content:m.value,deadline:g.value}),s=document.createElement("div");s.className="task",s.innerHTML=t,y.insertBefore(s,y.childNodes[0]),g.value=null,m.value=null;var n=document.getElementsByClassName("star-icon")[0];n.isImportant=!1,n.onclick=function(){n.isImportant=!n.isImportant,console.log(n.isImportant),this.className=this.isImportant?"fas fa-star fa-lg":"far fa-star fa-lg",this.style.color=this.isImportant?"#f5a623":"#000",s.style.backgroundColor=this.isImportant?"#fff2dc":"#f2f2f2",1==n.isImportant?r.insertBefore(s,r.childNodes[0]):1==n.isImportant&&1==a.isCheck?h.insertBefore(s,h.childNodes[0]):1==a.isCheck?h.appendChild(s):y.appendChild(s)};var a=document.getElementsByClassName("check-box-icon")[0],l=document.getElementsByClassName("task-text")[0];a.isImportant=!1,a.onclick=function(){this.isCheck=!this.isCheck,this.className=this.isCheck?"far fa-check-square fa-lg check-box-icon":"far fa-square fa-lg check-box-icon",this.style.color=this.isCheck?"#c8c8c8":"#000",l.style.textDecoration=this.isCheck?"line-through":"none",l.style.color=this.isCheck?"#c8c8c8":"#000",s.className=this.isCheck?"task task-completed":"task in-progress",1==a.isCheck?h.appendChild(s):0==a.isCheck&&1==n.isImportant?r.appendChild(s):y.appendChild(s)},document.getElementsByClassName("x-icon")[0].onclick=function(){this.parentNode.parentNode.parentNode.removeChild(s),p.innerHTML=f.length+" task left"},p.innerHTML=f.length+" task left"},p.innerHTML=f.length+" task left"};
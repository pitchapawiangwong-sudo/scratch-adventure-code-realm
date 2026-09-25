function currentStudent(){try{return JSON.parse(sessionStorage.getItem('codeRealmStudent')||'null')}catch(e){return null}}
function requireAuth(){const p=currentStudent();if(!p){location.href='login.html';return null}return p}
function saveSession(p){sessionStorage.setItem('codeRealmStudent',JSON.stringify(p));}
function logout(){sessionStorage.removeItem('codeRealmStudent');localStorage.removeItem('scratchAdventurePlayer');location.href='login.html'}
function go(page){location.href=page}
function entered(v){return v!==''&&v!==null&&typeof v!=='undefined'}

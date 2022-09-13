const hostname = 'http://localhost:3000';
initAuth()
async function initAuth() {
    document.body.innerHTML += '<style>   #msg-error-login,#msg-error-registration{    color: red;    font-size: 15px;    margin: 0;    display: none;}#allFormId{    width: 40%;}@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700); html {box-sizing: border-box;}*,*:before,*:after {box-sizing: inherit;} .logomapid{width:100%;display: flex;justify-content:center;align-items: center;} .logomapid>img{width:200px;height:100px;} .body {z-index: 10; position: fixed;top:0;left:0; background: url(https://images.unsplash.com/photo-1465188035480-cf3a60801ea5?dpr=1.25&auto=format&fit=crop&w=1199&h=1199&q=80&cs=tinysrgb&crop=) no-repeat center center fixed;background-size: cover; height:100%;width:100%;padding:0;margin:0;}/** [Main Styling] *****/.panel {font-family: "Montserrat";border-radius: 3px;}.panel--static {position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);display: flex;align-items: center;width: 80%;height: 60%;min-height: 300px;background: rgba(0, 0, 0, 0.6);color: #ddd;}.panel--static .panel__content {padding: 3rem;}.panel--sliding {position: absolute;top: -5%;left: 4%;width: 50%;height: 110%;background: #fefefe;box-shadow: 3px -2px 6px 0px rgba(0, 0, 0, 0.4);}.panel--sliding .panel__content.signup {display: none;}.panel__heading {font-size: 1.2rem;}.panel--sliding .panel__heading {color: #e26a6a;text-transform: uppercase;}.panel__copy {font-size: 0.7rem;}.panel .formdiv {width: 100%;margin-top: 2.5em;}.panel .formdiv .input {width: 100%;margin-bottom: 1rem;padding: 0.4rem 0.2rem;font-size: 0.8rem;border-top: 0;border-left: 0;border-right: 0;border-bottom: 1px solid #ddd;}.panel .formdiv .input:focus {outline: 0;}.panel .btn {min-width: 120px;margin: 1rem 0;padding: 0.5rem 1.5rem;font-size: 0.7rem;font-weight: 700;text-transform: uppercase;border-radius: 3px;cursor: pointer;}.panel .btn--primary {background: #e26a6a;color: #fefefe;border: 0;}.panel .btn--secondary {background: transparent;color: #ccc;border: 2px solid #ccc;}.panel .btn:focus {outline: 0;}.panel a,.panel a:focus,.panel a:visited,.panel a:active {display: block;font-size: 0.7rem;text-decoration: none;color: #aaa;}</style><div id="sso-auth-form-id" class="body">    <div class="panel panel--static">        <div class="panel__content left">            <h1 class="panel__heading">Don\'t have an account?</h1>            <p class="panel__copy">Ethical celiac hashtag taxidermy squid. Wayfarers distillery narwhal, kombucha jean shorts selvage meggings.</p>            <button type="button" onclick="showLoginForm(false)" class="btn btn--secondary signup">Sign up</button>        </div>        <div class="panel__content right">            <h1 class="panel__heading">Have an account?</h1>            <p class="panel__copy">Ethical celiac hashtag taxidermy squid. Wayfarers distillery narwhal, kombucha jean shorts selvage meggings.</p>            <button type="button" onclick="showLoginForm(true)" class="btn btn--secondary login">Log in</button>        </div>        <div class="panel panel--sliding" id="allFormId" style="margin-left: 43%;">            <div id="signupformid" class="panel__content signup">                <div class="logomapid">                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/MAPmaroc-logo.jpg">                </div>                <h1 class="panel__heading">Sign up</h1>                <div class="formdiv" id="signup">                    <input                        type="text"                        placeholder="Role"                        id="role-registration-input"                        class="input input--name"                    >                    <input                        type="text"                        placeholder="Email"                        id="email-registration-input"                        class="input input--email"                    >                    <input                        type="password"                        placeholder="Password"                        id="password-registration-input"                        class="input input--password"                    >                    <input                        type="password"                        placeholder="Confirm Password"                        id="re-password-registration-input"                        class="input input--password"                    >                    <p id="msg-error-registration">Please fill all fields</p><p style="color:green;display:none" id="success-form-id">Account was created successfully</p>                    <button onclick="signUp()" class="btn btn--primary">Sign up</button>                </div>            </div>            <div id="signinformid" class="panel__content login">                <div class="logomapid">                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/MAPmaroc-logo.jpg">                </div>                <h1 class="panel__heading">Log in</h1>                <div class="formdiv" id="login">                    <input                        type="text"                        placeholder="Email"                        id="email-login-input"                        class="input input--email"                    >                    <input                        type="password"                        placeholder="Password"                        id="password-login-input"                        class="input input--password"                    >                    <p id="msg-error-login">Please fill all fields</p>                    <button class="btn btn--primary" onclick="signIn()">Log in</button>                </div>            </div>        </div>    </div></div>';
    let form = document.getElementById('sso-auth-form-id');
    let cookies = {};
    document.cookie.split('; ').map(ele => {
        cookies[ele.split('=')[0]] = ele.split('=')[1];
    })
    let data = await fetch(hostname+'/api/auth/validation-token', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: cookies['token'] })
    });
    data = await data.json()
    //let { data } = await axios.post(hostname+'/api/auth/validation-token', )
    if (!data.isRegistred) form.style.display = 'block';
    else form.style.display = 'none';
}

async function signIn() {
    document.getElementById('msg-error-login').innerHTML = 'Please fill all fields'
    if (checkFields(1)) {
        let email = document.getElementById('email-login-input').value;
        let password = document.getElementById('password-login-input').value;

        //let { data } = await axios.post(hostname+'/api/auth/sign-in', { email, password })
        let data = await fetch(hostname+'/api/auth/sign-in', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        data = await data.json()
        if (data.isRegistred) {
            document.cookie = `token = ${data.token}`
            document.cookie = `role = ${data.role}`
            document.cookie = `user = ${data.user}`
            location.reload()
        } else {
            document.getElementById('msg-error-login').innerHTML = data.message
            document.getElementById('msg-error-login').style.display = 'block';
        }
    } else {
        document.getElementById('msg-error-login').style.display = 'block';
    }
}

async function signUp() {
    document.getElementById('msg-error-registration').innerHTML = 'Please fill all fields'
    if (checkFields(2)) {
        let email = document.getElementById('email-registration-input').value;
        let password = document.getElementById('password-registration-input').value;
        let role = document.getElementById('role-registration-input').value;
        //let { data } = await axios.post(hostname+'/api/auth/sign-up', { email, password, role })
        let data = await fetch(hostname+'/api/auth/sign-up', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, role })
        });
        data = await data.json()
        if (data.isRegistred) {
            document.getElementById('success-form-id').style.display = 'block';
            document.getElementById('registration-form').style.display = 'none';
            document.getElementById('login-form').style.display = 'none';
        } else {
            document.getElementById('msg-error-registration').innerHTML = data.message;
            document.getElementById('msg-error-registration').style.display = 'block';
        }
    } else {
        document.getElementById('msg-error-registration').style.display = 'block';
    }
}

function checkFields(order) {
    document.getElementById('success-form-id').style.display = 'none';
    document.getElementById('msg-error-registration').style.display = 'none';
    document.getElementById('msg-error-login').style.display = 'none';
    if (order == 1) {
        if (isValideEmail(document.getElementById('email-login-input').value) && document.getElementById('password-login-input').value.length > 0) return true;
    } else if (order == 2) {
        if (document.getElementById('email-registration-input').value?.length > 0 && isValideEmail(document.getElementById('email-registration-input').value) && document.getElementById('password-registration-input').value?.length > 0 && document.getElementById('re-password-registration-input').value === document.getElementById('password-registration-input').value && document.getElementById('role-registration-input').value?.length > 0) return true;
    }
    return false;
}

function isValideEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) != null;
};

function showLoginForm(isTrue){
    document.getElementById('allFormId').style.marginLeft = isTrue ? '43%' : '-2%'
    document.getElementById('signinformid').style.display = isTrue ? 'block' : 'none';
    document.getElementById('signupformid').style.display = !isTrue ? 'block' : 'none';
}
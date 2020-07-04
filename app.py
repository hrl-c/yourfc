from pymongo import MongoClient
import flask
from flask import Flask, render_template, jsonify, request, redirect, url_for, session
from datetime import timedelta
app = Flask(__name__)
# Session Secret Key
app.secret_key = 'tlqkf'


# Session deadline
def make_session_paramanet():
    session.permanent = True
    app.permanent_session_lifetime = timedelta(minute=5)


# DB
client = MongoClient('localhost', 27017)
db = client.dbtest


@app.route('/')
def home():
    tlqkf = 'smlsmlsml123'
    sival = db.users.find_one({'id': tlqkf})
    print(sival['yymmdd'])
    print(sival['yymmdd']['birth'])
    print(sival['yymmdd']['signup']['su_yy'])
    return render_template('index.html')


# rule, endpoint, view_func (, provide_automatic_option, **option)
app.add_url_rule('/', 'index', home)


# ===== util ===== #
# LOGIN

@app.route('/login', methods=['GET', 'POST'])
def loginfunc():
    if flask.request.method == 'POST':
        id_receive = request.form['id_give']
        pw_receive = request.form['pw_give']
        print('id-receive = ' + id_receive)
        print('id-receive = ' + pw_receive)
        user_result = db.users.find_one({"id": id_receive})
        id_result = 0
        pw_result = 0
        if user_result is None:
            print('none')
            id_result = 0
        else:
            id_result = 1
            print(user_result)
            print(user_result['pw'])
            if user_result['pw'] == pw_receive:
                pw_result = 1
            else:
                pw_result = 0
        if not id_result:
            return jsonify({'result': 'fail', 'msg': 'no_id'})
        elif not pw_result:
            return jsonify({'result': 'fail', 'msg': 'no_pw'})
        elif id_result and pw_result:
            user_name = user_result['name']
            user_id = user_result['id']
            session['user_name'] = user_name
            session['user_id'] = user_id
            return jsonify({'result': 'success', 'msg': 'login성공'})
        else:
            return jsonify({'result': 'error', 'msg': 'error444'})
    elif flask.request.method == 'GET':
        return render_template('login.html')
    else:
        print('method-error_In_login')


@app.route('/logout', methods=['GET'])
def logout():
    session.pop('user_name', None)
    session.pop('user_id', None)
    return redirect(url_for('.index'))
# url_for( endpoint, **value )

@app.route('/signup_terms', methods=['GET'])
def goToSignup_terms():
    if 'user_name' in session:
        return render_template('error_300.html')
    else:
        return render_template('signup_terms.html')


@app.route('/signup', methods=['GET', 'POST'])
def signupfunc():
    if flask.request.method == 'GET':
        if 'user_name' in session:
            return render_template('error_300.html')
        else:
            return render_template('signup.html')
    elif flask.request.method == 'POST':
        id_receive = request.form['id-give']
        pw_receive = request.form['pw-give']
        name_receive = request.form['name-give']
        yy_receive = request.form['yy-give']
        mm_receive = request.form['mm-give']
        dd_receive = request.form['dd-give']
        gender_receive = request.form['gender-give']
        email_receive = request.form['email-give']
        telecom_receive = request.form['telecom-give']
        phone_receive = request.form['phone-give']

        su_yy_receive = request.form['su_yy-give']
        su_mm_receive = request.form['su_mm-give']
        su_dd_receive = request.form['su_dd-give']


        # items = ['id', 'pw', 'name', 'yy', 'mm' ,'dd', 'gender', 'email', 'telecom', 'phone', 'su_yy', 'su_mm', 'su_dd']
        #
        # for item in items:
        #     item = request.form[item]
        #     return item

        new_user = {
            'id': id_receive,
            'pw': pw_receive,
            'name': name_receive,
            'yymmdd' : {
                'birth' : {
                    'yy': yy_receive,
                    'mm': mm_receive,
                    'dd': dd_receive
                },
                'signup' : {
                    'su_yy': su_yy_receive,
                    'su_mm': su_mm_receive,
                    'su_dd': su_dd_receive
                }
            },
            'gender': gender_receive,
            'email': email_receive,
            'telecom': telecom_receive,
            'phone': phone_receive,
            'su_yy': su_yy_receive,
            'su_mm': su_mm_receive,
            'su_dd': su_dd_receive
        }

        db.users.insert_one(new_user)

        return jsonify({'result': 'success'})
    else:
        print('method-error_in_signup')


@app.route('/id_check', methods=['POST'])
def checkId():
    print('/id_check')
    id_check_receive = request.form['id-give-for_id_check']
    target_id = db.users.find_one({'id': id_check_receive})
    if target_id:
        return jsonify({'result': 'success', 'token': '0'})
    else:
        return jsonify({'result': 'success', 'token': '1'})


@app.route('/find_id', methods=['GET', 'POST'])
def find_id():
    if flask.request.method == 'GET':
        return render_template('find_id.html')
    elif flask.request.method == 'POST':
        print('/find_id')
        find_id_receive_name = request.form['name_give']
        find_id_receive_yy = request.form['yy_give']
        find_id_receive_mm = request.form['mm_give']
        find_id_receive_dd = request.form['dd_give']
        find_id_receive_email = request.form['email_give']

        find_user_result = db.users.find_one({'email': find_id_receive_email})
        finded_user = 0
        finded_user_id = ''
        if find_user_result is None:
            print('none')
            finded_user = 0
        else:
            print('find_using_email')
            if find_id_receive_name == find_user_result['name'] \
                    and find_id_receive_yy == find_user_result['yy'] \
                    and find_id_receive_mm == find_user_result['mm'] \
                    and find_id_receive_dd == find_user_result['dd']:
                finded_user = 1
                print('finded')
                finded_user_id = find_user_result['id']
            else:
                finded_user = 0
                print('didnt find')

        if not finded_user:
            return jsonify({'result':'fail', 'msg':'no'})
        elif finded_user:
            return jsonify({'result':'success', 'msg':finded_user_id})
        else:
            return jsonify({'result':'fail', 'msg':'unknown_error'})


@app.route('/find_pw', methods=['GET', 'POST'])
def find_pw():
    if flask.request.method == 'GET':
        return render_template('find_pw.html')
    elif flask.request.method == 'POST':
        print('/find_id')
        find_pw_receive_id = request.form['id_give']
        find_pw_receive_name = request.form['name_give']
        find_pw_receive_email = request.form['email_give']

        find_user_result = db.users.find_one({'id': find_pw_receive_id})
        finded_user = 0
        finded_user_pw = ''
        if find_user_result is None:
            print('none')
            finded_user = 0
        else:
            print('find_using_email')
            if find_pw_receive_name == find_user_result['name'] \
                    and find_pw_receive_email == find_user_result['email'] :
                finded_user = 1
                print('finded')
                finded_user_pw = find_user_result['pw']
            else:
                finded_user = 0
                print('didnt find')

        if not finded_user:
            return jsonify({'result':'fail', 'msg':'no'})
        elif finded_user:
            return jsonify({'result':'success', 'msg':finded_user_pw})
        else:
            return jsonify({'result':'fail', 'msg':'unknown_error'})


# ===================== MyPage CODEs
@app.route('/mypage', methods=['GET'])
def gotoMypage():
    if 'user_name' in session:
        print('SESSIOOOOOOOOOOOOOOOOOOOOOON')
        user_name = session['user_name']
        return render_template('mypage.html', user_name = user_name)
    return render_template('mypage.html')


@app.route('/check_pw', methods=['GET', 'POST'])
def check_pw_for_myPage():
    if flask.request.method == 'POST':
        pw_receive = request.form['pw_give']
        print('id-receive = ' + pw_receive)
        this_user_id = session['user_id']
        user_result = db.users.find_one({"id": this_user_id})
        pw_result = 0
        if user_result['pw'] != pw_receive :
            return jsonify({'result':'fail', 'msg':'wrong_pw'})
        elif user_result['pw'] == pw_receive :
            return jsonify({'result':'success', 'msg':'found_it'})
        else :
            return jsonify({'result':'fail','msg':'error_500'})
    elif flask.request.method == 'GET':
        return render_template('check_pw.html')
    else:
        print('method-error_In_login')


@app.route('/change_pw', methods=['GET', 'POST'])
def change_pw_for_myPage():
    if flask.request.method == 'POST':
        pw_receive = request.form['pw_give']
        this_user_id = session['user_id']
        pre_pw = db.users.find_one({'id':this_user_id})['pw']
        print(pw_receive, pre_pw)
        if pre_pw == pw_receive:
            return jsonify({'result':'fail', 'msg':'기존의 비밀번호와 같습니다.'})
        elif pre_pw != pw_receive:
            db.users.update( {'id': this_user_id}, {'$set': {'pw' : pw_receive}})
            return jsonify({'result':'success', 'msg':'비밀번호가 변경되었습니다.'})
        else: return jsonify({'result':'fail','msg':'알 수 없는 에러가 발생하였습니다.'})
    else :
        return render_template('change_pw.html')


@app.route('/vip', methods=['GET'])
def check_vip():
    if (0):  # 세션을 넣겠다는 의미
        return render_template('vip.html')
    else:
        return render_template('vip_plan.html')


# ===== NAV ===== #

@app.route('/search_brand', methods=['GET'])
def goToSearch_brand():
    return render_template('search_brand.html')


@app.route('/fair', methods=['GET'])
def gotoFair():
    return render_template('fair.html')


@app.route('/partners', methods=['GET'])
def gotoPartners():
    return render_template('partners.html')


### for test
@app.route('/session_test', methods=['GET'])
def t1():
    ' 가입정보 들고오기 '
    pw_receive = request.form['pw_give']
    user_id = 'dlagkfka93'
    user_result = db.users.find_one({"id": user_id})
    user_pw = user_result['pw']




if __name__ == '__main__':
    app.run('127.0.0.1', port=1178, debug=True)

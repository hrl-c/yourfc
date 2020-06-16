from pymongo import MongoClient

import flask
from flask import Flask, render_template, jsonify, request, redirect, url_for
app = Flask(__name__)

client = MongoClient('localhost', 27017)
db = client.dbtest


@app.route('/')
def home():
    return render_template('index.html')

# ===== util ===== #
# LOGIN

@app.route('/login', methods=['GET', 'POST'])
def loginfunc():
    if flask.request.method == 'POST':
        id_receive = request.form['id_give']
        pw_receive = request.form['pw_give']
        print(id_receive, '/', pw_receive)
        # result = db.users.find({"id": id_receive})
        test_id = 'test01'
        test_pw = 'test10'
        if id_receive == test_id and pw_receive == test_pw:
            print('logggggggggggg')
            return jsonify({'result': 'success', 'msg': 'I GOT IT'})
        else:
            return jsonify({'result': 'id_error', 'msg': 'I  IT'})
    elif flask.request.method == 'GET':
        return render_template('login.html')
    else:
        print('method-error_In_login')


@app.route('/signup_terms', methods=['GET'])
def goToSignup_terms():
    return render_template('signup_terms.html')


@app.route('/signup', methods=['GET', 'POST'])
def signupfunc():
    if flask.request.method == 'GET':
        return render_template('signup.html')
    elif flask.request.method == 'POST':
        id_receive = request.form['id-give']
        pw_receive = request.form['pw-give']
        pw_check_receive = request.form['pw_check-give']
        name_receive = request.form['name-give']
        yy_receive = request.form['yy-give']
        mm_receive = request.form['mm-give']
        dd_receive = request.form['dd-give']
        gender_receive = request.form['gender-give']
        email_receive = request.form['email-give']
        phone_receive = request.form['phone-give']

        new_user = {
            'id': id_receive,
            'pw': pw_receive,
            'pw_check': pw_check_receive,
            'name': name_receive,
            'yy': yy_receive,
            'mm': mm_receive,
            'dd': dd_receive,
            'gender': gender_receive,
            'email': email_receive,
            'phone': phone_receive
        }

        db.users.insert_one(new_user)

        return jsonify({'result': 'success'})
    else:
        print('method-error_in_signup')


@app.route('/mypage', methods=['GET'])
def gotoMypage():
    ### 나중에 세션 넣어야함.
    return render_template('mypage.html')


@app.route('/vip', methods=['GET'])
def check_vip():
    if (0) : #세션을 넣겠다는 의미
        return render_template('vip.html')
    else :
        return render_template('vip_plan.html')

# ===== NAV ===== #

@app.route('/search_brand', methods=['GET'])
def goToSearch_brand():
    return render_template('search_brand.html')


@app.route('/partners', methods=['GET'])
def gotoPartners():
    return render_template('partners.html')


### for test
@app.route('/test', methods=['GET'])
def forTest():
    print('1')
    '''
    now_receive = request.args.get('now')
    print(now_receive)
    '''

    return redirect(url_for('forTest', sival="tlqkf"))


# ===== TEST ==== #


@app.route('/first', methods=['POST'])
def saving():
    receive = request.form['first_give']
    print(receive)
    '''
    for item in receive:
        #db.test.insert_one(item)
        print(item)
        '''
    return jsonify({'result':'success', 'msg':'I GOT IT'})


@app.route('/gotest', methods=['GET'])
def sigsig():
    print('jksadngkjsngkjsngkjsn')
    return render_template('test.html')


if __name__ == '__main__':
    app.run('127.0.0.1', port=1060,  debug=True)
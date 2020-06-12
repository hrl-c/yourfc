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
        print('error_In_login')


@app.route('/signup_terms', methods=['GET'])
def goToSignup_terms():
    return render_template('signup_terms.html')


@app.route('/signup', methods=['GET'])
def goToSignup():
    print('3')
    return render_template('signup.html')


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
    app.run('127.0.0.1', port=1039,  debug=True)
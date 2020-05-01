from pymongo import MongoClient

from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

client = MongoClient('localhost', 27017)
db = client.dbtest


# HTML을 주는 부분
@app.route('/')
def home():
    return render_template('index.html')

# API 역할을 하는 부분
@app.route('/vip', methods=['GET'])
def check_vip():
    if (0) : #세션을 넣겠다는 의미
        return render_template('vip.html')
    else :
        return render_template('vip_plan.html')

@app.route('/search_brand', methods=['GET'])
def goToSearch_brand():
    return render_template('search_brand.html')

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
# LOGIN
@app.route('/login', methods=['GET'])
def goToLoginPage():
    return render_template('login.html')
@app.route('/signup_terms', methods=['GET'])
def goToSignup_terms():
    return render_template('signup_terms.html')

@app.route('/signup', methods=['GET'])
def goToSignup():
    return render_template('signup.html')

@app.route('/login', methods=['POST'])
def login():
    id_receive = request.form['id_give']
    pw_receive = request.form['pw_give']
    print (id_receive,'/', pw_receive)
    # result = db.users.find({"id": id_receive})
    test_id = 'test01'
    test_pw = 'test10'
    if id_receive == test_id and pw_receive == test_pw:
        print('logggggggggggg')
        return jsonify({'result': 'success', 'msg': 'I GOT IT'})
    else:
        return jsonify({'result': 'id_error', 'msg': 'I  IT'})
    """
    if( result ):
        real_pw = result.password
        if ( real_pw == pw_receive ):
            return jsonify({'result':'success', 'msg':'I GOT IT'}), render_template('index.html')
        else:
            return jsonify({'result':'pw_error', 'msg':'I GOT IT'})
    else:
        return jsonify({'result':'id_error', 'msg':'I GOT IT'})
"""


if __name__ == '__main__':
    app.run('127.0.0.1', port=5000,  debug=True)
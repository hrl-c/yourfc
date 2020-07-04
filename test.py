user_result = {'id':'아이디', 'pw':'패스워드비밀번호', 'name':'이름'}
item_list = ['id', 'pw', 'name']
session_list = {}
for item in item_list:
    this = user_result[item]
    session_list[item] = this
print('--------------')
print(session_list)

print('--------------')
session_list['id'] = 'skmdks'
print(session_list)
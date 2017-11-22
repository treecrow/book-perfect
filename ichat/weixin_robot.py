import itchat
from itchat.content import *
from tuling import get_response

itchat.auto_login(hotReload=True)

@itchat.msg_register(TEXT)
def text_reply(msg):
    return get_response(msg['Text'])

itchat.run(debug=True)
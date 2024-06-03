from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import requests, webbrowser

app = Flask(__name__)
cors = CORS(app)

@app.route('/get_women', methods=['GET'])
@cross_origin(origins=['http://localhost:3000'])
def get_women():
    number = 10
    data = requests.get(f'https://randomuser.me/api/?results=10&gender=female').json()
    users = []
    for user in data['results'] :
        users.append({
                "firstname" : user['name']['first'],
                "lastname" : user['name']['last'],
                "age" : user['dob']['age'],
                "gender" : user['gender'],
                "city" : user['location']['city'],
                "country" : user['location']['country'],
                "photo" : user['picture']['large'],
                "id" : user['login']['uuid']
        })
    return users

@app.route('/get_men', methods=['GET'])
@cross_origin(origins=['http://localhost:3000'])
def get_men():
    number = 10
    data = requests.get(f'https://randomuser.me/api/?results=10&gender=male').json()
    users = []
    for user in data['results'] :
        users.append({
                "firstname" : user['name']['first'],
                "lastname" : user['name']['last'],
                "age" : user['dob']['age'],
                "gender" : user['gender'],
                "city" : user['location']['city'],
                "country" : user['location']['country'],
                "photo" : user['picture']['large'],
                "id" : user['login']['uuid']
        })
    return users

if __name__ == '__main__':
    #webbrowser.open('http://127.0.0.1:5000/get_profiles')
    app.run(debug=True)

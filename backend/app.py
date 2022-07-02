import json
from flask import Flask, jsonify, render_template, request
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)

app.debug = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://vppgyyfjpltcbe:228c4f1cd51944e6247f66df61c98796970f5c5e178da446fb5573c74415391e@ec2-34-200-35-222.compute-1.amazonaws.com:5432/df2gdplb73auhs'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Userz(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(200), unique=False)
    last_name = db.Column(db.String(200), unique=False)
    email = db.Column(db.String(200), unique=True)

    def __init__(self, id, first_name, last_name, email):
        self.id = id
        self.first_name = first_name
        self.last_name = last_name
        self.email = email


@app.route('/')
def index():
    return jsonify({'name': 'alice',
                    'email': 'alice@outlook.com'})

@app.route('/signup', methods=['POST'])
def signup():

    response = json.loads(request.data)
    id = '2'
    first_name = response["first_name"]
    last_name = response["last_name"]
    email = response["email"]
    
    data = Userz(id, first_name, last_name, email)
    db.session.add(data)
    db.session.commit()
    print('DB committed')
    return jsonify({'first_name': 'Charlie', 'last_name': 'Rahman',
                'email': 'nusaiba@nusaiba.com'})


if __name__ == '__main__':
    app.run()
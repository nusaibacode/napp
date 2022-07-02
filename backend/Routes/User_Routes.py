from app import app, db
from flask import Flask, jsonify, render_template, request
import json
from Backend.Models.User import myUser

@app.route('/')
def index():
    return jsonify({'name': 'alice',
                    'email': 'alice@outlook.com'})

@app.route('/signup', methods=['POST'])
def signup():
    print("here")
    response = json.loads(request.data)
    id = '2'
    first_name = response["first_name"]
    last_name = response["last_name"]
    email = response["email"]
    
    data = myUser(id, first_name, last_name, email)
    db.session.add(data)
    db.session.commit()
    print('DB committed')
    return jsonify({'first_name': 'Charlie', 'last_name': 'Rahman',
                'email': 'nusaiba@nusaiba.com'})
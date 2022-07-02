from Backend.app import db
from flask import Flask, jsonify, render_template, request

class myUser(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(200), unique=False)
    last_name = db.Column(db.String(200), unique=False)
    email = db.Column(db.String(200), unique=True)

    def __init__(self, id, first_name, last_name, email):
        self.id = id
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
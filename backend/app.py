import json
from flask import Flask, jsonify, render_template, request
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)

#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://vppgyyfjpltcbe:oreo'@ec2-34-200-35-222.compute-1.amazonaws.com/'

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
    if request.method == 'GET':
        return jsonify({'first_name': 'Nusaiba',
                    'email': 'nusaiba@nusaiba.com'})

    if request.method == 'POST':
        print(request)
        id = '1'
        first_name = 'Charlie'
        last_name = 'Rahman'
        email = 'charlie@nusaiba.edu'
        
        data = Userz(id, first_name, last_name, email)
        db.session.add(data)
        db.session.commit()
        print('DB committed')
        return jsonify({'first_name': 'Charlie', 'last_name': 'Rahman',
                    'email': 'nusaiba@nusaiba.com'})

#         dealer = request.form['dealer']
#         rating = request.form['rating']
#         comments = request.form['comments']
#         # print(customer, dealer, rating, comments)
#         if customer == '' or dealer == '':
#             return render_template('index.html', message='Please enter required fields')
#         if db.session.query(Feedback).filter(Feedback.customer == customer).count() == 0:
#             data = Feedback(customer, dealer, rating, comments)
#             db.session.add(data)
#             db.session.commit()
#             send_mail(customer, dealer, rating, comments)
#             return render_template('success.html')
#         return render_template('index.html', message='You have already submitted feedback')


# app.run()


# db = SQLAlchemy(app)


# class Feedback(db.Model):
#     __tablename__ = 'feedback'
#     id = db.Column(db.Integer, primary_key=True)
#     customer = db.Column(db.String(200), unique=True)
#     dealer = db.Column(db.String(200))
#     rating = db.Column(db.Integer)
#     comments = db.Column(db.Text())

#     def __init__(self, customer, dealer, rating, comments):
#         self.customer = customer
#         self.dealer = dealer
#         self.rating = rating
#         self.comments = comments


# @app.route('/')
# def index():
#     return render_template('index.html')


# @app.route('/submit', methods=['POST'])
# def submit():
#     if request.method == 'POST':
#         customer = request.form['customer']
#         dealer = request.form['dealer']
#         rating = request.form['rating']
#         comments = request.form['comments']
#         # print(customer, dealer, rating, comments)
#         if customer == '' or dealer == '':
#             return render_template('index.html', message='Please enter required fields')
#         if db.session.query(Feedback).filter(Feedback.customer == customer).count() == 0:
#             data = Feedback(customer, dealer, rating, comments)
#             db.session.add(data)
#             db.session.commit()
#             send_mail(customer, dealer, rating, comments)
#             return render_template('success.html')
#         return render_template('index.html', message='You have already submitted feedback')


if __name__ == '__main__':
    app.run()
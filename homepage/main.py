import flask


app = flask.Flask(__name__)

@app.route('/')
def home():
    context = {}
    page = flask.render_template('home.html')
    return page

@app.route('/about/')
def about():
    page = flask.render_template('about.html')
    return page

# @app.route('/elements')
# def elements():
#     context = {}
#     page = flask.render_template('elements.html', **context)
#     return page


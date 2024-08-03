import flask_frozen as ff

from main import app
    

if __name__ == '__main__':
    freezer = ff.Freezer(app)
    freezer.freeze()
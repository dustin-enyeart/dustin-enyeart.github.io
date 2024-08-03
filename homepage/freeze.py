import os
import flask_frozen as ff

from main import app
    
    
ff.FREEZER_RELATIVE_URLS = True


if __name__ == '__main__':
    # Clear build
    os.system('rm -rf build')
    # Freeze
    freezer = ff.Freezer(app)
    freezer.freeze()
    # Move stuff up one level
    os.system("mv build/about/index.html build/about.html")
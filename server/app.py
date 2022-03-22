from flask import Flask, request

app = Flask(
    __name__,
    static_folder='../client/build',
    static_url_path='/'
)


@app.route('/')
def index():
    '''Serve static react app'''
    return app.send_static_file('index.html')


@app.route('/testAPI', methods=['POST'])
def test():
    '''
    Test REST API post endpoint

    request = {
        start: [0,0],
        end: [1,2],
        map: [[0,0,1],[0,1,0],[1,0,1]]
    }

    response = {
        path: 'lrupcl'
    }
    '''

    data = request.get_json()

    print('start', data['start'])
    print('end', data['end'])
    print('map', data['map'])

    return {"path": "lrupcl"}

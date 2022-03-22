# electrek-navigation

## Development notes

### Running the application

```ps
cd server

# Create & activate python virtual environment
virtualenv venv
venv\Scripts\activate

# Install requirements
pip install -r requirements.txt

# Run in development mode for auto-reload
$env:FLASK_ENV = "development"
flask run
```

The server will run on port [5000](http://127.0.0.1:5000/).

It is currently serving the react app located in the `/client` directory. Specifically, it is using the `/client/build` folder. Be sure to build the client side application whenever changes are made:

```ps
cd client
yarn run build
```
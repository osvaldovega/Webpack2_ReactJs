# Webpack2_ReactJs
Webpack 2 split in multiple config files and ReactJs

This is a simple example of ReactJS using Redux Thunk and Redux Saga

# Getting started

## Install

```sh
$ npm install
```
## Using Redux Thunk

If you want to run the project using Redux thunk you can just start the app
as by default is using thunk

```sh
$ npm run start
```

## Using Redux Saga

To use Redux Saga you will need to make changes in 2 files

#### `src/js/main.js`
and
#### `src/js/components/Home.jsx`

In
#### `src/js/main.js`
Uncomment the activeStore = SagaStore and comment the line where activeStore=Store

```javascript
...
// const activeStore = Store;
const activeStore = SagaStore;

ReactDOM.render(
  <Provider store={activeStore}>
    <CreateRoutes />
  </Provider>, rootElement);
```

In
#### `src/js/components/Home.jsx`
Comment line this.props.fetchingData(); and uncomment line this.props.fetchDataWithSaga();

```javascript
...
class Home extends Component {
  componentDidMount() {
    // If the data is NOT fetched then go
    if (!this.props.dataFetched) {
      // With REDUX THUNK
      // this.props.fetchingData();

      // With REDUX SAGA
      this.props.fetchDataWithSaga();
    }
  }
  ...
```

Then run the project

```sh
$ npm run start
```

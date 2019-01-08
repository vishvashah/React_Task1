import { put, takeLatest, all } from 'redux-saga/effects';

const data = [
  {
    Name:"Vishva ",
    Address:"Abc",
    Mobile_No:"123456",
    Email:"vishva@gmail.com",
    FA:"True",
    Status:"Active"
  },
  {
    Name:"Saloni",
    Address:"XYZ",
    Mobile_No:"123456",
    Email:"Saloni@gmail.com",
    FA:"True",
    Status:"Active"
  },
  {
    Name:"A",
    Address:"PQR",
    Mobile_No:"123456",
    Email:"A@gmail.com",
    FA:"False",
    Status:"Active"
  },
  {
    Name:"B",
    Address:"ABC",
    Mobile_No:"123456",
    Email:"B@gmail.com",
    FA:"False",
    Status:"Deactive"
  },
  {
    Name:"C",
    Address:"XYZ",
    Mobile_No:"123456",
    Email:"C@gmail.com",
    FA:"False",
    Status:"Deactive"
  },
  {
    Name:"D",
    Address:"XYZ",
    Mobile_No:"123456",
    Email:"D@gmail.com",
    FA:"True",
    Status:"Active"
  },
]


function* fetchNews() {

  // const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
  //   .then(response => response.json(), );

  yield put({ type: "DATA_RECEIVED", json: data });
}



function* actionWatcher() {
  yield takeLatest('GET_DATA', fetchNews)
 
}



export default function* rootSaga() {
  yield all([
    actionWatcher(),
   
  ]);
}

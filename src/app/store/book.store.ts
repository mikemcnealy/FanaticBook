
import { createAction,props,on,createReducer,createFeatureSelector,createSelector } from "@ngrx/store";
import {Book} from '../interface/book'
//action
export const getBooks = createAction('[book Detail] Get book');
export const addBooks = createAction('[book Detail] Add book',props<{book:Book}>());
export const addBookSuccess = createAction('[book Detail] Add book success');

//reducer
const initialState:Book ={book_id:0,Title:'',Price:0,imageURL:'',Author:'',rating:0,Description:''}
export const reducer = createReducer<Book>(initialState,on(addBooks,(state)=>({...state,Price:10})))

// selectors
export const Book_FEATURE_NAME ='book'
const bookFeatureSelector = createFeatureSelector(<any >(Book_FEATURE_NAME))

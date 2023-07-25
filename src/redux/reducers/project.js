

import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const projectReducer = createReducer(initialState, {
   getAllProjectsRequest: (state) => {
      state.loading = true;
   },
   getAllProjectsSuccess: (state, action) => {
      state.loading = false;
      state.projects = action.payload
   },
   getAllProjectsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
   },


   newProjectRequest: (state) => {
      state.loading = true;
   },
   newProjectSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload
   },
   newProjectFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
   },


   updateProjectRequest: (state) => {
      state.loading = true;
   },
   updateProjectSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload
   },
   updateProjectFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
   },



   deleteProjectRequest: (state) => {
      state.loading = true;
   },
   deleteProjectSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload
   },
   deleteProjectFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
   },





   clearMessage: (state) => {
      state.message = null;
   },
   clearErrors: (state) => {
      state.error = null;
   },



});
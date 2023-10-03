import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../store'

interface ActivityState { }

const initialState: ActivityState = {}

const SLICE_NAME = 'activity'
export const activitySlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
})

export const { } = activitySlice.actions

export default activitySlice.reducer

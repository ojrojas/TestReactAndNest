import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import textMessageSlice from '../features/textmessage/redux/testmessage.slice';
import { throttle } from "lodash";

export const store = configureStore({
  reducer: {
    textMessage: textMessageSlice,
  },
});

store.subscribe(
	throttle(() => {

		if (process.env.NODE_ENV === "development") {
			console.info("state", store.getState());
			console.info("actions",store.dispatch);
		}}, 1000),
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

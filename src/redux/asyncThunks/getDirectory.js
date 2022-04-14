import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API_URL } from "../../constants";

export const getDirectory = createAsyncThunk(
    'fetchDirectory',
    async (parameters = '') => {
        try {
            const response = await fetch(`${BASE_API_URL}${parameters}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.warn(error.stack);
            return error.message;
        }
    }
)